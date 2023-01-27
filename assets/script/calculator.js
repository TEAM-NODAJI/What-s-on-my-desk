// 1. 계산기 뼈대 만들기
// 2. 계산기 꾸미기
// 3. 버튼 클릭 시 화면에 텍스트 추가
// 4. AC 기능 구현
// 5. 계산 기능 구현 (=버튼)
// 6. 예외 처리
const openCalcModal = document.querySelector(".btn-calc");
const calcModal = document.querySelector(".calculator-wrap");

const contCalc = document.querySelector(".calculator");
const numburBtns = contCalc.querySelectorAll("[data-number]");
const operatorBtns = contCalc.querySelectorAll("[data-operator]");
const clearBtn = contCalc.querySelector("#btnClear");
const deleteBtn = contCalc.querySelector("#btnDel");
const pointBtn = contCalc.querySelector("#btnPoint");
const equalsBtn = contCalc.querySelector("#btnEquals");

const lastScreen = contCalc.querySelector("#lastScreen");
const currentScreen = contCalc.querySelector("#currentScreen");

let firstAppendNum = "";
let secondAppendNum = "";
let currentOper = null;
let isResetScreen = false;

openCalcModal.addEventListener("click", () => {
  calcModal.classList.remove("hidden");
})

calcModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("calculator-wrap")) {
    calcModal.classList.add("hidden");
  }
})

numburBtns.forEach((button) => {
  button.addEventListener("click", () => insertNum(button.textContent))
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setUpOperation(button.textContent))
});

clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteNum);
pointBtn.addEventListener("click", addPoint);
equalsBtn.addEventListener("click", evaluate);

function insertNum(number) {
  if (currentScreen.textContent === '0' || isResetScreen) {
    resetScreen();
  }
  currentScreen.textContent += number;
}

function clear() {
  currentScreen.textContent = "0";
  lastScreen.textContent = "0";
  firstAppendNum = "";
  secondAppendNum = "";
  currentOper = null;
  isResetScreen = false;
}

function deleteNum() {
  if (currentScreen.textContent.length === 1) {
    currentScreen.textContent = "0";
  } else {
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
  }
}

function addPoint() {
  if (currentScreen.textContent.includes(".")) return;
  currentScreen.textContent += ".";
}

function evaluate() {
  if (currentOper === null || isResetScreen) return;
  if (currentOper === "÷" && currentScreen.textContent === "0") {
    alert("0으로 나누기는 불가능합니다!");
    return
  }
  secondAppendNum = currentScreen.textContent;
  currentScreen.textContent = operate(firstAppendNum, currentOper, secondAppendNum);
  lastScreen.textContent = `${firstAppendNum} ${currentOper} ${secondAppendNum} =`;
  currentOper = null;
}

function setUpOperation(operator) {
  if (currentOper !== null) evaluate();
  firstAppendNum = currentScreen.textContent;
  currentOper = operator;
  lastScreen.textContent = `${firstAppendNum} ${currentOper}`;
  isResetScreen = true;
}

function resetScreen() {
  currentScreen.textContent = "";
  isResetScreen = false;
}

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return plus(a, b);
    case "-":
      return minus(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) {
        return null
      } else {
        return divide(a, b);
      }
    default:
      return null;
  }
}