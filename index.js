const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
// const data = require("./data.json");
let PORT = process.env.PORT || 3000;

let transporter = nodemailer.createTransport({
service:"gmail",
auth:{
    user:"vshrivastava@atlassoftweb.com",
    pass:"vickey#1209"
},
tls:
{
    rejectUnauthorized: false,
},

}); 
let mailOptions = {
    from:"shrivastav.vickey432@gmail.com",
    to:"vshrivastava@atlassoftweb.com",
    subject:"testing mail",
    text:"hi vijay this mail received from vickey ",
};

transporter.sendMail(mailOptions,function(err, success){
    if (err){
        console.log(err)
    } else{
        console.log("email sent successfully")
    }
})




app.get("/",(req,res) => {
    res.send("hello world");

});

// app.get("/api" , (req , res) => {
//     res.send(data);
// });

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});
