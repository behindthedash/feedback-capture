## Purpose

Allow each host to optionally deliver a newly captured feedback request to its
own downstream workflow without changing feedback capture persistence.

## ADDED Requirements

### Requirement: Hosts can configure a feedback delivery sink

The package SHALL expose a typed optional host integration that accepts a
persisted feedback request after capture. The integration contract SHALL be
available from the package's public API and SHALL support asynchronous
completion.

#### Scenario: Host configures an asynchronous sink

- **WHEN** a host supplies a delivery sink while creating feedback handlers
- **THEN** the host can receive a persisted feedback request through that sink

#### Scenario: Host does not configure a sink

- **WHEN** a host creates feedback handlers without a delivery sink
- **THEN** feedback capture retains its existing create behavior

### Requirement: Delivery follows successful persistence

The system SHALL invoke a configured delivery sink only after an authorized,
schema-valid feedback request has been successfully persisted. The sink SHALL
receive the persisted feedback record, including server-owned fields, and the
system SHALL await the delivery attempt before completing the create request.

#### Scenario: Successful capture invokes the sink with the persisted record

- **WHEN** an authorized request with a valid payload is persisted successfully
- **THEN** the system invokes the configured sink once with that persisted
  feedback record before returning the successful create response

#### Scenario: Rejected capture does not invoke the sink

- **WHEN** a create request is unauthorized, invalid, or cannot be persisted
- **THEN** the system does not invoke the delivery sink

### Requirement: Sink failures do not reverse capture success

If a configured delivery sink throws or rejects after persistence, the system
SHALL preserve the normal successful create response and SHALL not undo the
persisted feedback request. The system SHALL provide a host-configurable way to
observe the delivery error; an error in that observer SHALL NOT alter the
create response.

#### Scenario: Sink rejection is reported without failing capture

- **WHEN** a sink rejects after a feedback request has been persisted
- **THEN** the system reports the delivery error to the configured host observer
  and returns the successful create response

#### Scenario: Error observer fails

- **WHEN** a sink failure is being reported and the configured error observer
  throws or rejects
- **THEN** the system still returns the successful create response

### Requirement: Delivery does not change feedback lifecycle state

Sink delivery success or failure SHALL NOT change a feedback request's
`delivered` lifecycle value or create delivery-attempt persistence.

#### Scenario: Sink succeeds for an undelivered feedback request

- **WHEN** the sink completes successfully for a newly persisted request
- **THEN** the request's `delivered` lifecycle value remains the value assigned
  by persistence
