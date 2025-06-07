'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Moon, Sun, ChevronLeft, ChevronRight, Clock, User, Mail, Phone } from 'lucide-react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns'
import { ja } from 'date-fns/locale'

export function DemoSection() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingType, setBookingType] = useState<'datetime' | 'period'>('datetime')
  const [checkInDate, setCheckInDate] = useState<Date | null>(null)
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  const handleDateSelect = (date: Date) => {
    if (bookingType === 'datetime') {
      setSelectedDate(date)
      setSelectedTime('')
      setShowBookingForm(false)
    } else {
      // 期間選択モード
      if (!checkInDate || (checkInDate && checkOutDate)) {
        // 新しい期間の開始
        setCheckInDate(date)
        setCheckOutDate(null)
        setShowBookingForm(false)
      } else if (checkInDate && !checkOutDate) {
        // 期間の終了
        if (date >= checkInDate) {
          setCheckOutDate(date)
          setShowBookingForm(true)
        } else {
          // 開始日より前の日付が選択された場合、新しい開始日とする
          setCheckInDate(date)
          setCheckOutDate(null)
        }
      }
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setShowBookingForm(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (bookingType === 'datetime') {
      alert(`予約が完了しました！\n日時: ${selectedDate ? format(selectedDate, 'yyyy年MM月dd日', { locale: ja }) : ''} ${selectedTime}\nお名前: ${formData.name}`)
    } else {
      alert(`宿泊予約が完了しました！\nチェックイン: ${checkInDate ? format(checkInDate, 'yyyy年MM月dd日', { locale: ja }) : ''}\nチェックアウト: ${checkOutDate ? format(checkOutDate, 'yyyy年MM月dd日', { locale: ja }) : ''}\nお名前: ${formData.name}`)
    }
    setShowBookingForm(false)
    setSelectedDate(null)
    setSelectedTime('')
    setCheckInDate(null)
    setCheckOutDate(null)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section data-section="demo" id="demo" className={`py-16 md:py-20 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              機能体験
            </span>
            デモ
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            実際にWebサイトに実装される機能を体験してください
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* テーマ切り替えデモ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-lg transition-colors duration-500 ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                テーマ切り替え
              </h3>
              <div className="flex items-center space-x-3">
                <Sun className={`h-5 w-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-yellow-500'
                }`} />
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={(e) => setIsDarkMode(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`w-14 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                      isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 absolute top-1/2 -translate-y-1/2 ${isDarkMode ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-1'}`} />
                  </div>
                </div>
                <Moon className={`h-5 w-5 ${
                  isDarkMode ? 'text-blue-400' : 'text-gray-400'
                }`} />
              </div>
            </div>
            
            <div className={`p-6 rounded-lg transition-colors duration-500 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h4 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                サンプルコンテンツ
              </h4>
              <p className={`mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                このように、ユーザーの好みに合わせてライトテーマとダークテーマを切り替えることができます。
              </p>
              <div className="flex space-x-4">
                <div className={`px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  プライマリボタン
                </div>
                <div className={`px-4 py-2 rounded-lg border ${
                  isDarkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                }`}>
                  セカンダリボタン
                </div>
              </div>
            </div>
          </motion.div>

          {/* カレンダー予約システムデモ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-lg transition-colors duration-500 ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Calendar className={`h-6 w-6 mr-3 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  予約システム
                </h3>
              </div>
              
              {/* 予約タイプ切り替えスライダー */}
              <div className={`flex items-center space-x-4 p-1 rounded-full ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <button
                  onClick={() => setBookingType('datetime')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    bookingType === 'datetime'
                      ? isDarkMode
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-blue-600 text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  日時予約
                </button>
                <button
                  onClick={() => setBookingType('period')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    bookingType === 'period'
                      ? isDarkMode
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-blue-600 text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  宿泊予約
                </button>
              </div>
            </div>
            
            {/* 予約タイプの説明 */}
            <div className={`mb-4 p-3 rounded-lg ${
              isDarkMode ? 'bg-gray-700/50' : 'bg-blue-50'
            }`}>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-blue-800'
              }`}>
                {bookingType === 'datetime' 
                  ? '📅 日時予約: 特定の日付と時間を選択してください'
                  : '🏨 宿泊予約: チェックイン日とチェックアウト日を選択してください'
                }
              </p>
            </div>

            {/* カレンダー */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevMonth}
                  className={`p-2 rounded-lg hover:bg-opacity-80 transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                  aria-label="前の月へ"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h4 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {format(currentDate, 'yyyy年MM月', { locale: ja })}
                </h4>
                <button
                  onClick={nextMonth}
                  className={`p-2 rounded-lg hover:bg-opacity-80 transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                  aria-label="次の月へ"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                  <div key={day} className={`text-center text-sm font-medium py-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {days.map((day) => {
                  const isCurrentMonth = isSameMonth(day, currentDate)
                  const isTodayDate = isToday(day)
                  
                  // 日時予約モードの選択状態
                  const isDateTimeSelected = bookingType === 'datetime' && selectedDate && isSameDay(day, selectedDate)
                  
                  // 期間予約モードの選択状態
                  const isCheckIn = bookingType === 'period' && checkInDate && isSameDay(day, checkInDate)
                  const isCheckOut = bookingType === 'period' && checkOutDate && isSameDay(day, checkOutDate)
                  const isInRange = bookingType === 'period' && checkInDate && checkOutDate && 
                    day >= checkInDate && day <= checkOutDate
                  
                  let buttonStyle = ''
                  if (isDateTimeSelected || isCheckIn || isCheckOut) {
                    buttonStyle = 'bg-blue-600 text-white'
                  } else if (isInRange) {
                    buttonStyle = isDarkMode ? 'bg-blue-800/50 text-blue-200' : 'bg-blue-100 text-blue-800'
                  } else if (isTodayDate) {
                    buttonStyle = isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-800 border border-blue-200'
                  } else if (isCurrentMonth) {
                    buttonStyle = isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-300' 
                      : 'hover:bg-gray-100 text-gray-900'
                  } else {
                    buttonStyle = isDarkMode ? 'text-gray-600' : 'text-gray-400'
                  }
                  
                  return (
                    <button
                      key={day.toString()}
                      onClick={() => handleDateSelect(day)}
                      disabled={!isCurrentMonth}
                      className={`h-10 w-10 text-sm rounded-lg transition-colors relative ${buttonStyle}`}
                      aria-label={`${format(day, 'yyyy年M月d日', { locale: ja })}を選択`}
                    >
                      {format(day, 'd')}
                      {isCheckIn && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white">
                          IN
                        </div>
                      )}
                      {isCheckOut && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white">
                          OUT
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 時間選択（日時予約モードのみ） */}
            {bookingType === 'datetime' && selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <h5 className={`text-sm font-medium mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  時間を選択してください
                </h5>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`py-2 px-3 text-sm rounded-lg transition-colors ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-label={`${time}の時間を選択`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* 期間選択の確認表示 */}
            {bookingType === 'period' && checkInDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                }`}>
                  <h5 className={`text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    選択された期間
                  </h5>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className={`flex items-center space-x-2 ${
                      isDarkMode ? 'text-blue-300' : 'text-blue-700'
                    }`}>
                      <span className="font-medium">チェックイン:</span>
                      <span>{format(checkInDate, 'yyyy年MM月dd日', { locale: ja })}</span>
                    </div>
                    {checkOutDate && (
                      <div className={`flex items-center space-x-2 ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-700'
                      }`}>
                        <span className="font-medium">チェックアウト:</span>
                        <span>{format(checkOutDate, 'yyyy年MM月dd日', { locale: ja })}</span>
                      </div>
                    )}
                  </div>
                  {checkOutDate && (
                    <div className={`mt-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      宿泊日数: {Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))}泊
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* 予約フォーム */}
            {showBookingForm && (
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                }`}>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-blue-800'
                  }`}>
                    {bookingType === 'datetime' 
                      ? `予約日時: ${selectedDate && format(selectedDate, 'yyyy年MM月dd日', { locale: ja })} ${selectedTime}`
                      : `宿泊期間: ${checkInDate && format(checkInDate, 'yyyy年MM月dd日', { locale: ja })} 〜 ${checkOutDate && format(checkOutDate, 'yyyy年MM月dd日', { locale: ja })}`
                    }
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="お名前"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  {bookingType === 'datetime' ? '予約を確定する' : '宿泊予約を確定する'}
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>

        {/* 説明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            このような高度な機能も、AIを活用することで短期間・低コストで実装可能です
          </p>
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="デモ機能を体験する"
          >
            同様の機能を依頼する
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// コンポーネントの表示名を設定
DemoSection.displayName = 'DemoSection: デモ機能を体験できるインタラクティブセクション';