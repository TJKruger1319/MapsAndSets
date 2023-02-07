const newSet = new Set([1 ,1, 2, 3, 3, 4]);
console.log(newSet);
//Set(4) {1,2,3,4}

console.log([...new Set("referee")].join(""));
//ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m);
//Map(2) {Array(3) => true, Array(3) => false}

const hasDuplicate = (arr) => {
const dupSet = new Set(arr);
return (dupSet.size === arr.length ? false : true);
}

const isVowel = (char) => ("aeiou".includes(char));

const vowelCount = (string) => {
    const vowelMap = new Map();
    for(let char of string) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
              } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}
