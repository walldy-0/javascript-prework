{
    const moves = { rock: 1, paper: 2, scissors: 3 }
    const results = { computer: 'Komputer wygrywa!', player: 'Ty wygrywasz!', draw: 'Remis!' }

    function getMoveName(move) {
        let result;

        if (move == moves.rock) {
            result = 'kamień';
        }
        else if (move == moves.paper) {
            result = 'papier';
        }
        else {
            result = 'nożyce';
        }

        return result;
    }

    function getWinner(computerMove, playerMove) {
        let winner;

        if ((computerMove == moves.rock && playerMove == moves.paper)
            || (computerMove == moves.paper && playerMove == moves.scissors)
            || (computerMove == moves.scissors && playerMove == moves.rock)) {
            winner = results.player;
        }
        else if (computerMove == playerMove) {
            winner = results.draw;
        }
        else {
            winner = results.computer;
        }

        return winner;
    }

    function playRound(playerMove) {
        const computerMove = Math.floor(Math.random() * 3 + 1);
        clearMessages();
        printMessage('Twój ruch to: ' + getMoveName(playerMove));
        printMessage('Ruch komputera to: ' + getMoveName(computerMove));
        printMessage(getWinner(computerMove, playerMove));
    }

    document.getElementById('play-rock').addEventListener('click', function() {
        playRound(moves.rock);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        playRound(moves.paper);
    });
    document.getElementById('play-scissors').addEventListener('click', function() {
        playRound(moves.scissors);
    });
}