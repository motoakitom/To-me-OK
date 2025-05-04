import styles from '../styles/animation.css'

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`${styles.fadeIn} text-4xl font-bold mb-12 text-center text-white`}>機能紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className={`${styles.fadeIn} ${styles.glassEffect} p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300`}
             style={{
               background: 'linear-gradient(45deg, rgba(255,107,107,0.1), rgba(78,205,196,0.1))',
               backdropFilter: 'blur(10px)',
             }}>
          <h2 className="text-2xl font-semibold mb-4 text-white">予約管理</h2>
          <p className="text-white/90">シンプルな予約フォームで、お客様の予約を管理できます。</p>
        </div>
        <div className={`${styles.fadeIn} ${styles.glassEffect} p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300`}
             style={{
               background: 'linear-gradient(45deg, rgba(78,205,196,0.1), rgba(69,183,209,0.1))',
               backdropFilter: 'blur(10px)',
             }}>
          <h2 className="text-2xl font-semibold mb-4 text-white">売上管理</h2>
          <p className="text-white/90">リアルタイムで売上状況を確認し、経営分析が可能です。</p>
        </div>
        <div className={`${styles.fadeIn} ${styles.glassEffect} p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300`}
             style={{
               background: 'linear-gradient(45deg, rgba(69,183,209,0.1), rgba(150,201,61,0.1))',
               backdropFilter: 'blur(10px)',
             }}>
          <h2 className="text-2xl font-semibold mb-4 text-white">カスタマイズ</h2>
          <p className="text-white/90">お好みのデザインや機能をカスタマイズできます。</p>
        </div>
      </div>
    </div>
  )
}
