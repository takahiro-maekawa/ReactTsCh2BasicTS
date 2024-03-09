import {calculateTotalPrice} from './calculateTotalPrice.ts'
let firstName = "Fred";
console.log("アイアムフレッド")

console.log("TypeScript Sample");
const info = {product: {name:'apple', unitPrice: 50}, quantity: 30, discount: 0.2};

console.log(calculateTotalPrice(info));
// ルートディレクトリでts-node --esm src/functionSample/index.jsで実行できます