import Link from 'next/link'

export default function PrivacyPolicy() {
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
            プライバシーポリシー
          </h1>
          
          <div className="text-gray-600 dark:text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. 個人情報の収集について
              </h2>
              <p>
                当社では、お客様からお問い合わせやサービスのご利用の際に、お名前、メールアドレス、電話番号などの個人情報をご提供いただく場合があります。
                これらの情報は、お客様への適切なサービス提供のためにのみ使用いたします。
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. 個人情報の利用目的
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>お客様からのお問い合わせへの回答</li>
                <li>サービスの提供・運営</li>
                <li>サービスの改善・開発</li>
                <li>重要なお知らせの配信</li>
                <li>マーケティング活動（お客様の同意がある場合のみ）</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. 個人情報の第三者提供
              </h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                ただし、以下の場合は除きます：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. 個人情報の管理
              </h2>
              <p>
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Cookieについて
              </h2>
              <p>
                当サイトでは、より良いサービス提供のためにCookieを使用する場合があります。
                Cookieは、お客様のブラウザに保存される小さなデータファイルで、お客様の利便性向上のために使用されます。
                お客様はブラウザの設定によりCookieの受け入れを拒否することができますが、
                その場合、サイトの一部機能がご利用いただけない可能性があります。
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. お問い合わせ
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p>メール: info@tomeok.com</p>
                <p>電話: 03-1234-5678</p>
                <p>受付時間: 平日 9:00-18:00</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. プライバシーポリシーの変更
              </h2>
              <p>
                当社は、必要に応じて本ポリシーを変更することがあります。
                変更後のプライバシーポリシーは、当サイトに掲載したときから効力を生じるものとします。
              </p>
            </section>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                最終更新日: 2024年1月1日
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}