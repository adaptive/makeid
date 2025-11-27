import makeid, { decodeUlidTimestamp,generateUlid, generateId} from "./package/index.js";

test("import test", () => {
  expect(makeid()).toHaveLength(6);
  expect(generateId()).toHaveLength(6);
  expect(generateUlid()).toHaveLength(26);
});

test("generate an ID with default length", () => {
  expect(makeid()).toHaveLength(6);
});

test("generate an ID with length of -1", () => {
  expect(makeid(-1)).toHaveLength(1);
});

test("generate an ID with length of 0", () => {
  expect(makeid(0)).toHaveLength(0);
});

test("generate an ID with length of 1", () => {
  expect(makeid(1)).toHaveLength(1);
});

test("generate an ID with length of 3", () => {
  expect(makeid(3)).toHaveLength(3);
});

test("generate an ID with length of 6", () => {
  expect(makeid(6)).toHaveLength(6);
});

test("generate an ID with length of 32", () => {
  expect(makeid(32)).toHaveLength(32);
});

test("generate an ID with length of 100", () => {
  expect(makeid(100)).toHaveLength(100);
});

test("generate an ID with length of -1000", () => {
  expect(makeid(-1000)).toHaveLength(1000);
});

test("generate an ID with length of 10000", () => {
  expect(makeid(10000)).toHaveLength(10000);
});

test("generate an ID with length of 100000", () => {
  expect(makeid(100000)).toHaveLength(100000);
});

test("generate a ULID with default timestamp", () => {
  const id = generateUlid();
  expect(id).toHaveLength(26);
  expect(id).toMatch(/^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
});

test("generate a ULID with specific timestamp", () => {
  const ts = 1893455999000; // Specific timestamp
  const id = generateUlid(ts);
  expect(id).toHaveLength(26);
  expect(id).toMatch(/^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
});

test("ULIDs are sortable by timestamp", () => {
  const older = generateUlid(1893455998999);
  const newer = generateUlid(1893455999000);
  expect(older < newer).toBe(true);
});

test("generate multiple ULIDs and ensure uniqueness", () => {
  const ulidSet = new Set();
  const count = 1000;
  for (let i = 0; i < count; i++) {
    ulidSet.add(generateUlid());
  }
  expect(ulidSet.size).toBe(count);
});

test("decode ULID timestamp returns matching Date", () => {
  const ts = 1893455999000;
  const id = generateUlid(ts);
  const decoded = decodeUlidTimestamp(id);
  expect(decoded?.getTime()).toBe(ts);
});

test("decode ULID timestamp returns null on invalid input", () => {
  expect(decodeUlidTimestamp("")).toBeNull();
  expect(decodeUlidTimestamp("INVALID-ULID-STRING")).toBeNull();
});
