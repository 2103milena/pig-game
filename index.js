// var x = {
//     name: 'Jon',
//     years: 30,
//     age: function () {
//         return 2020 - this.years
//     }
// }

// console.log(x.age());


// var y = {
//     name: 'Sam',
//     years: 44
// }

// console.log(x.age.call(y));

var curent_score = 0;
var round_score = 0;
var active_player = 0;
var playing_game = true;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0
document.querySelector("#current-1").textContent = 0


//na click se menjaju slike kockice 

document.querySelector(".btn-roll").addEventListener('click', function () {

    if (playing_game) {

        curent_score = Math.floor(Math.random() * 6 + 1);
        var diceDOM = document.querySelector(".dice");
        diceDOM.src = "dice-" + curent_score + ".png";

        if (curent_score !== 1 && curent_score !== 6) {
            document.querySelector("#current-" + active_player).textContent = curent_score;
            round_score += curent_score;
            document.querySelector("#score-" + active_player).textContent = round_score;

        } else {
            nextPlayer();
        }

    }

    if (round_score >= 20) {
        document.querySelector("#name-" + active_player).textContent = "WINNER !";
        playing_game = false;


    }
});

document.querySelector(".btn-hold").addEventListener('click', function () {

    nextPlayer();
});


document.querySelector(".btn-new").addEventListener('click', function () {
    newGame();
})

function nextPlayer() {
    active_player === 0 ? active_player = 1 : active_player = 0;
    round_score = 0;
}

function newGame() {

    playing_game = true;

    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0
    document.querySelector("#current-1").textContent = 0

    document.querySelector("#name-0").textContent = "PLAYER 1";
    document.querySelector("#name-1").textContent = "PLAYER 2";

    round_score = 0;
}