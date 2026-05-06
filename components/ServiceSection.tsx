import AffiliateCard from './AffiliateCard'
import type { AffiliateService } from '@/lib/types'

const services: AffiliateService[] = [
  {
    id: 'service-a',
    name: '競馬AIプレミアム',
    tagline: 'G1実績回収率145%達成の本格AI予想',
    description: '',
    features: [
      'JRA全レース・地方競馬を完全カバー',
      'AI予想の根拠データが確認できる',
      '過去3年の回収率データを全公開',
      '初月50%OFFキャンペーン実施中',
      'メンバーコミュニティで情報交換可能',
    ],
    price: '月額 9,800円',
    trialInfo: '7日間無料お試し実施中',
    rating: 5,
    reviewCount: 1243,
    url: '#',
    badge: '人気No.1',
  },
  {
    id: 'service-b',
    name: 'データ競馬マスター',
    tagline: '30年分のデータベースで傾向を完全網羅',
    description: '',
    features: [
      '30年分のレースデータベース搭載',
      '血統・騎手・コース別分析機能',
      '重賞レース詳細プレビュー（週次）',
      'Excel/CSV形式でデータ出力可能',
      '月1回の特別分析レポート付き',
    ],
    price: '月額 6,600円',
    trialInfo: '2週間無料トライアルあり',
    rating: 4,
    reviewCount: 876,
    url: '#',
    badge: 'おすすめ',
  },
  {
    id: 'service-c',
    name: '馬券解析プロ',
    tagline: 'コスパで選ぶなら断然コレ',
    description: '',
    features: [
      '週末重賞3〜5レースに特化した厳選予想',
      '回収率重視のデータ選定基準',
      'データ初心者向けの解説付き',
      'スマホアプリで使いやすいUI',
      '3ヶ月継続で月額20%割引適用',
    ],
    price: '月額 3,300円',
    trialInfo: '初月980円で体験可能',
    rating: 4,
    reviewCount: 562,
    url: '#',
    badge: 'コスパ最強',
  },
]

export default function ServiceSection() {
  return (
    <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-3">
            編集部おすすめ予想サービス
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            回収率・データ品質・価格を総合評価。中上級者が実際に使うべきサービスを厳選しました。
          </p>
          <p className="text-xs text-slate-400 mt-2">※ 当サイトはアフィリエイト広告を掲載しています</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AffiliateCard key={service.id} service={service} featured={i === 0} />
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          ※ 掲載情報は編集部調査時点のものです。最新情報は各公式サイトをご確認ください。
        </p>
      </div>
    </section>
  )
}
