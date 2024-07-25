 // This will give the occurances count
 // Example : isWellFormed is having vowels counts as i=1 , e=2 , o=1
 // But it will give count as 4
   

function getVowelsCount(stringToCheck){
  const vowels = ['a','e','i','o','u'];
  let vowelsCount = 0;

  
  for (let i = 0; i < vowels.length; i++) { // or you can check directly as (0 to 4) (1 to 5)
    vowelsCount = vowelsCount + (stringToCheck.split(vowels[i]).length - 1);
    if(i == vowels.length - 1) return vowelsCount;
  }
}

console.log(getVowelsCount("isWellFormed")); // 4
console.log(getVowelsCount("specifications")); // 6
