// function performAction() {
//   var object = document.querySelector('.object');
//   object.classList.add('vibration');
// }

// window.addEventListener('load', performAction);
// window.addEventListener('beforeunload', performAction);
/*import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";

const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const run = () => {
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    );
  }, 250);
};
document.getElementById("run").addEventListener("click", run);
run();*/

//-----------------------------------------------
// function performAction() {
//   var object = document.querySelector('.object');
//   object.classList.add('slide-in');
// }

// window.addEventListener('load', performAction);
// window.addEventListener('beforeunload', performAction);

// // add event listeners for each of the 3 buttons
// const buttons = document.querySelectorall(".button");
// const result = document.getElementById("result");

// buttons.forEach((button) => {
//   button.addEventListener("click", playRound);
// });

// function playRound(e) {
//   const playerChoice = e.target.id;
//   const computerChoice = getComputerChoice();


  


//   const winner = getWinner(playerChoice, computerChoice);
//   displayResult(playerChoice, computerChoice, winner);
// }

// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function getWinner(player, computer) {
//   if (player === computer) {
//     return "It's a tie!";
//   } else if (
//     (player === "rock" && computer === "scissors") ||
//     (player === "paper" && computer === "rock") ||
//     (player === "scissors" && computer === "paper")
//   ) {
//     return "You win!";
//   } else {
//     return "Computer wins!";
//   }
// }
//---------------------------------------------------------------------------------------

const buttons = document.querySelectorall(".button");

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
  
function playRound(e) {
  const playerChoice = e.target.id; //return the id of the clicked button (rock-btn , paper-btn, scissors-btn)
  const computerChoice = getComputerChoice(); // return the choice of the computer (rock, paper, scissors)
}



const btn1 = document.getElementById('rock-btn');
const btn2 = document.getElementById('paper-btn');
const btn3 = document.getElementById('scissors-btn');


btn1.addEventListener("click", playRound);


function displayRockPlayer(){
    const all_images = document.querySelector('.playerhand') //select all images
    
    
    all_images.map(image => {image.style.display = 'none';})
    
    document.querySelector('#playerRock').style.display = 'block';
    
    }
    

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}