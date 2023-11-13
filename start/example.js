// example.js

// ファイルを読み込むモジュール
const fs = require('fs');
const path = require('path');

// path.resolveで確実にパスを指定することが可能（使用推奨）
const distPath = path.resolve(__dirname, '../dist/test.txt');

// 01：第１引数で相対パスでファイルを生成し,第２引数でそのファイルに内容を記述する,コマンドでnode example.jsの絶対パスを実行で処理される
console.log(distPath);
fs.writeFileSync(distPath, 'hello, node.js');

// 実行したこと
/* 01：ファイルへの書き込み
    __dirname(この実行中のファイルが格納されているフォルダまでのパスの変数)
    __filename(実行中のファイルの絶対パスが格納されている変数)
*/
