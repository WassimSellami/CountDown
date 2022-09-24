var timetxt = document.getElementById("time") ; 
const startButton = document.getElementById("start-btn") ; 
const title = document.getElementById("welcome") ; 
const timeInput = document.getElementById("timeInput") ;
const input = document.getElementById("input") ;
const countAgain = document.getElementById("countAgain")

var initialTime
var timeLeft
function init(){
     countAgain.style.display= "none"
     //renderTime(timeLeft) 
}

function startCounting(){
    if(timeLeft >=0 ){
        
        setTimeout(startCounting, 1000) ; 
        renderTime(timeLeft)
        timeLeft -- 
    }
    else {
        countingDone() 
    }
}


 function  renderTime (x){
    timetxt.innerText = x ; 
 }
// startButton.addEventListener("keyup", ()=>{

// })
startButton.onclick = ()=>{
    startButtonClicked() ; 
}
countAgain.onclick= ()=>{
    init() 
    startButtonClicked()
    
}

const startButtonClicked=  ()=>{  
    title.style.display = "none"; 
    startButton.style.display = "none";
    input.style.display = "none";
    initialTime = timeInput.value
    timeLeft = initialTime

    startCounting() 
}
function countingDone(){
    title.style.display = "block";
    input.style.display = "flex";

    countAgain.style.display= "block" 
}

init()