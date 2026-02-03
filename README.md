# Expo Components Template

このリポジトリは、Expo + React Native で作成した UI コンポーネントを複数アプリで再利用できるように整備するためのテンプレートです。
ベースとなるアプリを起動しながら、`src/components` 以下に格納されたコンポーネントの UI と API を検証できます。

## セットアップ
1. 依存関係をインストール

   ```bash
   bun install
   ```

2. 開発サーバーを起動

   ```bash
   bun run start
   ```

   Expo CLI のプロンプトから `i` `a` `w` を入力すると、iOS / Android / Web それぞれで動作確認できます。

## プロジェクトスクリプト
- `bun run ios` / `bun run android` / `bun run web`: 各プラットフォーム専用で Expo を起動。
- `bun run lint:fix`: Biome によるフォーマット + 静的解析。
- `bun run typecheck`: `tsc --noEmit` で型安全性を確認。
- `bun run reset-project`: 初期テンプレートを `app-example` へ移動し、空の `app` ディレクトリを再生成。

## コンポーネントドキュメント
作成済みコンポーネントは個別の README に詳細な使い方をまとめています。
汎用コンポーネントを利用する場合は以下を参照してください。

- [Calendar Strip](src/components/calendar-strip/README.md): 横スクロール式カレンダー UI の概要、フック、Props、挙動を説明。

必要に応じて他のコンポーネント README もこのセクションに追加し、利用者が迷わず該当ドキュメントへ辿り着けるようにしてください。

## 推奨ワークフロー
1. `src/components/<component-name>` に UI・フック・Story などを実装。
2. 同ディレクトリに README を作成し、Props や拡張方法を記述。
3. このルート README の「コンポーネントドキュメント」セクションへリンクを追加して公開準備を整えます。

このルールを守ることで、チーム全体が共通のコンポーネントカタログを参照でき、アプリ間での再利用性が高まります。
