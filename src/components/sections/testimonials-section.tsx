'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  avatar: string
  project: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: '中澤 創',
      position: '代表取締役',
      company: 'みらくる株式会社',
      content: '閲覧数が3倍になりました。管理者用のマネジメント画面も使いやすく、業務効率も大幅に向上しています。コストパフォーマンスが素晴らしい。',
      rating: 5,
      avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=中澤',
      project: 'コーポレートサイト制作'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section data-section="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            お客様の
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              成功事例
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AI技術を活用したWebサイト・アプリケーションで、多くのお客様が成果を上げています
          </p>
        </motion.div>

        {/* お客様の声 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* クォートアイコン */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>
              
              {/* 評価 */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-2">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({testimonial.rating}.0)
                </span>
              </div>
              
              {/* コメント */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                「{testimonial.content}」
              </p>
              
              {/* プロジェクト情報 */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                  {testimonial.project}
                </span>
              </div>
              
              {/* 顧客情報 */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}のプロフィール画像`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            あなたのビジネスも次のレベルへ。まずは無料相談から始めませんか？
          </p>
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="お客様の声をもっと見る"
          >
            無料相談を予約する
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// コンポーネントの表示名を設定
TestimonialsSection.displayName = 'TestimonialsSection: お客様の声を表示するセクション';