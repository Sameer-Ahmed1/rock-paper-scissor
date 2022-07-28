function getComputerChoice (choices)
{
    return choices[Math.floor(Math.random()*choices.length)]
}
//console.log(getComputerChoice(['Rock', 'Paper', 'Scissors']));
function playRound(playerSelection, computerSelection=getComputerChoice(['ROCK', 'PAPER', 'SCISSORS']))
{
    if(playerSelection!=null)
    playerSelection=playerSelection.toUpperCase();
    if(playerSelection===computerSelection)
        return `It's a tie!`;
    else if((playerSelection==='ROCK'&&computerSelection==='SCISSORS')||(playerSelection==='PAPER'&&computerSelection==='ROCK')||(playerSelection==='SCISSOR'&&computerSelection=='PAPER'))
        return `You won ${playerSelection} beats ${computerSelection}`;
    else 
        return `You lose ${computerSelection} beats ${playerSelection}`;
}

for(let i=0; i<5; i++)
{
    let playerSelection=prompt("Your choice: ");
    console.log(playRound(playerSelection));
}