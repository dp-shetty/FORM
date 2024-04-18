
let getData = JSON.parse(localStorage.getItem("users"))
console.log(getData)
let usersList=document.getElementById("usersList")
let tableHead = document.getElementById("tableHead")
let body = document.body
let h1 = document.createElement("h1")
body.append(h1)
h1.style.visibility="hidden"
console.log(h1);

getData.map((item)=>{

    usersList.innerHTML +=`
    <tr>
    <td>${item.firstname}</td>
    <td>${item.lastname}</td>
    <td>${item.number}</td>
    <td>${item. confirmPassword}</td>
    <td>${item.dob}</td>
    <td>${item.email}</td>
    <td>${item.gender}</td>
    </tr>`;
})

function search(){

  usersList.innerHTML=""
  tableHead.innerHTML=""


  //! searching

  let nameInput = document.getElementById("name").value.trim()
  let numberInput = document.getElementById("number").value.trim()
  let emailInput = document.getElementById("email").value.trim()

  let filteredUsers = getData.filter((user)=>{
    return user.firstname.toLowerCase().includes(nameInput.toLowerCase().trim()) && user.number.includes(numberInput.trim()) && user.email.toLowerCase().includes(emailInput.toLowerCase().trim())
  })

  // filteredUsers.length
  // console.log(filteredUsers.length);
  console.log(!filteredUsers.length);
  if(!filteredUsers.length){
    h1.innerText="user not found"
    h1.style.visibility="visible"
  }else if(filteredUsers.length){
    h1.innerText="no user found"
    h1.style.visibility="hidden"
  }




    console.log(filteredUsers);

    filteredUsers.map(val=>{

      tableHead.innerHTML=`
      <tr>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Number</th>
      <th>Password</th>
      <th>DOB</th>
      <th>Email</th>
      <th>Gender</th>
      </tr>
      `

      tableHead.style.cssText=`
      border: 1px solid black;
      border-collapse: collapse;
      padding: 15px;
      `

      usersList.innerHTML+= `
      <tr>
      <td>${val.firstname}</td>
      <td>${val.lastname}</td>
      <td>${val.number}</td>
      <td>${val.confirmPassword}</td>
      <td>${val.dob}</td>
      <td>${val.email}</td>
      <td>${val.gender}</td>
      </tr>
      `
})


}

