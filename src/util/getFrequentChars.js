export default function getFrequentChars(charQueue, charCount) {
  let result = [];
  let charCountValues = Object.values(charCount);
  charCountValues = charCountValues.sort((a, b) => a - b); // sort ascending

  if (charCountValues.length > 5) {
    charCountValues = charCountValues.slice(-5); // get the last 5 elements
  }

  for (let idx = 0; idx < charQueue.length; idx++) {
    let count = charCount[charQueue[idx]];
    let char = charQueue[idx];
    if (charCountValues.includes(count)) {
      result.push(char);
    }
  }

  return result;
}
