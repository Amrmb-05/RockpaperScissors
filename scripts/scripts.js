function computerPlay() {
    const playsArray = ['Rock', 'Paper','Scissors'];
    return playsArray[randomPlay()];
}

function randomPlay() {
    let play = Math.floor(Math.random() * 3)
    return play;
} 

function playRound(computerSelection, playerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0),playerSelection.charAt(0).toUpperCase());
    if (computerSelection === playerSelection) {
        const Tie = 'Tie';
        return Tie;
    }
    else if (computerSelection === 'Rock' && playerSelection === 'Paper' || computerSelection == 'Paper' && playerSelection === 'Scissors' || computerSelection === 'Scissors' && playerSelection === 'Rock') {
        
        return 'You won!' + " " + playerSelection + " " + 'beats ' + computerSelection ;
        
    }
    else {
        
        return 'Git Gud you lost nub.' + " " + computerSelection + " " + 'beats ' + playerSelection;
    }

}
function game() {
    let i = 0;
    let winCount = 0;
    let loseCount = 0;
    let userPlay;
    while (i < 5) {
        userPlay = prompt('Choose your weapon','rock');
        let result = playRound(computerPlay(),userPlay);
        console.log(result);
        i++;
        if (result.includes("won")) {
            winCount++
        
        }
        else if (result.includes("lost")) {
            loseCount++
        }
        
    }
    if (winCount > loseCount) {
        return `You won ${winCount} to ${loseCount}`
    }
    else if (winCount < loseCount) {
        return `You lost ${loseCount} to ${winCount}`
    }
    else {
        return `You tied ${loseCount} to ${winCount}`
    }
}
