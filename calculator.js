// Code by Rachmat Ghaly

let numberInput = document.querySelector(".btnContainer");
let oldNum = 0;
let currentNum = "";
let theNum = "";
let operator = "";
let moreOperator = 0;
let result = "";

numberInput.addEventListener("click", (event) => {
  let textInput = event.target.textContent;

  if (textInput != "AC" && textInput != "C" && textInput != "=") {
    document.getElementById("display").textContent += textInput;

    if (
      textInput != "+" &&
      textInput != "-" &&
      textInput != "x" &&
      textInput != "÷"
    ) {
      theNum += textInput;
      //   console.log(theNum);
    }
    if (textInput == "+") {
      oldNum = Number(oldNum) + Number(theNum);
      //   oldNum += theNum;
      theNum = "";
      operator = textInput;
      moreOperator += 1;
      console.log(oldNum);
      console.log(operator);
    }
    if (textInput == "-") {
      oldNum = Number(oldNum) + Number(theNum);
      theNum = "";
      operator = textInput;
      moreOperator += 1;
      console.log(oldNum);
      console.log(operator);
      // console.log(moreOperator);
    }
    if (textInput == "x") {
      oldNum = Number(oldNum) + Number(theNum);
      //   oldNum += theNum;
      theNum = "";
      operator = textInput;
      moreOperator += 1;
      console.log(oldNum);
      console.log(operator);
    }
    if (textInput == "÷") {
      oldNum = Number(oldNum) + Number(theNum);
      //   oldNum += theNum;
      theNum = "";
      operator = textInput;
      moreOperator += 1;
      console.log(oldNum);
      console.log(operator);
    }

    // console.log(textInput);
  } else if (textInput == "=") {
    if (operator == "+") {
      result = Number(oldNum) + Number(theNum);
      oldNum = result.toString();
      document.getElementById("equalOutput").textContent = result;
      theNum = "";
      operator = "";
    }
    if (operator == "-") {
      result = Number(oldNum) - Number(theNum);
      oldNum = result.toString();
      document.getElementById("equalOutput").textContent = result;
      theNum = "";
      operator = "";
    }
    if (operator == "x") {
      result = Number(oldNum) * Number(theNum);
      oldNum = result.toString();
      document.getElementById("equalOutput").textContent = result;
      theNum = "";
      operator = "";
    }
    if (operator == "÷") {
      result = Number(oldNum) / Number(theNum);
      oldNum = result.toString();
      document.getElementById("equalOutput").textContent = result;
      theNum = "";
      operator = "";
    }
  } else if (textInput == "AC") {
    let resultDisplay = document.getElementById("display").textContent;
    document.getElementById("display").textContent = resultDisplay.slice(
      resultDisplay.length
    );
    document.getElementById("equalOutput").textContent = "";
    result = "";
    oldNum = 0;
    theNum = "";
    moreOperator = 0;
  } else if (textInput == "C") {
    let resultDisplay = document.getElementById("display").textContent;
    document.getElementById("display").textContent = resultDisplay.slice(
      0,
      resultDisplay.length - 1
    );
    theNum = theNum.slice(0, theNum.length - 1);
    //     result.pop();
    //     document.getElementById("display").textContent = result;
  }
});
