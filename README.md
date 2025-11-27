# @adaptive/makeid

Generate short, unambiguous IDs using uppercase letters and digits (omits visually confusing characters). Also ships a ULID helper.

## Install

```bash
npm install @adaptive/makeid
```

## Usage

```js
import makeid, { makeid as createId, ulid } from "@adaptive/makeid";

const id = makeid();          // e.g. "9X0V2G" (default length 6)
const shorter = createId(4);  // e.g. "T72P"
const sortable = ulid();      // 26-char, time-sortable ID
```

## API

`makeid(length?: number): string`
- `length` defaults to 6; negative values are treated as positive via `Math.abs`.
- Returns a string of uppercase letters and digits excluding O/0 and similar.

`ulid(ts?: number): string`
- 26-character ULID; `ts` defaults to `Date.now()`.
- ULIDs are lexicographically sortable by timestamp.

## Development

- Tests: `bun test`
- Package is published as ESM.
