// calc.jsのplusモジュール

function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}

// plusだけのexportsの場合
// module.exports = plus;

// plusとminusのexportsの場合はオブジェクトを使用（オブジェクトリテラルの中でpropatyと関数が同じ場合は省略可）
module.exports = {
    plus: plus,  // plusプロパティー: plus関数 (plus: plus　はplusとして省略可)
    minus: minus // minusプロパティー: minus関数（minus: minus はminusとして省略可）
 };