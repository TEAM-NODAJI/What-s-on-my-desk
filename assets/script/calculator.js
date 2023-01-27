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

openCalcModal.addEventListener("click", () => {
  calcModal.classList.remove("hidden");
})

calcModal.addEventListener("click", (e) => {
  if(e.target.classList.contains("calculator-wrap")){
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
  if (currentScreen.textContent === '0') {
    currentScreen.textContent = "";
  }
  currentScreen.textContent += number;
}

function clear() {
  currentScreen.textContent = "0";
  lastScreen.textContent = "0";
}

function deleteNum() {
  if(currentScreen.textContent.length === 1){
    currentScreen.textContent = "0";
  } else {
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
  }
}

function addPoint() {
  console.log("=addPoint=!!");
}

function evaluate() {
  console.log("===!!");
}

function setUpOperation(operator) {
  console.log(operator);
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

function operate(operator, a, b) {
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
        return null;
      } else {
        return divide(a, b);
      }
    default:
      return null;
  }
}