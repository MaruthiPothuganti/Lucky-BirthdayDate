const userBirthDate = document.querySelector("#birthDate");
const userLuckyNumber = document.querySelector("#luckyNumber");
const btnCheckLuck = document.querySelector("#check");
const message = document.querySelector("#outputMessage");
const btnNext = document.querySelector("#next");

const birthDate = userBirthDate.toString();
const luckNumber = userLuckyNumber.toString();

btnNext.disabled = "true";
btnCheckLuck.disabled = "true";

function enable() {
    if (birthDate.trim() === "") {
        btnNext.disabled = "true";
    } else {
        btnNext.disabled = "";
    }
}

function enableCheck() {
    if (luckNumber.trim() === "") {
        btnCheckLuck.disabled = "true";
    } else {
        btnCheckLuck.disabled = "";
    }
}

btnNext.addEventListener("click", function activateNextInput() {
    btnCheckLuck.style.display = "inline";
    userLuckyNumber.style.display = "inline";

});



btnCheckLuck.addEventListener("click", function checkIfLucky() {

    const dob = userBirthDate.value;

    const totalSum = sumDate(dob);
    document.getElementById('happy').style.display = "none";
    document.getElementById('sad').style.display = "none";
    document.getElementById('outputMessage').style.display = "none";

    if (Number(userLuckyNumber.value) > 0) {
        if (totalSum % (Number(userLuckyNumber.value)) === 0) {

            document.getElementById('loading').style.display = "inline";
            setTimeout(function() {
                document.getElementById('loading').style.display = "none";
                showMessage("YOUR BIRTHDAY IS LUCKY🥳🤩");
                document.getElementById('happy').style.display = "inline";
            }, 5000);



        } else {

            document.getElementById('loading').style.display = "inline";
            setTimeout(function() {
                document.getElementById('loading').style.display = "none";
                showMessage("Uh,oh.. Sorry, BetterLuck in NextLife😅");
                document.getElementById('sad').style.display = "inline";
            }, 5000);

        }
    } else {
        showMessage("Your lucky number cant be '0' or below right? or Should I say'This is invalid 😅'");
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
    document.getElementById('outputMessage').style.display = "";
    message.innerText = msg;
}


function showLoading() {

}