import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '記事一覧',
  description:
    'ターフアナリストの全記事一覧。AI予想・データ分析・馬券戦略・サービス比較など競馬中上級者向けの専門記事を掲載しています。',
}

const categoryMap: Record<string, string> = {
  'ai-analysis': 'AI分析',
  'data-lab': 'データ分析',
  'service-review': 'サービス比較',
  strategy: '馬券戦略',
  'ai-tools': 'AIツール',
  news: 'ニュース',
}

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const allArticles = getAllArticles()
  const catSlug = searchParams.category
  const catLabel = catSlug ? categoryMap[catSlug] : undefined

  const filtered = catLabel
    ? allArticles.filter((a) => a.frontmatter.category === catLabel)
    : allArticles

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ページヘッダー */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-navy mb-2">
          {catLabel ? `${catLabel}の記事一覧` : '記事一覧'}
        </h1>
        <p className="text-slate-500 text-sm">{filtered.length}件の記事</p>

        {/* カテゴリフィルター */}
        <div className="flex flex-wrap gap-2 mt-5">
          <a
            href="/articles"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !catSlug
                ? 'bg-navy text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-navy'
            }`}
          >
            すべて
          </a>
          {Object.entries(categoryMap).map(([key, label]) => (
            <a
              key={key}
              href={`/articles?category=${key}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                catSlug === key
                  ? 'bg-navy text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-navy'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* 記事グリッド */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-slate-400">
          <p className="text-5xl mb-4">📭</p>
          <p className="text-lg font-medium">この条件の記事はまだありません</p>
        </div>
      )}
    </div>
  )
}
