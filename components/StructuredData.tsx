import type { Article } from '@/lib/types'

const siteUrl = 'https://turf-analyst.com'

interface ArticleStructuredDataProps {
  article: Article
  url: string
}

export function ArticleStructuredData({ article, url }: ArticleStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.frontmatter.title,
    description: article.frontmatter.description,
    keywords: article.frontmatter.keywords?.join(', '),
    datePublished: article.frontmatter.date,
    dateModified: article.frontmatter.date,
    author: {
      '@type': 'Person',
      name: article.frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ターフアナリスト',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

export function WebsiteStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ターフアナリスト',
    description: 'AI×競馬データ分析を軸にした中上級者向け競馬情報メディア',
    url: siteUrl,
    inLanguage: 'ja',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
