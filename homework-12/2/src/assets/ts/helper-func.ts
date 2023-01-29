const addClasses = <T extends Element>(ele: T, ...classes: string[]) => {
  ele.classList.add(...classes);
};

const registerClick = (ele: HTMLElement, callback: EventListener) => {
  ele.addEventListener("click", callback);
};

export { addClasses };
