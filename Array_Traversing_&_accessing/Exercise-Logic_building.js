// // # Find Even values from array. Make Double of every element and Find Array length manually

/*
Even Values
Double of every element
Array lenght find
*/

let data = [10, 19, 6, 18, 45, 68, 90, 35, 100]

let evenArr = [];

// for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 == 0) {
//         evenArr.push(data[i])
//     }

// }

// console.log("Even Array ",evenArr)

// for(let i = 0 ; i< evenArr.length; i++){
//     evenArr[i] = evenArr[i]*2
// }

// let count = 0;
// for(let i= 0; i<evenArr.length; i++){
//     count++
// }

// console.log("Double values",evenArr, "Total Values: ", count)


// // # optimized solution for above solution

let count = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
        count++;
        evenArr.push(data[i] * 2);
    }

}

console.log("Double val even Array", evenArr, "Total Values: ", count)