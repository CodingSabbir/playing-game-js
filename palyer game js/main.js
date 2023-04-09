const player1Score=document.getElementById('player1Score');
const player2Score=document.getElementById('player2Score');
const scorePlay=document.querySelector('p span');

const inputScore=document.getElementById('inputScore');
const p1btn=document.getElementById('p1btn');
const p2btn=document.getElementById('p2btn');
const resetBtn=document.getElementById('resetBtn')

let p1Score=0;
let p2Score=0;
const winingScore=5;
let gameOver=false;

 p1btn.addEventListener('click',()=>{
    if(!gameOver){
        p1Score++
        player1Score.textContent=p1Score;
        if(p1Score===winingScore){
            gameOver=true;
            // p1btn.setAttribute('disabled','disabled');
            // p2btn.setAttribute('disabled','disabled');
        }
    }
   
  
 });
 p2btn.addEventListener('click',()=>{
    if(!gameOver){
        p2Score++
    player2Score.textContent=p2Score;   
    if(p2Score===winingScore){
        gameOver=true;
        // p1btn.setAttribute('disabled','disabled');
        // p2btn.setAttribute('disabled','disabled');
    } 
    }
   
 });
