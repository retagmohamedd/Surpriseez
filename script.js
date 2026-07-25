const openBtn = document.getElementById("openBtn");
const continueBtn = document.getElementById("continueBtn");

const welcome = document.getElementById("welcome");
const passwordPage = document.getElementById("passwordPage");

const password = document.getElementById("password");
const error = document.getElementById("error");

openBtn.onclick = () => {
    welcome.classList.remove("active");
    passwordPage.classList.add("active");
};

continueBtn.onclick = () => {
    if (password.value === "1/2/2026") {
        alert("Correct password! 🎉");
    } else {
        error.innerText = "Wrong password ❤️";
    }
};
