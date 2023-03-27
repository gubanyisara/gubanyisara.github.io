//A kő-papír-olló játék javascript kódja:
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
  
    // A playGame funkció meghívása
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
          
        // Ahhonnét a játék kezdődik
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                // Nyertes vizsgálás
                winner(this.innerText,computerChoice)
            })
        })
    }
  
    // Az nyertest eldöntő funkció
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        const tieScoreBoard = document.querySelector('.t-count');
        const reloadBtn = document.querySelector('.reload');
        
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        console.log("PLayer:" + player + " Computer:" + computer);
        if(player === computer){
            result.textContent = 'Döntetlen'
            tieScore++;
            tieScoreBoard.textContent = tieScore;
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'A számítógép nyert';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'A játékos nyert'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'A számítógép nyert';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'A játékos nyert';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'A számítógép nyert';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'A játékos nyert';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        reloadBtn.innerText = 'Újra!';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    // A playGame funkció meghívása a játékon belül
    playGame();
}
// A game funkció meghívása
game();
