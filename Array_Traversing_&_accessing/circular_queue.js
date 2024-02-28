class Queue {

    constructor(size) {
        this.max = size;
        this.items = new Array(size)
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(val) {
        if (this.currentSize !== this.max) {
            if (this.rear === this.max - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.items[this.rear] = val;
            this.currentSize++;

            if (this.front == -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.currentSize != 0) {
            this.items[this.front] = null;
            if (this.front == this.max - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front = -1;
            this.rear = -1;
            console.log("Queue is already empty")
        }
    }

}

let queue = new Queue(5);

queue.enqueue(10)
queue.enqueue(20)

queue.dequeue()

queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

// adding when 1st position is null and other are full

queue.enqueue(100)

queue.dequeue()
queue.enqueue(200)

console.log(queue)