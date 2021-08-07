const userBirthDate = document.querySelector("#birthDate");
const userLuckyNumber = document.querySelector("#luckyNumber");
const btnCheckLuck = document.querySelector("#check");
const message = document.querySelector("#outputMessage");



btnCheckLuck.addEventListener("click", function checkIfLucky() {

    const dob = userBirthDate.value;

    const totalSum = sumDate(dob);
    if (totalSum % (Number(userLuckyNumber.value)) === 0) {
        showMessage("YOUR BIRTHDAY IS LUCKY😉");
    } else {
        showMessage("Uh,oh.. Sorry, BetterLuck in NextLife😅");
    }


});

function sumDate(dob) {
    const dobDate = dob.replaceAll("-", "");
    let sum = 0;
    for (var i = 0; i < dobDate.length; i++) {
        sum = sum + Number(dobDate[i]);
    }
    return sum;
}

function showMessage(msg) {
    message.innerText = msg;
}