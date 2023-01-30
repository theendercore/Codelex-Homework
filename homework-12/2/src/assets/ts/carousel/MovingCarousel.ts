import ImgCarousel from "./ImgCarousel";

class MovingCarousel extends ImgCarousel {
  constructor(container: HTMLDivElement, images: number) {
    super(container, images); // Runs the constructor for ImgCarousel

    setInterval(this.tick, 2000);
  }

  tick = () => {
    this.nextImage();
    this.changeSelection();
  };
}

export default MovingCarousel;