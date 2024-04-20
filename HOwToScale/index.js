 function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    //Showing the list of user details on screen
    const newLi = document.createElement('li');
    newLi.innerHTML = username + ' - ' + email + ' - ' + phone;
    const userList = document.querySelector('#userList');
    userList.appendChild(newLi);
  
    //Best way to store details in local storage is using objects.
    const obj = { username: username, email: email, phone: phone };
    const modifiedObj = JSON.stringify(obj); //Coverting to JSON objects
    localStorage.setItem(email, modifiedObj);
  }






// function handleFormSubmit(event){
//     event.preventDefault()
//      const userDetails={
//          username:event.target[0].value,
//          email:event.target[1].value,
//          phone:event.target[2].value
//      }
    
//      const ul=document.getElementById("userList");
//      const listItem=document.createElement("li");
//      const listText=document.createTextNode(`${userDetails.username}-${userDetails.email}-${userDetails.phone}`);
//      console.log(listItem);
//      console.log(listText)
//      listItem.appendChild(listText);
//      ul.appendChild(listItem)
//      let convert=JSON.stringify(userDetails)
     
//      localStorage.setItem(userDetails.username,convert)
     
//  }
//  important points



