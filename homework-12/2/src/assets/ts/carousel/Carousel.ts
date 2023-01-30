import { arrowSVG } from "../const";
import ImageContainer from "./ImageContainer";

class Carousel {
  #id: number;
  #baseBlock: HTMLDivElement = document.createElement("div");
  #carousel: HTMLDivElement = document.createElement("div");
  #prevBtn: HTMLButtonElement = document.createElement("button");
  #imgCont: ImageContainer;
  #nextBtn: HTMLButtonElement = document.createElement("button");
  #images: string[] = [];
  #selectedImage: number = 0;
  constructor(container: HTMLDivElement, images: number) {
    //ID generator
    this.#id = Math.floor(Math.random() * 85);

    // Photo generator
    for (let i = 0; i < images; i++)
      this.#images.push(`https://picsum.photos/id/${this.#id + i}/900/500`);

    // Register the Base Block
    container.appendChild(this.#baseBlock);
    this.#baseBlock.classList.add("js-base-block", "box");

    // Register the Carousel
    this.#baseBlock.appendChild(this.#carousel);
    this.#carousel.classList.add("js-carousel", "box-item");
    this.#carousel.setAttribute("data-id", `js-id-${this.#id}`);

    // Register the Previous Button
    this.#carousel.appendChild(this.#prevBtn);
    this.#prevBtn.classList.add("js-prev-btn", "arrow-btn");
    this.#prevBtn.innerHTML = arrowSVG;

    // Register the Image Container
    this.#imgCont = new ImageContainer(this.#carousel, this.#images[0]);

    // Register the Next Button
    this.#carousel.appendChild(this.#nextBtn);
    this.#nextBtn.classList.add("js-next-btn", "arrow-btn", "flip-180");
    this.#nextBtn.innerHTML = arrowSVG;

    // Register Clicks
    this.registerClicks(this.nextImage, this.previousImage);
  }

  registerClicks = (right: EventListener, left: EventListener) => {
    this.#nextBtn.addEventListener("click", right);
    this.#prevBtn.addEventListener("click", left);
  };

  nextImage = () => {
    this.changeImg(
      this.getImageCount() - 1 > this.#selectedImage
        ? this.#selectedImage + 1
        : 0
    );
  };

  previousImage = () => {
    this.changeImg(
      0 < this.#selectedImage
        ? this.#selectedImage - 1
        : this.getImageCount() - 1
    );
  };

  getImageCount = () => this.#images.length;

  getBaseBlock = () => this.#baseBlock;

  getImages = () => this.#images;

  getImage = (index: number) => this.#images[index];

  getSelectedImg = () => this.#selectedImage;

  changeImg = (index: number) => {
    this.#selectedImage = index;
    this.#imgCont.changeSrc(this.#images[index]);
  };
}

export default Carousel;
