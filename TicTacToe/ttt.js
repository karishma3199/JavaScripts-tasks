 let symbol = 'X';
 let whosTurn = document.getElementById("playerName");
 
 //print symbol 
function printx(num){
  let c_box = document.getElementById("g"+num);
  console.log(c_box);
  if( c_box.innerText== "")
  {
     c_box.innerText= symbol;
     winner();
     swapTurns();
     whosTurn.innerHTML=symbol+"'s turn !";
     
  }
}
//swap turns of players
function swapTurns()
{
     if(symbol == 'X'){
          symbol='O';
     }else
     {
          symbol='X';
     }
}
//move
function getBox(num){
     return document.getElementById("g"+num).innerText;

}
//
function checkMove(a,b,c,sign){
     if(getBox(a)==sign && getBox(b)==sign && getBox(c)==sign )
     return true;
     else return false;
}
//winner checking
function winner(){
      if(checkMove(1,2,3,symbol)||checkMove(4,5,6,symbol)||checkMove(1,4,7,symbol)
      ||checkMove(1,4,7,symbol)||checkMove(2,5,8,symbol)||checkMove(3,6,9,symbol)
      ||checkMove(1,5,9,symbol)||checkMove(3,5,7,symbol))
      {
          whosTurn.innerHTML=symbol + " is Winner !";
          restart();
          throw("game end");
     }
     else if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && getBox(4)!="" &&
     getBox(5)!="" && getBox(6)!="" && getBox(7)!="" && getBox(8)!="" && getBox(9)!="")
     {
          whosTurn.innerHTML=" Its a Tie !";
          restart();
          throw("Its a Tie ");

           
     }
}
//restart
function restart()
{
     for(let i=1 ; i<=9 ;i++)
     {
          document.getElementById("g"+i).innerText=" ";
     }
}