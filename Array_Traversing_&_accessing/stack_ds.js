let data = []; // empty stack
let currentSize = data.length;
let max = 5;

function push(newVal) {
    if (currentSize >= max) {
        console.log("stack is full, you cannot add ", newVal)
    } else {
        data[currentSize] = newVal;
        currentSize += 1;
    }
}

function pop(){
    if(currentSize<=0){
        console.log("Stack is already empty cannot remove value")
    }else{
        currentSize-=1;
        data.length = currentSize;
    }
}

push(20);
push(30);
push(10);
push(2);
push(25);
push(23);
push(67);

console.log(data)
pop()
pop()
pop()


push(99)
console.log(data)