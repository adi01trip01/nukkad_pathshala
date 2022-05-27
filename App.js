const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static(__dirname + '/public'));



port = 3008

//config
app.set("view engine", "hbs")
app.set("views", "./view")


//Routing
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/about_us", (req,res) => {
    res.render("about_us");
});

app.get("/contact_us", (req,res) => {
    res.render("contact_us");
});

app.get("/treat_now", (req,res) => {
  res.render("treat_now");
});

app.get("/voulenteer", (req,res) => {
  res.render("voulenteer");
});

/*app.post("/message", (req,res) => {
    const output = `
      <p>You have a new contact request...</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name:${req.body.name}</li>
        <li>Name:${req.body.email}</li>
        <li>Name:${req.body.mobile}</li>
      </ul>              
      <h3>Contact Details</h3>
      <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "aditya01tripathi01@gmail.com", // generated ethereal user
      pass: "chhotuRewa$001", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"NukkadPathshla 👻" <aditya01tripathi01@gmail.com>', // sender address
    to: "aditya01tripathi01@gmail.com", // list of receivers
    subject: "NukkadPathshala Contact Query", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.render("contact_us", {msg: 'Email Sent...'});
});*/

app.get("/our_work", (req,res) => {
    res.render("our_work");
});

//create server
app.listen(port, (err) => {
    if (err)
        throw err
    else
      console.log("Server is running at %d:", port);    
});