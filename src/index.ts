// !Problem 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  }
  if (toUpper === false) {
    return input.toLowerCase();
  }
  //   return "hello";
}
const p1 = formatString("Hello", false);
console.log(p1);
