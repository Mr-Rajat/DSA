// let data = [40,30,12,25];
let data = [4, 30, 12, 5, 9];

for (let i = 0; i < data.length; i++) {

    for (let j = 0; j < data.length; j++) {

        if (data[j] > data[j + 1]) {
            let temp = data[j]
            data[j] = data[j + 1];
            data[j + 1] = temp
        }
    }
}

console.log(data)