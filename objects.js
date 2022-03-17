console.log("Program on Objects in JavaScripts:")
//Creating object using object literal
let person={
    first_name:"Poorna Chander",
    last_name:"Thumu",
    age:20
};
//accessing javascript object
for(let x in person){
    console.log(person[x])
}
//deleting a item from object in javascript using delete
delete person.age
console.log("After Deleting age item:")
for(let x in person){
    console.log(person[x])
}

console.log("Creating object in object:")

myobj={
    name:"Poorna",
    age:18,
    cars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
};


console.log("Accssing obj present inside a obj")

console.log(myobj.cars.car1)
console.log(myobj.cars.car2)

console.log("Object constructor")
