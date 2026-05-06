import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-turf-900">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.8) 20px,
            rgba(255,255,255,0.8) 22px
          )`,
        }}
      />
      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-turf-800 via-turf-500 to-turf-800" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-turf-600/20 border border-turf-500/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-turf-400 animate-pulse" />
            <span className="text-turf-300 text-sm font-medium">
              AI×データ分析で競馬を科学する専門メディア
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            競馬を
            <span className="text-turf-400">データ</span>
            で<br />読み解く
          </h1>

          {/* Subheadline */}
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            中上級者のための競馬分析メディア。AI活用術から血統データ、
            オッズ理論まで、回収率向上に直結する情報を提供します。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/articles" className="btn-primary text-base px-8 py-4">
              最新分析を見る →
            </Link>
            <Link
              href="/articles?category=service-review"
              className="inline-flex items-center justify-center border-2 border-turf-400/50 text-turf-300 px-8 py-4 rounded-lg font-bold hover:bg-turf-600/20 hover:border-turf-400 transition-all duration-200 text-base"
            >
              予想サービスを比較する
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-700/50">
            {[
              { label: '掲載記事', value: '100+' },
              { label: '比較サービス', value: '20+' },
              { label: '月間読者', value: '5万人' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
