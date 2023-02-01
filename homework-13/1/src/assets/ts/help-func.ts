const validateName = (name: string) => {
  return /^[a-z]{2,20}$/ig.test(name.trim());
};

export { validateName };
