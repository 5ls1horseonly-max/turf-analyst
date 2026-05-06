export interface ArticleFrontmatter {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  keywords: string[]
  image?: string
  author: string
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  content: string
  readingTime: string
}

export interface AffiliateService {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  price: string
  trialInfo?: string
  rating: number
  reviewCount: number
  url: string
  badge?: '人気No.1' | 'おすすめ' | 'コスパ最強'
}

export interface PopularArticle {
  rank: number
  title: string
  slug: string
  category: string
}
