const display = document.getElementById("display");
const buttons = Array.from(document.querySelectorAll("button"));
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Erro";
            }
        }else if(value === "C"){
            currentInput = "";
        } else {
            currentInput += value;
        }

        display.innerText = currentInput || "0";
    });
});
