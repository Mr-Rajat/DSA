// // Recurssive approach // binary works on sorted data only

let data = [10, 15, 18, 34, 67];
let start = 0;
let end = data.length - 1;
let find = 34;
let position = undefined;

function binarySearch(data, start, end) {
    let mid = Math.floor((start + end) / 2);

    if (data[mid] === find) {
        position = mid;
        return true;
    }
    else if (data[mid] < find) {
        binarySearch(data, mid + 1, end)
    }
    else {
        binarySearch(data, start, mid - 1)
    }

}

binarySearch(data, start, end);

console.log("Position", position)
if(!position){
    console.log("Element not found")
}

