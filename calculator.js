const display = document.getElementById("display");
let resultDisplayed = false;
let memory = 0;

function appendToDisplay(input){
   if (resultDisplayed){
   display.value = "";
   resultDisplayed = false;
  }
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
  resultDisplayed = true;
}

document.getElementById("memory-clear").onclick = function() {
    memory = 0;
};

document.getElementById("memory-recall").onclick = function() {
    display.value = memory;
    resultDisplayed = true; 
};

document.getElementById("memory-add").onclick = function() {
    memory += Number(display.value);
};

document.getElementById("memory-subtract").onclick = function() {
    memory -= Number(display.value);
};


function deleteDisplay() {
  let display = document.getElementById("display"); // Make sure you have an element with this ID
  display.value = display.value.slice(0, -1); // Remove the last character
}

