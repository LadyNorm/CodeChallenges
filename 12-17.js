function reverseInteger (n) {
  var finalAnswer = 0;
  while (n !== 0) {
      finalAnswer = finalAnswer*10 + n%10;
      n = Math.floor(n/10);
    }
  return finalAnswer;
}