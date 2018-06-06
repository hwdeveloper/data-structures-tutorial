function Queue() {
    this.dataStore = [];
    this.enqueue = function (element) {
        this.dataStore.push(element);
    };
    this.dequeue = function () {
        return this.dataStore.shift();
    };
    this.front = function () {
        return this.dataStore[0];
    };
    this.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };
    this.toString = function () {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };
    this.empty = function () {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    this.clear = function () {
        delete  this.dataStore;
        this.dataStore = [];
    }
}