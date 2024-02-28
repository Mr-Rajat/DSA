// // debugger working check with this 
// function colors() {
//     let data = 20
//     console.log(data)
// }
// function test(){

// }
// function days() {
//     colors()
// }
// function fruits() {
//     days()
// }
// function topFunction() {
//     fruits();
// }
// topFunction();

// // Head and tail recursionn

function test(x){
    // console.log(x) // head recurssion
    if(x>0){
        test(x-1)
    }
    // console.log(x) // tail recurssion
}

test(5)