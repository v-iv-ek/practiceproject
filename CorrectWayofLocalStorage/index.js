// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    const userDetais={
        username:event.target[0].value,
        email:event.target[1].value,
        phone:event.target[2].value
    }
    const convert=JSON.stringify(userDetais);
    localStorage.setItem("User Details",convert)
    
}
module.exports=handleFormSubmit;