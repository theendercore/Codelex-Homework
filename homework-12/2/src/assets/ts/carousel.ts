import { arrowSVG, baseSVG, fromFullScreen, toFullScreen } from "./const";

class Carousel {
  #id: number;
  #baseBlock: HTMLDivElement = document.createElement("div");
  #carousel: HTMLDivElement = document.createElement("div");
  #prevBtn: HTMLButtonElement = document.createElement("button");
  #imgCont: ImageContainer;
  #nextBtn: HTMLButtonElement = document.createElement("button");
  #images: string[] = [];
  constructor(container: HTMLDivElement, images: number) {
    //ID generator
    this.#id = Math.floor(Math.random() * 85);

    // Photo generator
    for (let i = 0; i < images; i++) {
      this.#images.push(`https://picsum.photos/id/${this.#id + i}/900/500`);
    }

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
    this.registerClicks(this.previousImage, this.nextImage);
  }

  registerClicks = (right: EventListener, left: EventListener) => {
    this.#prevBtn.addEventListener("click", left);
    this.#nextBtn.addEventListener("click", right);
  };

  nextImage = () => {
    this.#images.push(this.#images.shift());
    this.#imgCont.changeSrc(this.#images[0]);
  };

  previousImage = () => {
    this.#images.unshift(this.#images.pop());
    this.#imgCont.changeSrc(this.#images[0]);
  };

  getImageCount = () => this.#images.length;

  getBaseBlock = () => this.#baseBlock;
}

class ImageContainer {
  #container: HTMLDivElement = document.createElement("div");
  #img: HTMLImageElement = document.createElement("img");
  #fullscreenButton: HTMLButtonElement = document.createElement("button");

  constructor(parent: HTMLDivElement, src: string) {
    parent.appendChild(this.#container);
    this.#container.classList.add("js-img-container", "rel");

    this.#container.appendChild(this.#img);
    this.#img.src = src;
    this.#img.classList.add("js-img");

    this.#container.appendChild(this.#fullscreenButton);
    this.#fullscreenButton.classList.add("js-fs-btn", "fs-btn");
    this.#fullscreenButton.innerHTML = baseSVG;
    this.#fullscreenButton.addEventListener("click", this.#toggleFullscreen);
  }

  #toggleFullscreen = () => {
    this.#container.classList.toggle("fullscreen");
    this.#img.classList.toggle("vw-80");
    if (this.#container.classList.contains("fullscreen")) {
      this.#fullscreenButton.children[0].innerHTML = fromFullScreen;
    } else {
      this.#fullscreenButton.children[0].innerHTML = toFullScreen;
    }
  };
  changeSrc = (src: string) => {
    this.#img.src = src;
  };
}

class BubbleCarousel extends Carousel {
  #imageSlider = document.createElement("div");
  #dotsContainer: HTMLDivElement = document.createElement("div");
  #selectedImg: number = 0;
  constructor(container: HTMLDivElement, images: number) {
    super(container, images); // Runs the constructor for Carousel

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
    for (let i = 0; i < images; i++) {
      let dot = document.createElement("div");
      this.#dotsContainer.appendChild(dot);
      dot.classList.add(`js-dot-${i}`, "dot");
      if (i === 0) {
        dot.classList.add("dot-sel");
      }
    }

    // Register Clicks
    this.registerClicks(this.nextImage, this.previousImage);
  }

  nextImage = () => {
    super.nextImage;
    this.#selectedImg =
      this.getImageCount() - 1 > this.#selectedImg ? this.#selectedImg + 1 : 0;
    // console.log("next: ", this.#selectedImg);
    this.changeSelection();
  };

  previousImage = () => {
    super.previousImage;
    this.#selectedImg =
      0 < this.#selectedImg ? this.#selectedImg - 1 : this.getImageCount() - 1;
    // console.log("last: ", this.#selectedImg);
    this.changeSelection();
  };

  clickDot = (id: number, dot: HTMLDivElement) => {
    this.#selectedImg = id;
    this.changeSelection();
  };

  changeSelection = () => {
    this.#dotsContainer.querySelector(".dot-sel").classList.remove("dot-sel");
    this.#dotsContainer
      .querySelector(`.js-dot-${this.#selectedImg}`)
      .classList.add("dot-sel");
  };
}

export default Carousel;
export { BubbleCarousel };
