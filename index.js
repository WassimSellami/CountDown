var timetxt = document.getElementById("time") ; 
const startButton = document.getElementById("start-btn") ; 
const title = document.getElementById("welcome") ; 
const countAgain = document.getElementById("countAgain")
const initialTime = 2 
var timeLeft
function init(){
     timeLeft= initialTime ; 
     countAgain.style.display= "none"
     renderTime(timeLeft) 
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

const startAgainButtonClicked=  ()=>{ 
    
    console.log(timetxt) 
    title.style.display = "none"; 
   countAgain.style.display = "none";
    startCounting() 

}

const startButtonClicked=  ()=>{ 
    console.log(timetxt) 
    title.style.display = "none"; 
    startButton.style.display = "none";
    startCounting() 
 
    
}
function countingDone(){
    title.style.display = "block";
    countAgain.style.display= "block" 
}

init()