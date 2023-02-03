import validateName from "../../assets/ts/validateName";

describe("Name validation", () => {
  it("Normal Name", () => {
    const result = validateName("Joshua");

    expect(result).toEqual({ success: true, value: "Joshua" });
  });

  it("Name with one character", () => {
    const result = validateName("A");

    expect(result).toEqual({ success: false, value: null });
  });

  it("Name with two characters", () => {
    const result = validateName("Ai");

    expect(result).toEqual({ success: true, value: "Ai" });
  });

  it("Name with a number", () => {
    const result = validateName("Josh2");

    expect(result).toEqual({ success: false, value: null });
  });

  it("Name with a special character", () => {
    const result = validateName("Jeff#");

    expect(result).toEqual({ success: false, value: null });
  });

  it("Name with a special character 2", () => {
    const result = validateName("Jeff_");

    expect(result).toEqual({ success: false, value: null });
  });

  it("Name with a special character 3", () => {
    const result = validateName("Jeff-");

    expect(result).toEqual({ success: false, value: null });
  });

  it('Name with over 50 characters"', () => {
    const result = validateName(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY"
    );

    expect(result).toEqual({ success: false, value: null });
  });
});
