let arr = [1, 2, 3, 4, 5, 6, 7]
// // #Using inbuilt reverse()
// console.log("orignal", arr)
// arr.reverse()
// console.log("reverse ", arr)

// // ## Using Recurssion

let temp;

function customReverse(data, start, end) {
    // console.log(data)

    if (start <= end) {

        temp = data[start];
        data[start] = data[end]
        data[end] = temp;

        customReverse(data, start + 1, end - 1)

    }

}

customReverse(arr, 0, arr.length - 1)  // array, starting index, last index
console.log("Reversed Array: ",arr)

// // ### Using for loop

// for(let i = 0; i<arr.length; i++){
//     let start = i;
//     let end = arr.length-1 - i;
//     if(start > end){
//         break;
//     }

//     temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp;

// }

// console.log(arr, " Reversed Array")