// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input the
// will be a non-negative integer.

function digital_root(n){
    if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce((acc, d) => {
      return acc + +d;
    },0));
}