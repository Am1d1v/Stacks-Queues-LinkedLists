


class Stack {

    constructor(){
        // Maximum elements in the stack
        this.maxSize = 100;
        // Storage
        this.stack = [];
        // Initial index
        this.top = -1;
    }

    // Push item into the stack
    push(value){
        // Check that the stack is full
        if(this.isFull()) return false;

        this.top++;
        this.stack[this.top] = value;
        return true;
    }

    // Pop value from top
    pop(){
        // Check that the stack is empty
        if(this.isEmpty()) return null;

        this.top--;
        return this.stack.pop()
    }

    // Check that the stack is full
    isFull(){
        return this.top === this.maxSize - 1;
    }

    // Check that the stack is empty
    isEmpty() {
        return this.top === -1;
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
stack.push(3);
console.log(stack);

module.exports = Stack;