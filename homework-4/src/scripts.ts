import { log, br, test } from "./assets/helpers";

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
log("Function - ", "sum");
log("test 1: ", sum(1, 3));
log("test 2: ", sum(1, 10));
log("test 3: ", sum(99, 1));
br();
//2
const myType = (val: any): string => {
  return typeof val;
};
log("Function - ", "myType");
log("test 1: ", myType(1));
log("test 2: ", myType(false));
log("test 3: ", myType({}));
log("test 4: ", myType(null));
log("test 5: ", myType("string"));
log("test 6: ", myType(["array"]));
br();
//3
const equal = (a: any, b: any): boolean => {
  return a === b;
};
log("Function - ", "equal");
log("test 1: ", equal(2, 3));
log("test 2: ", equal(3, 3));
log("test 3: ", equal(1, "1"));
log("test 4: ", equal("10", "10"));
br();
//4
const nthChar = (a: string, b: number): string => {
  return a[b - 1];
};
log("Function - ", "nthChar");
log("test 1: ", nthChar("abcd", 1));
log("test 2: ", nthChar("zyxbwpl", 5));
log("test 3: ", nthChar("gfedcba", 3));
br();
//5
const lastThree = (a: string): string => {
  return a.slice(-3);
};
log("Function - ", "lastThree");
log("test 1: ", lastThree("abcdefg"));
log("test 2: ", lastThree("1234"));
log("test 3: ", lastThree("fgedcba"));
br();

//6
const lastThreeRemoved = (a: string): string => {
  return a.slice(0, -3);
};
log("Function - ", "lastThreeRemoved");
log("test 1: ", lastThreeRemoved("abcdefg"));
log("test 2: ", lastThreeRemoved("1234"));
log("test 3: ", lastThreeRemoved("fgedcba"));
br();

//7
const bProcOfA = (a: number, b: number): number => {
  return (b * 100) / a;
};
log("Function - ", "bProcOfA");
log("test 1: ", bProcOfA(100, 50));
log("test 2: ", bProcOfA(10, 1));
log("test 3: ", bProcOfA(500, 25));
br();

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
log("Function - ", "mathFormula");
log("test 1: ", mathFormula(6, 5, 4, 3, 2, 1));
log("test 2: ", mathFormula(6, 2, 1, 4, 2, 3));
log("test 3: ", mathFormula(2, 3, 6, 4, 2, 3));
br();

//9
const isEven = (a: number): Boolean => {
  return Boolean(a & 1);
};
log("Function - ", "isEven");
log("test 1: ", isEven(10));
log("test 2: ", isEven(-4));
log("test 3: ", isEven(5));
log("test 4: ", isEven(-111));
br();

//10
const stringRepeating = (a: string, b: string): number => {
  return b.split(a).length - 1;
};
log("Function - ", "stringRepeating");
log(
  "test 1: ",
  stringRepeating(
    "m",
    "how many times does the character occur in this sentence?"
  )
);
log(
  "test 2: ",
  stringRepeating(
    "h",
    "how many times does the character occur in this sentence?"
  )
);
log(
  "test 3: ",
  stringRepeating(
    "?",
    "how many times does the character occur in this sentence?"
  )
);
log(
  "test 4: ",
  stringRepeating(
    "z",
    "how many times does the character occur in this sentence?"
  )
);
br();

//11
const isWhole = (a: number): boolean => {
  return Number.isInteger(a);
};
log("Function - ", "isWhole");
log("test 1: ", isWhole(4));
log("test 2: ", isWhole(1.123));
log("test 3: ", isWhole(1048));
log("test 4: ", isWhole(10.48));
br();

//12
const mathFormulaTwo = (a: number, b: number): number => {
  return a < b ? a / b : a * b;
};
test(mathFormulaTwo, "mathFormulaTwo", [10, 100], [90, 45], [8, 20], [2, 0.5]);
br();

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
br();

//14
const roundByTwo = (a: number): number => {
  return Number(a.toFixed(2));
};
test(roundByTwo, "roundByTwo", 2.12397, 3.136, 1.12397, 26.1379);
br();

//15
const numberToDigits = (a: number): number[] => {
  return a
    .toString()
    .split("")
    .map((b) => Number(b));
};
test(numberToDigits, "numberToDigits", 10, 931, 193278);
br();

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
br();

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
br();

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
br();

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
br();

//20
const incASCII = (a: string): string => {
  return a
    .split("")
    .map((a) => String.fromCharCode(a.charCodeAt(0) + 1))
    .join("");
};
test(incASCII, "incASCII", "bnchmf", "bgddrd", "sdrshmf");
br();
