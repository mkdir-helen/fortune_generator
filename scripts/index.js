

//1.Make some code run when 
//I click the button
const triggerElement = document.querySelector('[data-trigger]');

function hello(){
    console.log('Hello addEventListener!');
}

triggerElement.addEventListener('click', hello);
//2. Write some text to the page 
//on button cick
const outputElement = document.querySelector('[data-output]');

//3. Pull text from an array of text 
//to write to the page.