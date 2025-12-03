import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { Resend } from "resend";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const FRONTEND_URL = process.env.FRONTEND_URL
const ADMIN_MAIL = process.env.ADMIN_MAIL
const ADMIN_MAIL_1 = process.env.ADMIN_MAIL_1
const ADMIN_MAIL_1_PASS = process.env.ADMIN_MAIL_1_PASS

app.use(express.json())
app.use(cors());

app.post("/mailAdmin", async (req, res) => {

    const { name, email, message } = req.body;
    try {

        // const transporter = nodemailer.createTransport(
        //     {
        //         service: "gmail",
        //         auth: {
        //             user: ADMIN_MAIL_1,
        //             pass: ADMIN_MAIL_1_PASS
        //         }
        //     }
        // )
        const resend = new Resend(process.env.RESEND_API);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'shahabaj773@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });

        // const MailOptions = {
        //     from: ADMIN_MAIL_1,
        //     to: ADMIN_MAIL,
        //     subject: `New message from ${name}`,
        //     text: `
        //     Name: ${name}
        //     Email: ${email}

        //     Message: ${message}
        //         `,
        // }
        // await transporter.sendMail(MailOptions);
        res.json({ success: true, message: "Mail sent to admin" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
})


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})