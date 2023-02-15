function createCounter (initialCounter) {
    return {
        counter: initialCounter,
        get: function() {
            return this.counter;
        },
        increment: function() {
            this.counter++;
        },
        decrement: function() {
            this.counter--;
        },
        reset: function() {
            this.counter = initialCounter;
        }
    };
}