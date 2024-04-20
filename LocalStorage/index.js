// Write your code below:

function myFunction(event){
    console.table(event.target[0].value)
    event.preventDefault();
    const u_name=event.target[0].value
    const u_email=event.target[1].value
    const u_phone=event.target[2].value
    localStorage.setItem("Username",u_name);
    localStorage.setItem( "Email",u_email);
    localStorage.setItem("Phone",u_phone);
}