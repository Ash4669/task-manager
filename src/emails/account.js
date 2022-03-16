import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ash4669@hotmail.co.uk',
        subject: 'Welcome',
        text: `Welcome, ${name}`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail({
        to: email,
        from:  'ash4669@hotmail.co.uk',
        subject: 'sorry to see you go',
        text: `bye ${name}`
    })
}

export default {
    sendWelcomeEmail,
    sendCancellationEmail
}