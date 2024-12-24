let aiseq = [];
let userseq = [];

let start = false;
let level = 0;
let h3 = document.querySelector('h3');

let btn = ['green','blue','red','yellow'];
let highscore = localStorage.getItem('highscore') || 0;

let mobile = document.querySelector(".mob-start");
mobile.addEventListener('click',function(){
    start = true;
    levelup();
})

document.addEventListener('keypress',function (){
    if(start == false){
        console.log("Game is started.");
        start = true;
        levelup();
    }
    
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}

function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Level is ${level} and High Score is :${highscore}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    aiseq.push(randColor);
    console.log(aiseq)
    btnflash(randBtn);
}
function checkAns(idx){
    
    if(userseq[idx] == aiseq[idx]){
        if(userseq.length == aiseq.length){
            if (level > highscore) {
                highscore = level;
                localStorage.setItem('highscore', highscore); // Save to localStorage
            }
            setTimeout(levelup,1000)
        }
        
    }else{
        h3.innerHTML = `Game Over Start Again.Your Score is:<b>${level}</b> <br>Press any key to start`;
        reset();
    }

}

function btnpress(){
        let btn = this;
        btnflash(btn);
        UserColor = btn.getAttribute('id');
        userseq.push(UserColor);
        checkAns(userseq.length-1);   
}

let allBtn = document.querySelectorAll('.btn')
for(let btn of allBtn){
    btn.addEventListener('click',btnpress);
}

function reset(){
    start = false;
    aiseq = [];
    userseq = [];
    level = 0;              
}
