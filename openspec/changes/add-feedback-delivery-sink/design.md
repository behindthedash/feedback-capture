## Context

The package currently accepts only the host-owned authorization and storage
ports. The create handler validates a request, persists it through the storage
port, and returns the new record identifier and status. See [proposal.md](proposal.md)
for the motivation. The new extension must retain the package's host-owned
integration model and must not turn the existing `delivered` lifecycle flag
into a downstream-delivery status.

## Goals / Non-Goals

**Goals:**

- Give a host one optional asynchronous callback for each successfully stored
  feedback request.
- Make sink delivery independent of whether the capture response succeeds.
- Keep the callback contract typed, exported, and free of a concrete vendor or
  transport dependency.

**Non-Goals:**

- Persisting delivery attempts, retries, idempotency keys, or delivery status.
- Providing webhook, queue, Slack, email, or other concrete sink adapters.
- Changing the meaning or persistence of the feedback request's `delivered`
  lifecycle field.
- Delivering updates, deletions, or records that were rejected before storage.

## Decisions

### Model delivery as an optional host port

Add an exported `FeedbackDeliverySink` function contract and an optional
`deliverySink` dependency to the route-handler factory. The callback receives
the complete persisted `FeedbackRecord`, rather than the untrusted request
payload, so a host sees the assigned identifier, server-owned submitter, and
canonical stored values.

This follows the existing authorization and storage port pattern and lets each
host choose its own downstream system. A built-in webhook configuration was
considered but rejected because it would introduce secret handling, HTTP
transport policy, and a vendor-neutral retry problem into this library.

### Invoke after persistence and await the attempt before responding

The create handler calls the sink only after `repository.insert` resolves. It
awaits the callback before returning its normal 201 response so a serverless
host does not lose the delivery attempt when the request lifecycle ends. There
is no call for invalid or unauthorized requests, nor when persistence fails.

Fire-and-forget delivery was considered but rejected because it is not reliable
in request-scoped runtimes. Calling before storage was rejected because a sink
could observe a request that never became a feedback record.

### Isolate sink failure from capture success and report it to the host

The create handler catches both synchronous throws and rejected delivery
promises. It still returns the existing successful capture response because the
record has already been accepted and persisted. The dependency contract exposes
an optional host-provided error reporter for delivery failures; the handler
uses it defensively so a reporter failure cannot affect capture either.

Failing the capture response on downstream failure was considered and rejected:
it would encourage duplicate submissions even though storage already succeeded.
Automatic retry was rejected because it requires durable state and an
idempotency contract that this change intentionally does not add.

### Preserve privacy and lifecycle boundaries

The sink receives the full record, including optional screenshot data and
submitter identity, because it is an explicitly configured host callback. The
package will document that hosts are responsible for sending that data only to
approved downstream systems. `delivered` remains solely the host review
lifecycle flag and is not updated by sink success or failure.

## Risks / Trade-offs

- [An awaited sink can increase create-request latency] → Hosts can implement
  the sink as a fast enqueue operation; the package adds no network transport
  of its own.
- [A failed sink delivery is not retried] → The error reporter lets hosts alert
  or enqueue recovery work; durable retries remain a host concern.
- [The callback can expose sensitive captured data] → Document the complete
  record boundary and require hosts to select an approved destination.
- [A host reporter can itself fail] → Catch and suppress reporter failures so
  they cannot turn an already persisted capture into an error response.

## Migration Plan

1. Release the optional dependency and exports without changing existing
   factory calls; hosts that do not configure a sink retain current behavior.
2. Hosts that need downstream delivery implement the exported callback and
   optionally supply a failure reporter, then deploy their route wiring.
3. To roll back a host integration, remove `deliverySink` from its factory
   configuration. No data migration or package rollback is required.
