import { test } from "./assets/helpers";

/*
    ! IMPORTANT 
    Im very lazy and don't want to write a million lines of "console.log()"
    so I wrote my own test function that automatically tests all the inputs
    this function can be found in :
      * './assets/helpers.ts'

    As well as my other helper functions to make logging to my "Console"
    easier
*/

//1
const sum = (a: number, b: number): number => {
  return a + b;
};
test(sum, "sum", [1, 3], [1, 10], [99, 1]);

//2
const myType = (val: any): string => {
  return typeof val;
};
test(myType, "myType", 1, false, {}, null, "string", ["array"]);

//3
const equal = (a: any, b: any): boolean => {
  return a === b;
};
test(equal, "equal", [2, 3], [3, 3], [1, "1"], ["10", "10"]);

//4
const nthChar = (a: string, b: number): string => {
  return a[b - 1];
};
test(nthChar, "nthChar", ["abcd", 1], ["zyxbwpl", 5], ["gfedcba", 3]);

//5
const lastThree = (a: string): string => {
  return a.slice(-3);
};
test(lastThree, "lastThree", "abcdefg", "1234", "fgedcba");

//6
const lastThreeRemoved = (a: string): string => {
  return a.slice(0, -3);
};
test(lastThree, "lastThree", "abcdefg", "1234", "fgedcba");

//7
const bPercentOfA = (a: number, b: number): number => {
  return (b * 100) / a;
};
test(bPercentOfA, "bPercentOfA", [100, 50], [10, 1], [500, 25]);

//8
const mathFormula = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => {
  return Math.pow(((a + b - c) * d) / e, f);
};
test(
  mathFormula,
  "mathFormula",
  [6, 5, 4, 3, 2, 1],
  [6, 2, 1, 4, 2, 3],
  [2, 3, 6, 4, 2, 3]
);

//9
const isEven = (a: number): Boolean => {
  return Boolean(a & 1);
};
test(isEven, "isEven", 10, -4, 5, -111);

//10
const stringRepeating = (a: string, b: string): number => {
  return b.split(a).length - 1;
};
let textIn = "how many times does the character occur in this sentence?";
test(
  stringRepeating,
  "stringRepeating",
  ["m", textIn],
  ["h", textIn],
  ["?", textIn],
  ["z", textIn]
);

//11
const isWhole = (a: number): boolean => {
  return Number.isInteger(a);
};
test(isWhole, "isWhole", 4, 1.123, 1048, 10.48);

//12
const mathFormulaTwo = (a: number, b: number): number => {
  return a < b ? a / b : a * b;
};
test(mathFormulaTwo, "mathFormulaTwo", [10, 100], [90, 45], [8, 20], [2, 0.5]);

//13
const stringMagic = (a: string, b: string): string => {
  return a.includes(b) ? b + a : a + b;
};
test(
  stringMagic,
  "stringMagic",
  ["cheese", "cake"],
  ["lips", "s"],
  ["Java", "script"],
  [" think, therefore I am", "I"]
);

//14
const roundByTwo = (a: number): number => {
  return Number(a.toFixed(2));
};
test(roundByTwo, "roundByTwo", 2.12397, 3.136, 1.12397, 26.1379);

//15
const numberToDigits = (a: number): number[] => {
  return a
    .toString()
    .split("")
    .map((b) => Number(b));
};
test(numberToDigits, "numberToDigits", 10, 931, 193278);

//16
const stringDarkMagic = (a: string, b: string): string => {
  return (
    a.charAt(0).toUpperCase() +
    a.slice(1) +
    b.split("").reverse().join("")
  ).replace("%", "");
};
test(
  stringDarkMagic,
  "stringDarkMagic",
  ["java", "tpi%rcs"],
  ["c%ountry", "edis"],
  ["down", "nw%ot"]
);

//17
const isItPrime = (a: number): number => {
  let pass: boolean = false;
  while (!pass) {
    pass = true;
    for (let i = 2; i <= a / 2; i++) {
      if (a % i == 0) {
        pass = false;
      }
    }
    if (!pass) {
      a += 1;
    }
  }
  return a;
};
test(isItPrime, "isItPrime", 38, 7, 115, 2000);

//18
const isItDivis = (a: number, b: number): number => {
  while (true) {
    if (a % b == 0) {
      break;
    } else {
      a++;
    }
  }
  return a;
};
test(isItDivis, "isItDivis", [1, 23], [23, 23], [7, 3], [-5, 7]);

//19
const stringMagicTwo = (a: string, b: string): string => {
  return a.match(/[\s\S]{1,3}/g).join(b);
};
test(
  stringMagicTwo,
  "stringMagicTwo",
  ["1234567", "."],
  ["abcde", "$"],
  ["zxyzxyzxyzxyzxyz", "w"]
);

//20
const incASCII = (a: string): string => {
  return a
    .split("")
    .map((a) => String.fromCharCode(a.charCodeAt(0) + 1))
    .join("");
};
test(incASCII, "incASCII", "bnchmf", "bgddrd", "sdrshmf");

//21
const run = (a:string):string => {return a};
test(run, "run", "a")

//22


//23


//24
//25
//26
//27
//28
//29
//30
