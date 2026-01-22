function adjustCase(replacedWord, replacingWord) {
  if (/^[A-Z]/.test(replacedWord)) {
    return replacingWord[0].toUpperCase() + replacingWord.slice(1);
  } else {
    return replacingWord[0].toLowerCase() + replacingWord.slice(1);
  }
}

const createRegex = word => new RegExp(`\\b${word}\\b`, "i");

function containsWord(text, word) {
  const regex = createRegex(word);
  return regex.test(text);
}

function myReplace(text, replacedWord, replacingWord) {
  if (containsWord(text, replacedWord)) {
    const regex = createRegex(replacedWord);
    const newWord = adjustCase(replacedWord, replacingWord);
    return text.replace(regex, newWord);
  }

  return text;
}