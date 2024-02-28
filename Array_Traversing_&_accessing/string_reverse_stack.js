// // ### Reverse String with stack in Js

let data = [];
let currentSize = data.length;

function push(newVal) {
    data[currentSize] = newVal;
    currentSize += 1;

}

function pop() {

    if (currentSize > 0) {
        let lastRemovedItem = data[currentSize-1];

        currentSize -= 1;
        data.length = currentSize;

        return lastRemovedItem;
    }
}

function reverseStr(item) {
    for (let val of item) {
        push(val)
    }
    // console.log("Pushed Data ", data)

    for (let i = 0; i < item.length; i++) {
        // console.log("Popped Data ",pop())
        item[i] = pop()
    }
}

// push(20)

let str = "rajat";
str = str.split("") // convert string to array
reverseStr(str)

console.log("Reversed String: ",str.join("")) // array to string

// console.log("Stack ", data)