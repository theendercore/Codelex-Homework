import { baseSVG, fromFullScreen, toFullScreen } from "../const";


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



export default ImageContainer