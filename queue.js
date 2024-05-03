


class Queue {
    constructor(){
        // The storage
        this.queue = [];
        // Max elements in the queue
        this.maxSize = 100;
        this.head = 0;
        this.tail = 0;
    }

    // Set item at the end of queue
    enqueue(item){
        // Check that the queue is full
        if(this.isFull()) return false;

        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }

    // Remove item from the queue
    dequeue(){
        const item = this.queue[this.head];
        this.head++
        return item;
    }

    // Get the value of the first element in the queue
    peek(){
        return this.queue[this.head];
    }

    // Get length of the queue
    getLength(){
        return this.tail - this.head;
    }

    // Check that the queue is empty
    isEmpty(){
        return this.getLength() === 0;
    }

    // Check that the queue is full
    isFull(){
        return  this.getLength() === this.maxSize;
    }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue);


module.exports = Queue;
