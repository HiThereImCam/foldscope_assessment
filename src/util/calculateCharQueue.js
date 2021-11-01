export default function calculateCharQueue(inputValue) {
  let result = [];
  let inputCopy = inputValue;
  inputCopy = inputCopy.split("");

  inputCopy.map((char) => (!result.includes(char) ? result.push(char) : null));

  return result;
}
