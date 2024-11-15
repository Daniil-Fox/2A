const timerContainer = document.querySelector(".spec-offer__time");

if (timerContainer) {
  const dedlineTime = timerContainer.dataset.time
  const deadline = new Date(dedlineTime);
  // id таймера
  let timerId = null;
  const hours = document.querySelector(".timer__hours");
  const minutes = document.querySelector(".timer__minutes");
  const seconds = document.querySelector(".timer__seconds");
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }

    const h = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) : 0;
    const m = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const s = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    hours.innerHTML =
      h < 10
        ? `<span><span>0${h}</span></span>`
        : `<span><span>${h}</span></span>`;
    minutes.innerHTML =
      m < 10
        ? `<span><span>0${m}</span></span>`
        : `<span><span>${m}</span></span>`;
    seconds.innerHTML =
      s < 10
        ? `<span><span>0${s}</span></span>`
        : `<span><span>${s}</span></span>`;
  }

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
}
