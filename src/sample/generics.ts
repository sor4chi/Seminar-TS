function reverse<T>(items: T[]): T[] {
  var result = [];
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
}

// int reverse
const intarr = [1, 2, 3, 4, 5];
console.log(reverse(intarr));

// string reverse
const strarr = ["a", "b", "c", "d", "e"];
console.log(reverse(strarr));

// object reverse
const objarr = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }, { name: "e" }];
console.log(reverse(objarr));


