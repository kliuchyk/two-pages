window.document.onload = (function(e) {
  const plan = localStorage.getItem("plan");

  if (plan === "trial") {
    document.querySelector(".limited-offer").style.display = "block";
  } else if (plan === "annual") {
    document.querySelector(".annual-plan").style.display = "block";
  }
})();
