import validateEmail from "../../assets/ts/validateEmail";

describe("Email validation", () => {
  it("Basic email address", () => {
    const result = validateEmail("example@gmail.com");

    expect(result).toEqual({ success: true, value: "example@gmail.com" });
  });

  it('Email with a "."', () => {
    const result = validateEmail("example.ex@gmail.yx.com");

    expect(result).toEqual({ success: true, value: "example.ex@gmail.yx.com" });
  });

  it('Email with a "-"', () => {
    const result = validateEmail("example-email@gmail.com");

    expect(result).toEqual({ success: true, value: "example-email@gmail.com" });
  });


  it('Email with a "_"', () => {
    const result = validateEmail("example_email@gmail.com");

    expect(result).toEqual({ success: true, value: "example_email@gmail.com" });
  });

  it('Email with ending with ".demo"', () => {
    const result = validateEmail("example@gmail.demo");

    expect(result).toEqual({ success: true, value: "example@gmail.demo" });
  });

  it('Email with ending with ".custom"', () => {
    const result = validateEmail("example@gmail.custom");

    expect(result).toEqual({ success: false, value: null});
  });

  it('Email with no "@"', () => {
    const result = validateEmail("examplegmail.com");

    expect(result).toEqual({ success: false, value: null});
  });
});
