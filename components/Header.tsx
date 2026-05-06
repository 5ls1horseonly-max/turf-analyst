import Link from 'next/link'

const navItems = [
  { label: 'AI分析', href: '/articles?category=ai-analysis' },
  { label: 'データ研究室', href: '/articles?category=data-lab' },
  { label: '馬券戦略', href: '/articles?category=strategy' },
  { label: 'AIツール', href: '/articles?category=ai-tools' },
  { label: 'サービス比較', href: '/articles?category=service-review' },
]

export default function Header() {
  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-turf-600 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-white font-black text-base">T</span>
            </div>
            <div className="leading-none">
              <span className="text-white font-black text-lg block">ターフアナリスト</span>
              <span className="text-turf-300 text-[10px] block tracking-wide">
                AI×データで競馬を科学する
              </span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-turf-400 hover:bg-white/5 px-3 py-2 rounded text-sm font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/articles?category=service-review"
            className="hidden md:inline-flex items-center bg-turf-600 hover:bg-turf-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow"
          >
            予想サービスを探す →
          </Link>
        </div>
      </div>
    </header>
  )
}
