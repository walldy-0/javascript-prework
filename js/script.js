function GetMoveName(randomNumber) {
    let result = 'nieznany ruch';

    if (randomNumber == 1) {
        result = 'kamień';
    }
    else if (randomNumber == 2) {
        result = 'papier';
    }
    else if (randomNumber == 3) {
        result = 'nożyce';
    }

    return result;
}

function displayResult(computerMove, playerMove) {
    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);

    if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
    }
    else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Ja wygrywam!');
    }
    else if (computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Ja wygrywam!');
    }
    else if (computerMove == playerMove) {
        printMessage('Remis!');
    }
    else {
        printMessage('Ktoś oszukuje...');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let compMove = GetMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

displayResult(compMove, GetMoveName(playerInput));
