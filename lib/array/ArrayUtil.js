Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.permute = function(len) {
    var ret = [];
    for (var i = 0; i < this.length; i++) {
        var c = this[i];
        if (len > 1) {
            var sub = this.permute(len - 1);
            for (var j = 0; j < sub.length; j++) {
                ret.push(c + sub[j]);
            }
        } else return this;
    }
    return ret;
};