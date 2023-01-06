import { log, br } from "./helper-func";


const sum = (a: number, b: number): number => {
  return a + b;
};
log("Function - ", "Sum");
log("Sum: ", sum(1, 3));
log("Sum: ", sum(1, 10));
log("Sum: ", sum(99, 1));
br();

