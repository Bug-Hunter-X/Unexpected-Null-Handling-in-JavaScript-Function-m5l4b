function foo(a, b) {
  //Robust null and undefined checks and type handling
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric input
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 'a')); // Output: NaN
console.log(foo(undefined,2)); //Output: 2