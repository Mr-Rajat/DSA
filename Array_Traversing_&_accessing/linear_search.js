let data = [30, 13, 45, 78, 2, 9, 5, 50];

// console.log(data)

let find = 13;
let pos = undefined;

for (let i = 0; i < data.length; i++) {
    if (data[i] == find) {
        pos = i;
        break;
    }
}

console.log(pos)

if(!pos){
    console.log("Element not found")
}
// console.log(data)