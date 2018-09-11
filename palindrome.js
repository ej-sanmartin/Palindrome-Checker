function palindrome(str) {
  // str passed in is cleaned up and stored into the variable "word"
  let word = str.replace(/[\W_]/g, '').toLowerCase();
  return word.split('').reverse().join('') === word;
}
