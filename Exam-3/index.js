const { multiplication } = require("./calc");
const { division } = require("./calc");
const { subtract } = require("./calc");
const { sum } = require("./calc");

const prompt = require("prompt-sync")()

console.log("1 for sum and 2 for subtract 3 for multiplication and 4 for division")

let opr = prompt()
if (opr == 1) {
    console.log("enter a");
    let a = prompt()
    console.log("enter b");
    let b = prompt()
    console.log(sum(a, b))
} else if (opr == 2) {
    console.log("enter a");
    let a = prompt()
    console.log("enter b");
    let b = prompt()
    console.log(subtract(a, b))
} else if (opr == 3) {
    console.log("enter a");
    let a = prompt()
    console.log("enter b");
    let b = prompt()
    console.log(multiplication(a, b))
} else if (opr == 4) {
    console.log("enter a");
    let a = prompt()
    console.log("enter b");
    let b = prompt()
    console.log(division(a, b))
} else if (opr == 5) {
    console.log("enter a");
    let a = prompt()
    console.log("enter b");
    let b = prompt()
    console.log(sum(a, b))
}