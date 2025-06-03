import Link from 'next/link'

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            ← ホームに戻る
          </Link>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            サイトマップ
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  メインページ
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      ホーム
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      サービス概要、特徴、デモンストレーション
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  サービス情報
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">サービス一覧</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      AI活用開発、最新技術スタック、モダンデザイン
                    </p>
                  </li>
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">ポートフォリオ</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      過去の制作実績と事例紹介
                    </p>
                  </li>
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">お客様の声</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      利用者からの評価とレビュー
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  デモ・体験
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">予約システムデモ</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      日時予約・期間予約の両方に対応したシステム
                    </p>
                  </li>
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">統計情報</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      サービス実績と数値データ
                    </p>
                  </li>
                </ul>
              </section>
            </div>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  お問い合わせ・サポート
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">お問い合わせフォーム</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      ご質問・ご相談の受付
                    </p>
                  </li>
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">無料相談</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      プロジェクトに関する無料相談の申し込み
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  管理・法的情報
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/admin" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      管理画面
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      システム管理者向けダッシュボード
                    </p>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      プライバシーポリシー
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      個人情報の取り扱いに関する方針
                    </p>
                  </li>
                  <li>
                    <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      利用規約
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      サービス利用に関する規約
                    </p>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      サイトマップ
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      サイト全体の構造と内容一覧
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  技術情報
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">使用技術</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      Next.js, React, TypeScript, Tailwind CSS
                    </p>
                  </li>
                  <li>
                    <span className="text-gray-700 dark:text-gray-300">AI機能</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                      機械学習を活用した高度な開発支援
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                お困りの際は
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                サイト内で探している情報が見つからない場合は、お気軽にお問い合わせください。
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>メール:</strong> info@tomeok.com</p>
                <p><strong>電話:</strong> 03-1234-5678</p>
                <p><strong>受付時間:</strong> 平日 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}