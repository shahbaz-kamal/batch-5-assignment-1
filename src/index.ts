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
