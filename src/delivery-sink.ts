import type { FeedbackRecord } from "./repository";

/**
 * Delivers a feedback record after it has been persisted by the host.
 */
export type FeedbackDeliverySink = (record: FeedbackRecord) => Promise<void>;

/**
 * Observes a failure from a feedback delivery sink without changing capture
 * success semantics.
 */
export type FeedbackDeliveryErrorObserver = (error: unknown) => void;
