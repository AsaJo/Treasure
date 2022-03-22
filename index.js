let randomChest = 0;
let scoreResult = 0;
let chestOne = document.createElement('img');
let chestTwo = document.createElement('img');
let chestThree = document.createElement('img');

/**
 * @desc opens a modal window to display a message
 * @param string msg - the message to be displayed
 * @return bool - success or failure
 */
function init() {
    getImageFromPexels(e);

}

function initGameUI() {
    initChests();
    //initRefreshButton();
    initScoreBoard();
    // Call functions that creates the Game UI
}

function initChests() {
    let chestDiv = document.getElementById('chests');

    chestDiv.appendChild(chestOne);
    chestOne.setAttribute('src', 'images/chest-closed.png');
    chestOne.setAttribute('style', 'margin: 10px;');
    chestOne.setAttribute('id', '1'); //skapa ett id för att underlätta i if sattsen

    chestDiv.appendChild(chestTwo);
    chestTwo.setAttribute('src', 'images/chest-closed.png');
    chestTwo.setAttribute('style', 'margin: 10px;');
    chestTwo.setAttribute('id', '2');

    chestDiv.appendChild(chestThree);
    chestThree.setAttribute('src', 'images/chest-closed.png');
    chestThree.setAttribute('style', 'margin: 10px;');
    chestThree.setAttribute('id', '3');
    initRefreshButton();
    initChestEventListeners()
    console.log('1');
}

function initScoreBoard() {
    let score = document.createElement('h3');
    let gameWrapper = document.getElementById('game-wrapper');
    gameWrapper.appendChild(score);
    score.setAttribute('style', 'font-family: sans-serif; color: white; margin: auto; padding: 20px;');
    score.id = 'scoreBoard';
    score.innerHTML = 'Score ' + scoreResult;
}

function scoreUpdate() {
    let scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.textContent = 'Score ' + scoreResult;

}

function initRefreshButton() {
    randomChest = Math.floor(Math.random() * 3) + 1;
    let button = document.getElementById('refresh-button');
    button.addEventListener('click', initChests);
    console.log(randomChest);
}

function initChestEventListeners() {
    chestOne.addEventListener('click', chestClicked);
    chestTwo.addEventListener('click', chestClicked);
    chestThree.addEventListener('click', chestClicked);
}

function chestClicked(e) {
    if (randomChest == e.target.id) {
        getImageFromPexels(e);
        scoreUpdate(scoreResult += 5);

    } else {
        e.target.src = 'images/chest-open.png';
    }
    removeChestEvents();
}

function getImageFromPexels(e) {
    let url = "https://api.pexels.com/v1/search?query=diamonds+query&per_page1&page=1";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Authorization','your own pexel id' );
    xhr.send();
    xhr.addEventListener('load', function() {
        let imagePexels = JSON.parse(this.response);
        e.target.src = imagePexels.photos[13].src.small;
        // make a request towards pexels API and get 1 Diamond image
    });
}

function removeChestEvents() {
    chestOne.removeEventListener('click', chestClicked);
    chestTwo.removeEventListener('click', chestClicked);
    chestThree.removeEventListener('click', chestClicked);
}
document.addEventListener('DOMContentLoaded', initGameUI);