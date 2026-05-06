import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WebsiteStructuredData } from '@/components/StructuredData'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ターフアナリスト｜AI×データで競馬を科学する',
    template: '%s｜ターフアナリスト',
  },
  description:
    'AI×競馬データ分析を軸にした中上級者向け競馬情報メディア。回収率向上のためのデータ分析手法、予想サービス比較、血統分析など専門的な情報を提供します。',
  keywords: ['競馬', 'AI予想', 'データ分析', '回収率', '競馬予想', '血統', '馬券'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://turf-analyst.com',
    siteName: 'ターフアナリスト',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <WebsiteStructuredData />
      </head>
      <body className="font-sans antialiased bg-slate-50 min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
