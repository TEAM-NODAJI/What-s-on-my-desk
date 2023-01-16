const $inpMemo = document.querySelector(".inp-memo");
const $btnMemo = document.querySelector(".btn-memo");
const $memoWrap = document.querySelector(".wrap");

const postMemo = () => {
  let getText = $inpMemo.value;

  const memoCont = document.createElement("div");
  memoCont.classList.add("memo-cont");
  $memoWrap.appendChild(memoCont);
  
  const memoText = document.createElement("p");
  memoText.textContent= getText;
  memoCont.appendChild(memoText);
  
  if (getText.length < 30) {
    memoText.classList.add("short-memo");
  } else if (getText.length > 107) {
    memoText.classList.add("long-memo");
  } else {
    memoText.classList.add("regular-memo");
  }
  $inpMemo.value = "";
}

$btnMemo.addEventListener("click", postMemo);