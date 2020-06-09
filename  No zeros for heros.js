function noBoringZeros(n) {
  // your code
  if (n === 0) return 0;
  while ((n + '')[(n + '').length - 1] === '0') {
    n = n / 10;
  }
  return n;
}
