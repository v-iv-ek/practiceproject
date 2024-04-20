const header=document.querySelector("#main-heading");
header.style.textAlign="right"
const h2=document.querySelector("h2")
h2.style.color="brown";
h2.style.marginLeft="30px";
const hfruits=document.querySelector(".fruits");
hfruits.style.backgroundColor="gray"
hfruits.style.padding="30px";
hfruits.style.margin="30px";
hfruits.style.width="50%";
hfruits.style.borderRadius="5px";
hfruits.style.listStyleType="none";
const listFruit=document.querySelectorAll(".fruit");
for(let i=0;i<listFruit.length;i++){
   listFruit[i].style.backgroundColor="white"
   listFruit[i].style.padding="10px";
   listFruit[i].style.margin="10px";
   listFruit[i].style.borderRadius="5px";
}
const evenListFruit=document.querySelectorAll(".fruit:nth-child(even)"); 
for(let i=0;i<evenListFruit.length;i++){
   evenListFruit[i].style.backgroundColor="brown";
   evenListFruit[i].style.color="white"
}