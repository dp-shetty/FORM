
let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("pwd");
let heading = document.getElementById("heading");
heading.innerText = "";
heading.style.visibility = "hidden";
heading.style.textAlign = "center";
heading.style.marginLeft = "-643px";


//    margin-left: -643px;


console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let getData = JSON.parse(localStorage.getItem("users"));
    let loginSuccessful = false;

    getData.some((user) => {
        console.log(user);

        if(email.value === user.number || email.value === user.email && password.value === user.confirmPassword) {
            heading.style.visibility = "visible";
            heading.innerText = "login successfull"
            heading.style.borderColor="white"
            heading.style.color="rgb(98, 237, 47)"
            heading.style.fontSize="50px"
            window.open("view.html");
            loginSuccessful = true;
            return true; // Stop executing the function for the remaining elements
        }
    });

    if (!loginSuccessful) {
        heading.style.visibility = "visible";
        heading.style.color="red"
        heading.innerText = "user credentials not matching";
    }


});


form.addEventListener("reset",()=>{
    form.reset()
})