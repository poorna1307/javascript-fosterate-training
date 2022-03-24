function agefucn(){
    const msg = document.getElementById("p01");
    msg.innerHTML = "";
    let x=document.getElementById("age_Box").value
    try{
    if(x==""){
    throw "empty";
    }
    if(x<18){
    throw "Your age is lessthan 18"
    }
    if(x>25){
    throw "Your age is greaterthan 25"
    }
    }
    catch(err){
        msg.innerHTML=""+err
    }

}