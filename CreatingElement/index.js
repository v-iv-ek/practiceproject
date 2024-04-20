const header=document.getElementById("header")
const h3=document.createElement("h3");
const htext=document.createTextNode("Buy high quality organic fruits online");
h3.setAttribute("id","sub-heading");
h3.appendChild(htext)
h3.style.fontStyle="italic";
header.appendChild(h3);
const div=document.getElementsByTagName("div");
const secondDiv=div[1];
const p=document.createElement("p")
const paraText=document.createTextNode("Total fruits: 4");
const uList=document.querySelector(".fruits")
p.appendChild(paraText);
p.setAttribute("id","fruits-total");
secondDiv.insertBefore(p,uList);