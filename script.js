let userScore =0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
 const computer = () => {
     const options =["rock","paper","scissors"];
     const randomIdx =Math.floor(Math.random()*3);
     return options[randomIdx];
 };
const drawGame = () => {
    
    mssg.innerText ="the game was draw";
    mssg.style.backgroundColor ="blue";
};

const showWinner = (userWin,userchoice,game) => {
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        mssg.innerText =`you win. Your ${userchoice} beats  ${game}`;
        mssg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        mssg.innerText =`you loss. ${game} beats your ${userchoice}`;
        mssg.style.backgroundColor ="red";
    }
};
 const playgame = (userchoice) => {
    console.log("user choice  =", userchoice);
    // genrate coputer choice
const game = computer();
console.log("comp choice  =", game);
// draw game
if(userchoice===game){
    drawGame();
}
else{
    userWin = true;
    if(userchoice==="rock"){
       userWin= game ==="paper"?false:true;
    }else if(userchoice=="paper"){
        userWin = game==="scissors"?false : true;

    }else{
    userWin = game==="rock"? false : true;
}
showWinner(userWin, userchoice,game);
};

 };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")   /*it will get the id */
         playgame(userchoice);
     });
});