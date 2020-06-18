const footerMsg = document.getElementById("array");
const languages = ['HTML', 'CSS', 'JavaScript'];


let textLanguage = " ";

for (let i = 0; i < languages.length; i++) {
    if (i === (languages.length - 1)) {
        textLanguage += ` and ${languages[i]}`;
    } else if (i === languages.length - 2) {
        textLanguage += `${languages[i]}`;
    } else {
        textLanguage += ` ${languages[i]}, `
    };
};



footerMsg.innerText = textLanguage;