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
// const $modal = $modalWrap.querySelector("#modal");
// const $modalTitle = $modalWrap.querySelector(".modal-tit");
const $whatFoodWrap = $modalWrap.querySelector(".what-food-wrap");
const $modalBtn = $modalWrap.querySelector(".btn-choose");

const openModal = () => {
  $modalWrap.classList.remove("hidden");
  const $modalList = document.createElement("ul");
  $modalList.classList.add("what-food-list");
  $whatFoodWrap.appendChild($modalList);

  for (let i = 0; i < foodList.length; i++) {
    const food = foodList[i];
    const $modalListItem = document.createElement("li");
    $modalListItem.classList.add("list-item");
    $modalListItem.textContent = food;
    $modalList.appendChild($modalListItem);
  }
};

const closeModal = () => {
  $modalWrap.classList.add("hidden");
  const $modalList = $modalWrap.querySelector(".what-food-list");
  $whatFoodWrap.removeChild($modalList);
};

$openModalBtn.addEventListener("click", openModal);
$modalWrap.addEventListener("click", closeModal);
