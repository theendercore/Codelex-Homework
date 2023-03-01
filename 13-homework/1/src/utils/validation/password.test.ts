import validatePassword from "../../assets/ts/validatePassword";

describe("Email validation", () => {
  it("Basic Password", () => {
    const result = validatePassword("password123@#$");

    expect(result).toEqual({ success: true, value: "password123@#$" });
  });

  it("Password less then 8 Characters", () => {
    const result = validatePassword("pas1$");

    expect(result).toEqual({ success: false, value: null });
  });

  it("Password with no Numbers", () => {
    const result = validatePassword("password$");

    expect(result).toEqual({ success: false, value: null });
  });

  it("Password with no special Characters", () => {
    const result = validatePassword("password123");

    expect(result).toEqual({ success: false, value: null });
  });
});