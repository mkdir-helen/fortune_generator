

//1.Make some code run when 
//I click the button
const triggerElement = document.querySelector('[data-trigger]');
const triggerImage = document.querySelector('[data-button]');

function hello(){
    console.log('Hello addEventListener!');
}
const outputElement = document.querySelector('[data-output]');
const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abort, Retry, Ignore?",
    "About time I got out of that cookie.",
    "You will be hungry again in one hour.",
    "Help! I am being held prisoner in a Chinese bakery.",
    "That wasn't chicken.",
    "Ignore previous cookie"

];

function createFortuneButton(){
    const theButton = document.createElement('button');
    theButton.textContent = "Click here for a fortune";
    theButton.setAttribute('data-trigger', '');
    return theButton;
}

function createButtonContainer(){
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    buttonContainer.appendChild(createFortuneButton());
    return buttonContainer;
}

triggerElement.addEventListener('click', function(){
    // const newFortune = fortunes.pop();
    const fortuneRandom = Math.floor(Math.random()*fortunes.length);
    const newFortune = fortunes[fortuneRandom];
    outputElement.textContent = newFortune;
});

const srcElement = document.querySelector('[data-images]');
const divElement = document.querySelector('[data-div]');
const cartoons = [
    "https://i.pinimg.com/474x/fa/82/3c/fa823c1218a184d966cb3b541045b65d--lol-funny-funny-shit.jpg",
    "https://i.pinimg.com/474x/c6/4e/fc/c64efc9adaedbf446f328698e8b67388--computer-jokes-computer-programming.jpg",
    "https://i.pinimg.com/474x/f6/51/47/f65147c3700179df7e4f0e0e8f5a5658--programming-humor-computer-programming.jpg",
    "https://i.pinimg.com/474x/7e/90/6b/7e906b6eeac775ad40290f6d7a65f59c--programming-humor-geek-humour.jpg",
    "https://i.pinimg.com/474x/0f/df/d9/0fdfd95db5e1e4b734b3424cfcf66f14--humor-humour-irony-humor.jpg",

];


let index = 0;
triggerImage.addEventListener('click', function(){
    divElement.style = "display: block";
    if(index>cartoons.length-1){
        index = 0;
    }
    srcElement.src = cartoons[index];
    index++;
});

