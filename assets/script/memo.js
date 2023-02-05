window.onload = loadMemo;

const $openMemoBtn = document.querySelector(".btn-memo");
const $closeMemoBtn = document.querySelector(".memo-modal-wrap .off-modal");
const $memoModalWrap = document.querySelector(".memo-modal-wrap");
const $txtMemo = document.querySelector("#txtMemo");
const $btnMemo = document.querySelector(".btn-memo-post");
const $memoWrap = document.querySelector(".wrap");

// 메모 모달창 열기
$openMemoBtn.addEventListener("click", () => {
  $memoModalWrap.classList.remove("hidden");
});
// 메모 모달창 닫기(닫기 버튼)
$closeMemoBtn.addEventListener("click", () => {
  $memoModalWrap.classList.add("hidden");
});
// 메모 모달창 닫기(backdrop)
$memoModalWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("memo-modal-wrap")) {
    $memoModalWrap.classList.add("hidden");
  }
});

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
    memoText.innerHTML = memo.memo;
    deleteBtn.classList.add("memo-delete-btn");
    memoCont.append(memoText, deleteBtn);

    // 입력 값의 길이에 따라 다른 style 지정
    if (memo.memo.length < 30) {
      memoText.classList.add("short-memo");
    } else if (memo.memo.length > 107) {
      memoText.classList.add("long-memo");
    } else {
      memoText.classList.add("regular-memo");
    }

    const $deleteBtns = document.querySelectorAll(".memo-delete-btn");
    $deleteBtns.forEach((button) => {
      button.addEventListener("click", removeMemo);
    });
  });
}

const renderMemo = () => {
  let getText = $txtMemo.value;
  getText = getText.replaceAll(/(?:\r\n|\r|\n)/g, "<br>");

  //DOM 생성
  const memoCont = document.createElement("div");
  const memoText = document.createElement("p");
  const deleteBtn = document.createElement("button");
  memoCont.classList.add("memo-cont");
  $memoWrap.insertBefore(memoCont, parent.firstChild);
  memoText.innerHTML = getText;
  deleteBtn.classList.add("memo-delete-btn");
  memoCont.append(memoText, deleteBtn);

  $txtMemo.value = "";

  // 입력 값의 길이에 따라 다른 style 지정
  if (getText.length < 30) {
    memoText.classList.add("short-memo");
  } else if (getText.length > 107) {
    memoText.classList.add("long-memo");
  } else {
    memoText.classList.add("regular-memo");
  }

  const $deleteBtns = document.querySelectorAll(".memo-delete-btn");
  $deleteBtns.forEach((button) => {
    button.addEventListener("click", removeMemo);
  });
};

// 새로운 메모를 추가하는 함수
const addMemo = () => {
  let getText = $txtMemo.value;
  getText = getText.replaceAll(/(?:\r\n|\r|\n)/g, "<br>");

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

  memoList.forEach((memo) => {
    if (memo.memo === event.target.parentNode.children[0].innerHTML) {
      // 메모 삭제
      memoList.splice(memoList.indexOf(memo), 1);
    }
  });
  localStorage.setItem("my-memo", JSON.stringify(memoList));
  event.target.parentElement.remove();
};

$btnMemo.addEventListener("click", addMemo);
