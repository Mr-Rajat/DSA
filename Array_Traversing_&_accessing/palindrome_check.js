// // ### Check whether a string is palindrome or not => level = level


function palindrome(data) {
    let start = 0;
    let end = data.length - 1;
    let result = true;

    while (end > start) {
        if (data[start] !== data[end]) {
            result = false;
        }

        start++;
        end--;
    }

    return result;


}

let str = "levell"
let response = palindrome(str)
console.log("Result", response)