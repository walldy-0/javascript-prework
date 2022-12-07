{
    const Moves = { Rock: 1, Paper: 2, Scissors: 3 }
    const Results = { Computer: 'Komputer wygrywa!', Player: 'Ty wygrywasz!', Draw: 'Remis!' }

    function GetMoveName(move) {
        let result;

        if (move == Moves.Rock) {
            result = 'kamień';
        }
        else if (move == Moves.Paper) {
            result = 'papier';
        }
        else {
            result = 'nożyce';
        }

        return result;
    }

    function GetWinner(computerMove, playerMove) {
        let winner;

        if ((computerMove == Moves.Rock && playerMove == Moves.Paper)
            || (computerMove == Moves.Paper && playerMove == Moves.Scissors)
            || (computerMove == Moves.Scissors && playerMove == Moves.Rock)) {
            winner = Results.Player;
        }
        else if (computerMove == playerMove) {
            winner = Results.Draw;
        }
        else {
            winner = Results.Computer;
        }

        return winner;
    }

    function PlayRound(playerMove) {
        const computerMove = Math.floor(Math.random() * 3 + 1);
        ClearMessages();
        PrintMessage('Twój ruch to: ' + GetMoveName(playerMove));
        PrintMessage('Ruch komputera to: ' + GetMoveName(computerMove));
        PrintMessage(GetWinner(computerMove, playerMove));
    }

    document.getElementById('play-rock').addEventListener('click', function() {
        PlayRound(Moves.Rock);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        PlayRound(Moves.Paper);
    });
    document.getElementById('play-scissors').addEventListener('click', function() {
        PlayRound(Moves.Scissors);
    });
}