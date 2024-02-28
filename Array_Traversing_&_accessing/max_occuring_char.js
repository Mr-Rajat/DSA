// // ## Maximum occuring character in string

let str = "peter";
let strObj = {}
let maxKey = "";

for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    let key = str[i]
    if (!strObj[key]) {
        strObj[key] = 0;
    }

    strObj[key]++;

    if (maxKey == '' || strObj[key] > strObj[maxKey]) {
        maxKey = key;
    }
}

console.log("Max Key: ", maxKey, " count: ", strObj[maxKey])
// console.log(strObj)