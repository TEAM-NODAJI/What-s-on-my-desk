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

let inputTemp = "";

// 화면에 숫자를 표시해주는 기능
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnValue = e.currentTarget.textContent;
    // console.log(e.currentTarget.textContent)
    if (!isNaN(parseInt(btnValue))) {
      inputTemp += btnValue;
      screenCalc.value = inputTemp;
    }
    
    if(button.dataset.type === "operator"){
      let num1 = inputTemp;
      inputTemp = ""
      
    }

    // operator(num1, num2)
  });
});

// 숫자가 누적되고 연산 기능
inputTemp 

function operator() {
  if (buttons.dataset.type === "operator") {
    if (buttons.textContent === "+"){
      console.log('더하기임');
    }
    if (buttons.textContent === "-"){
      console.log('빼기임');
    }
    if (buttons.textContent === "×"){
      console.log('곱하기');
    }
    if (buttons.textContent === "÷"){
      console.log('나누기');
    }
  }
}
