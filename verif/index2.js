var timetxt = document.getElementById("time") ; 
const sendButton = document.getElementById("send-btn") ; 
const title = document.getElementById("welcome") ; 
const codeInput = document.getElementById("code-input") ;
const input = document.getElementById("input") ;
const sendAgainButton = document.getElementById("send-again-btn")
const submitButton = document.getElementById("submit-btn")
const form = document.getElementById("form")
const code = 1234 
const timeout = 3 
var restartCounter  
var timeLeft
function init(){
     sendAgainButton.style.display= "none"
     form.style.display= "none"
     sendButton.style.display = "block"
     //renderTime(timeLeft) 
}

function startCounting(){
    if(timeLeft >=0 ){
        
        restartCounter = setTimeout(startCounting, 1000) ; 
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
    sendButtonClicked() ; 

}
sendAgainButton.onclick= ()=>{
   
    sendButtonClicked()
    
}
submitButton.onclick = () => {
    submitButtonClicked() 
}

function AcceptedVerification() { 
    clearTimeout(restartCounter)
    title.innerText = "Accepted" 
    sendAgainButton.style.display = "none";
    form.style.display = "none";

}

function failedVerification(){
    codeInput.value = ""
    window.alert("Wrong Code") 

}

const submitButtonClicked = () => {
    var codeFromForm = codeInput.value  
    if(code == codeFromForm ) {
        AcceptedVerification()
    }
    else {
        failedVerification()
    }
}

const sendButtonClicked=  ()=>{  
    window.alert(code) 
    clearTimeout(restartCounter)
    sendButton.style.display = "none";
    sendAgainButton.style.display = "block";
    form.style.display = "block";
    
    timeLeft = timeout 

    startCounting() 
}
function countingDone(){
    window.alert("Timeout is up")
    init()
    title.style.display = "block";
    input.style.display = "flex";
    sendAgainClicked.style.display= "block" 
}

init()