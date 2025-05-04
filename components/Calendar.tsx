import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [bookings, setBookings] = useState<any[]>([])

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('date', format(selectedDate, 'yyyy-MM-dd'))
        .order('time', { ascending: true })

      if (error) {
        console.error('Error fetching bookings:', error)
        return
      }

      setBookings(data || [])
    }

    fetchBookings()
  }, [selectedDate])

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">予約カレンダー</h2>
        <div className="flex items-center">
          <button
            onClick={() => setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)))}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            前日
          </button>
          <span className="mx-4 text-lg">
            {format(selectedDate, 'yyyy年MM月dd日', { locale: ja })}
          </span>
          <button
            onClick={() => setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)))}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            次日
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-4 bg-gray-50 rounded-lg border"
          >
            <div className="font-medium">{booking.name}</div>
            <div className="text-sm text-gray-600">
              {format(new Date(`${booking.date}T${booking.time}`), 'HH:mm')}
            </div>
            {booking.message && (
              <div className="mt-2 text-sm text-gray-500">
                {booking.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
