const mainItem = document.querySelector(".main");
const mailField = document.querySelector(".main__card__mailField");
const mailInput = document.getElementById("mail-input");
const dismissMssg = document.getElementById("dismiss-message");

document.forms[0].addEventListener("submit", handleFormSubmition);
mailInput.addEventListener("input", () => mailField.classList.remove("error"));
dismissMssg.addEventListener("click", handleDismissClicking);

function handleFormSubmition(e) {
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,12}$/.test(mailInput.value.trim())) mailField.classList.add("error");
    else {
        document.documentElement.classList.add("loading");
        setTimeout(() => {
            document.documentElement.classList.remove("loading");
            mainItem.classList.add("done");
            document.getElementById("mail-to-send").textContent = mailInput.value.trim();
        }, 800);
    }
    
    e.preventDefault();
};

function handleDismissClicking() {
    document.documentElement.classList.add("loading");
    setTimeout(() => location.reload(), 800);
}
