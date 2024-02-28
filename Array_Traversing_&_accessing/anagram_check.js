// // ### Check Whether two strings are anagram or not
function checkAnagram(str1, str2) {
    let objStr1 = {}
    if (str1.length !== str2.length) {
        return false
    }

    for (let char of str1) {
        // console.log(char)
        objStr1[char] = (objStr1[char] || 0) + 1;
    }

    for (let ch of str2) {
        // console.log(objStr1[ch])
        if (!objStr1[ch]) {
            return false;
        }

        objStr1[ch]--;
    }

    return true;

    // for (let key in objStr1) {
    //     if (objStr1[key] > 0) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

}

let result = checkAnagram("hello", "ehllo");

console.log(result, " Result")