function isPalindrome (str) {
  var string = str.replace(/\s/g, '').toLowerCase();
	return string === string.split('').reverse().join('');
}
