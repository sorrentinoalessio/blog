import 'dotenv/config';  
export const mailConfig = {
    sender: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD
}