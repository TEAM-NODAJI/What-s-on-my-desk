const $inpMemo = document.querySelector(".inp-memo");
const $btnMemo = document.querySelector(".btn-memo");
const $memoWrap = document.querySelector(".wrap");

const postMemo = () => {
  const getText = $inpMemo.value;

  // 입력 값이 빈 문자열 일 경우
  if (!getText) {
    alert("메모를 입력해주세요!📝");
    return;
  }

  // DOM 생성
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

  // 메모 삭제
  deleteBtn.addEventListener("click", () => {
    $memoWrap.removeChild(memoCont);
  });
};

$btnMemo.addEventListener("click", postMemo);
