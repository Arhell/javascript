import mailer from "../core/mailer";
import {SentMessageInfo} from "nodemailer/lib/sendmail-transport";

interface SendEmailProps {
  emailFrom: string
  emailTo: string
  subject: string
  html: string
}

export const sendEmail = ({emailFrom, emailTo, subject, html}: SendEmailProps,
                          callback?: (err: Error | null, info: SentMessageInfo) => void) => {
  mailer.sendMail(
    {
      from: emailFrom,
      to: emailTo,
      subject: subject,
      html: html
    },
    callback || function (err: Error | null, info: SentMessageInfo) {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    }
  )
}