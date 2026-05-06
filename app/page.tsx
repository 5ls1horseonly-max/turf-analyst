import { getAllArticles } from '@/lib/articles'
import HeroSection from '@/components/HeroSection'
import ArticleGrid from '@/components/ArticleGrid'
import PopularRanking from '@/components/PopularRanking'
import ServiceSection from '@/components/ServiceSection'
import type { PopularArticle } from '@/lib/types'

const popularArticles: PopularArticle[] = [
  {
    rank: 1,
    title: '競馬AI予想の精度を徹底検証｜G1回収率データで比較',
    slug: 'ai-keiba-yoso-seido-kensho',
    category: 'AI分析',
  },
  {
    rank: 2,
    title: '競馬の回収率を上げる3つのデータ思考',
    slug: 'kaichuritsu-ageru-data-shikou',
    category: 'データ分析',
  },
  {
    rank: 3,
    title: '血統データの読み方完全ガイド',
    slug: 'kettou-data-yomikata',
    category: 'データ分析',
  },
  {
    rank: 4,
    title: 'ChatGPTで競馬予想する方法｜実際に試したプロンプトと精度評価',
    slug: 'chatgpt-keiba-yoso',
    category: 'AIツール',
  },
  {
    rank: 5,
    title: '騎手×コース相性データベース｜中山・東京・阪神の勝率ランキング',
    slug: 'kishi-course-aisho-data',
    category: 'データ分析',
  },
]

export default function TopPage() {
  const latestArticles = getAllArticles().slice(0, 6)

  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2">
            <ArticleGrid articles={latestArticles} />
          </div>

          {/* サイドバー */}
          <aside className="space-y-8">
            <PopularRanking articles={popularArticles} />

            {/* サイドバー アフィリエイトボックス */}
            <div className="bg-turf-50 border-2 border-turf-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy text-sm">編集部イチ押しサービス</h3>
                <span className="pr-badge">広告</span>
              </div>
              <p className="text-sm font-black text-navy mb-1">競馬AIプレミアム</p>
              <div className="text-yellow-400 text-base mb-2">★★★★★</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-1">
                G1実績回収率145%。AIが全レースを自動分析。
              </p>
              <p className="text-xs text-turf-600 font-bold mb-3">✓ 7日間無料お試し実施中</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block w-full text-center bg-turf-600 hover:bg-turf-700 text-white py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                無料で試してみる →
              </a>
            </div>
          </aside>
        </div>
      </div>

      <ServiceSection />
    </>
  )
}
