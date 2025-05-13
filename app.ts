// Problem-1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined || toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

// console.log(formatString("Hello World"));
// console.log(formatString("Hello World", true));
// console.log(formatString("Hello World", false));

// Problem-2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating > 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

//   console.log(filterByRating(books));

// Problem-3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(concatenateArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));


// Problem-4


