const addClasses = <T extends Element>(ele: T, ...classes: string[]) => {
  ele.classList.add(...classes);
};

const registerClick = (ele: HTMLElement, callback: EventListener) => {
  ele.addEventListener("click", callback);
};

const generateImages = (
  id: number,
  count: number,
  width: number,
  height: number
) => {
  let x = [];
  for (let i = 0; i < count; i++)
    x.push(`https://picsum.photos/id/${id + i}/${width}/${height}`);
  return x;
};

export { generateImages };
