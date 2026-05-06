# ターフアナリスト

AI×データ分析で競馬を科学する中上級者向け競馬情報メディア。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS + @tailwindcss/typography
- **コンテンツ管理**: MDX (next-mdx-remote)
- **言語**: TypeScript

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

## ディレクトリ構成

```
turf-analyst/
├── app/
│   ├── page.tsx              # トップページ
│   ├── layout.tsx            # ルートレイアウト
│   ├── articles/
│   │   ├── page.tsx          # 記事一覧
│   │   └── [slug]/page.tsx   # 記事詳細
│   ├── sitemap.ts            # サイトマップ自動生成
│   └── robots.ts             # robots.txt自動生成
├── components/
│   ├── AffiliateCard.tsx     # 広告カード（PR表記必須）
│   ├── ArticleCard.tsx       # 記事カード
│   ├── ArticleGrid.tsx       # 記事グリッド
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PopularRanking.tsx
│   ├── ServiceSection.tsx
│   └── StructuredData.tsx    # JSON-LD構造化データ
├── content/articles/         # MDX記事ファイル
└── lib/
    ├── articles.ts           # MDX読み込みユーティリティ
    └── types.ts              # TypeScript型定義
```

## 記事の追加

`content/articles/slug名.mdx` を作成してください。

### Frontmatter

```yaml
---
title: 記事タイトル
description: SEO用説明文
date: "2024-05-01"
category: AI分析
tags: ["AI", "競馬予想"]
keywords: ["競馬 AI予想", "回収率"]
author: ターフアナリスト編集部
---
```

### カテゴリ一覧

| スラッグ | 表示名 |
|---------|--------|
| AI分析 | AI分析レポート |
| データ分析 | データ研究室 |
| サービス比較 | 予想サービスレビュー |
| 馬券戦略 | 馬券戦略ガイド |
| AIツール | AIツール活用術 |

### MDX内でアフィリエイトカードを使う

```mdx
<AffiliateCard />
```

## 本番デプロイ（Vercel推奨）

```bash
npm run build  # ビルド確認
```

Vercel にリポジトリを連携すると自動デプロイが有効になります。

## 法的注意事項

- アフィリエイトリンクには **必ず「広告」表記** を明示すること（景品表示法遵守）
- 外部リンクには `rel="noopener noreferrer nofollow"` を設定すること
- 記事内の予想・分析は参考情報です。馬券購入は自己責任でお願いします
- `siteUrl` を `next.config.mjs` / `sitemap.ts` / `StructuredData.tsx` で本番URLに変更してください
