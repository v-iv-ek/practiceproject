
function handleSubmit(event){
    event.preventDefault()
    const ul=document.querySelector("ul");
    const amount=event.target.amount.value;
    const desc=event.target.desc.value;
    const category=event.target.category.value;
    
    const li=document.createElement("li");
    li.innerHTML=`${amount}- ${desc}- ${category}`+`<button id="delete">Delete Expense</button>`+`<button id="edit">Edit Expense</button>`;
    ul.appendChild(li);
    const list=li.querySelector("#delete");
     list.addEventListener("click",function(){
        const para=list.parentElement;
        para.remove();
     });
     const editbutton=li.querySelector("#edit");
     editbutton.addEventListener("click",function(){
        const e=editbutton.parentElement;
        event.target.amount.value=amount;
        event.target.desc.value=desc;
        // console.log(amount)
        e.remove();
     })  
   
    event.target.amount.value="";
    event.target.desc.value="";


}