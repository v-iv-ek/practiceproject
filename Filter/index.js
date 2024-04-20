// Add input element inside form, before button, to take fruit description
const fruits=document.querySelector(".fruits");
const description=document.createElement("input");
const form=document.querySelector("form");
description.setAttribute("id","description");
console.log(description)
const sub=document.querySelector("button");
form.insertBefore(description,sub);
const desc=document.createElement("p");
const descText=document.getElementById("description");
const fruitToAdd=document.getElementById("fruit-to-add");
const newLi=document.createElement("li");
const fruit=document.getElementsByClassName("fruit");
newLi.classList="fruit"
for(let i=0;i<fruit.length;i++){
    const desc=document.createElement("p");
    // const descText=document.getElementById("description");
    desc.innerText="Description";
    desc.style.fontStyle="italic"
    fruit[i].appendChild(desc)
    
}


// Show the fruit description in italics on the next line


    form.addEventListener("submit",function(event){
        event.preventDefault();
        desc.innerText=descText.value;
        desc.style.fontStyle="italic"
        newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>'+`<p style="font-Style:italic">desc</p>`; 
        fruits.appendChild(newLi);   
        console.log(fruits)  
    })
    fruits.addEventListener("click",function(event){
        if(event.target.classList.contains('delete-btn')){
            const fruitToDelete=event.target.parentElement;
            fruits.removeChild(fruitToDelete);
        }
    })


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter=document.getElementById("filter");
filter.addEventListener("keyup",function(event){
    const textEntered=event.target.value.toLowerCase();
    const fruitItems=document.getElementsByClassName("fruit");
    for(let i=0;i<fruitItems.length;i++){
        console.log(fruitItems[i])
    const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase();
    const descriptionText=fruitItems[i].lastElementChild.innerText.toLowerCase();
    console.log(descriptionText.indexOf(textEntered));
    // debugger
    if(currentFruitText.indexOf(textEntered)===-1){
        fruitItems[i].style.display="none";
    }else{
        fruitItems[i].style.display="flex";
    }
    }
})