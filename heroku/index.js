const express = require('express')
const PORT = process.env.PORT || 5000;

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const requestPromise = require('request-promise');

const recaptchaValidationURL = "https://recaptcha.google.com/recaptcha/api/siteverify";
const secret = process.env.RECAPTCHA_SECRET;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(cookieParser());




const server = app.listen(PORT, function () {
    console.log('Node server is running..');
});

app.get('/',(req,res)=>{
    res.send("Deploy successful");
});

app.get('/test_email',(req,res)=>{
    sendEmail("This is a test","test").then(()=>res.send('Message sent to ' + targetEmails));
});


app.get('/keepalive',(req,res)=>{
    let repeat = parseInt(req.query.repeat);
    if(!repeat)
        repeat=100;
    if(repeat>1000)
        repeat=1000;
    console.log(repeat);
    for(let i=0;i<req.query.repeat;i++){
        console.log([...Array(Math.floor(Math.random()*100)).keys()]);
    }
    res.send("200")
});

app.post('/message', (req, res) => {

    validateRecaptcha(req.body);
    res.send(req.body);
});

app.post('/order', (req, res) => {

    console.log(req.body);
    sendEmail(JSON.parse(req.body), "Comanda noua");
    res.send(req.body);
});

function validateRecaptcha(payload){

    let recaptchaCode = payload['g-recaptcha-response'];

    requestPromise({
        uri: recaptchaValidationURL,
        method: 'POST',
        formData: {
            secret: secret,
            response: recaptchaCode
        },
        json: true
    }).then(result => {
        if (result.success) {
            console.log("AYAY");
            sendEmail(payload,"Mesaj nou - grivin");
        }else{
            sendEmail(payload,"SPAM - grivin");
            console.log("NEY");
        }

    });
}







const nodemailer = require('nodemailer');
const gmailEmail = process.env.EMAIL_USERNAME;
const gmailPassword = process.env.EMAIL_PASSWORD;
const targetEmails =process.env.TARGET_EMAILS.split(",");



const mailtransport = nodemailer.createTransport(
    `smtps://notifications%40conicdesign.ro:${gmailPassword}@smtp.gmail.com`);


function sendEmail(message, subject) {
    const mailOptions = {
        from: gmailEmail,
        to: targetEmails
    };

    if(message['g-recaptcha-response'])
        delete message['g-recaptcha-response'];


    message = JSON.stringify(message, null, 4);

    // The user subscribed to the newsletter.
    mailOptions.subject = subject;
    mailOptions.text = message;
    return mailtransport.sendMail(mailOptions).then(() => {
        console.log('New welcome email sent to:', targetEmails);
    });
}
