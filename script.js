console.log("working");
console.log("hello");

const htmlBody = document.querySelector("body");
//console.log(htmlBody);
const newDiv = document.createElement("div");
//console.log(newDiv);
newDiv.textContent = "THIS IS A TEST";
htmlBody.appendChild(newDiv);

console.log(typeof 2.6);

const testArr2 = [2,".",6];
console.log(typeof Number(testArr2.join("")));

const testArr = [1,2,3];

console.log(testArr);

testArr.splice(0,testArr.length);

console.log(testArr);

//this holds the numbers that are two be processed
const numsToOperate = [];


let firstNumber;
let secondNumber; 

//This holds the currOperator 
let currOperator;

//this holds the result of an equation. this is used to compare to 
//what is on the main screen in order to prevent the equals button being 
//the second time after it has initially been pressed with only one result 
//(the one time it is pressed with one result, it adds a 0 to the numsToOperate[])
let result;

const displayNumber = [0]

//numerical keypads

const keypadZero = document.querySelector("#zero");
const keypadOne = document.querySelector("#one");
const keypadTwo = document.querySelector("#two");
const keypadThree = document.querySelector("#three");
const keypadFour = document.querySelector("#four");
const keypadFive = document.querySelector("#five");
const keypadSix = document.querySelector("#six");
const keypadSeven = document.querySelector("#seven");
const keypadEight = document.querySelector("#eight");
const keypadNine = document.querySelector("#nine");

//operator keypads

const keypadPlus = document.querySelector("#plus-opp");
const keypadSubtract = document.querySelector("#subtract-opp");
const keypadMultiply = document.querySelector("#multiply-opp");
const keypadDivide = document.querySelector("#divide-opp");
const keypadEqual = document.querySelector("#equals-opp");

//other keypads and screen

const mainScreen = document.querySelector(".main-screen");
const keypadClear = document.querySelector("#clear");
const keypadBackspace = document.querySelector("#backspace");

mainScreen.textContent = Number(displayNumber.join());

function keypadClick(number){
/*
    if(number == 0 && displayNumber.length == 0 && numsToOperate.length != 1 && displayNumber[0] == "0"){
        return
    }*/


    if(displayNumber.length < 14){
        displayNumber.push(number);
        updateMainScreen();
    }

     if(result == Number(displayNumber.join(""))){
        console.log(result == Number(displayNumber.join("")));
        //clearDisplayNumber();
        //clearNumsToOperate();
        result = null;
     }

     


    //displayNumber[0] != 0



};

//helper functions

function debugHelp(){
    console.log("displayNumber: " + displayNumber);
    console.log("numsToOperate: " + numsToOperate);
    console.log("result: " +  result);
}

function updateMainScreen(){
    mainScreen.textContent = Number(displayNumber.join(""));
}

function clearDisplayNumber(){
    displayNumber.splice(1,displayNumber.length);
}

function clearNumsToOperate(){
    numsToOperate.splice(0,numsToOperate.length);
}

function addOperator(opp){
    currOperator = opp;
    numsToOperate.push(Number(displayNumber.join("")));
    clearDisplayNumber();
}

//event listeners for special operator keypads

keypadEqual.addEventListener("click",function(){

    //BELOW WAS THE OLD CODE. RESTORE FROM HERE
    //numsToOperate.push(Number(displayNumber.join("")));
    
    if(result == mainScreen.textContent){
        return;
     }


    if(numsToOperate.length != 2){
        numsToOperate.push(Number(displayNumber.join("")));
    }
    else{
        clearNumsToOperate();
        numsToOperate.push(Number(displayNumber.join("")));
    }
   

    if(numsToOperate.length == 1){
        numsToOperate.push(0);
    }
       result = operate(currOperator, numsToOperate[0],numsToOperate[1]);
       mainScreen.textContent = result;
   
    clearDisplayNumber();
    debugHelp();
   
})

keypadBackspace.addEventListener("click",function(){
    if(displayNumber.length != 1){
        displayNumber.pop();
    }
    updateMainScreen();
    debugHelp();
})

//event listeners for mathematical operator keypads

keypadPlus.addEventListener("click",function(){
    addOperator("+");
    debugHelp();
});

keypadSubtract.addEventListener("click",function(){
    addOperator("-");
    debugHelp();
});

keypadMultiply.addEventListener("click",function(){
    addOperator("*");
    debugHelp();
})

keypadDivide.addEventListener("click",function(){
    addOperator("/");
    debugHelp();
})

//event listeners for special keypads

keypadClear.addEventListener("click",function(){
    clearDisplayNumber();
    clearNumsToOperate();
    mainScreen.textContent = Number(displayNumber.join(""));
    debugHelp();
});

//event listeners for numerical keypads

keypadZero.addEventListener("click",function(){
    keypadClick(0);
    debugHelp();
});

keypadOne.addEventListener("click",function(){
    keypadClick(1);
    debugHelp();
});

keypadTwo.addEventListener("click",function(){
    keypadClick(2);
    debugHelp();
});

keypadThree.addEventListener("click",function(){
    keypadClick(3);
    debugHelp();
});

keypadFour.addEventListener("click",function(){
    keypadClick(4);
    debugHelp();
});

keypadFive.addEventListener("click",function(){
    keypadClick(5);
    debugHelp();
});

keypadSix.addEventListener("click",function(){
    keypadClick(6);
    debugHelp();
});

keypadSeven.addEventListener("click",function(){
    keypadClick(7);
    debugHelp();
});

keypadEight.addEventListener("click",function(){
    keypadClick(8);
    debugHelp();
});

keypadNine.addEventListener("click",function(){
    keypadClick(9);
    debugHelp();
});









function operate(opp,numOne,numTwo){

    let result;
    if(opp == "+"){
        result = add(numOne,numTwo);
    }else if(opp == "-"){
        result = subtract(numOne,numTwo);
    }else if(opp == "*"){
        result = multiply(numOne,numTwo);
    }else if(opp == "/"){
        result = divide(numOne,numTwo);
    }else{
        result = add(numOne,numTwo);
    }

    return result;
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

