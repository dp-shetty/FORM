let form = document.getElementById("form");

let firstName = document.getElementById("username1");
let lastname = document.getElementById("username2");
let number = document.getElementById("number");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let password = document.getElementById("pwd");
let confirmPassword = document.getElementById("cpwd");
let gender = document.getElementById("gender")
let error = document.getElementById("error")
let btn = document.getElementById("btn")
let letterPattern = /^[a-zA-Z]*$/
  error.style.visibility="hidden"



form.addEventListener("submit", (e) => {
  e.preventDefault();





  if(firstName.value===""||lastname.value===""||email.value===""||number.value===""||password.value===""||confirmPassword.value===""){
    error.style.visibility="visible"
    error.innerText="fill all the fields"
    return;
  }else{
    error.style.visibility="hidden"
  }



  let users = JSON.parse(localStorage.getItem("users") || "[]");

  let inputNumberData = number.value
  let inputEmailData =email.value

 let t=users.every((element,index)=>{
    console.log(element);
    
    if(inputNumberData===element.number){
      // alert("number already exists")
      error.style.visibility="visible"
      error.innerText="number already exists"
      return false;
    }else if( inputEmailData===element.email){
      error.style.visibility="visible"
      error.innerText="email already exists"
      return false;
    }else{
     return true;
    }
  })
  if(t){

    let user1 = {
      firstname: firstName.value,
      lastname: lastname.value,
      number: number.value,
      dob: dob.value,
      email: email.value,
      confirmPassword: confirmPassword.value,
      gender: gender.value,
    };
  

    users.push(user1);
    console.log(JSON.stringify(users));
      // console.log("hhjh");
    localStorage.setItem("users", JSON.stringify(users));
  }


  if(error.innerText="number already exists"){
    !form.reset()
  }else if(error.innerText="email already exists"){
    !form.reset()
  }else {
    error.innerText="form submitted successfully"
    error.style.borderColor="green"
    error.style.textShadow="1px 1px 2px green"
    form.reset()
  }

  window.open("login.html")
  // window.open("view.html")

});


firstName.addEventListener("keyup",(e)=>{

  e.preventDefault()

  if(firstName.value ===""){
    error.style.visibility="visible"
    error.innerText="first name should not be empty"
  }else if(!firstName.value.match(letterPattern)){
    error.style.visibility="visible"
    error.innerText="first name shouldonly have alphabets"
  }else if(firstName.value !=="" && firstName.value.match(letterPattern) ){
    error.style.visibility="hidden"
  }


})

lastname.addEventListener("keyup",(e)=>{

  e.preventDefault()

  if(lastname.value ===""){
    error.style.visibility="visible"
    error.innerText="last name should not be empty"
  }else if(!lastname.value.match(letterPattern)){
    error.style.visibility="visible"
    error.innerText="last name should contain only alphabets"
  }else if(lastname.value !=="" && lastname.value.match(letterPattern) ){
    error.style.visibility="hidden"
  }
  
})

number.addEventListener("keyup",(e)=>{

  e.preventDefault()

  if(isNaN(number.value) || number.value.length!=10) {
    error.style.visibility="visible"
    error.innerText="invalid number"
  }else if(!isNaN(number.value) || number.value.length==10){
    error.style.visibility="hidden"
  }
  
})

email.addEventListener("keyup",(e)=>{

  e.preventDefault()

  if(!email.value.includes("@gmail.com")){
    error.style.visibility="visible"
    error.innerText="invalid email"
  }else if(email.value.includes("@gmail.com")){
    error.style.visibility="hidden"
  }
  
})

password.addEventListener("keyup",(e)=>{

  e.preventDefault()

  if(password.value.length<6){
    error.style.visibility="visible"
    error.innerText="password must contain 8 characters"
  }else if(password.value.length>6){
    error.style.visibility="hidden"
  }
  
})

confirmPassword.addEventListener("keyup",(e)=>{

  e.preventDefault()

if(confirmPassword.value!==password.value){
    error.style.visibility="visible"
    error.innerText="password is not matching"
  }else if(confirmPassword.value===password.value){
    error.style.visibility="hidden"
  }
  
})


//!
// let arr = []
//let users ={key:value}
//arr.push(users)
//localStorage.setItem("users", JSON.stringify(users));
// /^[0-9]*$/
// /^[a-zA-Z]*$/






