import nodemailer from 'nodemailer'

// メール送信設定
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendBookingConfirmation(email: string, name: string, date: string, time: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '予約確認メール',
      html: `
        <h2>予約が完了しました</h2>
        <p>こんにちは、${name}様</p>
        <p>以下の内容で予約が完了しました：</p>
        <ul>
          <li>日付: ${date}</li>
          <li>時間: ${time}</li>
        </ul>
        <p>ご来店をお待ちしております。</p>
      `,
    })
  } catch (error) {
    console.error('メール送信エラー:', error)
    throw error
  }
}
