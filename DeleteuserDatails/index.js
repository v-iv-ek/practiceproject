// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    let userDetails={
      username:event.target.username.value,
      email:event.target.email.value,
      phone:event.target.phone.value,
    }
    axios.post("https://crudcrud.com/api/11c5f41ed6c9413abc3ea7c725ae3001/appointData",
    userDetails).then((result) => {displayUserOnScreen(result.data)  }).catch((err) => {
      console.log(err)
    });
    console.log(userDetails)
    localStorage.setItem(userDetails.email,JSON.stringify(userDetails));
    
    document.getElementById("username").value="";
      document.getElementById("email").value="";
      document.getElementById("phone").value="";
  
  }
  window.addEventListener("DOMContentLoaded",function(){
      axios.get("https://crudcrud.com/api/11c5f41ed6c9413abc3ea7c725ae3001/appointData")
      .then((result) => {
          for(let i=0;i<result.data.length;i++){
              // console.log(result.data[i])
              showNewUserScreen(result.data[i])
          }
      }).catch((err) => {
      console.log(err)
    });
  })
  function showNewUserScreen(getData){
     if(localStorage.getItem(getData.email)!==null){
      let actualgetData=localStorage.getItem(getData.email);
        displayUserOnScreen(getData)
       
     }
  }
  
  
  
  function displayUserOnScreen(normalJs){
      const ulist=document.querySelector("ul");
    const userItem=document.createElement("li");
    const child=`${normalJs.username}-${normalJs.email}-${normalJs.phone} <button id="delete">Delete</button> <button id="edit">edit</button>`;
    userItem.innerHTML=child;
    ulist.appendChild(userItem);
    const dbtn=userItem.querySelector("#delete")
    dbtn.addEventListener("click",function(){
      dbtn.parentElement.remove();
      axios.delete(`https://crudcrud.com/api/11c5f41ed6c9413abc3ea7c725ae3001/appointData/${normalJs._id}`)
      .then((res)=>{
          console.log(res)
      }).catch((err)=>{
          console.log(err)
      })
      console.log(normalJs._id)
      // console.log(pnode)
    })
    const editbtn=userItem.querySelector("#edit")
    editbtn.addEventListener("click",function(){
      document.getElementById("username").value=normalJs.username;
      document.getElementById("email").value=normalJs.email;
      document.getElementById("phone").value=normalJs.phone;
      editbtn.parentElement.remove();
      // console.log(pnode)
    })
      // console.log(normalJs);
  
  }
  