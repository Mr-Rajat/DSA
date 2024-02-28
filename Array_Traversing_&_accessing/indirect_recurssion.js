// indirect recurssion
let money = 100;
let totalApple = 0;

let appleRate = 20

function buyApple(amount) {
    // console.log(amount)
    if (amount > 0) {
        // totalApple++;
        buyMore(amount)
    } else {
        console.log("I dont have more money", "total apple: ", totalApple)
    }
}

function buyMore(amount) {
    totalApple++;
    buyApple(amount - appleRate)
    // console.log("buy More: ", amount)
}
buyApple(money)