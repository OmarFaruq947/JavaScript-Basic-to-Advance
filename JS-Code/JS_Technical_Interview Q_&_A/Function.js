//object literal
const obj={
    name:'omar',
    email:'omar@gmail.com',
    id:2
}
console.log(obj);



// function constructor
function person (name, age=22){
    this.name=name,
    this.age=age
}
var object = new person("omarfaruq", 55)



//singleton constructor
var _object = new (function () {
    this.name = "Sudheer";
  })();

