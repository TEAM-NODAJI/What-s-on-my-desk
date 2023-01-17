window.onload = loadMemo;

const $inpMemo = document.querySelector(".inp-memo");
const $btnMemo = document.querySelector(".btn-memo");
const $memoWrap = document.querySelector(".wrap");

// 로컬스토리지에 값이 있다면 가져오기
function loadMemo() {
  if (localStorage.getItem("my-memo") == null) return;
  let memoList = Array.from(JSON.parse(localStorage.getItem("my-memo")));

  memoList.forEach((memo) => {
    const memoCont = document.createElement("div");
    const memoText = document.createElement("p");
    const deleteBtn = document.createElement("button");
    memoCont.classList.add("memo-cont");
    $memoWrap.append(memoCont);
    memoText.textContent = memo.memo;
    deleteBtn.classList.add("delete-btn");
    memoCont.append(memoText, deleteBtn);

    // 입력 값의 길이에 따라 다른 style 지정
    if (memo.memo.length < 30) {
      memoText.classList.add("short-memo");
    } else if (memo.memo.length > 107) {
      memoText.classList.add("long-memo");
    } else {
      memoText.classList.add("regular-memo");
    }
  });
}

const renderMemo = () => {
  const getText = $inpMemo.value;

  //DOM 생성
  const memoCont = document.createElement("div");
  const memoText = document.createElement("p");
  const deleteBtn = document.createElement("button");
  memoCont.classList.add("memo-cont");
  $memoWrap.append(memoCont);
  memoText.textContent = getText;
  deleteBtn.classList.add("delete-btn");
  memoCont.append(memoText, deleteBtn);

  $inpMemo.value = "";

  // 입력 값의 길이에 따라 다른 style 지정
  if (getText.length < 30) {
    memoText.classList.add("short-memo");
  } else if (getText.length > 107) {
    memoText.classList.add("long-memo");
  } else {
    memoText.classList.add("regular-memo");
  }
};

const addMemo = () => {
  const getText = $inpMemo.value;

  // 입력 값이 유효하지 않을 경우
  if (!getText) {
    alert("메모를 입력해주세요!📝");
    return;
  }
  localStorage.setItem(
    "my-memo",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("my-memo") || "[]"),
      { memo: getText },
    ])
  );

  renderMemo();
};

const removeMemo = (event) => {
  let memoList = Array.from(JSON.parse(localStorage.getItem("my-memo")));
  // console.log(memoList);
  // console.log(event.parentNode);
};

$btnMemo.addEventListener("click", addMemo);
