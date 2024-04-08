///Task 1
function sumOfNum(number) {
    if (number < 10) {
        return number;
    } else {
        return (number % 10) + sumOfNum(Math.round(number / 10));
    }
}

const number = 12345;
const sum = sumOfNum(number);
console.log(sum)


////Task 2
function countDigits(number) {
    const numberStr = number.toString();
    if (numberStr === '') {
        return 0;
    }
    return 1 + countDigits(numberStr.slice(1));
}
const num = 12345;
const count = countDigits(number);
console.log(count);

///Task 3
function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.split(' ').join('');
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

const str1 = "noon";
console.log(`Строка "${str1}" ${isPalindrome(str1) ? "является" : "не является"} палиндромом.`);

const str2 = "IT-programmer";
console.log(`Строка "${str2}" ${isPalindrome(str2) ? "является" : "не является"} палиндромом.`);

