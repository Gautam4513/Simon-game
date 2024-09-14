let gameSequance=[];
let userSequance=[];

let started=false;
let level=0;
let highScore=0;

let h3 = document.querySelector("h3");

let start=document.querySelector(".start");

let btns = document.querySelectorAll(".btn");

start.addEventListener("click",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function gameOver(){
    let body=document.querySelectorAll("body");
    body[0].classList.add("gameOver");
    setTimeout(function(){
        body[0].classList.remove("gameOver");
    },100);
}
function levelUp(){
    userSequance=[];
    level++;
    h3.innerText=`Level ${level}`;

    let rendomInd = Math.floor(Math.random()*4);
    gameSequance.push(btns[rendomInd].getAttribute('id'));
    btnFlash(btns[`${rendomInd}`]);
}

function checkAns(idx){
    if(userSequance[idx] == gameSequance[idx]){
        if(userSequance.length==gameSequance.length){
            setTimeout(levelUp,1000);
        }
    } else{
        if(level>highScore){
            highScore=level;
        }
        h3.innerHTML=`Game Over!,<br> Your scoreis <b>${level}<b> <br> High Score is ${highScore} <br>`;
        h3.append(start);
        gameOver();
        started=false;
        gameSequance=[];
        level=0;
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userSequance.push(btn.getAttribute('id'));
    checkAns(userSequance.length-1);
}
for(btn of btns){
        btn.addEventListener("click", btnPress)
}

