# Umbra Lab 編集ガイド

このサイトは、記事を題材にHTML・CSS・JavaScriptを学べるよう、役割ごとにファイルを分けています。

- `dist/index.html`：トップページと記事一覧
- `dist/articles/autofilter-range.html`：AutoFilterの記事
- `dist/articles/dictionary-multiple-keys.html`：Dictionaryの記事
- `dist/styles.css`：色、余白、文字サイズ、PC・スマートフォン表示
- `dist/script.js`：サンプル表の切り替え、コードのコピーボタン、読了位置
- `dist/assets/umbra-mark.svg`：ヘッダーとフッターのロゴマーク
- `dist/favicon.svg`：ブラウザタブや検索結果用の小さなアイコン

## 最初に触る場所

文章を変更するときは、`dist/articles`内にある対象記事の日本語部分を編集します。

例：

```html
<h2>表示されているデータ行だけを塗る</h2>
<p>ここに説明文を書きます。</p>
```

見出しは`h2`、段落は`p`で囲みます。

## 色を変更する場所

`dist/styles.css`の先頭にある次の値が、サイト全体の基本色です。

```css
:root {
  --bg: #0d0e14;
  --ink: #ececf4;
  --accent: #9b7bff;
}
```

## JavaScriptの学習箇所

`dist/script.js`の`updateDemo`が、サンプル表の表示を切り替えています。最初はコードを変更せず、HTML上の`data-f`や`data-h`と対応していることを確認するところから始めます。

## VBAコードを変更する場合

記事内では、`<pre><code>`と`</code></pre>`の間にVBAコードを書きます。HTMLでは`&`を`&amp;`と記述する点に注意してください。
