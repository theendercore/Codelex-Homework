import Carousel, { BubbleCarousel, ImgCarousel, MovingCarousel } from "./assets/ts/carousel";
const cont = document.querySelector<HTMLDivElement>(".container");

let newCarousel = new Carousel(cont, 8);

let newBubbleCarousel = new BubbleCarousel(cont, 8);

let newImgCarousel = new ImgCarousel(cont, 8);

let newMovingCarousel = new MovingCarousel(cont, 8);
