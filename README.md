# team-generator-react

https://idaten-hack.github.io/team-generator-react/

## プロジェクトのセットアップ

```sh
git clone https://github.com/idaten-hack/team-generator-react.git
cd team-generator-react
yarn
```

## 開発サーバーの立ち上げ

```sh
yarn dev
```

## dependabot の自動マージについて

```mermaid
flowchart TD
    A[DependabotのPRが作成される] --> B{パッチアップデートか?}
    B --> |Yes| C[PRをApprove]
    C --> H
    B --> |No| D[End]
    B --> E{Build \n Lint \n Format}
    E --> |Success| H
    E --> |failure| E2[End]
    E --> F{ベースブランチに \n 変更はあるか?}
    F --> |Yes| G[mergify \n ブランチアップデート]
    F --> |No| H
    G --> H[チェック待ち]
    H --> I[自動でマージ]
```
