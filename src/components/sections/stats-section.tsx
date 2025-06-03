'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: '満足いただいたクライアント',
      description: '継続率95%以上'
    },
    {
      icon: TrendingUp,
      value: 300,
      suffix: '+',
      label: '制作実績',
      description: '様々な業界に対応'
    },
    {
      icon: Clock,
      value: 50,
      suffix: '%',
      label: '開発期間短縮',
      description: 'AI活用による効率化'
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: '顧客満足度',
      description: '高品質な成果物'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            数字で見る
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              To me OK
            </span>
            の実績
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AI技術を活用した効率的な開発で、多くのお客様にご満足いただいています
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 追加の信頼性指標 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              なぜTo me OKが選ばれるのか
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">🚀 高速開発</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI活用により従来の半分の期間で高品質なサイトを制作
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">💰 コスト削減</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  効率化により業界平均の50%以下の価格を実現
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">🎯 最新技術</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  常に最新のフレームワークと技術を採用
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}