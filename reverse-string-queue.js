const Queue = require('./queue');

const reverseStringWithQueue = (str) => {

    const queue = new Queue();

    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--){
        queue.enqueue(str[i]);
    }

    while(!queue.isEmpty()){
        reversed += queue.dequeue();
    }

    return reversed;

};

module.exports = reverseStringWithQueue;
