class Stack {
    item = [];
    currentSize;
    maxSize;
    constructor(size) {
        // console.log("class called")
        this.maxSize = size;
        this.currentSize = this.item.length;
    }

    push(newVal) {
        if (this.currentSize >= this.maxSize) {
            console.error("Stack is full")
        }else{
            this.item[this.currentSize] = newVal;
            this.currentSize++;
        }
    }
    pop() {
        if(this.currentSize <= 0){
            console.error("Stack is already empty...")
        }else{
            this.currentSize--;
            this.item.length = this.currentSize
        }
    }

    display() {
        console.log(this.item)
    }
}

st1 = new Stack(5);
st1.push(20)
st1.push(30)
st1.push(40)
st1.pop()

st1.display()

// // Task: reverse string using class