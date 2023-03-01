export default (password: string): validationReturn => {
  let isValid = /^(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/gi.test(
    password.trim()
  );
  return {
    success: isValid,
    value: isValid ? password.trim() : null,
  };
};
