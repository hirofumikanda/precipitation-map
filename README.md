# 降水量マップ

NOAAの降水量データを地図上に可視化するReactアプリケーションです。MapLibre GLとPMTilesを使用して効率的な地図データの配信を実現しています。

## 特徴

- **高効率なデータ配信**: PMTiles形式による降水量データの配信
- **インタラクティブな地図**: MapLibre GLによる滑らかな地図操作
- **日本に最適化**: 国土地理院の背景地図を使用
- **グローブ投影**: 地球儀表示による直感的な地理的理解

## セットアップ

### インストール

```bash
git clone https://github.com/hirofumikanda/precipitation-map.git
cd precipitation-map
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:5173 でアプリケーションが起動します。

## データについて

### 降水量データ
- **データソース**: NOAA GFS
- **形式**: TerrainRGB エンコード
- **配信**: PMTiles形式

### 背景地図
- **データソース**: 国土地理院タイル（淡色地図）
- **ライセンス**: 地理院タイルの利用規約に準拠

## プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   └── MapView.tsx     # メインの地図コンポーネント
├── hooks/              # カスタムフック
│   └── useMap.ts       # 地図の状態管理
└── styles/             # スタイルファイル

public/
├── data/               # PMTilesデータファイル
├── styles/             # MapLibreスタイル定義
└── font/               # 日本語フォント対応のグリフ範囲
```

## 降水量の色分け

降水量の可視化には以下の色分けを使用:

- **0mm**: 透明
- **1-5mm**: 薄い青
- **5-20mm**: 青
- **20-50mm**: 濃い青
- **50-80mm**: 紫
- **80mm以上**: マゼンタ

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
