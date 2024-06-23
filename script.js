var clutter="";
var timer = 60;
var rn= 0;
var score=0;

function increaseScore(){
score+=10;
document.querySelector("#score").textContent=score;
}


function makeBubble(){
    clutter=``
    for (let i = 1; i <=144; i++) {
        var rn= Math.floor(Math.random()*10);
    
        clutter +=`<div id="bubble" class="w-[40px] h-[40px] bg-red-400 border rounded-[50px] flex justify-center items-center m-2 text-white hover:bg-red-600 cursor-pointer ">${rn}</div>`   
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#Timer").addEventListener("click",function runTimer() {
    setInterval(function(){

        if(timer>0){
        
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(runTimer);
            document.querySelector("#pbtm").innerHTML=`<H1><b>Game Over<b><H1>`;
        }
        
            },1000)
    
})



function giveHit(){
 
     rn=Math.floor(Math.random()*10);
    var hitval=document.querySelector("#Hit").textContent=rn;

console.log(hitval);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
var hitno=Number(dets.target.textContent);
console.log(hitno+rn);
if(rn===hitno){

increaseScore();
giveHit();
makeBubble();
}
})

makeBubble();
runTimer();
giveHit();

