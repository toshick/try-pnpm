# try-pnpm

pnpmを試してみよう

## ![image-20220204202223037](/Users/toshick/go/src/github.com/toshick/try-pnpm/README.assets/image-20220204202223037.png)



## Install pnpm

```
npm install -g pnpm
```

## Setting Files

.npmrc

- いろいろ

pnpm-workspace.yaml

- [ワークスペース](https://pnpm.io/ja/workspaces) のルートを定義する

.pnpmfile.cjs

- インストールプロセスをフックし、package.jsonを変換したりできる

pnpm-lock.yaml

- パッケージ解決をスキップしインストールを短縮する
- package-lock.jsonと同じようにバージョンを固定する

## Add workspace

```
// backendというworkspaceをpackagesディレクトリに作成しpackage.jsonも保存する
pnpm init -w packages/myapp -y
```

## Add packages to workspace

```
// workspace"myapp"に指定パッケージをインストール
pnpm i vite@latest --filter myapp
```

## Other command memo

```
// プロジェクトの全ての依存関係をインストールする
pnpm install

// 指定されたバージョン範囲に基づいて、すべての依存関係を更新
pnpm up

// 削除
pnpm remove

// 現在のローカルパッケージを別パッケージからアクセス可能にする
pnpm link

// 不要パッケージを削除（現在モノリポで再帰的に実行する機能に対応していません）
pnpm prune

// セキュリティチェック
pnpm audit

// ターゲットと依存関係を出力
pnpm list

// 指定パッケージに依存するすべてのパッケージを出力
pnpm why

// npxとおなじ
pnpm dlx

// すべてのサブディレクトリーに対して、 pnpm コマンドを再帰的に実行する
pnpm recursive
```

## Script

```
// scriptを実行
pnpm run ***

// workspaceを指定して実行（myappのnpmScript "nyao"をコール）
pnpm run nyao --filter myapp
```

- npmにあるようなprestartとかpoststartといった `pre`、`post`スクリプトの自動実行はない
- 必要な場合 `enable-pre-post-scripts` オプションを使う

## Workspace



## Alias

```
// lodashを自分がフォークしたawesome-lodashとして利用する
pnpm add lodash@npm:awesome-lodash
```

