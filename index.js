
//declare variables fetch url, dice btn, advice number and text
var url = 'https://api.adviceslip.com/advice';

var dice = document.getElementById("btn-dice")
var adviceNumber = document.getElementById("advice-no")
var adviceQuote = document.getElementById("advice-quote")




dice.addEventListener("click", function(){
    generateQuote();
});

window.onload = (event) => {
    generateQuote();
    console.log('page is fully loaded');
  };

function generateQuote(){
    fetch(url)
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNumber.textContent = data.id;
        adviceQuote.textContent = data.advice;
    })
    .catch((error) => {
        console.log(`Error ${error}`);
    });
}