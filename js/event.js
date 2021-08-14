//First System
function makeRed() {
    document.body.style.backgroundColor = 'red';
};

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
};

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
//Second systeam
const buttonBlue = document.getElementById('onClickButtonBlue');
buttonBlue.onclick = btnBlue;

function btnBlue() {
    document.body.style.backgroundColor = "blue";
}
const buttonTomato = document.getElementById('onClickBtnTomato');
buttonTomato.onclick = btnTomato;

function btnTomato() {
    document.body.style.backgroundColor = 'tomato'
}
//THird systeam
// anonymous function
const btnYellow = document.getElementById('onClickBtnYellow');
btnYellow.onclick = function makeBlue() {
        document.body.style.backgroundColor = 'yellow';
    }
    //Fourth system
    // handle by using addevenlisenter
const goldButton = document.getElementById('onClickbtnGold');
goldButton.addEventListener('click', goldbtn);

function goldbtn() {
    document.body.style.backgroundColor = "goldenrod";
}
//Fiveth system
// handle by using addevenlisenter
const hotPinkBtn = document.getElementById('make-hotpink');
hotPinkBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = 'hotpink';
    })
    //sixSystem
    //direct shortcut
document.getElementById('makeLightBlue').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
})