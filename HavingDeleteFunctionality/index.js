function handleFormSubmit(event) {
  // debugger
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    //Showing the list of user details on screen
    const newLi = document.createElement('li');
    newLi.innerHTML = username + ' - ' + email + ' - ' + phone+'<button>Delete</button>'
    const userList = document.querySelector("ul");
    userList.appendChild(newLi);     
    
  
    //Best way to store details in local storage is using objects.
    const obj = { username: username, email: email, phone: phone };
    const modifiedObj = JSON.stringify(obj); //Coverting to JSON objects
    localStorage.setItem(email, modifiedObj);
     //deleting data from localstorage and deocument
    const deleteButton=userList.querySelector("button");
    deleteButton.addEventListener("click",function(){
      localStorage.removeItem(email);
      const removeList=deleteButton.parentElement;
      userList.removeChild(removeList)
    })
  
  
  }
  // const btn=document.querySelector("button")
  // console.log(btn)
  // btn.addEventListener("click",function(event){
  //   console.log(event.target.value)
  // })
  

  // const deleteButton = userList.querySelector("button");
  // deleteButton.click()
  // deleteButton.addEventListener("click",function(event){
    
  //   console.log(event.type)
  // })
  
  // const userDetails = JSON.parse(localStorage.getItem(delR)).email;
  //  localStorage.removeItem(userDetails)
  