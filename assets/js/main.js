const email = document.querySelector(".form--input");
const errorText = document.querySelector(".error--text");
const form = document.querySelector(".form");
const moudalAreia = document.querySelector(".moudal--selectarea");
const moudal = document.querySelector(".moudal");
const main = document.querySelector(".main--content");
const moudalBtn = document.querySelector("#moudal--btn");

form.addEventListener("submit", checkEmail);
moudalAreia.addEventListener("click", hide);
moudalBtn.addEventListener("click", hide);

function checkEmail(e) {
  e.preventDefault();
  if (
    email.value === "" ||
    email.value.length < 12 ||
    email.value.indexOf("@") === -1
  ) {
    errorText.classList.remove("d-n");
    email.classList.add("input--notvalid");
    return "done";
  }

  const userEmail = document.querySelector("#user--email");
  userEmail.textContent = email.value;
  setTimeout(() => {
    errorText.classList.add("d-n");
    email.classList.remove("input--notvalid");
    main.classList.add("d-n");
    moudal.classList.remove("d-n");
    moudal.classList.add("setAnimationIntro");
  }, 600);
  setTimeout(() => {
    moudal.classList.add("setAnimation");
  }, 800);
}

function hide(e) {
  setTimeout(() => {
    email.value = "";
    moudal.classList.add("d-n");
    main.classList.remove("d-n");
    main.classList.add("setAnimationIntro");
  }, 200);
  setTimeout(() => {
    main.classList.add("setAnimation");
  }, 400);
}
