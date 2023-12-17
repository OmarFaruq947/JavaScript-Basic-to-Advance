function myFunc(c,d) {
    console.log(this);
console.log(this.a + this.b + c +d);
}


myFunc.call({a:25, b:25}, 25, 25)
myFunc.apply({a:20, b:20}, [20,20, 20])
var omar = myFunc.bind({a:30, b:30})
omar(5,5)