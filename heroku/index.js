const express = require('express')
const PORT = process.env.PORT || 5000;

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const requestPromise = require('request-promise');

const recaptchaValidationURL = "https://recaptcha.google.com/recaptcha/api/siteverify";
const secret = "6Lf8MLcUAAAAAFKg2FzPK_W2oeriV6o65mQ683IF";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(cookieParser());

const targetEmails = ['oana.dragulanescu@grivin.com','razvan.becheru@conicdesign.ro'];


const server = app.listen(PORT, function () {
    console.log('Node server is running..');
});

app.get('/',(req,res)=>{
    res.send("Deploy successful");
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
const gmailEmail = "notifications@conicdesign.ro";
const gmailPassword = "Gy42X7CYDk5h";



const mailtransport = nodemailer.createTransport(
    `smtps://notifications%40conicdesign.ro:Gy42X7CYDk5h@smtp.gmail.com`);


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
        console.log('New welcome email sent to:', target);
    });
}
