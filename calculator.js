const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        if(display.value==="Infinity"|| display.value === "-Infinity" || isNaN(display.value)){
            display.value = "Math Error";
        }
    }
    catch(error){
        display.value = "Syntax Error";
    }
}