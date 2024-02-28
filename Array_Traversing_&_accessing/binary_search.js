// // Iterative approach // binary works on sorted data only

let data = [5, 9, 13, 17];

let find = 13;
let start = 0;
let end = data.length - 1;
let position = undefined;

while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    // console.log(mid)

    if (data[mid] == find) {
        position = mid;
        break;

    } else if (data[mid] < find) {
        start = mid + 1
    } else {
        end = mid - 1;
    }
}

console.log(position)
if (!position) {
    console.log("Element not found...")
}
