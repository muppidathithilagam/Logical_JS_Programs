 // This will check only the existance , not the occurances count
 // Example : isWellFormed is having vowels counts as i=1 , e=2 , o=1
 // But it will give only the unique count as 3 
   

function getVowelsCount(stringToCheck){
  const vowels = ['a','e','i','o','u'];
  let vowelsCount = 0;

  
  for (let i = 0; i < vowels.length; i++) { // or you can check directly as (0 to 4) (1 to 5)
    if(stringToCheck.includes(vowels[i])) vowelsCount++;
    if(i == vowels.length - 1) return vowelsCount;
  }
}

console.log(getVowelsCount("isWellFormed")); // 3
console.log(getVowelsCount("specifications")); // 4
