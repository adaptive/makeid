const { makeid } = require("./index");

test("generate an ID with default lenght", () => {
  expect(makeid()).toHaveLength(6);
});

test("generate an ID with lenght of -1", () => {
  expect(makeid(-1)).toHaveLength(1);
});

test("generate an ID with lenght of 0", () => {
  expect(makeid(0)).toHaveLength(0);
});

test("generate an ID with lenght of 1", () => {
  expect(makeid(1)).toHaveLength(1);
});

test("generate an ID with lenght of 3", () => {
  expect(makeid(3)).toHaveLength(3);
});

test("generate an ID with lenght of 6", () => {
  expect(makeid(6)).toHaveLength(6);
});

test("generate an ID with lenght of 32", () => {
  expect(makeid(32)).toHaveLength(32);
});

test("generate an ID with lenght of 100", () => {
  expect(makeid(100)).toHaveLength(100);
});

test("generate an ID with lenght of -1000", () => {
  expect(makeid(-1000)).toHaveLength(1000);
});

test("generate an ID with lenght of 10000", () => {
  expect(makeid(10000)).toHaveLength(10000);
});

test("generate an ID with lenght of 100000", () => {
  expect(makeid(100000)).toHaveLength(100000);
});
