import Link from 'next/link'
import ArticleCard from './ArticleCard'
import type { Article } from '@/lib/types'

interface ArticleGridProps {
  articles: Article[]
  title?: string
  showViewAll?: boolean
}

export default function ArticleGrid({
  articles,
  title = '最新記事',
  showViewAll = true,
}: ArticleGridProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">{title}</h2>
        {showViewAll && (
          <Link
            href="/articles"
            className="text-turf-600 hover:text-turf-700 text-sm font-medium"
          >
            すべて見る →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
