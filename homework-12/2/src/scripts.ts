import BubbleCarousel from "./assets/ts/carousel/BubbleCarousel";
import Carousel from "./assets/ts/carousel/Carousel";
import ImgCarousel from "./assets/ts/carousel/ImgCarousel";
import MovingCarousel from "./assets/ts/carousel/MovingCarousel";
import { cont } from "./assets/ts/const";


let newCarousel = new Carousel(cont, 8);

let newBubbleCarousel = new BubbleCarousel(cont, 8);

let newImgCarousel = new ImgCarousel(cont, 8);

let newMovingCarousel = new MovingCarousel(cont, 8);
