
function handleSubmit(event){
    event.preventDefault()
    const ul=document.querySelector("ul");
    const addData={
         amount:event.target.amount.value,
         desc:event.target.desc.value,
         category:event.target.category.value,
    }
    
    const li=document.createElement("li");
    li.innerHTML=`${addData.amount}- ${addData.desc}- ${addData.category}`+`<button id="delete">Delete Expense</button>`+`<button id="edit">Edit Expense</button>`;
    ul.appendChild(li);
    localStorage.setItem(addData.desc,JSON.stringify(addData))
    const list=li.querySelector("#delete");
     list.addEventListener("click",function(){
        const para=list.parentElement;
        para.remove();
        localStorage.removeItem(addData.desc)
     });
     
     const editbutton=li.querySelector("#edit");
     editbutton.addEventListener("click",function(){
        const e=editbutton.parentElement;
        event.target.amount.value=addData.amount;
        event.target.desc.value=addData.desc;
        // console.log(amount)
        e.remove();
        localStorage.removeItem(addData.desc)
     })  
   
    event.target.amount.value="";
    event.target.desc.value="";


}   