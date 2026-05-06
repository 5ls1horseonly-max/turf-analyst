import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Article, ArticleFrontmatter } from './types'

const articlesDir = path.join(process.cwd(), 'content/articles')

function calcReadingTime(text: string): string {
  // 日本語は1分あたり約500文字
  const minutes = Math.max(1, Math.ceil(text.length / 500))
  return `${minutes}分`
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return []
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article {
  const filePath = path.join(articlesDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
    readingTime: calcReadingTime(content),
  }
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}
