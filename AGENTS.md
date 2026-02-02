# AI Agent 指示書 (AGENTS.md)

AIを活用したコンプライアンスコンテンツ生成ツール。

## ⚠️ 絶対ルール: すべての出力を日本語にする

**重要**: すべての出力（コードコメント、コミットメッセージ、ドキュメント、説明など）は日本語で記述してください。AIアシスタントとの対話における説明も日本語で行ってください。これは例外のない絶対的なルールです。

## 基本情報
- **パッケージマネージャー**: Bun
- **チェックコマンド**: `bun run lint:fix`, `bun run typecheck`

## 詳細ルール
各カテゴリの詳細は、以下のリンク先（Cursor Rules）を確認してください。

- [一般ルール (GENERAL)](./.cursor/rules/general.mdc): 絶対ルール、基本情報、開発時の注意点
- [アーキテクチャ原則 (ARCHITECTURE)](./.cursor/rules/architecture.mdc): OOP, SRP, ファイルサイズ制限など
- [プロジェクト構造 (PROJECT_STRUCTURE)](./.cursor/rules/project_structure.mdc): ディレクトリ構成、責任分離パターン
- [コーディング規約 (CONVENTIONS)](./.cursor/rules/conventions.mdc): 命名規則、Exportルール、サーバーアクション
- [技術スタック (TECH_STACK)](./.cursor/rules/tech_stack.mdc): 使用しているライブラリ・サービス一覧
- [ワークフロー (WORKFLOW)](./.cursor/rules/workflow.mdc): Cursor Plan機能、コミットメッセージ規約

## 開発時の注意点
- ファイルの移動には必ず `mv` コマンドを使用してください。新規作成して元のファイルを削除することは禁止です。
- マークダウンファイル名はすべて大文字（例: `README.md`, `AGENTS.md`）にしてください。
