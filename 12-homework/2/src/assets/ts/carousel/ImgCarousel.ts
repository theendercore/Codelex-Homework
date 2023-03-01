import BubbleCarousel from "./BubbleCarousel";

class ImgCarousel extends BubbleCarousel {
  #iconContainer = document.createElement("div");
  constructor(container: HTMLDivElement, count: number) {
    super(container, count); // Runs the constructor for BubbleCarousel

    //register Image Container
    this.getSliders().appendChild(this.#iconContainer);
    this.#iconContainer.classList.add(
      "js-icon-container",
      "box-item",
      "icons-cont"
    );

    //register Icons
    for (let i = 0; i < count; i++) this.createIcon(i);
  }

  createIcon = (id: number) => {
    let icon = document.createElement("div");
    this.#iconContainer.appendChild(icon);
    icon.classList.add(`js-icon-${id}`, "icon");
    icon.addEventListener("click", () => this.clickIcon(id));
    icon.style.backgroundImage = `url('${this.getImage(id)}')`;
  };

  clickIcon = (id: number) => {
    this.changeImg(id);
    this.changeSelection();
  };
}


export default ImgCarousel;