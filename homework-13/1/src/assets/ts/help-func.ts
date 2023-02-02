const validateName = (name: string) => /^[a-z]{2,20}$/gi.test(name.trim());

export { validateName };
