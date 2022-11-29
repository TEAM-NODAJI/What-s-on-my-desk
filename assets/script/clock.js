const tabletDate = document.querySelector(".date-tablet");
const tabletClock = document.querySelector(".clock-tablet");

function getTime() {
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth() + 1;
  const nowDate = date.getDate();

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const nowDay = week[date.getDay()];

  tabletDate.textContent = `${nowYear}년 ${nowMonth}월 ${nowDate}일 ${nowDay}`;
  const nowHour = date.getHours();
  const nowMinute = date.getMinutes();
  const nowSecond = date.getSeconds();

  // console.log(nowHour, nowMinute, nowSecond)
  tabletClock.textContent = `${nowHour} : ${nowMinute} : ${nowSecond}`;
  requestAnimationFrame(getTime);
}

function liveClock() {
  requestAnimationFrame(getTime);
}
liveClock();
