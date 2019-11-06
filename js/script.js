{function playGame (playerInput) {

  playerInput == 1;
  playerInput == 2;
  playerInput == 3;
 
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } else{
      return 'nieznany ruch';
    }
  }
  
 

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  /*let argComputerMove = computerMove;

  let argPlayerMove = playerMove;*/

  printMessage('Zagrałem ' + computerMove + ' a Ty ' + playerMove + '.');

  console.log('moves:', computerMove, playerMove)

  function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == argPlayerMove){
      printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
    } else {
      printMessage('Ups - wybierz swój ruch');
    }
  } 

  displayResult (computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
})
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
})
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
})
}