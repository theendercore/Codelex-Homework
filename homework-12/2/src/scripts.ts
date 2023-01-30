import Carousel, { BubbleCarousel } from "./assets/ts/carousel";
const cont = document.querySelector<HTMLDivElement>(".container");

let newCarousel = new Carousel(cont, 8);

let newBubbleCarousel = new BubbleCarousel(cont, 8);
