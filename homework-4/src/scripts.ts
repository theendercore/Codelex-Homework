import { log, br } from "./helpers";
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
const equal = (a: any, b: any):boolean => {
  return a === b;
};
log("Function - ", "equal");
log("test 1: ", equal(2, 3));
log("test 2: ", equal(3, 3));
log("test 3: ", equal(1, "1"));
log("test 4: ", equal("10", "10"));
br();
//4
const nthChar = (a: string, b: number):string => {
  return a[b - 1];
};
log("Function - ", "nthChar");
log("test 1: ", nthChar("abcd", 1));
log("test 2: ", nthChar("zyxbwpl", 5));
log("test 3: ", nthChar("gfedcba", 3));
br();
//5
const lastThree = (a: string):string => {
  return a.slice(-3);
};
log("Function - ", "lastThree");
log("test 1: ", lastThree("abcdefg"));
log("test 2: ", lastThree("1234"));
log("test 3: ", lastThree("fgedcba"));
br();

//6
const lastThreeRemoved = (a: string):string => {
  return a.slice(0, -3);
};
log("Function - ", "lastThreeRemoved");
log("test 1: ", lastThreeRemoved("abcdefg"));
log("test 2: ", lastThreeRemoved("1234"));
log("test 3: ", lastThreeRemoved("fgedcba"));
br();

//7
const bProcOfA = (a: number, b: number):number => {
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
const stringRepeating = (a:string, b:string):number => {
  return b.split(a).length - 1;
};
log("Function - ", "stringRepeating");
log("test 1: ", stringRepeating('m', 'how many times does the character occur in this sentence?'));
log("test 2: ", stringRepeating('h', 'how many times does the character occur in this sentence?'));
log("test 3: ", stringRepeating('?', 'how many times does the character occur in this sentence?'));
log("test 4: ", stringRepeating('z', 'how many times does the character occur in this sentence?'));
br()