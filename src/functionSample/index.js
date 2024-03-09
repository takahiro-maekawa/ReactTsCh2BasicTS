import {calculateTotalPrice} from './calculateTotalPrice.ts'
import {unknownFetch} from './unknownFetch.ts'

let firstName = "Fred";
console.log("アイアムフレッド")

console.log("TypeScript Sample");
const info = {product: {name:'apple', unitPrice: 50}, quantity: 30, discount: 0.2};

console.log(calculateTotalPrice(info));

console.log("fetch sample");
unknownFetch();
// ルートディレクトリでts-node --esm src/functionSample/index.jsで実行できます