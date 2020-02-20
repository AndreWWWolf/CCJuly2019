function Counter(tick) {
    this.count = 0;
    this.tick = tick;
};

Counter.prototype.inc = function() {
    this.count += this.tick;
    return this;
}
Counter.prototype.dec = function() {
    this.count -= this.tick;
    return this;
}
Counter.prototype.now = function() {
    return this.count;
}
Counter.prototype.setTick = function(tick) {
    this.tick = tick;
    return this;
}
console.log(Counter.prototype);


