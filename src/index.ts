
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const output = items.filter((item) => item.rating >= 4);
  return output;
}




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




function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}



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



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === 5 || day === 6) {
    return `Weekend`;
  }
  return "Weekday";
}



async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      if (n >= 0) {
        resolve(n * n);
      } else reject("Negative number not allowed");
    }, 1000);
  });
}
