import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { Resend } from "resend";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const ADMIN_MAIL = process.env.ADMIN_MAIL

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
    return res.json({ success: true, message: "Server Waked up" });
})

app.post("/mailAdmin", async (req, res) => {

    const { name, email, message } = req.body;
    try {
        const resend = new Resend(process.env.RESEND_API);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ADMIN_MAIL,
            subject: `${name}, ${email} sent a message`,
            html: `<p><strong>${message}</strong>!</p>`
        });
        res.json({ success: true, message: "Mail sent to admin" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
})


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})