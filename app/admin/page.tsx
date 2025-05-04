import { supabase } from '@/lib/supabase'
import SalesChart from '@/components/SalesChart'
import Calendar from '@/components/Calendar'

export default async function Admin() {
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div className="flex items-center justify-center h-screen">データの取得に失敗しました</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">管理画面</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
          <SalesChart />
        </div>
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
          <Calendar />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">予約一覧</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-white/10 backdrop-blur-sm">
                <th className="px-6 py-3 text-left text-sm font-medium text-white/90 uppercase tracking-wider">
                  名前
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white/90 uppercase tracking-wider">
                  メール
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white/90 uppercase tracking-wider">
                  日時
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white/90 uppercase tracking-wider">
                  メッセージ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/5">
              {bookings.map((booking) => (
                <tr 
                  key={booking.id} 
                  className="border-t border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {booking.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {new Date(booking.created_at).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {booking.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
