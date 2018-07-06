(function () {



    function createPassword(minLength, maxLength) {
        let char = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
        let pass = "";
        let numOfChar = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        let i;

        for (i = 0; i < numOfChar; i++) {
            let currCharIndex = Math.floor(Math.random() * char.length);
            pass += char.charAt(currCharIndex);
        }
        return pass;
    }

    function generate() {
        document.getElementById("passWindow").innerHTML = createPassword(5, 10);
    }

    const div = document.createElement("div");
    document.body.appendChild(div);

    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.id = "title";
    h2.innerHTML = "Random generated password";

    const passWindow = document.createElement("h2");
    div.appendChild(passWindow);
    passWindow.id = "passWindow";

    const button = document.createElement("button");
    div.appendChild(button);

    const icon = document.createElement("i");
    button.appendChild(icon);
    icon.className = "fas fa-redo";

    button.addEventListener("click", generate);

})();
