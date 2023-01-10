// Exercise 1,
/* 
    Create the Product interface based on the following example products.
    - type can be only "Program" or "Course"
    - currency can be only "USD", "HUF", "EUR"

    If you get stuck with the createdAt, check what is the return type of
    Date.parse (you can hover your mouse over it).
*/

export interface Product {
  /* TODO: fill the type declarations */
  id: number;
  title: string;
  price: string;
  createdAt: number;
  currency: "USD" | "HUF" | "EUR";
  type: "Program" | "Course";
  relatedCourses: Product[];
}

const products: Product[] = [
  {
    id: 4,
    title: "How to Hack NASA with HTML",
    price: "5000.00",
    createdAt: Date.parse("2022-05-18T14:48:00"),
    currency: "HUF",
    type: "Course",
    relatedCourses: [],
  },
  {
    id: 6,
    title: "Cat Grooming Masterclass",
    price: "10.00",
    createdAt: Date.parse("2022-05-19T16:00:00"),
    currency: "USD",
    type: "Program",
    relatedCourses: [
      {
        id: 11,
        title: "Lying Yourself, that you are the Master",
        price: "0.00",
        createdAt: Date.parse("2022-05-18T16:00:00"),
        currency: "USD",
        type: "Course",
        relatedCourses: [],
      },
      {
        id: 16,
        title: "Taming your cat, a life long learning",
        price: "0.00",
        createdAt: Date.parse("2022-05-17T16:00:00"),
        currency: "USD",
        type: "Course",
        relatedCourses: [],
      },
    ],
  },
];

// Exercise 2,
/*
    Add type annotations to the arguments and return types
    of these two functions.
*/

function filterCourses(products: Product[]): Product[] {
  return products.filter((product: Product) => product.type === "Course");
}

function getTitles(products: Product[]) { // returns:    string[]
  return products.map((product) => product.title);
}

// Exercise 3,
/*
    When Typescript infers correctly the types and when it is necessary
    to define them explicitly? Try to remove type annotations from the
    filterCourses and getTitles functions
    above. Hover the mouse to the variables to check the inferred types.
    When do you see "any", and when something else?
*/

// This two functions just here to check the proper return type in the tests.
const courses = filterCourses(products);
const titles = getTitles(products);

// Exercise 4,
/*
    Can I pass a Product object to the format Price function without
    typescript error? Why?
    Spot that the inline type annotation here is different than the
    Product's type definition.
*/
function formatPrice(product: { price: string, currency: string }) {
  return `${product.price} ${product.currency}`;
}

// passing a product to the function, for tests only.
const price = formatPrice(products[0]);

