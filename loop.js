//for - loops through a block of code a number of times
//for/in - loops through the properties of an object
//for/of - loops through the values of an iterable object
//while - loops through a block of code while a specified condition is true
//do/while - also loops through a block of code while a specified condition is true
console.log("Program on Loops in js")
console.log("For loop:")
for(let a=1;a<5;a++){
console.log(a)
}
loop_lis=[1,2,3,4,5]
for(let a in loop_lis){
    console.log(loop_lis[a])
}
for(let a of loop_lis){
    console.log(a)
}
let while_i=0
while(while_i<5){
    console.log(loop_lis[while_i])
    while_i++
}
let while_i1=0
do{
    console.log(loop_lis[while_i1])
}while(while_i1<5);