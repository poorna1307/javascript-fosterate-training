//The break statement "jumps out" of a loop.
//The continue statement "jumps over" one iteration in the loop.
console.log("Program on break and continue statement")
bc_lis=[1,2,3,4,5]
for(let a=0;a<5;a++){
    if(bc_lis[a]==3){
        break
    }
    else{
    console.log(bc_lis[a])
    }
}
for(let a=0;a<5;a++){
    if(bc_lis[a]==3){
        continue
    }
    else{
    console.log(bc_lis[a])
    }
}