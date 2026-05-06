import Link from 'next/link'
import type { Article } from '@/lib/types'

const categoryColors: Record<string, string> = {
  AI分析: 'bg-purple-100 text-purple-700',
  データ分析: 'bg-blue-100 text-blue-700',
  サービス比較: 'bg-orange-100 text-orange-700',
  馬券戦略: 'bg-turf-100 text-turf-700',
  AIツール: 'bg-cyan-100 text-cyan-700',
  ニュース: 'bg-red-100 text-red-700',
}

const categoryEmoji: Record<string, string> = {
  AI分析: '🤖',
  データ分析: '📊',
  サービス比較: '🏆',
  馬券戦略: '💡',
  AIツール: '⚙️',
  ニュース: '📰',
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { slug, frontmatter, readingTime } = article
  const colorClass = categoryColors[frontmatter.category] ?? 'bg-slate-100 text-slate-700'
  const emoji = categoryEmoji[frontmatter.category] ?? '🏇'

  return (
    <Link href={`/articles/${slug}`} className="group block h-full">
      <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-slate-100 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="bg-gradient-to-br from-navy to-turf-800 h-44 flex items-center justify-center shrink-0">
          <div className="text-center">
            <span className="text-5xl">{emoji}</span>
            <p className="text-white/60 text-xs mt-2 font-medium">{frontmatter.category}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-3">
            <span className={`category-badge ${colorClass}`}>{frontmatter.category}</span>
          </div>

          <h2 className="font-bold text-slate-800 group-hover:text-turf-700 transition-colors line-clamp-2 mb-3 text-[15px] leading-snug">
            {frontmatter.title}
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
            {frontmatter.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400 mt-auto pt-3 border-t border-slate-50">
            <span>{formatDate(frontmatter.date)}</span>
            <span>·</span>
            <span>読了 {readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
