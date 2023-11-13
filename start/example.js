// example.js

// 01：ファイルを読み込むモジュール
const fs = require('fs');
const path = require('path');
// const plus = require('../dist/calc'); // ファイルからの相対パスとjs拡張子の省略(commonjsは可能)
// const calc = require('../dist/calc'); // plusとminusを使用したいときはcalcを読み込む
// calcのplusだけをモジュールとして使用したい時
const { plus } = require('../dist/calc');

// 01：path.resolveで確実にパスを指定することが可能（使用推奨）
const distPath = path.resolve(__dirname, '../dist/test.txt');
// 01：第１引数で相対パスでファイルを生成し,第２引数でそのファイルに内容を記述する,コマンドでnode example.jsの絶対パスを実行で処理される
console.log(distPath);
fs.writeFileSync(distPath, 'hello, node.js');

/* plusだけのモジュールを記述して結果を見たい時
    const result = plus(1, 2);
    console.log(result);
    または
*/
/* plusとminusのcalcを見たい時
    console.log(calc);
*/
/* calcを使用してplusを見たい時 
    console.log(calc);
    const result = calc.plus(1, 2);
    console.log(result);
    または　*/
const result = plus(1, 2);
console.log(result);



// 実行
/* 01：ファイルへの書き込み
    __dirname(この実行中のファイルが格納されているフォルダまでのパスの変数)
    __filename(実行中のファイルの絶対パスが格納されている変数)
    fs.writeFileSync(ファイル名、内容)
   02：モジュールの作成
*/
