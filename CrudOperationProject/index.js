// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    
    var reqURL="https://crudcrud.com/api/f23eb925520c462d901a0b96900d1ccd/studentData"
    let userDetails={
      username:event.target.username.value,
      address:event.target.address.value,
      phone:event.target.phone.value,
    }
    axios.post(`${reqURL}`,
    userDetails).then((result) => {displayUserOnScreen(result.data) 
    }).catch((err) => {
      console.log(err)
    });
    let para=document.getElementById("count");
    para.innerText++
   

  //   console.log(userDetails)
    localStorage.setItem(userDetails.address,JSON.stringify(userDetails));
    
    document.getElementById("username").value="";
      document.getElementById("address").value="";
      document.getElementById("phone").value="";
  
  }
  window.addEventListener("DOMContentLoaded",function(){
    var reqURL="https://crudcrud.com/api/f23eb925520c462d901a0b96900d1ccd/studentData"
      axios.get(`${reqURL}`)
      .then((result) => {
          for(let i=0;i<result.data.length;i++){
              // console.log(result.data[i])
              showNewUserScreen(result.data[i])
          }
          let para=document.getElementById("count");
          console.log(result.data.length)
          para.innerText=result.data.length
      }).catch((err) => {
      console.log(err)
    });
  })
  function showNewUserScreen(getData){
     if(localStorage.getItem(getData.address)!==null){
      let actualgetData=localStorage.getItem(getData.address);
        displayUserOnScreen(getData)
       
     }
  }
  
  
  
  function displayUserOnScreen(normalJs){
    var reqURL="https://crudcrud.com/api/f23eb925520c462d901a0b96900d1ccd/studentData"
      const ulist=document.querySelector("ul");
    const userItem=document.createElement("li");
    const child=`${normalJs.username}-${normalJs.address}-${normalJs.phone} <button id="delete">Delete</button> <button id="edit">edit</button>`;
    userItem.innerHTML=child;
    ulist.appendChild(userItem);
    const dbtn=userItem.querySelector("#delete")
    dbtn.addEventListener("click",function(){
      // debugger
      axios.delete(`${reqURL}/${normalJs._id}`)
      .then((res)=>{
          console.log(res)
      }).catch((err)=>{
          console.log(err)
      })
      let para=document.getElementById("count");
      if(para.innerText>0){

          para.innerText--
      }
      
      dbtn.parentElement.remove();
      console.log(normalJs._id)
      // console.log(pnode)
    })
    const editbtn=userItem.querySelector("#edit")
    editbtn.addEventListener("click",function(){
      document.getElementById("username").value=normalJs.username;
      document.getElementById("address").value=normalJs.address;
      document.getElementById("phone").value=normalJs.phone;
      axios.delete(`${reqURL}/${normalJs._id}`)
      .then((res)=>{
          console.log(res)
      }).catch((err)=>{
          console.log(err)
      })
      editbtn.parentElement.remove();
      // console.log(pnode)
    })
      // console.log(normalJs);
  
  }
  