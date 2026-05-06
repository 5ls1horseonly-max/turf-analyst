import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles'
import { ArticleStructuredData } from '@/components/StructuredData'
import AffiliateCard from '@/components/AffiliateCard'
import type { AffiliateService } from '@/lib/types'

const siteUrl = 'https://turf-analyst.com'

// 記事内に埋め込むインラインアフィリエイトサービス
const inlineService: AffiliateService = {
  id: 'inline-featured',
  name: '競馬AIプレミアム',
  tagline: 'G1実績回収率145%達成の本格AI予想',
  description: '',
  features: [
    'JRA全レース・地方競馬を完全カバー',
    'AI予想の根拠データが確認できる',
    '7日間無料お試し実施中',
  ],
  price: '月額 9,800円',
  trialInfo: '7日間無料お試し実施中',
  rating: 5,
  reviewCount: 1243,
  url: '#',
  badge: '人気No.1',
}

// MDX内で使えるカスタムコンポーネント
const mdxComponents = {
  // <AffiliateCard /> をMDX内で使用可能にする
  AffiliateCard: () => (
    <div className="my-8">
      <AffiliateCard service={inlineService} featured />
    </div>
  ),
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  const { title, description, keywords, date, author } = article.frontmatter
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      authors: [author],
      url: `${siteUrl}/articles/${params.slug}`,
    },
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const { frontmatter, content, readingTime } = article
  const articleUrl = `${siteUrl}/articles/${params.slug}`

  return (
    <>
      <ArticleStructuredData article={article} url={articleUrl} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* パンくずリスト */}
        <nav className="text-sm text-slate-400 mb-6 flex flex-wrap items-center gap-1.5">
          <Link href="/" className="hover:text-turf-600 transition-colors">
            ホーム
          </Link>
          <span>›</span>
          <Link href="/articles" className="hover:text-turf-600 transition-colors">
            記事一覧
          </Link>
          <span>›</span>
          <span className="text-slate-600 line-clamp-1">{frontmatter.title}</span>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="category-badge bg-turf-100 text-turf-700">
              {frontmatter.category}
            </span>
            {frontmatter.tags?.map((tag) => (
              <span key={tag} className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-navy leading-tight mb-4">
            {frontmatter.title}
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-5">
            {frontmatter.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pb-6 border-b border-slate-200">
            <span>✍️ {frontmatter.author}</span>
            <span>📅 {formatDate(frontmatter.date)}</span>
            <span>⏱️ 読了 {readingTime}</span>
          </div>
        </header>

        {/* 広告開示 — 景品表示法に基づき必須表記 */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
          <span className="font-bold">【広告に関する表記】</span>
          当記事にはアフィリエイト広告が含まれています。
          記事内で紹介するサービスの一部から報酬を受け取る場合がありますが、
          掲載内容は編集部が独自に評価・選定しています。
        </div>

        {/* 記事本文 */}
        <div
          className="
            prose prose-slate prose-lg max-w-none
            prose-headings:text-navy prose-headings:font-black
            prose-h2:text-2xl prose-h2:border-b-2 prose-h2:border-turf-200 prose-h2:pb-2 prose-h2:mt-10
            prose-h3:text-xl prose-h3:text-turf-800 prose-h3:mt-8
            prose-a:text-turf-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-navy
            prose-li:marker:text-turf-500
            prose-blockquote:border-l-4 prose-blockquote:border-turf-400 prose-blockquote:bg-turf-50 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-table:text-sm
            prose-th:bg-navy prose-th:text-white
          "
        >
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ remarkPlugins: [remarkGfm] }}
          />
        </div>

        {/* 記事下アフィリエイト */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="section-title mb-6">この記事を読んだ方におすすめのサービス</h2>
          <AffiliateCard service={inlineService} featured />
        </div>

        {/* タグ */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-3">関連タグ</p>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 transition-colors cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
