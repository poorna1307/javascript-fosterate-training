console.log("Program on Array :")
const numbers = [45, 4, 9, 16, 25]
for(let i=0;i<5;i++){
console.log(numbers[i])
}
numbers.sort(function(a, b){return a- b});
console.log("Array After Sort")
for(let i=0;i<5;i++){
    console.log(numbers[i])
}
console.log("Array After Reverse Operation")
numbers.reverse()
for(let i=0;i<5;i++){
    console.log(numbers[i])
 }
