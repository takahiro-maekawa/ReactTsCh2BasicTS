import {calculateTotalPrice} from './calculateTotalPrice.ts'
import {unknownFetch} from './unknownFetch.ts'

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

async function main() {
    console.log("fetch start");
    const data = await unknownFetch();
    console.log("fetch end");
    console.log(data);
}

let firstName = "Fred";
console.log("アイアムフレッド")

console.log("TypeScript Sample");
const info = {product: {name:'apple', unitPrice: 50}, quantity: 30, discount: 0.2};

console.log(calculateTotalPrice(info));

sleep(3000);
main();

// ルートディレクトリでts-node --esm src/functionSample/index.jsで実行できます
//  npx tsx src/functionSample/index.js