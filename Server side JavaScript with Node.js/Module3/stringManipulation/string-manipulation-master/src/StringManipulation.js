//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  strInLower = str.toLowerCase()
  let count = 0

  for (let i = 0; i < strInLower.length; i++) {
    if (
      strInLower.charAt(i) === 'a' ||
      strInLower.charAt(i) === 'e' ||
      strInLower.charAt(i) === 'i' ||
      strInLower.charAt(i) === 'o' ||
      strInLower.charAt(i) === 'u'
    ) {
      count++
    }
  }
  return count

}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if (str.includes(checkStr)) {
    return true
  }
  return false

}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  //return str.replace(wordToBeReplaced, replaceWord);
  return str.replace(wordToBeReplaced, replaceWord)
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  return str.split(' ').map((word) => word.charAt(0).toUpperCase().concat(word.substr(1))).join(' ')

}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  return str.split(' ').reduce((acc, crr) => (crr.length > acc.length ? crr : acc))
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}