export default (name: string): validationReturn => {
  let isValid = /^[a-z]{2,50}$/gi.test(name.trim());
  return {
    success: isValid,
    value: isValid ? name.trim() : null,
  };
};
