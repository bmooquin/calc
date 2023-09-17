console.log("working");
console.log("hello");

const htmlBody = document.querySelector("body");
//console.log(htmlBody);
const newDiv = document.createElement("div");
//console.log(newDiv);
htmlBody.appendChild(newDiv);

console.log(typeof 2.6);

const testArr2 = [2, ".", 6];
console.log(typeof Number(testArr2.join("")));

const testArr = [1, 2, 3];

console.log(testArr);

testArr.splice(0, testArr.length);

console.log(testArr);

//this holds the numbers that are two be processed
const numsToOperate = [];


let firstNumber;
let secondNumber;

//This holds the currOperator 
let currOperator;
let result;
let lastKeyPressed;

let onSecondNumber = false;
let setClear = true;

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
const topScreen = document.querySelector(".top-screen");

const keypadCE = document.querySelector("#CE");
const keypadClear = document.querySelector("#clear");
const keypadBackspace = document.querySelector("#backspace");
const keypadNegate = document.querySelector("#negate");
const keypadDot = document.querySelector("#dot");

mainScreen.textContent = Number(displayNumber.join());





function removeTrailingZerosDN() {
    if (displayNumber[0] == 0 && displayNumber[1] == 0) {
        displayNumber.splice(1, 1);
    }
}

function keypadClick(number) {
    /*
        if(number == 0 && displayNumber.length == 0 && numsToOperate.length != 1 && displayNumber[0] == "0"){
            return
        }*/

    resetMainScreen();

    // if(setClear){
    //     clearDisplayNumber();
    //     mainScreen.textContent = Number(displayNumber.join(""));
    //     topScreen.textContent = "";
    //     setClear = false; 
    // }

    if (numsToOperate.length == 1 && (lastKeyPressed == "+" || lastKeyPressed == "-" || lastKeyPressed == "*" || lastKeyPressed == "/")) {
        onSecondNumber = true;
    }

    //The part below after || operator was added to accomodate if the user pressed the negate key on an equals result 
    if (lastKeyPressed == "=" || lastKeyPressed == "pm" && numsToOperate.length == 2) {
        topScreen.textContent = "";
    }


    //to update lastKeyPressed

    switch (number) {
        case 0:
            lastKeyPressed = "0";
            console.log(lastKeyPressed);
            break;
        case 1:
            lastKeyPressed = "1";
            console.log(lastKeyPressed);
            break;
        case 2:
            lastKeyPressed = "2";
            console.log(lastKeyPressed);
            break;
        case 3:
            lastKeyPressed = "3";
            console.log(lastKeyPressed);
            break;
        case 4:
            lastKeyPressed = "4";
            console.log(lastKeyPressed);
            break;
        case 5:
            lastKeyPressed = "5";
            console.log(lastKeyPressed);
            break;
        case 6:
            lastKeyPressed = "6";
            console.log(lastKeyPressed);
            break;
        case 7:
            lastKeyPressed = "7";
            console.log(lastKeyPressed);
            break;
        case 8:
            lastKeyPressed = "8";
            console.log(lastKeyPressed);
            break;
        case 9:
            lastKeyPressed = "7";
            console.log(lastKeyPressed);
            break;
        default:

    }



    console.log("Zero Status: " + (number == 0 && displayNumber[0] == 0 && numsToOperate.length != 1))


    // if(number == 0 && displayNumber[0] == 0 && numsToOperate.length != 1){
    //     console.log("Disabled button");
    //     return;
    // }




    if (numsToOperate.length == 2) {
        clearNumsToOperate();
    }


    //if(displayNumber.length < 14) with if( displayNumber.join("").length < 14)
    //because the above should not increase if there are zeros upon zeros entered, it should stay at 1 



    //Old Code below:
    //            displayNumber.push(number);
    //            updateMainScreen();
    //within the displayNumber.length < 14 if statement 


    console.log("displayNumber String Length: " + displayNumber.join("").length);
    //remove the nested if statement below to restore 
    if (displayNumber.length < 14) {
        displayNumber.push(number);
        removeTrailingZerosDN();
        updateMainScreen();
    }

    if (result == Number(displayNumber.join(""))) {
        console.log(result == Number(displayNumber.join("")));
        //clearDisplayNumber();
        //clearNumsToOperate();
        result = null;
    }


    //displayNumber[0] != 0



};

//helper functions

function debugHelp() {
    console.log("displayNumber: " + displayNumber);
    console.log("numsToOperate: " + numsToOperate);
    console.log("result: " + result);
    console.log("currOperater: " + currOperator);
}

function resetMainScreen() {
    if (mainScreen.style.fontSize != "43px") {
        mainScreen.style.fontSize = "43px";
    }
}


function clearTopScreen() {
    topScreen.textContent = "";
}


function updateMainScreen() {

    console.log(displayNumber[0] == 0 && displayNumber[1] == ".")

    // if(displayNumber.includes(".") && !(displayNumber.includes("-"))){
    //     mainScreen.textContent = displayNumber.join("");
    //     //mainScreen.textContent = displayNumber.join("").slice(1,displayNumber.join("").length);
    // }
    // else if (displayNumber.includes(".") && displayNumber.includes("-")){
    //     mainScreen.textContent = displayNumber.join("");
    //    // mainScreen.textContent = "-" + displayNumber.join("").slice(2,displayNumber.join("").length);
    // }

    console.log(Number(displayNumber.join("")).toString().includes("e"));


    // if(displayNumber[displayNumber.length - 1] == "."){
    //     mainScreen.textContent = Number(displayNumber.join("")) + "."
    // } 
    // else if(Number(displayNumber.join("")) == 0 && displayNumber.length >= 3){
    //     console.log("INSIDE");
    //     mainScreen.textContent = displayNumber.join("");
    // }


    //OLD CODE: 
    // if(displayNumber.includes(".")){
    //     if(displayNumber[0] == "-" && !(Number(displayNumber.join("")) < 0 && Number(displayNumber.join("")) > -1)){
    //         mainScreen.textContent = displayNumber.join("").slice(0,1) + displayNumber.join("").slice(2,displayNumber.join("").length);
    //     } else if(Number(displayNumber.join("")) == 0 ) {
    //         mainScreen.textContent = displayNumber.join("");
    //     } else if(Number(displayNumber.join("")) > 0 && Number(displayNumber.join("")) < 1){
    //         mainScreen.textContent = displayNumber.join("");
    //     } else if(Number(displayNumber.join("")) < 0 && Number(displayNumber.join("")) > -1){
    //         mainScreen.textContent = displayNumber.join("");
    //     }
    //     else {
    //         mainScreen.textContent = displayNumber.join("").slice(1,displayNumber.join("").length);
    //     }
    // }



    if (displayNumber.includes(".")) {
        if (displayNumber[0] == "-" && !(Number(displayNumber.join("")) < 0 && Number(displayNumber.join("")) > -1) && Number(displayNumber.join("")) != 0) {
            mainScreen.textContent = displayNumber.join("").slice(0, 1) + displayNumber.join("").slice(2, displayNumber.join("").length);
        } else if (Number(displayNumber.join("")) == 0 && displayNumber[0] != "-") {
            mainScreen.textContent = displayNumber.join("");
        } else if (Number(displayNumber.join("")) == 0 && displayNumber[0] == "-") {
            displayNumber.shift();
            mainScreen.textContent = displayNumber.join("");
        }
        else if (Number(displayNumber.join("")) > 0 && Number(displayNumber.join("")) < 1) {
            mainScreen.textContent = displayNumber.join("");
        } else if (Number(displayNumber.join("")) < 0 && Number(displayNumber.join("")) > -1) {
            mainScreen.textContent = displayNumber.join("");
        }
        else {
            mainScreen.textContent = displayNumber.join("").slice(1, displayNumber.join("").length);
        }
    }
    else if (Number(displayNumber.join("")).toString().includes("e")) {
        mainScreen.textContent = displayNumber.join("");
    }
    else {
        mainScreen.textContent = Number(displayNumber.join(""));
    }
}

function clearDisplayNumber() {
    //old code: displayNumber.splice(1,displayNumber.length);
    displayNumber.splice(0, displayNumber.length);
    displayNumber.push(0);
}

function clearNumsToOperate() {
    numsToOperate.splice(0, numsToOperate.length);
}


function getDisplayFriendly(opp) {

    let friendlyOpp;

    switch (opp) {
        case "+":
            friendlyOpp = "+";
            break;
        case "-":
            friendlyOpp = "-";
            break;
        case "*":
            friendlyOpp = "×";
            break;
        case "/":
            friendlyOpp = "÷";
            break;
        default:
    }

    return friendlyOpp;

}

function addOperator(opp) {
    //BELOW WAS AT THE TOP AND NOW HAS BEEN MOVED TO THE BOTTOM 
    //currOperator = opp;

    // we are going to write a seperate function
    //that removes the trailing zeros from the displayNumber

    //PREVIOUS: if(numsToOperate.length < 2)
    //!(displayNumber.length == 1 && !(currOperator == null))


    // console.log(
    //     //"status: " + (numsToOperate.length < 2 && !(displayNumber.length == 1 && !(currOperator == null)))
    //     "status: " + !(displayNumber.length == 1 && !(currOperator == null) && numsToOperate.length == 1)
    // )

    //TEMPORARILLY ADDING AN ELSE STATEMENT TO BELOW (ORIGINAL WAS WITHOUT ELSE STATEMENT) FOR THE PURPOSES 
    //OF DEBUGGING 

    if (lastKeyPressed == "+" || lastKeyPressed == "-" || lastKeyPressed == "*" || lastKeyPressed == "/") {
        console.log("HERE!");
        currOperator = opp;
        topScreen.textContent = numsToOperate[0] + " " + getDisplayFriendly(currOperator);
        return;
    }



    if (numsToOperate.length < 2 /*&& !(displayNumber.length == 1 && !(currOperator == null) && numsToOperate.length == 1) */) {
        console.log("Here to Debug!");
        numsToOperate.push(Number(displayNumber.join("")));
    } else {
        console.log("");
    }

    //THE LOGIC ABOVE WAS TO ALLOW THE CHANGING OF THE currOperator if the user changed his mind about the first operator 

    //console.log("numsToOperate.length = " + numsToOperate.length); 
    // The second part after the || operater was added to account for when the user presses the negate key on the result 

    if (numsToOperate.length == 2 && lastKeyPressed == "=" || numsToOperate.length == 2 && lastKeyPressed == "pm") {
        clearNumsToOperate();
        numsToOperate.push(Number(mainScreen.textContent));
    }



    //could also maybe use numsToOperate.length == 2 for the below condition
    if (onSecondNumber == true) {


        const locResult = operate(currOperator, numsToOperate[0], numsToOperate[1]);
        result = locResult;

        if (result.toString().length > 22) {
            mainScreen.style.fontSize = "25px";
        }
        else if (result.toString().length > 20) {
            mainScreen.style.fontSize = "28px";
        } else if (result.toString().length >= 18) {
            mainScreen.style.fontSize = "30px";
        } else if (result.toString().length > 14) {
            mainScreen.style.fontSize = "35px";
        }



        mainScreen.textContent = result;

        onSecondNumber == false;

        clearNumsToOperate();

        numsToOperate[0] = result;

        console.table(numsToOperate);

    }

    currOperator = opp;


    if (numsToOperate.length == 1) {
        topScreen.textContent = numsToOperate[0] + " " + getDisplayFriendly(currOperator);
    }


    //in order to accomodate for chaining equations, the onSecondNumber 
    //should not be set until the user types a keypad (also, in case
    //)

    onSecondNumber = false;
    clearDisplayNumber();
}



function checkSize(initValue) {
    const stringValue = initValue.toString();
    let procString;
    //let procArray;


    console.log("From checkSize(): " + stringValue);
    console.log("From checkSize(): " + initValue.toFixed(2));
    console.log("From checkSize(): " + stringValue.length);
    console.log("From checkSize(): " + typeof stringValue);

    // if (stringValue.includes("e")){
    //     procArray = Number(stringValue).toFixed(14).split("");
    //     console.log(procArray);

    //     while(procArray[procArray.length - 1] == 0){
    //         procArray.pop();
    //     }

    //     console.log(procArray);

    // }


    if (stringValue.length > 18) {
        procString = stringValue.slice(0, 17);
        return Number(procString);
    }

    return initValue;
}

//event listeners for special operator keypads

keypadEqual.addEventListener("click", function () {

    lastKeyPressed = "=";
    console.log(lastKeyPressed);

    onSecondNumber = false;


    //TEMPORARILY DISABLING THE PREVENTATIVE QUALIFIER

    // if (result == mainScreen.textContent) {
    //     console.log("disabled button");
    //     return;
    // }

    //If equals in pressed and there is only one entry 
    // if (numsToOperate.length == 0){
    //     result = Number(displayNumber.join(""));
    //     mainScreen.textContent = result;
    //     topScreen.textContent = result + " = ";
    //     setClear = true;
    //     //clearDisplayNumber();
    //     return;
    // }

    //changed the below from Number(displayNumber.join("")) to Number(mainScreen.textContent)


    if (numsToOperate.length != 2) {
        numsToOperate.push(Number(mainScreen.textContent));
    }
    else {
        //clearNumsToOperate();
        //console.log("Cleared the nums to Operator as in: " + numsToOperate);
        //numsToOperate.push(Number(mainScreen.textContent));
        //console.log("Now pushed the current displayNumber to the first value: " + numsToOperate);

        numsToOperate.shift();
        numsToOperate.unshift(Number(mainScreen.textContent));

    }


    if (numsToOperate.length == 1) {
        currOperator = undefined;
        numsToOperate.push(0);
        console.log("Now, because the length was only one it adds a zero: " + numsToOperate);
    }


    if (currOperator == undefined) {
        topScreen.textContent = numsToOperate[0] + " = ";
    } else {
        topScreen.textContent = numsToOperate[0] + " " + getDisplayFriendly(currOperator) + " " + numsToOperate[1] + " =";
    }

    const locResult = operate(currOperator, numsToOperate[0], numsToOperate[1]);
    console.log("locResult from keypadEqual method: " + locResult);
    console.log("locResult length: " + locResult.toString().length);

    result = locResult;

    if (result.toString().length > 22) {
        mainScreen.style.fontSize = "25px";
    }
    else if (result.toString().length > 20) {
        mainScreen.style.fontSize = "28px";
    } else if (result.toString().length >= 18) {
        mainScreen.style.fontSize = "30px";
    } else if (result.toString().length > 14) {
        mainScreen.style.fontSize = "35px";
    }

    console.log(locResult);
    console.log(result);
    console.log(typeof checkSize(locResult));

    mainScreen.textContent = result;


    //result = operate(currOperator, numsToOperate[0],numsToOperate[1]);
    //mainScreen.textContent = result;




    clearDisplayNumber();

    //Was removed because of additional functionality needed and it does not seem to be used anywhere
    //currOperator = null;

    debugHelp();

})

keypadBackspace.addEventListener("click", function () {

    lastKeyPressed = "BK";
    console.log(lastKeyPressed);

    // if (displayNumber.length != 1) {
    //     console.log("POPPED")
    //     displayNumber.pop();
    // } 


    if (displayNumber.length == 3 && displayNumber[0] == "-") {
        //console.log("POPPED AND SHIFTED");
        displayNumber.pop();
        displayNumber.shift();
    }
    else if (displayNumber.length != 1) {
        //console.log("POPPED")
        displayNumber.pop();
    }

    updateMainScreen();
    debugHelp();
})

keypadNegate.addEventListener("click", function () {

    lastKeyPressed = "pm";
    console.log(lastKeyPressed);

    console.log(Number(displayNumber.join("")) >= 0)

    console.log(Number(displayNumber.join("")) < 0);

    // if(Number(displayNumber.join("")) < 0){
    //     console.log("INSIDE");
    //     displayNumber.shift();
    //     updateMainScreen();
    // }

    //The below is to add the negate identifier on a result 

    if (mainScreen.textContent == result) {
        if (Number(mainScreen.textContent) > 0) {
            mainScreen.textContent = "-" + (mainScreen.textContent);
            result = Number(mainScreen.textContent);
            if(result.toString().length == 15){
                mainScreen.style.fontSize = "40px";
            }

        } else if (Number(mainScreen.textContent) == 0) {
            console.log("can not negate 0");
        }
        else {
            mainScreen.textContent = mainScreen.textContent.slice(1, mainScreen.textContent.length);
            result = Number(mainScreen.textContent);
            if(result.toString().length == 14){
                mainScreen.style.fontSize = "43px";
            }
        }
    }



    if (Number(displayNumber.join("")) > 0) {
        displayNumber.unshift("-");
        updateMainScreen();
    } else if (Number(displayNumber.join("")) == 0) {
        console.log("can not negate 0");
    }
    else {
        displayNumber.shift();
        updateMainScreen();
    }

})

keypadDot.addEventListener("click", function () {


    if (numsToOperate.length == 2) {
        clearNumsToOperate();
        topScreen.textContent = "";
    }


    lastKeyPressed = "dt";
    console.log(lastKeyPressed);

    resetMainScreen();

    if (!displayNumber.includes(".") && displayNumber.length < 14) {
        displayNumber.push(".");
        console.log(displayNumber);
        updateMainScreen();
    } else {
        console.log("there is already a point");
        console.log("or too much space");
    }


})

keypadCE.addEventListener("click", function () {
    clearDisplayNumber();
    mainScreen.textContent = Number(displayNumber.join(""));
})

//event listeners for mathematical operator keypads

keypadPlus.addEventListener("click", function () {

    if (lastKeyPressed == "+") {
        console.log("can not press same operator key twice in a row");
        return;
    }


    //TESTING IT OUT

    console.log()


    //TESTING IT OUT



    // if (Number(displayNumber.join()) == 0) {
    //     addOperator("+");
    //     debugHelp();
    //     return;
    // }

    // if (numsToOperate.length == 1 || (displayNumber.length == 1 && numsToOperate.length == 0)) {
    //     console.log("disabled button");
    //     return;
    // }

    //if((displayNumber.length == 1 && numsToOperate.length == 0)){
    // return;
    //}

    addOperator("+");
    debugHelp();

    lastKeyPressed = "+";
    console.log(lastKeyPressed);

});

keypadSubtract.addEventListener("click", function () {

    if (lastKeyPressed == "-") {
        console.log("can not press same operator key twice in a row");
        return;
    }



    // if (Number(displayNumber.join()) == 0) {
    //     addOperator("-");
    //     debugHelp();
    //     return;
    // }

    // if (numsToOperate.length == 1 || (displayNumber.length == 1 && numsToOperate.length == 0)) {
    //     console.log("disabled button");
    //     return;
    // }

    addOperator("-");
    debugHelp();

    lastKeyPressed = "-";
    console.log(lastKeyPressed);

});

keypadMultiply.addEventListener("click", function () {

    if (lastKeyPressed == "*") {
        console.log("can not press same operator key twice in a row");
        return;
    }

    console.log("Initial numsToOperate: " + numsToOperate.length);



    console.log(numsToOperate.length == 1 && displayNumber.length > 1)




    // if (Number(displayNumber.join()) == 0) {
    //     console.log("Here to Debug");
    //     addOperator("*");
    //     debugHelp();
    //     return;
    // }


    // if (numsToOperate.length == 1 /*|| (displayNumber.length == 1 && numsToOperate.length == 0)*/) {
    //     console.log("disabled button");
    //     return;
    // }

    addOperator("*");
    debugHelp();

    lastKeyPressed = "*";
    console.log(lastKeyPressed);
})

keypadDivide.addEventListener("click", function () {

    if (lastKeyPressed == "/") {
        console.log("can not press same operator key twice in a row");
        return;
    }





    // if (Number(displayNumber.join()) == 0) {
    //     addOperator("/");
    //     debugHelp();
    //     return;
    // }

    // if (numsToOperate.length == 1 || (displayNumber.length == 1 && numsToOperate.length == 0)) {
    //     console.log("disabled button")
    //     return;
    // }

    addOperator("/");
    debugHelp();

    lastKeyPressed = "/";
    console.log(lastKeyPressed);
})

//event listeners for special keypads

keypadClear.addEventListener("click", function () {
    lastKeyPressed = "C";
    console.log(lastKeyPressed);
    onSecondNumber = false;
    clearTopScreen()
    resetMainScreen();
    clearDisplayNumber();
    clearNumsToOperate();
    currOperator = null;
    mainScreen.textContent = Number(displayNumber.join(""));
    debugHelp();
});


keypadCE.addEventListener("click", function () {
    lastKeyPressed = "CE";
    console.log(lastKeyPressed);
})



//event listeners for numerical keypads

keypadZero.addEventListener("click", function () {
    keypadClick(0);
    debugHelp();
});

keypadOne.addEventListener("click", function () {
    keypadClick(1);
    debugHelp();
});

keypadTwo.addEventListener("click", function () {
    keypadClick(2);
    debugHelp();
});

keypadThree.addEventListener("click", function () {
    keypadClick(3);
    debugHelp();
});

keypadFour.addEventListener("click", function () {
    keypadClick(4);
    debugHelp();
});

keypadFive.addEventListener("click", function () {
    keypadClick(5);
    debugHelp();
});

keypadSix.addEventListener("click", function () {
    keypadClick(6);
    debugHelp();
});

keypadSeven.addEventListener("click", function () {
    keypadClick(7);
    debugHelp();
});

keypadEight.addEventListener("click", function () {
    keypadClick(8);
    debugHelp();
});

keypadNine.addEventListener("click", function () {
    keypadClick(9);
    debugHelp();
});









function operate(opp, numOne, numTwo) {

    let result;
    if (opp == "+") {
        result = add(numOne, numTwo);
    } else if (opp == "-") {
        console.log(numOne + currOperator + numTwo);
        result = subtract(numOne, numTwo);
        console.log(result);
    } else if (opp == "*") {
        console.log(numOne + currOperator + numTwo);
        result = multiply(numOne, numTwo);
        console.log(result);
    } else if (opp == "/") {
        result = divide(numOne, numTwo);
    } else {
        result = add(numOne, numTwo);
    }

    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

