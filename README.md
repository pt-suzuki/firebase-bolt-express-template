# firebase-bolt-express-template

cloud functionにbolt+expressを乗っけるテンプレート

## firebaseへのデプロイ

### 前提

.firebasercにデプロイしたいプロジェクトのprojectIDを入力する

```json

{
  "projects": {
    "default": "ここにprojectIdを入力する"
  }
}

```

### デプロイコマンド

```shell

#デプロイ
npm run deploy

```

## テスト

```shell
# eslint実行
npm run lint

# eslint実行 & 修正
npm run lint:fix

# jest実行
npm run test

```

## GitHub Action

テストの実行、firebaseへのデプロイ、Slackへの通知を実行
シークレットを指定するとfirebaseへのデプロイ、Slackへの通知が動く
configはそのうちkmsで解凍する様に整えます

### シークレット

#### DEV_PROJECT_ID

開発環境用のCloudFunctionのProjectId

#### DEV_FIREBASE_TOKEN

開発環境用のCloudFunctionのFirebaseToken

#### DEV_GCP_SA_KEY

開発環境用のGCPのサービスアカウントキー

#### PROD_PROJECT_ID

本番環境用のCloudFunctionのProjectId

#### PROD_FIREBASE_TOKEN

本番環境用のCloudFunctionのFirebaseToken

#### PROD_GCP_SA_KEY

本番環境用のGCPのサービスアカウントキー

#### SLACK_WEBHOOK_URL

通知に使用するSlack WebhookのURLを指定
