// Game contains & variable

let direction= {x:0, y:0};
 
const foodSound=new Audio('food.wav');
const gameOverSound=new Audio('gameover.wav'); 
const moveSound=new Audio('move.wav'); 
const musicSound=new Audio('backgroundmusic.wav');

let speed=2;
let lastPaintTime=0;
let snakeArr =[
    {x: 13, y: 15}
]
// Game function
function main (ctime) {
      window.requestAnimationFrame(main);
      console.log(ctime);
      if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
      }
      lastPaintTime =ctime;
      gameEngine();
}

function gameEngine(){
    //part 1:updating the snake array & Food
     
    //part 2:Display the snake and Food
    
    board.innerHTML="";
    snakeArr.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart= e.y;
    snakeElement.style.gridColumnStart=e.x;
    snakeElement.classList.add('food');
    board.appendChild(snakeElement);

})

}


main();














// main logic starts here