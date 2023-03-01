import Carousel from "./Carousel";

class BubbleCarousel extends Carousel {
  #imageSlider = document.createElement("div");
  #dotsContainer: HTMLDivElement = document.createElement("div");
  constructor(container: HTMLDivElement, count: number) {
    super(container, count); // Runs the constructor for Carousel

    // Register the Image Slider
    this.getBaseBlock().appendChild(this.#imageSlider);
    this.#imageSlider.classList.add("js-image-slider", "flex-col-rev");

    // Register the Dots Container
    this.#imageSlider.append(this.#dotsContainer);
    this.#dotsContainer.classList.add(
      "js-dots-container",
      "box-item",
      "dots-cont"
    );

    // Register the Dots
    for (let i = 0; i < count; i++) this.#createDot(i);

    // Register Clicks
    this.registerClicks(this.changeSelection, this.changeSelection);
  }

  #createDot = (id: number) => {
    let dot = document.createElement("div");
    this.#dotsContainer.appendChild(dot);
    dot.classList.add(`js-dot-${id}`, "dot");
    dot.addEventListener("click", () => this.#clickDot(id));
    if (id === 0) {
      dot.classList.add("dot-sel");
    }
  };

  #clickDot = (id: number) => {
    this.changeImg(id);
    this.changeSelection();
  };

  changeSelection = () => {
    this.#dotsContainer.querySelector(".dot-sel").classList.remove("dot-sel");
    this.#dotsContainer
      .querySelector(`.js-dot-${this.getSelectedImg()}`)
      .classList.add("dot-sel");
  };

  getSliders = () => this.#imageSlider;
}

export default BubbleCarousel