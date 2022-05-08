let previous = document.getElementById("previous");
let current = document.getElementById("current");

let selectedOperation;
const equivalent = document.getElementById("equivalent");

const number = document.querySelectorAll("#number");

const operator = document.querySelectorAll("#operator");

const AC = document.getElementById("AC");
const CE = document.getElementById("CE");
AC.addEventListener("click", clear);

CE.addEventListener("click", singleClear);

number.forEach((n) => {
  n.addEventListener("click", function () {
    appendNumberFunction(n.innerText);
    if (n.innerText === "+/-") {
      appendNumberFunction("-")};
  });
});
equivalent.addEventListener("click", function () {
  compute();
});
operator.forEach((o) => {
  o.addEventListener("click", function () {
    chooseOperation(o.innerText);
  });
});

function clear() {
  previous.innerText = "";
  current.innerText = "";
}
function singleClear() {
  const newNum = (current.innerText).toString().slice(0, -1);
  current.innerText = newNum;
}
function appendNumberFunction(number) {
  if (number === "." && current.innerText.includes(".")) {
    return;
  } else if (number === "+/-") {
    return
  }
  current.innerText += number;
}

function chooseOperation(operation) {
  selectedOperation = operation;
  if (current.innerText === "") {
    return;
  }
  if (previous.innerText !== "") {
    compute();
  }
  if (operation !== null || undefined) {
    previous.innerText = `${current.innerText} ${operation}`;
  }
  current.innerText = "";
}

function compute() {
  let computation;
  const previousValue = parseFloat(previous.innerText);
  const currentValue = parseFloat(current.innerText);

  if (isNaN(previousValue) || isNaN(currentValue)) {
    return;
  }
  if (selectedOperation === "+") {
    computation = currentValue + previousValue;
  } else if (selectedOperation === "-") {
    computation = previousValue - currentValue;
  } else if (selectedOperation === "×") {
    computation = previousValue * currentValue;
  } else if (selectedOperation === "÷") {
    computation = previousValue / currentValue;
  }
  current.innerText = computation;
  selectedOperation = undefined;
  previous.innerText = "";
}

// method 1
// .toLocaleString('en-US')

// method 2 
// function separator(numb) {
//     var str = numb.toString().split(".");
//     str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return str.join(".");
// }