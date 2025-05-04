import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { sendBookingConfirmation } from '@/lib/email'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // データベースに保存
      const { data, error } = await supabase
        .from('bookings')
        .insert([formData])
      if (error) throw error

      // メール通知
      await sendBookingConfirmation(
        formData.email,
        formData.name,
        formData.date,
        formData.time
      )

      alert('予約が完了しました！確認メールを送信しました。')
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      alert('予約に失敗しました。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">予約フォーム</h1>
      <div className="max-w-md mx-auto space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90 mb-1">お名前</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              required
              disabled={loading}
              placeholder="お名前を入力してください"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90 mb-1">メールアドレス</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              required
              disabled={loading}
              placeholder="メールアドレスを入力してください"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90 mb-1">日付</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90 mb-1">時間</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90 mb-1">メッセージ</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-none"
              disabled={loading}
              placeholder="メッセージを入力してください"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                送信中...
              </>
            ) : (
              '予約する'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
