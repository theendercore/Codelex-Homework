const fsBtn = document.querySelector<HTMLButtonElement>(".js-fs-btn");
const carousel = document.querySelector<HTMLDivElement>(".js-carousel");
const imgCont = document.querySelector<HTMLDivElement>(".js-img-cont");
const img = document.querySelector<HTMLImageElement>(".js-img");

const enableFullScreen = (e: Event) => {

  if (imgCont.classList.contains("fullscreen")) {
    imgCont.classList.remove("fullscreen");
    carousel.classList.remove("vw-100");
    img.classList.remove("vw-100");
    fsBtn.innerHTML = `<svg width="20" height="20" fill="currentColor" class="fill-slate-600 hover:fill-slate-500" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
</svg>`;
  } else {
    imgCont.classList.add("fullscreen");
    carousel.classList.add("vw-100");
    img.classList.add("vw-100");
    fsBtn.innerHTML = `<svg width="20" height="20" fill="currentColor"  class="fill-slate-600 hover:fill-slate-500" viewBox="0 0 16 16">
  <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
</svg>`;
  }
};

fsBtn.addEventListener("click", enableFullScreen);
