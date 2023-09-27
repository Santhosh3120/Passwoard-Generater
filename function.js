function makePassword(){
    let specialChar= "~!@#$%^&*";
    let date= new Date();

    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.toJSON().slice(0, 10).split("-")[1];
    const specialCharacter = specialChar.split('')[Math.floor(Math.random() * specialChar.length)];
    const seconds = date.getSeconds();
    const password = `${month}${day}${specialCharacter}${addZero(seconds)}`;
    return password;


}
function generatPassword() {
    let generatedPassword = makePassword();

    let input = document.getElementById("inputTxt");
    input.value = generatedPassword;
}

function copyText() {
    let copyText = document.getElementById("inputTxt");
    let hintText = document.getElementById("hint");

    if (copyText.value === "") {
        let element = document.getElementById("container2");
        element.classList.add("error");
        setTimeout(() => {
            element.classList.remove("error");
        }, 1000);
    } else {
        copyText.select();// select the input field
        copyText.setSelectionRange(0,99999);
        document.execCommand("copy");
        hintText.innerText = "copied"
        navigator.clipboard.writeText(copyText.value);
    
        setTimeout(() => {
            let hintText = document.getElementById("hint");
            hintText.innerHTML = "&nbsp;"
        }, 1000);
    }


}

function clearPassword() {
    let input = document.getElementById("inputTxt");
    let hintText = document.getElementById("hint");
    input.value = "";
    hintText.innerHTML = "&nbsp;"
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
