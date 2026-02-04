function permuteString(inputString, prefix = "", results = []) {
  if (inputString.length === 0) {
    results.push(prefix);
    return results;
  }

  const used = new Set(); // letras usadas en ESTE nivel

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    // si ya use esta letra en este nivel, la salteo
    if (used.has(char)) continue;
    used.add(char);

    const newPrefix = prefix + char;
    const newString =
      inputString.slice(0, i) + inputString.slice(i + 1);

    permuteString(newString, newPrefix, results);
  }

  return results;
}