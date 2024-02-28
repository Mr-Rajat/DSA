// // Selection sort in ascending order
// // in this we exchange the element with smallest element. in increasing order.

let data = [20, 12, 53, 3, 99];

function selectionSort(items) {
    let minId;
    for (let i = 0; i < items.length; i++) {
        minId = i;
        for (let j = i + 1; j < items.length; j++) {
            if (items[j] < items[minId]) {
                /* 12 < 20 => mid= j 
                53 < 12 
                3 < 12 => mid = j [3]*/
                minId = j;
            }
        }
        let temp = items[minId];
        items[minId] = items[i]
        items[i] = temp

    }

}

selectionSort(data)

console.log(data)

// // Selection sort in descending order

let items = [20, 12, 53, 3, 99, 2];

// method 1
function descSelectionSort_M1(data) {
    let minId;
    for (let i = 0; i < data.length; i++) {
        minId = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] > data[minId]) {
                /* 12 < 20 => mid= j 
                53 < 12 
                3 < 12 => mid = j [3]*/
                minId = j;
            }
        }
        let temp = data[minId];
        data[minId] = data[i]
        data[i] = temp

    }

}

// method 2

function descSelectionSort_M2(data) {
    let minId;
    for (let i = data.length - 1; i >= 0; i--) {
        minId = i;
        for (let j = i - 1; j >= 0; j--) {
            if (data[j] < data[minId]) {
                /* 12 < 20 => mid= j 
                53 < 12 
                3 < 12 => mid = j [3]*/
                minId = j;
            }
        }
        let temp = data[minId];
        data[minId] = data[i]
        data[i] = temp

    }

}

descSelectionSort_M1(items);
// descSelectionSort_M2(items);

console.log(items)

