function permuteString(inputString,prefix = "",results = []){
  if(inputString.length === 0){
    if(!results.includes(prefix)){
      results.push(prefix);
    }
    return results;
  }
  for(let i = 0; i < inputString.length; i++){
    const newPrefix = prefix + inputString[i];
    const newString = inputString.slice(0,i) + inputString.slice(i+1);
    permuteString(newString,newPrefix,results);
  }
  return results;
}