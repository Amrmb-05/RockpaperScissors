function computerPlay() {
    const playsArray = ['Rock', 'Paper','Scissors'];
    return playsArray[randomPlay()];
}

function randomPlay() {
    let play = Math.floor(Math.random() * 3)
    return play;
} 

let winCount = 0;
let loseCount = 0;


function playRound(computerSelection, playerSelection) {
    
   
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0),playerSelection.charAt(0).toUpperCase());
    if (computerSelection === playerSelection) {
        const Tie = 'Tie';
        document.getElementById('demo').textContent = "Tie"
    }
    else if (computerSelection === 'Rock' && playerSelection === 'Paper' || computerSelection == 'Paper' && playerSelection === 'Scissors' || computerSelection === 'Scissors' && playerSelection === 'Rock') {
        
        
        document.getElementById("demo").textContent = 'You won!' + " " + playerSelection + " " + 'beats ' + computerSelection ;;
        winCount++
        document.getElementById('player-score').textContent = `You: ${winCount}`
    }
    else {
        document.getElementById("demo").textContent ='Git Gud you lost nub.' + " " + computerSelection + " " + 'beats ' + playerSelection;
        loseCount++
        document.getElementById('comp-score').textContent = `Computer: ${loseCount}`
    }
        
    if (winCount === 5) {
        alert('You won NOICEEEEEE')
        winCount = 0
        loseCount = 0
        document.getElementById('player-score').textContent = `You: ${winCount}`
        document.getElementById('comp-score').textContent = `Computer: ${loseCount}`
    }
    else if (loseCount === 5) {
        alert("SADDDD you lose")
        winCount = 0
        loseCount = 0
        document.getElementById('player-score').textContent = `You: ${winCount}`
        document.getElementById('comp-score').textContent = `Computer: ${loseCount}`
    }
}


const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click',function(){ playRound(computerPlay(),'rock'); });

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click',function(){ playRound(computerPlay(),'paper'); });

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click',function(){ playRound(computerPlay(),'scissors'); });


