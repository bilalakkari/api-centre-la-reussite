const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("Hello !")
})

const data = [{ Username: "admin", Password: "admin" }]

app.get('/', function (req, res) {
    res.send("Hello !")
})

app.get('/data', function (req, res) {
    res.send(data)
})

app.post('/contact', function (req, res) {
    console.log(req.body);

    const trasnporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            'user': 'bilal.akkari845@gmail.com',
            'pass': 'orykjjnsmpjispjx'
        }
    })

    const mailOptions = {
        from: req.body.FullName,
        to: 'bilal.akkari845@gmail.com',
        subject: `Message from ${req.body.Email}: ${req.body.Test}`,
        text: req.body.Text
    }

    trasnporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error')
        }
        else {
            console.log('Email Sent: ' + info.response)
        }
    })
})


app.listen(3000)