## ターミナル起動：node (起動させたいファイルをDDしてパスを表示でエンター)
    例：start/exmaple.jsの場合　node '/Users/lumi/Desktop/u_nodeOne/start/example.js'

## 1128 28:ESモジュール方法
    1：importとexportの表記に注意、ファイル拡張子は.js、package.jsonで "type": "module" 
    2：ファイル拡張子を.mjs、package.jsonのタイプモジュールは不要、

## ブラウザとNode.jsの実行環境の違い(エラー発生時のヒント)
**モジュール管理の仕組み**<br>
    ブラウザ：ESM<br>
    Node.js：ESM, CJS

**使える機能**<br>
    ブラウザ：document(DOM API), alertなど<br>
    Node.js：require, fsモジュール, pathモジュールなど

**グローバルオブジェクト**<br>
    ブラウザ：window<br>
    Node.js：global<br>
    ※globalThis：適宜グローバルオブジェクトを返却<br>
    （どちらの環境でも使用しやすいように追加された同一キーワード）<br>
    （クロスプラットフォームで動くのでUniversal(Isomorphic)JavaScriptと呼ばれる）

**Universal(Isomorphic)JavaScript**<br>
    例：globalThis (ブラウザ：window, Node.js：global)<br>
       Reactの　　 (ブラウザ：CSR, Node.js：SSR) など

## Expressインストール



    