import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function SalesChart() {
  const [salesData, setSalesData] = useState<any>(null)

  useEffect(() => {
    const fetchSalesData = async () => {
      const { data: bookings, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching sales data:', error)
        return
      }

      // 日付ごとの予約数を集計
      const dailyBookings = bookings.reduce((acc: any, booking: any) => {
        const date = new Date(booking.created_at).toLocaleDateString()
        acc[date] = (acc[date] || 0) + 1
        return acc
      }, {})

      // データを日付順に並べ替え
      const sortedDates = Object.keys(dailyBookings).sort()
      const labels = sortedDates
      const data = sortedDates.map(date => dailyBookings[date])

      setSalesData({
        labels,
        datasets: [
          {
            label: '予約数',
            data,
            borderColor: 'rgb(53, 162, 235)',
            tension: 0.1,
          },
        ],
      })
    }

    fetchSalesData()
  }, [])

  if (!salesData) return <div>Loading...</div>

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">売上推移</h2>
      <Line data={salesData} />
    </div>
  )
}
