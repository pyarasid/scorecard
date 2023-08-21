
//seclect the element id of home score
let homeScore=document.getElementById("home-score")
let count=0

//fuction to increment home score by 1
function incrementOne(){
    count=count+1
    homeScore.textContent=count
}

//function to increment home score by 2
function incrementTwo(){
    count=count+2
    homeScore.textContent=count
}

//function to increse home score by 3
function incrementThree(){
    count=count+3
    homeScore.textContent=count
}

//get the guest element id
let guestScore=document.getElementById("guest-score")
let countScore=0

//function to increase guest score by 1
function increment1Guest(){
    countScore=countScore+1
    guestScore.textContent=countScore
}

//function to increase guest score by 2
function increment2Guest(){
    countScore=countScore+2
    guestScore.textContent=countScore
}

//function to increase guest score by 3
function increment3Guest(){
    countScore=countScore+3
    guestScore.textContent=countScore
}

//when New Game button is clicked, all the scores are set to zero
function newGame(){
    count=0
    homeScore.textContent=count
    countScore=0
    guestScore.textContent=countScore
}