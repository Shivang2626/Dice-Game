alert("Instructions - 1. The game has 2 players, playing in round , in each turn players roles a dice as many times as he wishes. Each result get added to his Round score , But If a player rools a 1, all his Round score is lost, After that there is next player's turn , The PLayer can choose to 'HOLD' ,which means his round score gets added to his global score. After that its a next player's turn. The Player who reaches 100 global score will be the winner. ");
var diceNo,diceDom,activeplayer,current,rollscore,total1,total2,winner,game; 

init();

function init()
{
    activeplayer=1;
    rollscore=0;
    total1=0;
    total2=0;
    game=true;

}




document.getElementById("reload1").addEventListener("click",hello);

function hello()
{ 
    
    if(game)
    {
    diceNo=Math.floor(Math.random()*6)+1;


    diceDom=document.querySelector(".dice");
    document.querySelector(".dice").style.display="block";
    diceDom.src="dice-"+diceNo+".png";

    if(diceNo!==1)
    {
        rollscore+=diceNo;
    document.querySelector(".current_score"+activeplayer).textContent=rollscore;    
}

      else
      {
          rollscore=0;
        document.querySelector(".current_score"+activeplayer).textContent=rollscore;
        document.querySelector(".check1").classList.toggle("active");
        document.querySelector(".check2").classList.toggle("active");
        document.querySelector(".arrow"+activeplayer).style.display="none";
        activeplayer===1? activeplayer=2:activeplayer=1;
        document.querySelector(".arrow"+activeplayer).style.display="block";
          alert("Turn Change");
      }
}
}
document.getElementById("hold1").addEventListener("click",fish);

function fish()
{
    document.querySelector(".dice").style.display="none";
    
    if(game)
{
    if(activeplayer===1){
    total1+=rollscore;
    document.querySelector("#total_"+activeplayer).innerHTML=total1;
    

    }
    else{
        total2+=rollscore;
        document.querySelector("#total_"+activeplayer).innerHTML=total2;

    }
    winner();
    if(game)
    {
    rollscore=0;
    document.querySelector(".current_score"+activeplayer).textContent=rollscore;
    document.querySelector(".check1").classList.toggle("active");
    document.querySelector(".check2").classList.toggle("active");
    document.querySelector(".arrow"+activeplayer).style.display="none";
    activeplayer===1? activeplayer=2:activeplayer=1;
    document.querySelector(".arrow"+activeplayer).style.display="block";
    alert("Turn Change");
    }

}}

function winner()
{
    
    if(total1 >= 100 || total2 >=100)
    {
        document.querySelector("#winner").classList.add("win"+activeplayer);
       document.getElementById("winner").style.display="block";
       game=false;

    }
}

document.querySelector(".button1").addEventListener("click",newgame);

function newgame()
{
   document.querySelector(".arrow"+activeplayer).style.display="none";
   init();
   document.querySelector(".arrow"+activeplayer).style.display="block";
   document.querySelector(".dice").style.display="none";
   document.querySelector("#total_1").textContent=0;
   document.querySelector("#total_2").textContent=0;
   document.querySelector(".current_score1").textContent=0;
   document.querySelector(".current_score2").textContent=0;
   document.querySelector(".check1").classList.add("active");
   document.querySelector(".check2").classList.remove("active");
   document.getElementById("winner").style.display="none";

}
