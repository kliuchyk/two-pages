const startTimer = () => {
  if (!document.querySelector(".section-plans__item_header-time")) {
    return false;
  }

  const countDownDate = new Date("December 31, 2019 23:59:59").getTime();
  const className = document.querySelector(".section-plans__item_header-time");

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    className.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  });
};

startTimer();

const setPlanType = () => {
  const elementClicked = document.querySelectorAll(
    ".section-plans__item_button"
  );

  elementClicked.forEach(el => {
    el.addEventListener("click", e => {
      if (el.dataset.identifier) {
        localStorage.setItem("plan", "trial");
      } else {
        localStorage.setItem("plan", "annual");
      }
    });
  });
};

setPlanType();
