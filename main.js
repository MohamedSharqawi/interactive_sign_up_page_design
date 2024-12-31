document.forms[0].onsubmit = function () {
    let mainCont = document.querySelector("main");
    let mailInput = document.querySelector("main .txt form input[type='text']");
    let hidScreen = document.querySelector(".full-screen")
    let mailContent = document.querySelector(".full-screen .success-msg .confirm .mail");
    let confirmMsg = document.querySelector(".full-screen .success-msg a");
    let mailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6})$/;

    if (mailInput.value == "") mailInput.focus();
    else if (!(mailRegex.test(mailInput.value))) {
        document.querySelector("main .txt form .mail-txt .error").style.cssText = `display: block;`;
        mailInput.style.cssText = `border-color: var(--tomato); background-color: hsla(0, 100%, 50%, 0.05); color: var(--tomato);`
    }
    else {
        hidScreen.style.cssText = `display: flex;`;
        mainCont.style.cssText = `display: none;`;
        mailContent.innerText = mailInput.value;
        confirmMsg.onclick = function () {
            hidScreen.style.cssText = `display: none;`;
            mainCont.style.cssText = `display: grid;`;
            mailInput.value = "";
            document.querySelector("main .txt form .mail-txt .error").style.cssText = `display: none;`;
            mailInput.style.cssText = `border-color: var(--real-gray); background-color: transparent; color: var(--dark-gray);`
        }
    }
    return false;
}