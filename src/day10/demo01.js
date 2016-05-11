

var age = 1;
var o = {
    age: 2,
    getAge: function () {

        var fn = function () {
            return this.age
        }

        return fn();
    }
}
console.log(o.getAge());//  结果是1



var age = 1;
var o = {
    age: 2,
    getAge: function () {
        var fn = () => {
            return this.age
        }
        return fn()
    }
}

console.log(o.getAge())//结果是2