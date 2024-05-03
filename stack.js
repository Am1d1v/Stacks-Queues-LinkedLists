


class Stack {

    constructor(){
        // Maximum elements in the stack
        this.maxSize = 100;
        // Storage
        this.stack = [];
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



}

module.exports = Stack;