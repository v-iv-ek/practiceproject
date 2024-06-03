const express = require("express");
const router = express.Router();
const fs = require("fs");

// Login form
router.get("/login", (req, res) => {
  res.send(`
        <form  onSubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="POST">
            <input type="text" name="username" placeholder="Enter username"  id="username" required>
            <button type="submit">Login</button>
        </form>
    `);
});

// Handle login form submission
router.post("/", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  console.log(username, message);
  fs.writeFileSync("./user.txt",` ${username}:${message}`,{flag:"a"},(err)=>{
    err?console.log(err):res.redirect("/")
  });
  res.redirect("/");
})

// Home page
router.get("/", (req, res) => {
  fs.readFile('user.txt',(err,data)=>{
    if(err){
      console.log(err)
      data="No chat exits"
    }
    res.send(`
    ${data} <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <input type="hidden" id="username" name="username">
     <input type="text" name="message" id="message" placeholder="Send Message" required>
    <button type="submit">send</button>
  </form>`
);
  })
 
});

module.exports = router;

