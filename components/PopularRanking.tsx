import Link from 'next/link'
import type { PopularArticle } from '@/lib/types'

const rankStyles = [
  'bg-yellow-400 text-white',
  'bg-slate-400 text-white',
  'bg-amber-600 text-white',
  'bg-slate-200 text-slate-600',
  'bg-slate-200 text-slate-600',
]

interface PopularRankingProps {
  articles: PopularArticle[]
}

export default function PopularRanking({ articles }: PopularRankingProps) {
  return (
    <aside>
      <h2 className="section-title mb-6">人気記事</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <ol className="divide-y divide-slate-100">
          {articles.map((article, i) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors group"
              >
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${rankStyles[i] ?? rankStyles[4]}`}
                >
                  {article.rank}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-800 group-hover:text-turf-700 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </p>
                  <span className="text-xs text-slate-400 mt-1 inline-block">
                    {article.category}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}
