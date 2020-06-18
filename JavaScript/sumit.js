const submitButton = document.getElementById("submit-button");
const requiredTxt = document.getElementsByClassName("required");

/* Enable sumbit button after all rquiered fields are filled up*/
document.addEventListener("change", function() {
    for (let i = 0; i <= requiredTxt.length - 1; i++) {
        if (requiredTxt[i].value == "") break;
        if (i === requiredTxt.length - 1) submitButton.disabled = false;
    }
});

submitButton.addEventListener("click", function() {
    /* Get the value of info radio button to show on alert*/
    let infoValue;
    const info = document.getElementsByName("info");
    for (let i in info) {
        if (info[i].checked) infoValue = info[i].value;
    }

    /* Get the value of method radio button to show on alert*/
    let methodValue;
    const method = document.getElementsByName("method");
    for (let i in method) {
        if (method[i].checked) methodValue = method[i].value;
    }

    alert(
        `First Name: ${firstname.value}, Last Name: ${lastname.value}, Phone Number: ${phone.value}, Email: ${email.value}, Aditional information requested: ${infoValue}, Preferred contact method: ${methodValue}, Comments: ${comments.value}, Add to email list: ${subscribe.checked}`
    );
});