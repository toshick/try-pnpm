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

### Alias

```
// lodashを自分がフォークしたawesome-lodashとして利用する
pnpm add lodash@npm:awesome-lodash

```

### Link

```
// インポートしたい別パッケージへパスを通す（requireできるようになる）
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

```
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

```
//package.json（backend）には pnpm経由のuuidに加えてdayjsが追加された
"dependencies": {
	"dayjs": "^1.10.7",
	"uuid": "^8.3.2"
}
```

dayjsを出力に追加

```
// 結果（成功）
------------------------------------------------------------
BBB! c4a70ea3-9158-4649-9080-0cbeb05f9bfd
dayjs! Sat, 05 Feb 2022 04:49:25 GMT
------------------------------------------------------------
```

この状態で node_modulesを削除し、pnpm installを実行してみる

```
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

```
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

