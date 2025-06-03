'use client'

import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Webサイト制作', href: '#' },
      { name: 'ECサイト構築', href: '#' },
      { name: 'システム開発', href: '#' },
      { name: 'AI活用コンサル', href: '#' },
    ],
    company: [
      { name: '会社概要', href: '#' },
      { name: '採用情報', href: '#' },
      { name: 'プライバシーポリシー', href: '/privacy' },
  { name: '利用規約', href: '/terms' },
    ],
    support: [
      { name: 'よくある質問', href: '#' },
      { name: 'サポート', href: '#' },
      { name: 'お問い合わせ', href: '#contact' },
      { name: 'ブログ', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                To me OK
              </span>
            </Link>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              AI技術を活用した最新のWeb制作で、
              <br />
              お客様のビジネスを次のレベルへ。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>東京都渋谷区</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@tomeok.com</span>
              </div>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">会社</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* ソーシャルリンク */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">フォローする</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 下部 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} To me OK. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
          プライバシーポリシー
        </Link>
        <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
          利用規約
        </Link>
        <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
          サイトマップ
        </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}