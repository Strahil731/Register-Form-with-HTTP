window.addEventListener("load", solve);

function solve() {

    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const info = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    const btn = document.getElementById("submit");
    btn.addEventListener("click", getInfo);

    function getInfo(event) {
        event.preventDefault();

        fetch("https://register-form-user-default-rtdb.firebaseio.com/.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": info.firstName.value,
                "lastName": info.lastName.value,
                "email": info.email.value,
                "password": info.password.value
            })
        })
            .then(response => response.json())
            .then(response => console.log(response));

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
    }
}