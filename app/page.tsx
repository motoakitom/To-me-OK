import Link from 'next/link'
import styles from './styles/animation.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      {/* グラデーション背景 */}
      <div className={`${styles.gradientBg} absolute inset-0 -z-10`} />
      
      {/* フローティングタイトル */}
      <h1 className={`${styles.fadeIn} ${styles.float} text-6xl font-bold text-white text-shadow-lg mb-16`}>To-me-OK</h1>

      {/* アニメーション付きナビゲーション */}
      <nav className="mt-8 space-x-4">
        <Link 
          href="/features" 
          className={`${styles.fadeIn} ${styles.glassEffect} px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300`}
        >
          機能紹介
        </Link>
        <Link 
          href="/booking" 
          className={`${styles.fadeIn} ${styles.glassEffect} px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300`}
        >
          予約フォーム
        </Link>
        <Link 
          href="/admin" 
          className={`${styles.fadeIn} ${styles.glassEffect} px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300`}
        >
          管理画面
        </Link>
      </nav>
    </main>
  )
}
