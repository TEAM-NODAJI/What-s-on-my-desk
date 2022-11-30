// 1. 계산기 뼈대 만들기
// 2. 계산기 꾸미기
// 3. 버튼 클릭 시 화면에 텍스트 추가
// 4. AC 기능 구현
// 5. 계산 기능 구현 (=버튼)
// 6. 예외 처리

const calculator = document.querySelector(".calculator");
const screenCalc = document.querySelector("#screenCalc");
const buttons = calculator.querySelectorAll(".calculator button");
console.log(buttons);

// 계산기 화면의 기본값
let inputTemp = "";
let num1;
let num2;
let operator;
// 화면에 숫자를 표시해주는 기능
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnValue = e.currentTarget.textContent;
    // console.log(e.currentTarget.textContent)

    if (!isNaN(parseInt(btnValue))) {
      inputTemp += btnValue;
      screenCalc.value = inputTemp;
      console.log(screenCalc.value) 
    } else if (inputTemp && screenCalc.value){
      inputTemp += btnValue;
      num2 = parseInt(inputTemp);
      console.log(`num2 : ${num2}`);
    }
    
    if (button.dataset.type === "operator" && screenCalc.value) {
      num1 = parseInt(inputTemp);
      inputTemp = "";
      screenCalc.value = "";
      operator = button.textContent
      console.log(`num1 : ${num1}`);
        // num1 += num2;
    }
    
    if(button.dataset.type === "equal")
      result(num1, operator, num2);
      // clear();
  });
});
  
function result(num1, operator, num2) {
    if (operator === "+"){
      console.log(num1 + num2);
    }
    if (operator === "-"){
      console.log('빼기임');
    }
    if (operator === "×"){
      console.log('곱하기');
    }
    if (operator === "÷"){
      console.log('나누기');
    }
}

// function clear(){
//   num1 = "";
//   num2 = "";
//   operator = "";
//   inputTemp = "";
// }

// function result(buttons) {
//   if (buttons.dataset.type === "operator") {
//     if (buttons.textContent === "+"){
//       console.log('더하기임');
//     }
//     if (buttons.textContent === "-"){
//       console.log('빼기임');
//     }
//     if (buttons.textContent === "×"){
//       console.log('곱하기');
//     }
//     if (buttons.textContent === "÷"){
//       console.log('나누기');
//     }
//   }
// }

