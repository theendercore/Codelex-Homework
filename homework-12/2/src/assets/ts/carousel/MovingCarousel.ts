import ImgCarousel from "./ImgCarousel";

class MovingCarousel extends ImgCarousel {
  constructor(container: HTMLDivElement, count: number) {
    super(container, count); // Runs the constructor for ImgCarousel

    setInterval(this.tick, 2000);
  }

  tick = () => {
    this.nextImage();
    this.changeSelection();
  };
}

export default MovingCarousel;