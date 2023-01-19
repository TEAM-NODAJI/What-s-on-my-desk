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
  $whatFoodWrap.appendChild(modalList);
  const modalListItem = document.createElement("li");
  modalListItem.classList.add("list-item");
  modalListItem.textContent = "과연 오늘의 메뉴는...?";
  modalList.appendChild(modalListItem);
};

let chance = 1;

const selectFood = () => {
  chance = --chance;
  const randomFood = foodList[Math.floor(Math.random() * foodList.length)];
  console.log(randomFood);

  if (chance === 0) {
    const $modalList = document.querySelector(".what-food-list");
    $modalList.removeChild($modalList.firstChild);
    const modalListItem = document.createElement("li");
    modalListItem.classList.add("selected");
    modalListItem.textContent = randomFood;
    $modalList.appendChild(modalListItem);
  } else {
    const $modalListItem = document.querySelector(".selected");
    $modalListItem.textContent = randomFood;
  }
};

const closeModal = () => {
  $modalWrap.classList.add("hidden");
  const $modalList = $modalWrap.querySelector(".what-food-list");
  $whatFoodWrap.removeChild($modalList);
  chance = 1;
};

$openModalBtn.addEventListener("click", openModal);
$backdrop.addEventListener("click", closeModal);
$chooseBtn.addEventListener("click", selectFood);
