import { describe, expect, it } from "vitest";
import type { FeedbackDeliverySink, FeedbackRecord } from "../index";

function makePersistedRecord(): FeedbackRecord {
  return {
    id: "feedback-1",
    status: "new",
    pageUrl: "/donate",
    elementSelector: "main h1",
    sourceFileHint: null,
    elementText: "Donate",
    componentHint: null,
    requestText: "Clarify the heading.",
    changeKindGuess: "copy",
    screenshotDataUrl: null,
    viewport: { width: 1440, height: 900 },
    submittedBy: "user-1",
    submittedAt: new Date(0).toISOString(),
    delivered: false,
    deliveredAt: null,
  };
}

describe("FeedbackDeliverySink", () => {
  it("accepts a persisted FeedbackRecord and completes asynchronously", async () => {
    const received: FeedbackRecord[] = [];
    const sink: FeedbackDeliverySink = async (record) => {
      await Promise.resolve();
      received.push(record);
    };
    const record = makePersistedRecord();

    await sink(record);

    expect(received).toEqual([record]);
  });
});
