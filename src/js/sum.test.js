const { checkTime } = require("./time");

test("checkTime < 10", () => {
  expect(checkTime(9)).toBe('09');
});

test("checkTime > 10", () => {
  expect(checkTime(11)).toBe(11);
});

