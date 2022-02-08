# try-pnpm

pnpmを試してみる

pakcage.jsonはワークスペースごとに個別に持たせ、疎結合な構成を目指す。

## ![image-20220204202223037](data:image/png;base64,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)



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

```bash
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

```bash
// scriptを実行
pnpm run ***

// workspaceを指定して実行（myappのnpmScript "nyao"をコール）
pnpm run nyao --filter myapp
```

- npmにあるようなprestartとかpoststartといった `pre`、`post`スクリプトの自動実行はない
- 必要な場合 `enable-pre-post-scripts` オプションを使う

## Workspace

### Alias

```bash
// lodashを自分がフォークしたawesome-lodashとして利用する
pnpm add lodash@npm:awesome-lodash
```

### Link

```bash
// インポートしたい別ワークスペースへパスを通す（requireできるようになる）
pnpm link ../other-package
```

## 実験

packages

- myapp
  - package.json
  - app.js（backendをインポートして関数実行）
- backend
  - package.json
  - index.js（関数をエクスポート）



pnpm link 実行後、myappからの backendインポートに成功

```bash
// pnpmにてパッケージインストール（トップディレクトリより）
pnpm i uuid --filter backend

// myappから呼び出し（myapp/app.js）
const { bbb } = require('backend');
bbb();

// 結果（成功）
start app.js!
------------------------------------------------------------
BBB! 8997506e-8981-4306-b53a-40408311b28f
------------------------------------------------------------
```

pnpmコマンド使わず、直接 backendにて `dayjs`を npm installしてみる

```json
//package.json（backend）には pnpm経由のuuidに加えてdayjsが追加された
"dependencies": {
	"dayjs": "^1.10.7",
	"uuid": "^8.3.2"
}
```

dayjsを出力に追加

```bash
// 結果（成功）
------------------------------------------------------------
BBB! c4a70ea3-9158-4649-9080-0cbeb05f9bfd
dayjs! Sat, 05 Feb 2022 04:49:25 GMT
------------------------------------------------------------
```

この状態で node_modulesを削除し、pnpm installを実行してみる

```bash
pnpm install

pnpm i
Scope: all 3 workspace projects
Packages: +20
++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/toshick/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 20, reused 20, downloaded 0, added 20, done

// 次に linkコマンドでパスをとおす
node_modules:
+ backend 1.0.0 <- ../backend

// 結果（成功）
start app.js!
------------------------------------------------------------
BBB! dc223933-af45-4150-bf07-7eb7175ea992
dayjs! Sat, 05 Feb 2022 05:00:08 GMT
------------------------------------------------------------
```

つまり、pnpm install [package] でインストールしなくても個別に開発パッケージ上でインストールしても問題ない

試しに全ファイルを削除してgit登録状態にもどしてみる

```bash
//全ファイルを削除
手動

//ファイルをgitのHEAD状態に復元
git checkout .

//パッケージを復元
pnpm i

Scope: all 3 workspace projects
Packages: +20
++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/toshick/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 20, reused 20, downloaded 0, added 20, done

//link実行
node_modules:
+ backend 1.0.0 <- ../backend

// 結果（成功）
start app.js!
------------------------------------------------------------
BBB! c7b61c50-f278-4538-8316-885eb6aebcba
dayjs! Sat, 05 Feb 2022 05:06:43 GMT
------------------------------------------------------------
```

nuxt3-app ワークスペースを追加してみる

packages

- myapp
- backend
- nuxt3-app
  - package.json
  - package-lock.json
  - ...

```bash
// 以下をどこかで実行してnuxt3-appディレクトリ をpackages以下に配置する
npx nuxi init nuxt3-app

// workspacesに手動導追加
"workspaces": [
	"packages/myapp",
	"packages/backend",
	"packages/nuxt3-app" //追加
]

// pnpmからworkspaceを初期化
pnpm init -w packages/nuxt3-app -y

// nuxt3-app はまだnpm installされていないのでpnpmからインストール実行してみる
pnpm i

//エラー
WARN  Issues with peer dependencies found
packages/nuxt3-app
└─┬ nuxt3
  ├─┬ @nuxt/vite-builder-edge
  │ ├─┬ autoprefixer
  │ │ └── ✕ missing peer postcss@^8.1.0
  │ ├─┬ postcss-import
  │ │ └── ✕ missing peer postcss@^8.0.0
  │ ├─┬ postcss-url
  │ │ └── ✕ missing peer postcss@^8.0.0
  │ ├─┬ rollup-plugin-visualizer
  │ │ └── ✕ missing peer rollup@^2.0.0
  │ └─┬ unplugin
  │   └── ✕ missing peer rollup@^2.50.0
  ├─┬ @nuxt/webpack-builder-edge
  │ └─┬ unplugin
  │   └── ✕ missing peer rollup@^2.50.0
  └─┬ unplugin
    └── ✕ missing peer rollup@^2.50.0
Peer dependencies that should be installed:
  postcss@">=8.1.0 <9.0.0"  rollup@">=2.50.0 <3.0.0"
```

missing peerエラーが出る

[missing peer dependencies after installation of pnpm v6.24.4](https://github.com/pnpm/pnpm/issues/4183)



これを解決するために以下を実行してみた

```
pnpm add -w app postcss@^8.1.0
```



が、ビルドエラーが発生する。既知のエラーのようだ。

```
Cannot find package 'unenv' imported from /path/to/project/.nuxt/nitro/index.mjs
```



ここで議論されているが、将来nuxt3でもpnpm対応が行われる可能性はある

https://github.com/nuxt/framework/issues/581





