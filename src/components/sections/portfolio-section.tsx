'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  url: string
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'SONOS級オーディオサイト',
      category: 'corporate',
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=SONOS級サイト',
      description: 'SONOSと同等のNext.js技術スタックを使用したオーディオブランドサイト。高品質な音響体験をWebで再現。',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      url: '#'
    },
    {
      id: 2,
      title: 'UnderArmour級ECプラットフォーム',
      category: 'ecommerce',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=UnderArmour級EC',
      description: 'UnderArmourレベルのスポーツブランドECサイト。高速パフォーマンスとユーザビリティを実現。',
      technologies: ['Next.js', 'React', 'Shopify Plus', 'GraphQL'],
      url: '#'
    },
    {
      id: 3,
      title: 'Audible級メディアプラットフォーム',
      category: 'app',
      image: 'https://placehold.co/600x400/ec4899/ffffff?text=Audible級メディア',
      description: 'Audibleと同じReact技術を活用したメディアストリーミングプラットフォーム。',
      technologies: ['React', 'Next.js', 'Node.js', 'AWS'],
      url: '#'
    },
    {
      id: 4,
      title: 'Hilton級ホスピタリティサイト',
      category: 'corporate',
      image: 'https://placehold.co/600x400/f97316/ffffff?text=Hilton級サイト',
      description: 'Hiltonクラスのホテル予約システム。エンタープライズレベルのNext.js実装。',
      technologies: ['Next.js', 'React', 'TypeScript', 'Prisma'],
      url: '#'
    },
    {
      id: 5,
      title: 'Fortune500級コーポレートサイト',
      category: 'corporate',
      image: 'https://placehold.co/600x400/14b8a6/ffffff?text=Fortune500級',
      description: '大手企業と同等の技術スタックを使用したコーポレートサイト。スケーラブルな設計。',
      technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
      url: '#'
    },
    {
      id: 6,
      title: 'エンタープライズ級管理システム',
      category: 'app',
      image: 'https://placehold.co/600x400/f43f5e/ffffff?text=エンタープライズ級',
      description: '大手企業で使用されているReact技術を活用した業務管理システム。',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'Docker'],
      url: '#'
    }
  ]

  const filters = [
    { id: 'all', name: 'すべて' },
    { id: 'corporate', name: 'コーポレート' },
    { id: 'ecommerce', name: 'ECサイト' },
    { id: 'app', name: 'アプリ' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)
  
  // スライダー設定
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  }
  
  const sliderRef = useRef<Slider>(null)
  
  // 前後のスライドに移動する関数
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }
  
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  return (
    <section data-section="portfolio" id="portfolio" className="py-16 md:py-20 bg-white dark:bg-gray-900">
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              エンタープライズ級技術力
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SONOS、UnderArmour、Audible、Hiltonなど有名企業で採用されているNext.js・React技術スタックを活用
          </p>
        </motion.div>

        {/* フィルター */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-label={`${filter.name}カテゴリーを選択`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* プロジェクト一覧 - カルーセルレイアウト */}
        <div className="relative pb-16">
          <Slider ref={sliderRef} {...sliderSettings} className="px-4">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="px-2 py-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={`${project.title}のプロジェクト画像`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {filters.find(f => f.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2" style={{ minHeight: '3.5rem' }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <Link
                      href={project.url}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-auto"
                    >
                      詳細を見る
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
          
          {/* カスタムナビゲーションボタン */}
          <button 
            onClick={previous}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-10"
            aria-label="前のスライドへ"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-10"
            aria-label="次のスライドへ"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* スクロールインジケーター */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 mt-4">
            {filteredProjects.map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>

        {/* もっと見る */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          >
            実績をもっと見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// コンポーネントの表示名を設定
PortfolioSection.displayName = 'PortfolioSection: 制作実績を表示するセクション';