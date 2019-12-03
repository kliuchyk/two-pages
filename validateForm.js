const form = document.forms[0];
const fName = form.querySelector('input[name="fname"]');
const card = form.querySelector('input[name="card"]');
const month = form.querySelector('input[name="month"]');
const year = form.querySelector('input[name="year"]');
const lname = form.querySelector('input[name="lname"]');

const validateCardNumber = () => {
  card.addEventListener("keypress", e => {
    return e.charCode >= 48 && e.charCode <= 57 ? true : e.preventDefault();
  });

  card.addEventListener("input", e => {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    if (card.value) {
      document.querySelector(".card-number .img-success").style.display =
        "block";
    }
  });
};

validateCardNumber();

const validateFirstName = () => {
  fName.addEventListener("input", e => {
    if (fName.value) {
    }
  });
};

const validateForm = () => {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const cardValue = card.value.split(" ").join("");

    if (cardValue.length < 12) {
      document.querySelector(".fname").style.marginTop = "20px";
      document.querySelector(".lname").style.marginTop = "20px";
      document.querySelector(".card-number .error-msg").style.display = "block";
    } else if (cardValue.length === 12) {
      document.querySelector(".card-number .error-msg").style.display = "none";
    }
  });
};

validateForm();
