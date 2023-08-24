//mouse click
var allButton = document.querySelectorAll(".drum").length;

for(var i=0; i<allButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  keyClick(buttonInnerHTML);
}

//keyboard click
document.addEventListener("keypress",function(event){
  keyClick(event.key);
});
//all key 
function keyClick(key){
  switch(key){
    case "h":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
    break;
 
    case "e":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
    break;
 
    case "l":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
    break;
 
    case "o":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
    break;
 
    case "g":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
    break;
 
    case "y":
       var tom4 = new Audio("sounds/crash.mp3");
       tom4.play();
    break;
 
    case "s":
       var tom4 = new Audio("sounds/kick-bass.mp3");
       tom4.play();
    break;
    
    default: 
    console.log(buttonInnerHTML);
   }
}

