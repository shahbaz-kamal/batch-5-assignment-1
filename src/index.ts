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
const p3 = concatenateArrays([3, 2], [5, 6], [9, 6]);
console.log(p3);
