module.exports = function countWords(inputWords) {
  return inputWords.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
    return countMap;
  }, {}); // second argument to reduce initialises countMap to {}
}