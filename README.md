# RESAS-API を用いた都道府県別の人口構成を表示する SPA

[RESAS-API](https://opendata.resas-portal.go.jp/)から都道府県一覧を取得しそれぞれにチェックボックスを付与、

選択した都道府県のを折れ人口構成線グラフにて表示

## 起動方法

リポジトリをクローン後  
npm の場合`npm install` or `npm i`  
yarn の場合 `yarn`

必要パッケージをインストール後[RESAS-API](https://opendata.resas-portal.go.jp/)に登録し APIKEY を発行

ルートディレクトリに`.env`を作成し`REACT_APP_RESAS_API_KEY="YOUR API KEY"`として保存

`npm run start` or `yarn start` で localhost:3000 で開発サーバーが立ち上がる

## 使用ライブラリ群

- React(create-react-app)
- Redux(Redux-toolkit)
- styled-components
- Recharts
