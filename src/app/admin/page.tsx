'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Mail,
  Calendar,
  TrendingUp,
  Eye,
  MessageSquare,
  Phone,
  Building,
  Clock,
  DollarSign,
  Filter,
  Search,
  Download,
  MoreVertical,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budget: string
  timeline: string
  message: string
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'cancelled'
  submittedAt: string
  priority: 'low' | 'medium' | 'high'
}

interface DashboardStats {
  totalSubmissions: number
  newSubmissions: number
  inProgress: number
  completed: number
  monthlyGrowth: number
  averageResponseTime: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalSubmissions: 0,
    newSubmissions: 0,
    inProgress: 0,
    completed: 0,
    monthlyGrowth: 0,
    averageResponseTime: '0h'
  })
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)

  // デモデータの生成
  useEffect(() => {
    const demoSubmissions: ContactSubmission[] = [
      {
        id: '1',
        name: '田中 太郎',
        email: 'tanaka@example.com',
        phone: '03-1234-5678',
        company: '株式会社サンプル',
        projectType: 'corporate',
        budget: '300-500',
        timeline: '2months',
        message: 'コーポレートサイトのリニューアルを検討しています。現在のサイトが古く、モダンなデザインに変更したいと考えています。',
        status: 'new',
        submittedAt: '2024-01-15T10:30:00Z',
        priority: 'high'
      },
      {
        id: '2',
        name: '佐藤 花子',
        email: 'sato@shop-example.com',
        phone: '06-9876-5432',
        company: 'ショップ花子',
        projectType: 'ecommerce',
        budget: '500-1000',
        timeline: '3months',
        message: 'ECサイトの構築をお願いしたいです。商品数は約200点で、決済機能も必要です。',
        status: 'contacted',
        submittedAt: '2024-01-14T14:20:00Z',
        priority: 'medium'
      },
      {
        id: '3',
        name: '山田 次郎',
        email: 'yamada@tech-company.com',
        company: 'テック株式会社',
        projectType: 'ai-integration',
        budget: '1000+',
        timeline: '6months',
        message: '既存のWebアプリケーションにAI機能を統合したいと考えています。チャットボットと画像認識機能が必要です。',
        status: 'in-progress',
        submittedAt: '2024-01-12T09:15:00Z',
        priority: 'high'
      },
      {
        id: '4',
        name: '鈴木 美咲',
        email: 'suzuki@restaurant.com',
        phone: '03-5555-1234',
        company: 'レストラン美咲',
        projectType: 'corporate',
        budget: '100-300',
        timeline: '1month',
        message: 'レストランのホームページを作成したいです。メニュー表示と予約機能が欲しいです。',
        status: 'completed',
        submittedAt: '2024-01-10T16:45:00Z',
        priority: 'low'
      },
      {
        id: '5',
        name: '高橋 健一',
        email: 'takahashi@startup.com',
        company: 'スタートアップ株式会社',
        projectType: 'app',
        budget: '500-1000',
        timeline: '3months',
        message: 'モバイルアプリの開発をお願いしたいです。iOS/Android両対応で、ユーザー管理機能が必要です。',
        status: 'new',
        submittedAt: '2024-01-13T11:30:00Z',
        priority: 'medium'
      }
    ]

    setSubmissions(demoSubmissions)
    
    // 統計データの計算
    const newCount = demoSubmissions.filter(s => s.status === 'new').length
    const inProgressCount = demoSubmissions.filter(s => s.status === 'in-progress').length
    const completedCount = demoSubmissions.filter(s => s.status === 'completed').length
    
    setStats({
      totalSubmissions: demoSubmissions.length,
      newSubmissions: newCount,
      inProgress: inProgressCount,
      completed: completedCount,
      monthlyGrowth: 23.5,
      averageResponseTime: '2.4h'
    })
  }, [])

  const filteredSubmissions = submissions.filter(submission => {
    const matchesStatus = filterStatus === 'all' || submission.status === filterStatus
    const matchesSearch = searchTerm === '' || 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company?.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesStatus && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'in-progress': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return '新規'
      case 'contacted': return '連絡済み'
      case 'in-progress': return '進行中'
      case 'completed': return '完了'
      case 'cancelled': return 'キャンセル'
      default: return status
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 dark:text-red-400'
      case 'medium': return 'text-yellow-600 dark:text-yellow-400'
      case 'low': return 'text-green-600 dark:text-green-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const updateSubmissionStatus = (id: string, newStatus: ContactSubmission['status']) => {
    setSubmissions(prev => prev.map(submission => 
      submission.id === id ? { ...submission, status: newStatus } : submission
    ))
  }

  const statsCards = [
    {
      title: '総問い合わせ数',
      value: stats.totalSubmissions,
      icon: Mail,
      color: 'from-blue-500 to-blue-600',
      change: `+${stats.monthlyGrowth}%`
    },
    {
      title: '新規問い合わせ',
      value: stats.newSubmissions,
      icon: AlertCircle,
      color: 'from-yellow-500 to-yellow-600',
      change: 'today'
    },
    {
      title: '進行中案件',
      value: stats.inProgress,
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
      change: 'active'
    },
    {
      title: '完了案件',
      value: stats.completed,
      icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      change: 'this month'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                管理者ダッシュボード
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                お問い合わせ管理システム
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Download className="h-4 w-4 mr-2" />
                エクスポート
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 統計カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {card.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {card.value}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {card.change}
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* フィルターと検索 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="名前、メール、会社名で検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">すべてのステータス</option>
                <option value="new">新規</option>
                <option value="contacted">連絡済み</option>
                <option value="in-progress">進行中</option>
                <option value="completed">完了</option>
                <option value="cancelled">キャンセル</option>
              </select>
            </div>
          </div>
        </div>

        {/* 問い合わせ一覧 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              問い合わせ一覧 ({filteredSubmissions.length}件)
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    顧客情報
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    プロジェクト
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    予算・納期
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    ステータス
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    受信日時
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    アクション
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {submission.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {submission.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {submission.email}
                          </div>
                          {submission.company && (
                            <div className="text-xs text-gray-400 dark:text-gray-500">
                              {submission.company}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {submission.projectType === 'corporate' && 'コーポレートサイト'}
                        {submission.projectType === 'ecommerce' && 'ECサイト'}
                        {submission.projectType === 'app' && 'モバイルアプリ'}
                        {submission.projectType === 'ai-integration' && 'AI機能統合'}
                        {submission.projectType === 'renewal' && 'サイトリニューアル'}
                        {submission.projectType === 'other' && 'その他'}
                      </div>
                      <div className={`text-xs font-medium ${getPriorityColor(submission.priority)}`}>
                        優先度: {submission.priority === 'high' ? '高' : submission.priority === 'medium' ? '中' : '低'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      <div>
                        {submission.budget === '100-300' && '10-30万円'}
                        {submission.budget === '300-500' && '30-50万円'}
                        {submission.budget === '500-1000' && '50-100万円'}
                        {submission.budget === '1000+' && '100万円以上'}
                        {submission.budget === 'consultation' && '要相談'}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {submission.timeline === '1month' && '1ヶ月以内'}
                        {submission.timeline === '2months' && '2ヶ月以内'}
                        {submission.timeline === '3months' && '3ヶ月以内'}
                        {submission.timeline === '6months' && '6ヶ月以内'}
                        {submission.timeline === 'flexible' && '特に急がない'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                        {getStatusLabel(submission.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(submission.submittedAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <select
                          value={submission.status}
                          onChange={(e) => updateSubmissionStatus(submission.id, e.target.value as ContactSubmission['status'])}
                          className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="new">新規</option>
                          <option value="contacted">連絡済み</option>
                          <option value="in-progress">進行中</option>
                          <option value="completed">完了</option>
                          <option value="cancelled">キャンセル</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 詳細モーダル */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  問い合わせ詳細
                </h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">顧客情報</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">名前:</span> {selectedSubmission.name}</p>
                      <p><span className="font-medium">メール:</span> {selectedSubmission.email}</p>
                      {selectedSubmission.phone && (
                        <p><span className="font-medium">電話:</span> {selectedSubmission.phone}</p>
                      )}
                      {selectedSubmission.company && (
                        <p><span className="font-medium">会社:</span> {selectedSubmission.company}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">プロジェクト情報</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">タイプ:</span> {selectedSubmission.projectType}</p>
                      <p><span className="font-medium">予算:</span> {selectedSubmission.budget}</p>
                      <p><span className="font-medium">納期:</span> {selectedSubmission.timeline}</p>
                      <p><span className="font-medium">優先度:</span> {selectedSubmission.priority}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">メッセージ</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {selectedSubmission.message}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedSubmission.status)}`}>
                    {getStatusLabel(selectedSubmission.status)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    受信: {new Date(selectedSubmission.submittedAt).toLocaleString('ja-JP')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}