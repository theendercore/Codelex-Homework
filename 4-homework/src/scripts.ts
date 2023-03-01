import { br, test } from "./assets/helpers";


//*Universal types
type char = string | number;

interface Dictionary {
  [key: string]: char;
}

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
/*
  Write a function that takes two numbers (a and b) as argument
  Sum a and b
  Return the result
*/
const sum = (a: number, b: number): number => a + b;
test(sum, "sum", [1, 3], [1, 10], [99, 1]);

//2
/*
  Write a function that takes a value as argument
  Return the type of the value
*/
const myType = (val: unknown): string => typeof val;
test(myType, "myType", 1, false, {}, null, "string", ["array"]);

//3
/* 
  Write a function that takes two values, say a and b, as arguments
  Return true if the two values are equal and of the same type
*/
const equal = (a: char, b: char): boolean => a === b;
test(equal, "equal", [2, 3], [3, 3], [1, "1"], ["10", "10"]);

//4
/*
  Write a function that takes a string (a) and a number (n) as arguments
  Return the nth character of 'a'
*/
const nthChar = (a: string, b: number): string => a[b - 1];
test(nthChar, "nthChar", ["abcd", 1], ["zyxbwpl", 5], ["gfedcba", 3]);

//5
/*
  Write a function that takes a string (a) as argument
  Remove the first 3 characters of a
  Return the result
*/
const firstThreeRemoved = (a: string): string => a.slice(3);
test(firstThreeRemoved, "firstThreeRemoved", "abcdefg", "1234", "fgedcba");

//6
/*
  Write a function that takes a string as argument
  Extract the last 3 characters from the string
  Return the result
*/
const lastThree = (a: string): string => a.slice(-3);
test(lastThree, "lastThree", "abcdefg", "1234", "fgedcba");

//7
/*
  Write a function that takes a string (a) as argument
  Get the first 3 characters of a
  Return the result
*/
const firstThree = (a: string): string => a.slice(0, 3);
test(firstThree, "firstThree", "abcdefg", "1234", "fgedcba");

//8
/*
  Write a function that takes a string (a) as argument
  Extract the first half a
  Return the result
*/
const splitString = (a: string): string => a.slice(0, a.length / 2);
test(splitString, "splitString", "abcdefg", "1234", "gedcba");

//9
/*
  Write a function that takes a string (a) as argument
  Remove the last 3 characters of a
  Return the result
*/
const lastThreeRemoved = (a: string): string => a.slice(0, -3);
test(lastThreeRemoved, "lastThreeRemoved", "abcdefg", "1234", "fgedcba");

//10
/*
  Write a function that takes two numbers (a and b) as argument
  Return b percent of a
*/
const bPercentOfA = (a: number, b: number): number => (b * 100) / a;
test(bPercentOfA, "bPercentOfA", [100, 50], [10, 1], [500, 25]);

//11
/*
  Write a function that takes 6 values (a,b,c,d,e,f) as arguments
  Sum a and b
  Then subtract by c
  Then multiply by d and divide by e
  Finally raise to the power of f and return the result
  Tip: mind the order
*/
const mathFormula = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => Math.pow(((a + b - c) * d) / e, f);
test(
  mathFormula,
  "mathFormula",
  [6, 5, 4, 3, 2, 1],
  [6, 2, 1, 4, 2, 3],
  [2, 3, 6, 4, 2, 3]
);

//12
/*
  Write a function that takes a number as argument
  If the number is even, return true
  Otherwise, return false
*/
const isEven = (a: number): Boolean => {
  return Boolean(a & 1);
};
test(isEven, "isEven", 10, -4, 5, -111);

//13
/*
  Write a function that takes two strings (a and b) as arguments
  Return the number of times a occurs in b
*/
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

//14
/*
  Write a function that takes a number (a) as argument
  If a is a whole number (has no decimal place), return true
  Otherwise, return false
 */
const isWhole = (a: number): boolean => {
  return Number.isInteger(a);
};
test(isWhole, "isWhole", 4, 1.123, 1048, 10.48);

//15
/*
  Write a function that takes two numbers (a and b) as arguments
  If a is smaller than b, divide a by b
  Otherwise, multiply both numbers
  Return the resulting value
 */
const mathFormulaTwo = (a: number, b: number): number => {
  return a < b ? a / b : a * b;
};
test(mathFormulaTwo, "mathFormulaTwo", [10, 100], [90, 45], [8, 20], [2, 0.5]);

//16
/*
  Write a function that takes two strings (a and b) as arguments
  If a contains b, append b to the beginning of a
  If not, append it to the end
  Return the concatenation
 */
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

//17
/*
  Write a function that takes a number (a) as argument
  Round a to the 2nd digit after the comma
  Return the rounded number
 */
const roundByTwo = (a: number): number => {
  return Number(a.toFixed(2));
};
test(roundByTwo, "roundByTwo", 2.12397, 3.136, 1.12397, 26.1379);

//18
/*
  Write a function that takes a number (a) as argument
  Split a into its individual digits and return them in an array
  Tip: you might want to change the type of the number for the splitting
 */
const numberToDigits = (a: number): number[] => {
  return a
    .toString()
    .split("")
    .map((b) => Number(b));
};
test(numberToDigits, "numberToDigits", 10, 931, 193278);

//19
/*
  It seems like something happened to these strings
  Can you figure out how to clear up the chaos?
  Write a function that joins these strings together such that they form the following words:
  'Javascript', 'Countryside', and 'Downtown'
  You might want to apply basic JS string methods such as replace(), split(), slice() etc.
 */
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

//20
/*
  This challenge is a little bit more complex
  Write a function that takes a number (a) as argument
  If a is prime, return a
  If not, return the next higher prime number
 */
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

//21
/*
  Write a function that takes two numbers, say x and y, as arguments
  Check if x is divisible by y
  If yes, return x
  If not, return the next higher natural number that is divisible by y
 */
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

//22
/*
  Write a function that takes two strings (a and b) as arguments
  Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
  Return the resulting string
 */
const stringMagicTwo = (a: string, b: string): string => {
  return a
    .split("")
    .reverse()
    .join("")
    .match(/[\s\S]{1,3}/g)
    .join(b)
    .split("")
    .reverse()
    .join("");
};
test(
  stringMagicTwo,
  "stringMagicTwo",
  ["1234567", "."],
  ["abcde", "$"],
  ["zxyzxyzxyzxyzxyz", "w"]
);

//23
/*
  Write a function that takes a string as argument
  As it is, the string has no meaning
  Increment each letter to the next letter in the alphabet
  Return the correct word
 */
const incASCII = (a: string): string => {
  return a
    .split("")
    .map((a) => String.fromCharCode(a.charCodeAt(0) + 1))
    .join("");
};
test(incASCII, "incASCII", "bnchmf", "bgddrd", "sdrshmf");

//24
/*
  Write a function that takes an array (a) and a value (n) as argument
  Return the nth element of 'a'
 */
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

//25
/*
  Write a function that takes an array (a) as argument
  Remove the first 3 elements of 'a'
  Return the result
 */
const removeFirstThreeArray = (a: number[]): number[] => {
  return a.slice(3);
};
test(
  removeFirstThreeArray,
  "removeFirstThreeArray",
  [[1, 2, 3, 4]],
  [[5, 4, 3, 2, 1, 0]],
  [[99, 1, 1]]
);

//26
/*
  Write a function that takes an array (a) as argument
  Extract the last 3 elements of a
  Return the resulting array
 */
const lastThreeArray = (a: number[]): number[] => {
  return a.slice(-3);
};
test(
  lastThreeArray,
  "lastThreeArray",
  [[1, 2, 3, 4]],
  [[5, 4, 3, 2, 1, 0]],
  [[99, 1, 1]]
);

//27
/*
  Write a function that takes an array (a) as argument
  Extract the first 3 elements of a
  Return the resulting array
 */
const firstThreeArray = (a: number[]): number[] => {
  return a.slice(0, 3);
};
test(
  firstThreeArray,
  "firstThreeArray",
  [[1, 2, 3, 4]],
  [[5, 4, 3, 2, 1, 0]],
  [[99, 1, 1]]
);

//28
/*
  Write a function that takes an array (a) and a number (n) as arguments
  It should return the last n elements of a
 */
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

//29
/*
  Write a function that takes an array (a) and a value (b) as argument
  The function should clean a from all occurrences of b
  Return the filtered array
 */
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

//30
/*
  Write a function that takes an array (a) as argument
  Return the number of elements in a
 */
const arrayLength = (a: number[]): number => {
  return a.length;
};
test(
  arrayLength,
  "arrayLength",
  [[1, 2, 2, 4]],
  [[9, 9, 9]],
  [[4, 3, 2, 1, 0]]
);

//31
/*
  Write a function that takes an array of numbers as argument
  Return the number of negative values in the array
 */
const negativeNumberCount = (a: number[]): number => {
  return a.reduce((a, b) => {
    b < 0 ? a++ : a;
    return a;
  }, 0);
};
test(
  negativeNumberCount,
  "negativeNumberCount",
  [[1, -2, 2, -4]],
  [[0, 9, 1]],
  [[4, -3, 2, 1, 0]]
);

//32
/*
  Write a function that takes an array of numbers as argument
  It should return an array with the numbers sorted in descending order
 */
const sortDescending = (a: number[]): number[] => {
  return a.sort((a, b) => b - a);
};
test(
  sortDescending,
  "sortDescending",
  [[1, 2, 3]],
  [[4, 2, 3, 1]]
);

//33
/*
  Write a function that takes an array of strings as argument
  Sort the array elements alphabetically
  Return the result
 */
const sortAlphabetically = (a: string[]): string[] => {
  return a.sort((a, b) => a.localeCompare(b));
};
test(
  sortAlphabetically,
  "sortAlphabetically",
  [["b", "c", "d", "a"]],
  [["z", "c", "d", "a", "y", "a", "w"]]
);

//34
/*
  Write a function that takes an array of numbers as argument
  It should return the average of the numbers
 */
const arrayAverage = (a: number[]): number => {
  return a.reduce((a, b) => a + b) / a.length;
};
test(
  arrayAverage,
  "arrayAverage",
  [[10, 100, 40]],
  [[10, 100, 1000]],
  [[-50, 0, 50, 200]]
);

//35
/*
  Write a function that takes an array of strings as argument
  Return the longest string
 */
const longestStrInArray = (a: string[]): string => {
  return a.sort((a, b) => b.length - a.length)[0];
};
test(
  longestStrInArray,
  "longestStrInArray",
  [["help", "me"]],
  [["I", "need", "candy"]]
);

//36
/*
  Write a function that takes an array as argument
  It should return true if all elements in the array are equal
  It should return false otherwise
 */
const isArraySame = (a: any[]): boolean => {
  return [...new Set(a)].length < 2 ? true : false;
};
test(
  isArraySame,
  "isArraySame",
  [[true, true, true, true]],
  [["test", "test", "test"]],
  [[1, 1, 1, 2]],
  [["10", 10, 10, 10]]
);

//37
/*
  Write a function that takes arguments an arbitrary number of arrays
  It should return an array containing the values of all arrays
 */
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

//38
/*
  Write a function that takes an array of objects as argument
  Sort the array by property b in ascending order
  Return the sorted array
 */
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
  [[[{ a: 1, b: 2 } as obj, { a: 5, b: 4 } as obj]]],
  [[{ a: 2, b: 10 } as obj, { a: 5, b: 4 } as obj]],
  [[{ a: 1, b: 7 } as obj, { a: 2, b: 1 } as obj]]
);

//39
/*
  Write a function that takes two arrays as arguments
  Merge both arrays and remove duplicate values
  Sort the merge result in ascending order
  Return the resulting array
 */
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

//40
/*
  Write a function that takes an array (a) and a number (b) as arguments
  Sum up all array elements with a value greater than b
  Return the sum
 */
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

//41
/*
  Write a function that takes two numbers (min and max) as arguments
  Return an array of numbers in the range min to max
 */
const arrayFromMinMax = (min: number, max: number): number[] => {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
};
test(arrayFromMinMax, "arrayFromMinMax", [2, 10], [1, 3], [-5, 5], [2, 7]);

//42
/*
  Write a function that takes an array of strings as argument
  Group those strings by their first letter
  Return an object that contains properties with keys representing first letters
  The values should be arrays of strings containing only the corresponding strings
  For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
 */
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
  [["Alf", "Alice", "Ben"]],
  [["Ant", "Bear", "Bird"]],
  [["Berlin", "Paris", "Prague"]]
);

//43
/*
  Write a function that takes an array with arbitrary elements and a number as arguments
  Return a new array, the first element should be either the given number itself
  or zero if the number is smaller than 6
  The other elements should be the elements of the original array
  Try not to mutate the original array
 */
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

//44
/*
  Write a function that takes an array (a) and a value (n) as arguments
  Save every nth element in a new array
  Return the new array
 */
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

//45
/*
  Write a function that takes an object with two properties as argument
  It should return the value of the property with key country
 */
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

//46
/*
  Write a function that takes an object with two properties as argument
  It should return the value of the property with key 'prop-2'
  Tip: you might want to use the square brackets property accessor
 */
interface prop {
  "prop-2": any;
}
const findPropTwo = (a: prop): number | string => {
  return a["prop-2"] !== undefined ? a["prop-2"] : "no value";
};
test(
  findPropTwo,
  "findPropTwo",
  { one: 1, "prop-2": 2 },
  { "prop-2": "two", prop: "test" }
);

//47
/*
  Write a function that takes an object with two properties and a string as arguments
  It should return the value of the property with key equal to the value of the string
 */
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

//48
/*
  Write a function that takes an object (a) and a string (b) as argument
  Return true if a has a property with key b
  Return false otherwise
 */
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

//49
/*
  Write a function that a string (a) as argument
  Create an object that has a property with key 'key' and a value of a
  Return the object
 */
const toKeyObj = (a: string): Dictionary => {
  return { key: a } as Dictionary;
};
test(toKeyObj, "toKeyObj", "a", "z", "b");

//50
/*
  Write a function that takes two strings (a and b) as arguments
  Create an object that has a property with key 'a' and a value of 'b'
  Return the object
 */
const keyAndValueToObj = (a: char, b: string): Dictionary => {
  return { [a]: b };
};
test(keyAndValueToObj, "keyAndValueToObj", ["a", "b"], ["z", "x"], ["b", "w"]);

//51
/*
  Write a function that takes two arrays (a and b) as arguments
  Create an object that has properties with keys 'a' and corresponding values 'b'
  Return the object
 */
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

//52
/*
  Write a function that takes an object (a) as argument
  Return an array with all object keys
 */
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

//53
/*
  Write a function that takes an object (a) as argument
  Return the sum of all object values
 */

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

//54
/*
  Write a function that takes an object as argument
  It should return an object with all original object properties
  except for the property with key 'b'
 */
const removeValueB = (a: Dictionary): Dictionary => {
  delete a["b"];
  return a;
};
test(
  removeValueB,
  "removeValueB",
  { a: 1, b: 7, c: 3 },
  { b: 0, a: 7, d: 8 },
  { e: 6, f: 4, b: 5, a: 3 }
);

//55
/*
  Write a function that takes two objects as arguments
  Unfortunately, the property 'b' in the second object has the wrong key
  should be named 'd' instead
  Merge both objects and correct the wrong property name
  Return the resulting object
  It should have the properties 'a', 'b', 'c', 'd', and 'e'
 */
const mergeObjs = (a: Dictionary, b: Dictionary): Dictionary => {
  b["d"] = b["b"];
  delete b["b"];
  return { ...a, ...b };
};
test(
  mergeObjs,
  "mergeObjs",
  [
    { a: 1, b: 2 },
    { c: 3, b: 4, e: 5 },
  ],
  [
    { a: 5, b: 4 },
    { c: 3, b: 1, e: 2 },
  ]
);

//56
/*
  Write a function that takes an object (a) and a number (b) as arguments
  Multiply all values of 'a' by 'b'
  Return the resulting object
 */
const multiplyObjVal = (a: Dictionary, b: number): Dictionary => {
  let d: Dictionary = {};
  getKeyFromObj(a).forEach((e) => {
    d[e] = Number(a[e]) * b;
  });
  return d;
};
test(
  multiplyObjVal,
  "multiplyObjVal",
  [{ a: 1, b: 2, c: 3 }, 3],
  [{ j: 9, i: 2, x: 3, z: 4 }, 10],
  [{ w: 15, x: 22, y: 13 }, 6]
);

//57
/*
  Write a function that takes an object as argument
  Somehow, the properties and keys of the object got mixed up
  Swap the Javascript object's key with its values and return the resulting object
 */
const swapKeysAndValues = (a: Dictionary): Dictionary => {
  let d: Dictionary = {};
  getKeyFromObj(a).forEach((e) => {
    d[a[e]] = e;
  });
  return d;
};
test(
  swapKeysAndValues,
  "swapKeysAndValues",
  { z: "a", y: "b", x: "c", w: "d" },
  { 2: "a", 4: "b", 6: "c", 8: "d" },
  { a: 1, z: 24 }
);

//58
/*
  Write a function that takes an object as argument
  Some of the property values contain empty strings
  Replace empty strings and strings that contain only whitespace with null values
  Return the resulting object
 */
const removeEmptyObj = (a: Dictionary): Dictionary => {
  let d: Dictionary = {};
  getKeyFromObj(a).forEach((e) => {
    d[e] = a[e].toString().trim() !== "" ? a[e] : null;
  });
  return d;
};
test(
  removeEmptyObj,
  "removeEmptyObj",
  { a: "a", b: "b", c: "" },
  { a: "", b: "b", c: " ", d: "d" },
  { a: "a", b: "b ", c: " ", d: "" }
);

//59
/*
  Write a function that takes an object as argument containing properties with personal information
  Extract firstName, lastName, size, and weight if available
  If size or weight is given transform the value to a string
  Attach the unit cm to the size
  Attach the unit kg to the weight
  Return a new object with all available properties that we are interested in
 */
const values = ["fn", "ln", "size", "weight"];
const personReader = (a: Dictionary): Dictionary => {
  let d: Dictionary = {};
  values.forEach((e) => {
    if (a[e] !== undefined) {
      d[e] = a[e] + (e === "size" ? "cm" : e === "weight" ? "kg" : "");
    }
  });
  return d;
};
test(
  personReader,
  "personReader",
  {
    fn: "Lisa",
    ln: "Müller",
    age: 17,
    size: 175,
    weight: 67,
  },
  {
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  },
  { fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 },
  { fn: "Matthew", ln: "Müller", age: 19, email: "matthew@mueller.de" }
);

//60
/*
  Write a function that takes an array of objects and a string as arguments
  Add a property with key 'continent' and value equal to the string to each of the objects
  Return the new array of objects
  Tip: try not to mutate the original array
 */
const addContinent = (a: Dictionary[], b: string): Dictionary[] => {
  let da: Dictionary[] = [...a];
  da.map((e) => {
    e["continent"] = b;
  });
  return da;
};
test(
  addContinent,
  "addContinent",
  [
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia",
  ],
  [
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe",
  ]
);

//61
/*
  Write a function that takes an array of numbers as argument
  Convert the array to an object
  It should have a key for each unique value of the array
  The corresponding object value should be the number of times the key occurs within the array
 */
const arrayToObject = (a: number[]): Dictionary => {
  return a.reduce((a: Dictionary, b: number) => {
    return {
      ...a,
      [b]: ((a[b] || 0) as number) + 1,
    };
  }, {});
};
test(
  arrayToObject,
  "arrayToObject",
  [[1, 2, 2, 3]],
  [[9, 9, 9, 99]],
  [[4, 3, 2, 1]]
);

//62
/*
  Write a function that takes two date instances as arguments
  It should return true if the dates are equal
  It should return false otherwise
 */
const compareDates = (a: Date, b: Date): boolean => {
  return +a === +b;
};
test(
  compareDates,
  "compareDates",
  [new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00")],
  [new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00")],
  [new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00")]
);

//63
/*
  Write a function that takes two date instances as argument
  It should return the number of days that lies between those dates
 */
const dayBetweenDates = (a: Date, b: Date): number => {
  return Math.abs(+a - +b) / 86400000;
};
test(
  dayBetweenDates,
  "dayInbetweenDates",
  [new Date("2020-06-11"), new Date("2020-06-01")],
  [new Date("2000-01-01"), new Date("2020-06-01")]
);

//64
/*
  Write a function that takes two date instances as argument
  It should return true if they fall on the exact same day
  It should return false otherwise
 */
const sameDay = (a: Date, b: Date): boolean => {
  return a.getDay() === b.getDay();
};
test(
  sameDay,
  "sameDay",
  [new Date("2000/01/01"), new Date("2000/01/01")],
  [new Date("2000/01/01"), new Date("2000/01/02")],
  [new Date("2001/01/01"), new Date("2000/01/01")],
  [new Date("2000/11/01"), new Date("2000/01/01")]
);

/*
          !SPREAD OPERATOR     
  ?Use spread operator in all tasks
*/

//65
/*
  Write a function that takes two number arrays as parameters 
  and return an array which contains elements from both 
  arrays
 */
const combineArrays = (a: number[], b: number[]): number[] => {
  return [...a, ...b];
};
test(
  combineArrays,
  "combineArrays",
  [
    [1, 2],
    [3, 4],
  ],
  [
    [1, 2],
    [3, 4, 5, 6],
  ]
);

//66
/*
  Write a function that takes an array and a string as parameters 
  and return an array which contains all elements from the given array
  and the given string as the last element
 */
const addStringToArray = (a: string[], b: string): string[] => {
  return [...a, b];
};
test(addStringToArray, "addStringToArray", [
  ["Apple", "Orange", "Banana"],
  "Kiwi",
]);

//67
/*
  Write a function that takes an array and a string as parameters 
  and return an array which contains all elements from the given array
  and the given string as the first element
 */
const addStringInStartArray = (a: string[], b: string): string[] => {
  return [b, ...a];
};
test(addStringInStartArray, "addStringInStartArray", [
  ["Apple", "Orange", "Banana"],
  "Kiwi",
]);

//68
/*
  Write a function that takes two objects as parameters 
  and return an object which contains properties from both 
  objects
 */
const mergeObjects = (a: Dictionary, b: Dictionary): Dictionary => {
  return { ...a, ...b };
};
test(
  mergeObjects,
  "mergeObjects",
  [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
  ],
  [
    { a: 1, b: 2 },
    { c: 3, d: 4, e: 5, f: 6 },
  ]
);

//69
/*
  Write a function that takes an object and a string as parameters 
  and return an object which contains properties from the given object
  and a new property favoriteMovie with the value equal to the given string
 */
const addPropertyObj = (a: Dictionary, b: string): Dictionary => {
  return { ...a, favoriteMovie: b };
};
test(
  addPropertyObj,
  "addPropertyObj",
  [{ eyeColor: "green", age: 10 }, "Garfield"],
  [{ eyeColor: "blue", age: 15 }, "Twilight"]
);