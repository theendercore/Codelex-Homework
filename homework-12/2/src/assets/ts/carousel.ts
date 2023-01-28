import { arrowSVG, baseSVG, fromFullScreen, toFullScreen } from "./const";

class Carousel {
  #id: number;
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

    // Register the Carousel
    container.appendChild(this.#carousel);
    this.#carousel.classList.add("js-carousel", "carousel");
    this.#carousel.setAttribute("data-id", `js-id-${this.#id}`);

    // Register the Previous Button
    this.#carousel.appendChild(this.#prevBtn);
    this.#prevBtn.classList.add("js-prev-btn", "arrow-btn");
    this.#prevBtn.innerHTML = arrowSVG;
    this.#prevBtn.addEventListener("click", this.#previousImage);

    // Register the Image Container
    this.#imgCont = new ImageContainer(this.#carousel, this.#images[0]);

    // Register the Next Button
    this.#carousel.appendChild(this.#nextBtn);
    this.#nextBtn.classList.add("js-next-btn", "arrow-btn", "flip-180");
    this.#nextBtn.innerHTML = arrowSVG;
    this.#nextBtn.addEventListener("click", this.#nextImage);
  }

  #nextImage = () => {
    this.#images.push(this.#images.shift());
    this.#imgCont.changeSrc(this.#images[0]);
  };

  #previousImage = () => {
    this.#images.unshift(this.#images.pop());
    this.#imgCont.changeSrc(this.#images[0]);
  };
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

class DottedCarousel extends Carousel {
  #dots: HTMLCollection;
  constructor(container: HTMLDivElement, images: number) {
    super(container, images);
  }
}

export default Carousel;
