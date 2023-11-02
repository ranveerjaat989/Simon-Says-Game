let gameColor=[];
let userColor=['joi'];
let buttons=["pink","yellow","skay","blue"];
let  start=false;
let level=0;
let h2=document.querySelector('h2');
let Schore=0;
document.addEventListener('keypress', function(){
    if(start==false){
        start=true;
        console.log("Start");
        setTimeout(levelUp,1000);
    }
});
function gameFlesh(btn){
    btn.classList.add("flesh");
    setTimeout(function(){
        btn.classList.remove("flesh");
    },250);
}
 function userFlesh(btn){ 
    btn.classList.add("user-flesh");
    setTimeout(function(){
        btn.classList.remove("user-flesh");
    },250);
}
function levelUp(){
    userColor=[];
    level++;  
    h2.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*4);
    let randomColor=buttons[random];
    gameColor.push(randomColor);
     let btn=document.querySelector(`.${randomColor}`);
     gameFlesh(btn);
    
}
function checkAns(inx){
    if(userColor[inx]===gameColor[inx])
    {
        if(userColor.length==gameColor.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level} Press any key to start.`;      
        if(level>Schore)
        {
            Schore=level;
            h2.innerHTML=`Game Over! Your score was <b>${level} </b><br>High Schore<br>Press any key to start.`;      
        }
        let body=document.querySelector('body');
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },20);
        reset();
       
    }
}
function btnPress(){
    
    let btn=this;
    userFlesh(btn);
    let userAddColor=btn.getAttribute('id');
    userColor.push(userAddColor);
    checkAns(userColor.length-1);
}
let allBtns=document.querySelectorAll('.contain-btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    gameColor=[];
    userColor=[];
    level=0; 
}