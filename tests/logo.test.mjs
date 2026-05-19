import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

assert.match(page, /className="logo-emblem"/, "logo uses a custom emblem structure");
assert.match(page, /aria-hidden="true"/, "decorative emblem is hidden from screen readers");
assert.match(page, /className="logo-wordmark"/, "brand name has dedicated wordmark styling");
assert.match(css, /\.logo-emblem\b/, "emblem styling exists");
assert.match(css, /\.logo-emblem::before\b/, "emblem includes a fine-line inner frame");
assert.match(css, /\.logo-emblem::after\b/, "emblem includes a luxury highlight detail");
assert.match(css, /\.logo-wordmark\b/, "wordmark styling exists");

assert.match(page, /href="#quick-booking"[\s\S]*?>\s*快速预约/s, "nav exposes a quick booking action");
assert.match(page, /id="quick-booking"/, "page includes a quick booking section");
assert.match(page, /className="booking-form"/, "quick booking uses a dedicated form");
assert.match(page, /name="customerName"/, "booking form captures customer name");
assert.match(page, /name="phone"/, "booking form captures phone number");
assert.match(page, /name="visitTime"/, "booking form captures preferred visit time");
assert.match(css, /\.booking-panel\b/, "booking panel styling exists");
assert.match(css, /\.booking-form\b/, "booking form styling exists");
