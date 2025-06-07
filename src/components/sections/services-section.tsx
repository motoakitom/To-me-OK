'use client'

import { motion } from 'framer-motion'
import { Globe, ShoppingCart, Smartphone, Brain, Zap, Shield, Palette, Code } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'コーポレートサイト',
      description: '企業の魅力を最大限に伝える、プロフェッショナルなWebサイトを制作',
      features: ['レスポンシブデザイン', 'SEO最適化', 'CMS導入', '多言語対応'],
      originalPrice: '¥800,000',
      price: '¥400,000〜',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'ECサイト構築',
      description: '売上向上を実現する、使いやすく美しいオンラインストアを構築',
      features: ['決済システム', '在庫管理', 'カート機能', 'アナリティクス'],
      originalPrice: '¥1,200,000',
      price: '¥600,000〜',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'モバイルアプリ',
      description: 'iOS・Android対応のネイティブアプリやPWAを開発',
      features: ['クロスプラットフォーム', 'プッシュ通知', 'オフライン対応', 'ストア申請'],
      originalPrice: '¥1,600,000',
      price: '¥800,000〜',
      popular: false
    },
    {
      icon: Brain,
      title: 'AI機能統合',
      description: 'ChatGPTや画像生成AIなど、最新のAI技術をWebサイトに統合',
      features: ['チャットボット', '画像生成', '自動翻訳', 'データ分析'],
      originalPrice: '¥1,000,000',
      price: '¥500,000〜',
      popular: false
    }
  ]

  const features = [
    {
      icon: Zap,
      title: '高速開発',
      description: 'AI活用により従来の半分の期間で開発完了'
    },
    {
      icon: Shield,
      title: 'セキュリティ',
      description: '最新のセキュリティ対策で安全なサイトを構築'
    },
    {
      icon: Palette,
      title: 'デザイン',
      description: 'ユーザビリティを重視したモダンなデザイン'
    },
    {
      icon: Code,
      title: '保守性',
      description: '将来の拡張や修正が容易な設計'
    }
  ]

  return (
    <section data-section="services" id="services" className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gray-50 dark:bg-gray-800">
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
            AI活用で実現する
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              次世代Web制作
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            最新のAI技術を駆使して、従来では考えられない速度と品質でWebサイトを制作します
          </p>
        </motion.div>

        {/* サービス一覧 - 横スクロール可能なレイアウト */}
        <div className="relative pb-16">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:px-0 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <div className="flex space-x-6 min-w-max w-full px-4 md:px-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex-shrink-0 w-[300px] bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                      service.popular ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          人気
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm min-h-[40px]">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6 min-h-[120px]">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mb-4">
                        <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 mb-2">
                          <div className="text-xs text-red-600 dark:text-red-400 font-semibold mb-1">
                            🔥 期間限定50%OFF
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            通常価格: {service.originalPrice}
                          </div>
                          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                            {service.price}
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        aria-label={`${service.title}の詳細を見る`}
                      >
                        詳細を見る
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* スクロールインジケーター */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {services.map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* 特徴 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            To me OKの強み
          </h3>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-tight">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            どのサービスが最適かわからない？まずは無料相談から始めましょう
          </p>
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="サービス詳細を確認する"
          >
            無料相談を予約する
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// コンポーネントの表示名を設定
ServicesSection.displayName = 'ServicesSection: 提供サービス一覧を表示するセクション';