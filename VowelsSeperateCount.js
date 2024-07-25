 // This will give the occurances count seperately as object
 // Example : isWellFormed is having vowels counts as i=1 , e=2 , o=1
 
function getVowelsCount(stringToCheck){
  const vowels = ['a','e','i','o','u'];
  let vowelsCount = {};

  for (let i = 0; i < vowels.length; i++) { // or you can check directly as (0 to 4) (1 to 5)
    vowelsCount[vowels[i]] = stringToCheck.split(vowels[i]).length - 1;
    if(i == vowels.length - 1) return vowelsCount;
  }
}

console.log(getVowelsCount("isWellFormed")); // { a: 0, e: 2, i: 1, o: 1, u: 0 }
console.log(getVowelsCount("specifications")); // { a: 1, e: 1, i: 3, o: 1, u: 0 }
