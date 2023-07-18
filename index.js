const celciusE1=document.getElementById("Celcius");
const farenheitE1=document.getElementById("Farenheit");
const kelvinE1=document.getElementById("Kelvin");

function computeTemp() {
    // add + to avoid string problem
 const currentValue= +event.target.value;

 switch (event.target.name) {
    case "Celcius":
kelvinE1.value= currentValue + 273.15;
farenheitE1.value= currentValue * 1.8 +32;
break;

case "Farenheit":
    celciusE1.value= (currentValue - 32)/1.8;
    kelvinE1.value= (currentValue -32)/1.8 + 273.5;
    break;

    case "Kelvin":
       celciusE1.value= currentValue - 273.15;
        farenheitE1.value= (currentValue - 273.5) * 1.8 +32;
        break;

default:
    break;
 }
}