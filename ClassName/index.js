const mainHead=document.getElementById("main-heading");
mainHead.innerHTML="Fruit World";
mainHead.style.color="orange";
const fruits=document.getElementsByClassName("fruit")
fruits[2].style.backgroundColor="yellow";

for(let element of fruits){
    element.style.fontWeight="bold";
}