import { test } from "./assets/helpers";

let sArray = "SingleArray";
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
const returnIndexed = (a: number[], b: number): number => {
  return a[b - 1];
};
test(
  returnIndexed,
  "returnIndexed",
  [[1, 2, 3, 4, 5], 3],
  [[10, 9, 8, 7, 6], 5],
  [[7, 2, 1, 6, 3], 1]
);

//22
const removeFirstThreeArray = (a: number[]): number[] => {
  return a.slice(3);
};
test(
  removeFirstThreeArray,
  "removeFirstThreeArray",
  [[1, 2, 3, 4], sArray],
  [[5, 4, 3, 2, 1, 0], sArray],
  [[99, 1, 1], sArray]
);

//23
const lastThreeArray = (a: number[]): number[] => {
  return a.slice(-3);
};
test(
  lastThreeArray,
  "lastThreeArray",
  [[1, 2, 3, 4], sArray],
  [[5, 4, 3, 2, 1, 0], sArray],
  [[99, 1, 1], sArray]
);

//24
const firstThreeArray = (a: number[]): number[] => {
  return a.slice(0, 3);
};
test(
  firstThreeArray,
  "firstThreeArray",
  [[1, 2, 3, 4], sArray],
  [[5, 4, 3, 2, 1, 0], sArray],
  [[99, 1, 1], sArray]
);

//25
const lastNElements = (a: number[], b: number): number[] => {
  return a.slice(b * -1);
};
test(
  lastNElements,
  "lastNElements",
  [[1, 2, 3, 4, 5], 2],
  [[1, 2, 3], 6],
  [[1, 2, 3, 4, 5, 6, 7, 8], 3]
);

//26
const cleanFromB = (a: any[], b: any): any[] => {
  return a.filter((c: any) => c !== b);
};
test(
  cleanFromB,
  "cleanFromB",
  [[1, 2, 3], 2],
  [[1, 2, "2"], "2"],
  [[false, "2", 1], false],
  [[1, 2, "2", 1], 1]
);

//27
const arrayLength = (a: number[]): number => {
  return a.length;
};
test(
  arrayLength,
  "arrayLength",
  [[1, 2, 2, 4], sArray],
  [[9, 9, 9], sArray],
  [[4, 3, 2, 1, 0], sArray]
);

//28
const negativeNumberCount = (a: number[]): number => {
  return a.reduce((a, b) => {
    b < 0 ? a++ : a;
    return a;
  }, 0);
};
test(
  negativeNumberCount,
  "negativeNumberCount",
  [[1, -2, 2, -4], sArray],
  [[0, 9, 1], sArray],
  [[4, -3, 2, 1, 0], sArray]
);

//29
const sortDescending = (a: number[]): number[] => {
  return a.sort((a, b) => b - a);
};
test(
  sortDescending,
  "sortDescending",
  [[1, 2, 3], sArray],
  [[4, 2, 3, 1], sArray]
);

//30
const sortAlphabetically = (a: string[]): string[] => {
  return a.sort((a, b) => a.localeCompare(b));
};
test(
  sortAlphabetically,
  "sortAlphabetically",
  [["b", "c", "d", "a"], sArray],
  [["z", "c", "d", "a", "y", "a", "w"], sArray]
);

//31
const arrayAverage = (a: number[]): number => {
  return a.reduce((a, b) => a + b) / a.length;
};
test(
  arrayAverage,
  "arrayAverage",
  [[10, 100, 40], sArray],
  [[10, 100, 1000], sArray],
  [[-50, 0, 50, 200], sArray]
);

//32
const longestStrInArray = (a: string[]): string => {
  return a.sort((a, b) => b.length - a.length)[0];
};
test(
  longestStrInArray,
  "longestStrInArray",
  [["help", "me"], sArray],
  [["I", "need", "candy"], sArray]
);

//33
const isArraySame = (a: any[]): boolean => {
  return [...new Set(a)].length < 2 ? true : false;
};
test(
  isArraySame,
  "isArraySame",
  [[true, true, true, true], sArray],
  [["test", "test", "test"], sArray],
  [[1, 1, 1, 2], sArray],
  [["10", 10, 10, 10], sArray]
);

//34
const addArrays = (...arrays: any[]): any[] => {
  return arrays.reduce((a: any, b: any) => a.concat(b));
};
test(
  addArrays,
  "addArrays",
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    ["a", "b", "c"],
    [4, 5, 6],
  ],
  [
    [true, true],
    [1, 2],
    ["a", "b"],
  ]
);

//35
type obj = {
  a: number;
  b: number;
};
const sortObjArray = (a: obj[]) => {
  return a.sort((a: obj, b: obj) => a.b - b.b);
};
test(
  sortObjArray,
  "sortObjArray",
  [[[{ a: 1, b: 2 } as obj, { a: 5, b: 4 } as obj]], sArray],
  [[{ a: 2, b: 10 } as obj, { a: 5, b: 4 } as obj], sArray],
  [[{ a: 1, b: 7 } as obj, { a: 2, b: 1 } as obj], sArray]
);

//36
const arrayMagic = (a: number[], b: number[]): number[] => {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
};
test(
  arrayMagic,
  "arrayMagic",
  [
    [1, 2, 3],
    [3, 4, 5],
  ],
  [
    [-10, 22, 333, 42],
    [-11, 5, 22, 41, 42],
  ]
);

//37
const mathFormulaFour = (a: number[], b: number): number => {
  return a.reduce((x, y) => {
    y > b ? (x += y) : x;
    return x;
  }, 0);
};
test(
  mathFormulaFour,
  "mathFormulaFour",
  [[1, 2, 3, 4, 5, 6, 7], 2],
  [[-10, -11, -3, 1, -4], -3],
  [[78, 99, 100, 101, 401], 99]
);

//38
const arrayFromMinMax = (min: number, max: number): number[] => {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
};
test(arrayFromMinMax, "arrayFromMinMax", [2, 10], [1, 3], [-5, 5], [2, 7]);

//39
type WordArchive = {
  [Key: string]: string[];
};

const objArrayMagic = (a: string[]): WordArchive => {
  return a.reduce((a: WordArchive, b: string) => {
    return {
      ...a,
      [b.toLowerCase().charAt(0)]: (a[b.toLowerCase().charAt(0)] || []).concat(
        b
      ),
    };
  }, {});
};
test(
  objArrayMagic,
  "objArrayMagic",
  [["Alf", "Alice", "Ben"], sArray],
  [["Ant", "Bear", "Bird"], sArray],
  [["Berlin", "Paris", "Prague"], sArray]
);

//40
const arrayMagicTwo = (a: any[], b: number): any[] => {
  return [b > 5 ? b : 0].concat(a);
};
test(
  arrayMagicTwo,
  "arrayMagicTwo",
  [[1, 2, 3], 6],
  [["a", "b"], 2],
  [[null, false], 11]
);

//41
const everyThirdElemArray = (a: number[], b: number): number[] => {
  return a.filter((i) => i % b == 0);
};
test(
  everyThirdElemArray,
  "everyThirdElemArray",
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3],
  [[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5],
  [[7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2]
);

//42
type GeoLocation = {
  country: string;
  continent: string;
};
const findCountry = (a: GeoLocation): string => {
  return a.country;
};
test(
  findCountry,
  "findCountry",
  { continent: "Asia", country: "Japan" } as GeoLocation,
  { country: "Sweden", continent: "Europe" } as GeoLocation
);

//43
interface prop {
  "prop-2": any;
}
const findPropTwo = (a: prop): number | string => {
  return a["prop-2"];
};
test(
  findPropTwo,
  "findPropTwo",
  { one: 1, "prop-2": 2 },
  { "prop-2": "two", prop: "test" }
);

//44
const findFromGeoLocation = (
  a: GeoLocation,
  b: "country" | "continent"
): string => {
  return a[b];
};
test(
  findFromGeoLocation,
  "findFromGeoLocation",
  [{ continent: "Asia", country: "Japan" }, "continent"],
  [{ country: "Sweden", continent: "Europe" }, "country"]
);

//45
type char = string | number;
interface Dictionary {
  [key: char]: char;
}
const getFromDictionary = (a: Dictionary, b: char): boolean => {
  return a[b] !== undefined ? true : false;
};
test(
  getFromDictionary,
  "getFromDictionary",
  [{ a: 1, b: 2, c: 3 }, "b"],
  [{ x: "a", y: "b", z: "c" }, "a"],
  [{ x: "a", y: "b", z: "c" }, "z"]
);

//46
const toKeyObj = (a: string): Dictionary => {
  return { key: a } as Dictionary;
};
test(toKeyObj, "toKeyObj", "a", "z", "b");

//47

const keyAndValueToObj = (a: char, b: string): Dictionary => {
  return { [a]: b };
};
test(keyAndValueToObj, "keyAndValueToObj", ["a", "b"], ["z", "x"], ["b", "w"]);

//48
const mergeArraysToDictionary = (
  a: string[] | number[],
  b: string[] | number[]
): Dictionary => {
  let d: Dictionary = {};
  a.forEach((e: char, i: number, a: char[]) => {
    d[e] = b[i];
  });
  return d;
};
test(
  mergeArraysToDictionary,
  "mergeArraysToDictionary",
  [
    ["a", "b", "c"],
    [1, 2, 3],
  ],
  [
    ["w", "x", "y", "z"],
    [10, 9, 5, 2],
  ],
  [
    [1, "b"],
    ["a", 2],
  ]
);

//49
const getKeyFromObj = (a: Dictionary): char[] => {
  return Object.keys(a);
};
test(
  getKeyFromObj,
  "getKeyFromObj",
  { a: 1, b: 2, c: 3 },
  { j: 9, i: 2, x: 3, z: 4 },
  { w: 15, x: 22, y: 13 }
);

//50

const sumObjValues = (a: Dictionary): number => {
  let sum = 0;
  getKeyFromObj(a).forEach((e: char) => (sum += Number(a[e]).valueOf()));
  return sum;
};
test(
  sumObjValues,
  "sumObjValues",
  { a: 1, b: 2, c: 3 },
  { j: 9, i: 2, x: 3, z: 4 },
  { w: 15, x: 22, y: 13 }
);

//51
//52
//53
//54
//55
//56
//57
//58
//59
//60

//61
//62
//63
//64
//65
//66
//67
//68
//69
