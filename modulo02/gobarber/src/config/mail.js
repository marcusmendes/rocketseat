// Serviços de e-mail
// Amazon SES
// Mailgun
// Sparkpost
// Mandril
// Mailtrap (dev)

export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: 'b89a7b476c80d2',
    pass: 'e9f5c1fe49efd6',
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com>',
  },
};
