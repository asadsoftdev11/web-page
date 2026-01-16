// document.getElementById("submitbutton").onclick = function () {
const submitBtn = document.getElementById("submitbutton");
if (submitBtn) {
    submitBtn.onclick = function () {
        if (
            !document.getElementById("firstName").value ||
            !document.getElementById("email").value ||
            document.getElementById("country").value === "Select" ||
            document.getElementById("city").value === "Select" ||
            !(
                document.getElementById("age1").checked ||
                document.getElementById("age2").checked ||
                document.getElementById("age3").checked
            )
        ) {
            alert("Please fill in all required fields.");
        } else {
            alert("Form submitted successfully! The calculator is coming soon, and you will be notified via email. You can still see it by clicking the link below the form. Thanks for your patience.");
        }
    };
}


const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

if (display && buttons.length > 0) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                display.value = '';
            }
            else if (button.id === 'c') {
                display.value = display.value.slice(0, -1);
            }
            else if (button.id === 'equals') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
}