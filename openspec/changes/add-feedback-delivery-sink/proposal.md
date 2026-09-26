## Why

Hosts can persist feedback requests but have no package-supported way to notify
their own downstream workflow when a capture succeeds. They must currently add
that integration beside or around the route handler, which risks inconsistent
authorization, validation, and persistence behavior.

## What Changes

- Add an optional, host-supplied feedback delivery sink that receives each
  newly persisted feedback request.
- Invoke the sink only after a successful authorized, validated capture has
  been stored.
- Preserve capture success when a sink is absent or fails, while making the
  failure observable to the host.
- Export the delivery-sink contract from the package and document how hosts
  configure it.

## Capabilities

### New Capabilities

- `feedback-delivery-sink`: Optional host-side delivery of newly captured and
  persisted feedback requests to a downstream workflow.

### Modified Capabilities

- None.

## Impact

This changes the public route-handler factory dependency contract and package
exports, adds delivery behavior to the create path, and requires route-handler
and public-contract tests plus README integration guidance. It adds no runtime
dependency, database migration, or client-widget behavior.
