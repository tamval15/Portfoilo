import {solution} from "./calc_algo.js"

console.log("Hello");
const screen = document.getElementById('screen');
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4= document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');
const button6 = document.getElementById('btn-6');
const button7 = document.getElementById('btn-7');
const button8 = document.getElementById('btn-8');
const button9 = document.getElementById('btn-9');
const buttonPlus = document.getElementById('btn-plus');
const buttonMinus = document.getElementById('btn-minus');
const buttonTimes = document.getElementById('btn-times');
const buttonDivide = document.getElementById('btn-divide');
const buttonDec = document.getElementById('btn-dec');
const button0 = document.getElementById('btn-0');
const buttonSqr = document.getElementById('btn-sqr');
const buttonDel = document.getElementById('btn-del');
const buttonClear = document.getElementById('btn-clr');
const buttonEnter = document.getElementById('btn-enter');
screen.value = '';

button1.addEventListener ("click", function(){
    screen.value +=1;
});
button2.addEventListener ("click", function(){
    screen.value += 2;
}); 
button3.addEventListener ("click", function(){
    screen.value += 3;
}); 
button4.addEventListener ("click", function(){
    screen.value += 4;
}); 
button5.addEventListener ("click", function(){
    screen.value += 5;
}); 
button6.addEventListener ("click", function(){
    screen.value += 6;
}); 
button7.addEventListener ("click", function(){
    screen.value += 7;
}); 
button8.addEventListener ("click", function(){
    screen.value += 8;
}); 
button9.addEventListener ("click", function(){
    screen.value += 9;
}); 
buttonPlus.addEventListener ("click", function(){
    screen.value += '+';
}); 
buttonMinus.addEventListener ("click", function(){
    screen.value += '-';
}); 
buttonTimes.addEventListener ("click", function(){
    screen.value += '*';
}); 
buttonDivide.addEventListener ("click", function(){
    screen.value += '/';
}); 
buttonDec.addEventListener ("click", function(){
    screen.value += '.';
}); 
button0.addEventListener ("click", function(){
    screen.value += 0;
}); 
buttonSqr.addEventListener ("click", function(){
    screen.value += '^';
}); 
buttonDel.addEventListener ("click", function(){
    screen.value = screen.value.slice(0, screen.value.length-1);
})    
buttonClear.addEventListener ("click", function(){
    screen.value = '';
}); 
buttonEnter.addEventListener ("click", function(){
    const result = (solution(screen.value));
    screen.value += '\n\n\n= '+ result;
});