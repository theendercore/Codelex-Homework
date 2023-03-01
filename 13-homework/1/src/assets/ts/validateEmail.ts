export default (email: string): validationReturn => {
  let isValid = /^[\w\.-]+@[\w\.-]+\.[a-z]{2,4}$/gi.test(email.trim());
  return {
    success: isValid,
    value: isValid ? email.trim() : null,
  };
};
