const tabletDate = document.querySelector(".date-tablet");
const tabletClock = document.querySelector(".clock-tablet");

function getTime() {
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth() + 1;
  const nowDate = date.getDate();

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const nowDay = week[date.getDay()];

  tabletDate.textContent = `${nowYear}년 ${nowMonth}월 ${nowDate}일 ${nowDay}요일`;
  const nowHour = date.getHours();
  const nowMinute = date.getMinutes();
  const nowSecond = date.getSeconds();

  tabletClock.textContent = `
    ${nowHour < 10 ? `0${nowHour}` : nowHour} 
    : ${nowMinute < 10 ? `0${nowMinute}` : nowMinute} 
    : ${nowSecond < 10 ? `0${nowSecond}` : nowSecond}`;
  requestAnimationFrame(getTime);
}

function liveClock() {
  requestAnimationFrame(getTime);
}
liveClock();
