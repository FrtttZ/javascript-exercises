const palindromes = function (String) {

    //Removes not letter and converts to array
    let arr = String.toLowerCase().split('').filter((char) => /[a-z0-9]/i.test(char) );
    let initialWord = arr.join('');
    let reversedWord = arr.reverse().join('');

    return initialWord == reversedWord;


};

// Do not edit below this line
module.exports = palindromes;
