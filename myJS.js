/*
* Excercise 1
*
*/

let block = document.querySelector('#color-block');
let text = document.querySelector('#color-name');

let color_event = block.addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(block.style.backgroundColor !== 'rgb(238, 238, 238)'){
        //change the background color using JS
        block.style.backgroundColor = '#EEEEEE';
        //Change the text of the color using the span id color-name
        text.innerHTML= '#EEEEEE';
    }
    else{
        //change the background color using JS
        block.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        text.innerHTML = '#F08080';
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

button = document.querySelector('#convertbtn');
input_temp = document.querySelector('#f-input');
convert_event = button.addEventListener('click', convertTemp);
output = document.querySelector('#c-output');
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    temp_f = input_temp.value;
    temp_c = (temp_f - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    output.innerHTML = temp_c.toFixed(2);
}


