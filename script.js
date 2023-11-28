//a.Print odd numbers in an array
// 1,anonymous function:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("print odd numbers in array:");

function ODD(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
}
ODD(array);

// 2,IIFE function:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("print odd numbers in array:");

(function() {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
})();

// 3,arrow functions:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Print odd numbers in the array:");

const arr1 = (arr) => {
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
arr1(arr);

// b.Convert all the strings to title caps in a string array

// 1,anonymous function:
   var str="my name is surya";
function string(str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
} console.log(string(str))


// 2,IIFE function:

var str = "my name is surya";

var string = (function (inputStr) {
   inputStr = inputStr.toLowerCase().split(' ');
   for (var i = 0; i < inputStr.length; i++) {
     inputStr[i] = inputStr[i].charAt(0).toUpperCase() + inputStr[i].slice(1); 
   } 
   return inputStr.join(' ');
})(str);

console.log(string);


// 3,arrow functions:


var str = "my name is surya";

const string = (str) => {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
};

console.log(string(str));

// c.Sum of all numbers in an array
 
// 1,anonymous function:


var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
function arr(a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}console.log(arr(a));

// 2,IIFE function:

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;

var result = (function(arr) {
   for (let i = 0; i < arr.length; i++) {
     sum = sum + arr[i];
   }
   return sum;
})(a);

console.log(result);

// 3,arrow functions:


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = ((arr) => arr.reduce((a,b) => a+b, 0))(a);

console.log(result);


// d.Return all the prime numbers in an array

// 1,Anonymous Function:
   
let n = 34;
function sum(n) {
   for (let i = 2; i <= n; i++) {
      let num = 0;
      for (let j = 2; j < i; j++) {
         if (i % j == 0) {
            num = 1;
            break;
         }
      }
      if (num == 0) {
         console.log(i);
      }
   }
}sum(n);

// 2,IIFE function:

let n = 34;
(function (n) {
   for (let i = 2; i <= n; i++) {
      let num = 0;
      for (let j = 2; j < i; j++) {
         if (i % j == 0) {
            num = 1;
            break;
         }
      }
      if (num == 0) {
         console.log(i);
      }
   }
})(n);

// 3,arrow functions:

let n = 34;
(() => {
   for (let i = 2; i <= n; i++) {
      let num = 0;
      for (let j = 2; j < i; j++) {
         if (i % j == 0) {
            num = 1;
            break;
         }
      }
      if (num == 0) {
         console.log(i);
      }
   }
})();


// e.Return all the palindromes in an array

// 1,Anonymous Function : 

const wordsArray = ["radar", "level", "hello", "world", "deified", "racecar", "madam", "noon", "civic", "stats"];

const palindromes = wordsArray.filter(word => {
    const reversedWord = word.split(',').reverse().join(' ');
    return word === reversedWord;
});

console.log(palindromes); 


// 2,IIFE function:

const Array = ["radar", "level", "hello", "world", "deified", "racecar", "madam", "noon", "civic", "stats"];

const palindromes = (function(arr) {
    return arr.filter(word => {
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });
})(Array);

console.log(palindromes); 

// 3,arrow functions:

const wordsArray = ["radar", "level", "hello", "world", "deified", "racecar", "madam", "noon", "civic", "stats"];

const palindromes = wordsArray.filter(word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
});

console.log(palindromes);

// f.Return median of two sorted arrays of the same size.

// 1,Anonymous functions:

const findMedian = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = mergedArray.sort((a, b) => a - b);
    
    const middleIndex = Math.floor(sortedArray.length / 2);
    
    if (sortedArray.length % 2 === 0) {
        
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
        
        return sortedArray[middleIndex];
    }
};

const median = ((arr1, arr2) => {
    return findMedian(arr1, arr2);
})([1, 3, 8, 9], [2, 4, 7, 10]);

console.log(median); 


// 2,IIFE function:

const arr1 = [1, 3, 8, 9];
const arr2 = [2, 4, 7, 10];

const median = (() => {
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = mergedArray.sort((a, b) => a - b);
    
    const middleIndex = Math.floor(sortedArray.length / 2);
    
    if (sortedArray.length % 2 === 0) {
        
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
       
        return sortedArray[middleIndex];
    }
})();

console.log(median); 


// g.Remove duplicates from an array

// 1,anonymousfunction:


const removeDuplicates = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); 


// 2,IIFE function:


const inputArray = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = (() => {
    return inputArray.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
})();

console.log(uniqueArray); 

// h.Rotate an array by k times
// 1,anonymousfunction:

const rotateArray = (arr, k) => {
    const length = arr.length;
    const rotatedArray = arr.slice(k % length).concat(arr.slice(0, k % length));
    return rotatedArray;
};

const inputArray = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(inputArray, k);
console.log(rotatedArray); 


// 2,IIFE function:

const inputArray = [1, 2, 3, 4, 5];
const k = 2;

const rotatedArray = (() => {
    const length = inputArray.length;
    return inputArray.slice(k % length).concat(inputArray.slice(0, k % length));
})();

console.log(rotatedArray); 



