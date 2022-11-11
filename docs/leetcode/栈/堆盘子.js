/**
 * @param {number} cap
 */
 var StackOfPlates = function(cap) {
    this.arr = new Array()
    this.cap = cap
};

/** 
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
    if(!this.cap) return
    if(!this.arr.length) {
        this.arr.push([val])
    }else {
        const arrLen = this.arr.length-1
        if(this.arr[arrLen].length < this.cap) {
            this.arr[arrLen].push(val)
        } else {
            this.arr.push([val])
        }
    }
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
    if(this.arr.length) {
        const res = this.arr[this.arr.length-1].pop()
        if(!this.arr[this.arr.length-1].length) {
            this.arr.pop()
        }
        return res
    }else {
        return -1
    }
};

/** 
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
    if(index< 0 || !this.arr.length || index > this.arr.length-1) {
        return -1
    }
    const res = this.arr[index].pop()
    if(!this.arr[index].length) {
        this.arr.splice(index, 1)
    }
    return res
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */