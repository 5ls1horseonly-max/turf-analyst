import Link from 'next/link'

const footerLinks = {
  コンテンツ: [
    { label: 'AI分析レポート', href: '/articles?category=ai-analysis' },
    { label: 'データ研究室', href: '/articles?category=data-lab' },
    { label: '馬券戦略ガイド', href: '/articles?category=strategy' },
    { label: 'AIツール活用術', href: '/articles?category=ai-tools' },
  ],
  サービス情報: [
    { label: '予想サービス比較', href: '/articles?category=service-review' },
    { label: 'おすすめランキング', href: '/articles?category=service-review' },
  ],
  サイト情報: [
    { label: '運営者情報', href: '/about' },
    { label: 'プライバシーポリシー', href: '/privacy' },
    { label: 'お問い合わせ', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-turf-600 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-sm">T</span>
              </div>
              <span className="text-white font-black text-lg">ターフアナリスト</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              AI×競馬データ分析を軸にした中上級者向け競馬情報メディア。
              データに基づいた客観的な情報を提供します。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-turf-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2024 ターフアナリスト. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center">
            ※ 当サイトはアフィリエイト広告を掲載しています。広告収益によりサイト運営を行っています。
          </p>
        </div>
      </div>
    </footer>
  )
}
