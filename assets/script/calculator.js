// 1. 계산기 뼈대 만들기
// 2. 계산기 꾸미기
// 3. 버튼 클릭 시 화면에 텍스트 추가
// 4. AC 기능 구현
// 5. 계산 기능 구현 (=버튼)
// 6. 예외 처리

const calculator = document.querySelector(".calculator");
const screenCalc = document.querySelector("#screenCalc");
const buttons = calculator.querySelectorAll(".calculator button");
// console.log(buttons);

// 계산기 화면의 기본값
let inputTemp = "";
let num1;
let num2;
let operator;

// 버튼을 클릭했을 때
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnValue = e.currentTarget.textContent;
    // console.log(e.currentTarget.textContent)

    if (!Number.isNaN(parseInt(btnValue))) {
      inputTemp += btnValue;
      screenCalc.value = +inputTemp;
      console.log(screenCalc.value) 
    } else if (num1){  // 조건에 num1에 값이 있을 때로 변경
      inputTemp += btnValue;
      num2 = parseInt(inputTemp);
      screenCalc.value = "";
      // console.log(`num2 : ${num2}`);
    }
    
    if (button.dataset.type === "operator" && screenCalc.value) {
      num1 = parseInt(inputTemp);
      inputTemp = "";
      operator = btnValue;
      // console.log(`num1 : ${num1}`);
    }
    
    if(button.dataset.type === "equal") {
      result(num1, operator, num2);
      screenCalc.value = inputTemp;
      // clear();
    }

    if(button.dataset.type === "reset") {
      clear();
    }
  });
});

function result(num1, operator, num2) {
  let calcValue;
  if (operator === "+"){
    calcValue = num1 + num2;
    console.log(num1 + num2);
  }
  if (operator === "-"){
    calcValue = num1 - num2;
    console.log(num1 - num2);
  }
  if (operator === "×"){
    calcValue = num1 * num2;
    console.log(num1 * num2);
  }
  if (operator === "÷"){
    calcValue = num1 / num2;
    console.log(num1 / num2);
  }
  inputTemp = calcValue
  return calcValue
}

function clear(){
  num1 = 0;
  num2 = 0;
  inputTemp = 0;
  screenCalc.value = 0;
  // inputTemp = "";
}

