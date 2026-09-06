import assert from "node:assert/strict";
import test from "node:test";

import { DEFAULT_LANGUAGE, parseLanguage } from "./use-language";

test("server and first client render share Vietnamese as default", () => {
  assert.equal(DEFAULT_LANGUAGE, "vi");
});

test("persisted language parser rejects unsupported values", () => {
  assert.equal(parseLanguage("en"), "en");
  assert.equal(parseLanguage("fr"), null);
});
