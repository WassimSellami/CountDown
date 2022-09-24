var timetxt = document.getElementById("time") ; 
const sendButton = document.getElementById("start-btn") ; 
const title = document.getElementById("welcome") ; 
const codeInput = document.getElementById("code-input") ;
const input = document.getElementById("input") ;
const sendAgainButton = document.getElementById("send-again-btn")
const submitButton = document.getElementById("submit-btn")
const form = document.getElementById("form")

var initialTime 
var timeLeft
function init(){
     sendAgainButton.style.display= "none"
     form.style.display= "none"

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
sendButton.onclick = ()=>{
    startButtonClicked() ; 
}
sendAgainButton.onclick= ()=>{
    init() 
    startButtonClicked()
    
}

const startButtonClicked=  ()=>{  
    title.style.display = "none"; 
    sendButton.style.display = "none";
    input.style.display = "none";
    initialTime = codeInput.value
    timeLeft = initialTime

    startCounting() 
}
function countingDone(){
    title.style.display = "block";
    input.style.display = "flex";

    sendAgainButton.style.display= "block" 
}

init()