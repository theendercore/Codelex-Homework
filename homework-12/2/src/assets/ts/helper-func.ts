const addClasses = <T extends Element>(ele: T, ...classes: string[]) => {
  ele.classList.add(...classes);
};

export { addClasses };
