var name=prompt ("Welcome! Can you tell me your name?");
var answer=Math.floor(Math.random()*10);
var userChoice=prompt("Hi" +name+ "What is your GUESS?");

if(userChoice==answer){
    alert("You are coreect!"+userChoice);
}
else{
    alert("You are wrong! The answer is " +answer)
}

