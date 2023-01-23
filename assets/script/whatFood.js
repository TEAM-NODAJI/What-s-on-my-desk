const foodList = [
  "김치찌개",
  "국밥",
  "돈까스",
  "초밥",
  "치킨",
  "햄버거",
  "샌드위치",
  "파스타",
  "마라탕",
  "김밥",
  "편의점",
  "떡볶이",
  "짬뽕",
  "토스트",
  "굶기..",
  "된장찌개",
  "덮밥",
  "칼국수",
  "카레",
  "수제비",
  "라면",
  "빵",
  "피자",
  "짜장면",
];

const $openModalBtn = document.querySelector(".btn-what-food");
const $modalWrap = document.querySelector(".modal-wrap");
const $backdrop = document.querySelector(".backdrop");
const $whatFoodWrap = $modalWrap.querySelector(".what-food-wrap");
const $chooseBtn = $modalWrap.querySelector(".btn-choose");

const openModal = () => {
  $modalWrap.classList.remove("hidden");
  const modalList = document.createElement("ul");
  modalList.classList.add("what-food-list");
  modalList.classList.add("move-list");
  $whatFoodWrap.appendChild(modalList);

  for (let i = 0; i < foodList.length; i++) {
    const food = foodList[i];
    const modalListItem = document.createElement("li");
    modalListItem.classList.add("list-item");
    modalListItem.textContent = food;
    modalList.appendChild(modalListItem);
  }
};

const reset = () => {
  const $modalList = document.querySelector(".what-food-list");
  $modalList.style.transform = "translateY(0px)";
  $modalList.classList.add("move-list");
  $chooseBtn.classList.remove("btn-reset");
  $chooseBtn.textContent = "메뉴 고르기";
  $chooseBtn.classList.add("btn-choose");
  chance = 1;
};

let chance = 1;

const selectFood = () => {
  chance = --chance;

  if (chance === 0) {
    const randomHeight = Math.floor(Math.random() * (foodList.length - 1));
    const height = randomHeight * 100;

    const $modalList = document.querySelector(".what-food-list");
    $modalList.classList.remove("move-list");
    $modalList.style.transform = `translateY(${-height}px)`;
    $chooseBtn.classList.remove("btn-choose");
    $chooseBtn.textContent = "다시 뽑기";
    $chooseBtn.classList.add("btn-reset");
  } else {
    reset();
  }
};

const closeModal = () => {
  $modalWrap.classList.add("hidden");
  const $modalList = $modalWrap.querySelector(".what-food-list");
  $whatFoodWrap.removeChild($modalList);
};

$openModalBtn.addEventListener("click", openModal);
$backdrop.addEventListener("click", closeModal);
$chooseBtn.addEventListener("click", selectFood);
