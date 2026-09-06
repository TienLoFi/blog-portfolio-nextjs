import assert from "node:assert/strict";
import test from "node:test";

import {
  CAREER_COMPANIES,
  PROJECT_CASE_STUDIES,
  SITE_NAV,
} from "./site-content";

test("navigation exposes the four approved routes", () => {
  assert.deepEqual(
    SITE_NAV.map((item) => item.href),
    ["/", "/about", "/portfolio", "/blog"]
  );
});

test("Pascal Group retains four ordered role periods", () => {
  assert.equal(CAREER_COMPANIES[0].name, "Pascal Group");
  assert.equal(CAREER_COMPANIES[0].roles.length, 4);
});

test("portfolio keeps the three verified projects", () => {
  assert.deepEqual(
    PROJECT_CASE_STUDIES.map((item) => item.slug),
    ["cards-fimi-tech", "backend-fimi-tech", "zudo-app"]
  );
});
