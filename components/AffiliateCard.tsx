import type { AffiliateService } from '@/lib/types'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-lg" aria-label={`評価: ${rating}点 / 5点`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-slate-200'}>
          ★
        </span>
      ))}
    </div>
  )
}

const badgeStyles: Record<string, string> = {
  '人気No.1': 'bg-red-500 text-white',
  おすすめ: 'bg-turf-600 text-white',
  コスパ最強: 'bg-orange-500 text-white',
}

interface AffiliateCardProps {
  service: AffiliateService
  featured?: boolean
}

export default function AffiliateCard({ service, featured = false }: AffiliateCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl border-2 overflow-hidden transition-all duration-200 hover:shadow-lg ${
        featured ? 'border-turf-500 shadow-md' : 'border-slate-200 shadow-sm'
      }`}
    >
      {/* 広告開示 — 景表法に基づき必須 */}
      <div className="absolute top-3 right-3 z-10">
        <span className="pr-badge">広告</span>
      </div>

      {/* ランクバッジ */}
      {service.badge && (
        <div
          className={`absolute top-0 left-0 px-3 py-1 text-xs font-black rounded-br-lg ${badgeStyles[service.badge] ?? 'bg-slate-600 text-white'}`}
        >
          {service.badge}
        </div>
      )}

      <div className={`p-6 ${service.badge ? 'pt-9' : ''}`}>
        {/* サービス名・評価 */}
        <div className="mb-4">
          <h3 className="text-lg font-black text-navy mb-0.5">{service.name}</h3>
          <p className="text-sm text-slate-500 mb-2">{service.tagline}</p>
          <div className="flex items-center gap-2">
            <StarRating rating={service.rating} />
            <span className="text-sm text-slate-500">
              {service.rating}.0（{service.reviewCount.toLocaleString()}件）
            </span>
          </div>
        </div>

        {/* 料金 */}
        <div className="bg-slate-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-slate-500 mb-0.5">月額料金</p>
          <p className="font-black text-navy text-xl">{service.price}</p>
          {service.trialInfo && (
            <p className="text-turf-600 text-xs font-bold mt-1">✓ {service.trialInfo}</p>
          )}
        </div>

        {/* 特徴一覧 */}
        <ul className="space-y-2 mb-5">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-turf-500 font-black mt-0.5 shrink-0">✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`block w-full text-center py-3 rounded-lg font-black text-sm transition-all duration-200 ${
            featured
              ? 'bg-turf-600 text-white hover:bg-turf-700'
              : 'bg-navy text-white hover:bg-navy-dark'
          }`}
        >
          公式サイトで詳細を見る →
        </a>
        <p className="text-center text-[10px] text-slate-400 mt-2">
          ※ 外部サイトへ移動します
        </p>
      </div>
    </div>
  )
}
