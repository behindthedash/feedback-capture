## 1. Public delivery contract

- [ ] 1.1 Add the optional host delivery-sink and delivery-error-observer types in `src/delivery-sink.ts`, export them from `src/index.ts` without adding a runtime dependency, and add public-contract coverage in `src/__tests__/delivery-sink.test.ts` that verifies the exported sink accepts a persisted `FeedbackRecord` and asynchronous completion. (Requirements: Hosts can configure a feedback delivery sink)
  files: src/delivery-sink.ts src/index.ts src/__tests__/delivery-sink.test.ts

## 2. Create-path integration

- [ ] 2.1 Extend `src/route-handlers.ts` so the optional sink runs once after a successful insert, is awaited, and routes sink failures to the optional observer without changing the successful create response. Extend `src/__tests__/route-handlers.test.ts` to cover no-sink compatibility, persisted-record ordering and payload, awaited delivery, rejected-capture suppression, lifecycle-state preservation, and sink/observer failure isolation. (Requirements: Delivery follows successful persistence; Sink failures do not reverse capture success; Delivery does not change feedback lifecycle state)
  files: src/route-handlers.ts src/__tests__/route-handlers.test.ts
  depends: 1.1

## 3. Documentation and verification

- [ ] 3.1 Update `README.md` with the exported delivery contract, factory configuration example, post-persistence semantics, failure behavior, and host responsibility for downstream data handling. (Requirements: Hosts can configure a feedback delivery sink; Delivery follows successful persistence; Sink failures do not reverse capture success; Delivery does not change feedback lifecycle state)
  files: README.md
- [ ] 3.2 [e2e] Run `npm test` and `npm run typecheck`, resolving delivery-sink regressions before completion. (Requirements: Hosts can configure a feedback delivery sink; Delivery follows successful persistence; Sink failures do not reverse capture success; Delivery does not change feedback lifecycle state)
  files: none
