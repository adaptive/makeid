# @adaptive/makeid

Generate short, unambiguous IDs using uppercase letters and digits (omits visually confusing characters). Also ships a ULID helper.

## Install

```bash
npm install @adaptive/makeid
```

## Quick start

```js
import makeid, { decodeUlidTimestamp, generateId, generateUlid } from "@adaptive/makeid";

const id = makeid();          // e.g. "9X0V2G" (default length 6)
const shorter = generateId(4);  // e.g. "T72P"
const sortable = generateUlid();      // 26-char, time-sortable ID
const createdAt = decodeUlidTimestamp(sortable); // Date | null
```

## API surface

`makeid(length?: number): string`  
- Default length is 6; negative values are coerced via `Math.abs(length)`.  
- Alphabet omits ambiguous characters such as O/0.

`generateUlid(ts?: number): string`  
- 26-character ULID; `ts` defaults to `Date.now()`.  
- Lexicographically sortable by timestamp; throws if `crypto.getRandomValues` is unavailable.

`decodeUlidTimestamp(id?: string): Date | null`  
- Extracts the embedded timestamp (first 10 chars) as a `Date`.  
- Returns `null` for missing/invalid input.

## Examples

### Generate IDs of varying lengths

```js
makeid();     // "A1B2C3"
makeid(1);    // "R"
makeid(10);   // "5JK8W2H9PD"
makeid(-4);   // "7T8C" (negative length handled)
```

### ULIDs and decoding timestamps

```js
const id = generateUlid(1700000000000);
// "01HF3S9X5QZ9M8JW4YV3Y7HB5C"

const date = decodeUlidTimestamp(id);
// Date corresponding to 1700000000000
```

## Development

- Tests: `bun test`
- Package is published as ESM.
- ULID generation uses `crypto.getRandomValues`; ensure a crypto implementation is available in your runtime.
