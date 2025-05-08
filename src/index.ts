// !Problem 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}
const p1 = formatString("Hello");
// console.log(p1);

//!problem 2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const output = items.filter((item) => item.rating >= 4);
  return output;
}
const books = [
  { title: "Book A", rating: 2.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 4.0 },
];

const p2 = filterByRating(books);
// console.log(p2);

//!problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  //checking if all the arrays has same type or not
  const referenceType = typeof arrays[0][0];
  for (const array of arrays) {
    for (const item of array) {
      if (typeof item !== referenceType) {
        throw new Error("All array elements must be of the same type");
      }
    }
  }
  //After checking doing cocatation and returning the output
  let output: T[] = [];

  for (let array of arrays) {
    output = output.concat(array);
  }
  return output;
}
// const p3 = concatenateArrays([3, 2], [5, 6], [9, 6]);
// console.log(p3);

//!problem 4

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year:${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getModel());

//!problem 5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}
// const p5=processValue("hello")
// console.log(p5)

//!problem 5
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  const output = products.reduce((maxValue, currentValue) => {
    return currentValue.price > maxValue.price ? currentValue : maxValue;
  });
  return output;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const p6 = getMostExpensiveProduct(products);
console.log(p6);

//!problem 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
  if (day===5 || day===6){
    return `Weekend`
  }
  return "Weekday"

}
const p7=getDayType(Day.Sunday)
console.log(p7)