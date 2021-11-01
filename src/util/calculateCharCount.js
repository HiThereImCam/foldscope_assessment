import React from "react";

export default function calculateCharCount(inputValue) {
  let result = {};
  let inputCopy = inputValue;
  inputCopy = inputCopy.split("");

  inputCopy.map((char) =>
    result[char] === undefined
      ? (result[char] = 1)
      : (result[char] = result[char] + 1)
  );

  return result;
}
