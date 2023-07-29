//통과

/*// 초안
var x = 'string';
var num = Number(5)

console.log(x.repeat(num));
*/
//프로그래머스 버전 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on('line',(x)=>{
    input = x.split(' ');
});
rl.on('close',()=>{
    var str = input[0];
    var n = Number(input[1]);
    console.log(str.repeat(n));
})

