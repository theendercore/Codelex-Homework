import { log } from "./assets/helper";
const btns = document.querySelectorAll<HTMLButtonElement | null>(".ts-btn");
const boxes = document.querySelectorAll<HTMLDivElement | null>(".ts-box");

const colors = ["blue", "red", "green", "orange", "yellow"];
let iterator = 0;

btns[0].addEventListener("click", () => {
  boxes[0].classList.toggle("yellow");
});

btns[1].addEventListener("click", () => {
  let z = boxes[1].innerHTML;
  boxes[1].innerHTML = z === "FAIL" ? "SUCCESS" : "FAIL";
});

btns[2].addEventListener("click", () => {
  boxes[2].classList.toggle("hidden");
});

btns[3].addEventListener("click", () => {
  boxes[3].classList.toggle("hidden");
});

btns[4].addEventListener("click", () => {
  let box4 = boxes[4];
  box4.classList.remove(colors[iterator]);
  iterator = iterator < 5 ? iterator + 1 : 0;
  box4.classList.add(colors[iterator]);
});
let count: NodeJS.Timer;

boxes[4].addEventListener("mouseenter", () => {
  let box4 = boxes[4];
  let z = Number(box4.innerHTML);
  let counter = () => {
    z = Number(box4.innerHTML);
    if (z === 10) {
      clearInterval(count);
    } else {
      box4.innerHTML = `${z + 1}`;
    }
  };
  count = setInterval(counter, 500);
});

boxes[4].addEventListener("mouseleave", () => {
  clearInterval(count);
  let box4 = boxes[4];
  box4.innerHTML= "0";
});

btns[5].addEventListener("click", () => {
  let box5 = boxes[5];
  let z = Number(box5.innerHTML);
  let counter = () => {
    z = Number(box5.innerHTML);
    if (z === 10) {
      clearInterval(num);
    } else {
      box5.innerHTML = `${z + 1}`;
    }
  };
  let num = setInterval(counter, 3000);
});

btns[6].addEventListener("click", () => {
  let boxes = document.querySelectorAll<HTMLDivElement | null>(".ts-box");
  boxes.forEach((e) => {
    e.classList.toggle("super-color");
  });
  document.querySelector<HTMLBodyElement | null>("body").classList.toggle("white-bg");
});

const red = () => {
  boxes[0].classList.toggle("red");
};

boxes[0].addEventListener("mouseenter", red);
boxes[0].addEventListener("mouseleave", red);

let txtIn = document.querySelector<HTMLInputElement | null>(".text-input");
txtIn.addEventListener("input", () => {
  document.querySelector<HTMLDivElement | null>(".text-box").innerHTML = txtIn.value;
});
