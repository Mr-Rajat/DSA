let queue = [];
let currentSize = queue.length;
let maxSize = 5

function enqueue(newVal) {
    if (currentSize >= maxSize) {
        console.log("Queue is Full")
    } else {
        queue[currentSize] = newVal;
        currentSize++;
    }

}

function dequeue() {
    if (currentSize > 0) {

        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1]
        }

        currentSize--;
        queue.length = currentSize

    } else {
        console.log("Queue is already empty...")
    }
}

function front(){
    // if(currentSize>0){
    if(!isEmpty()){  // using is common function to not repeat code
        console.log(queue[0])
    }else {
        console.log("Queue is empty...")
    }
}

function rear(){
    if(currentSize>0){
        console.log(queue[currentSize-1])
    }else {
        console.log("Queue is empty...")
    }
}

function isEmpty(){
    if(currentSize>0){
        return false;
    }else{
        return true;
    }
}

function display() {
    console.log(queue)
}

enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)

dequeue()

// // inbuilt operations for adding and removing values from front

// queue.unshift(10) // adds values in the start of array
// queue.unshift(20) // adds values in the start of array
// queue.shift() // removes value from the start of array

front()
rear()

display()