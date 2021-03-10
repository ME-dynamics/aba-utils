import { time } from "../index";

describe("time", () => {
  const day_in_millisecond = 8.64e7;
  const hour_in_millisecond = 3.6e6;
  const minute_in_millisecond = 60000;
  const second_in_millisecond = 1000;
  const error_path = "aba utils, tests";
  const {
    days_from_now,
    hours_from_now,
    minutes_from_now,
    seconds_from_now,
  } = time;
  it("should return seconds in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(seconds_from_now(2, error_path) / 1000)).toBe(
      Math.floor((2 * second_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(seconds_from_now(8, error_path) / 1000)).toBe(
      Math.floor((8 * second_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(seconds_from_now(8e12, error_path) / 1000)).toBe(
      Math.floor((8e12 * second_in_millisecond + Date.now()) / 1000)
    );
  });
  it("should return minutes in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(minutes_from_now(2, error_path) / 1000)).toBe(
      Math.floor((2 * minute_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(minutes_from_now(8, error_path) / 1000)).toBe(
      Math.floor((8 * minute_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(minutes_from_now(8e12, error_path) / 1000)).toBe(
      Math.floor((8e12 * minute_in_millisecond + Date.now()) / 1000)
    );
  });
  it("should return hours in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(hours_from_now(2, error_path) / 1000)).toBe(
      Math.floor((2 * hour_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(hours_from_now(8, error_path) / 1000)).toBe(
      Math.floor((8 * hour_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(hours_from_now(8e12, error_path) / 1000)).toBe(
      Math.floor((8e12 * hour_in_millisecond + Date.now()) / 1000)
    );
  });
  it("should return days in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(days_from_now(2, error_path) / 1000)).toBe(
      Math.floor((2 * day_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(days_from_now(8, error_path) / 1000)).toBe(
      Math.floor((8 * day_in_millisecond + Date.now()) / 1000)
    );
    expect(Math.floor(days_from_now(8e12, error_path) / 1000)).toBe(
      Math.floor((8e12 * day_in_millisecond + Date.now()) / 1000)
    );
  });
  it("should throw error when time is less than zero", () => {
    expect.assertions(4);
    expect(() => {
      seconds_from_now(0, error_path);
    }).toThrow();
    expect(() => {
      minutes_from_now(-1, error_path);
    }).toThrow();
    expect(() => {
      hours_from_now(-80, error_path);
    }).toThrow();
    expect(() => {
      days_from_now(8.25, error_path);
    }).toThrow();
  });
});
