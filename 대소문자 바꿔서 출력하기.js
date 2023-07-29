//통과

/*//초안
var str = 'aBcDeFg';
var answer = [];

for (let i of str){
    if (i===i.toUpperCase()){
        answer.push(i.toLowerCase());
    } else{
        answer.push(i.toUpperCase());
    };
}
console.log(answer.join(''));

*/
//프로그래머스
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = String()
let answer = [];

rl.on('line', (x)=>{
    // input 변수를 문자열로 선언을 해 둔 상태
    // 입력을 시작할 때 실행되는 함수 내 입력값(x)을 먼저 선언해 둔 input변수에 할당하는 것이 옳은 순서
    // x = input 은 틀린 순서
    input = x;
    // 입력 종료를 알려주지 않으면 무한히 입력을 대기 받는 상태가 되므로 rl.close()를 통해 입력이 종료됨을 알려줘야됨
    rl.close();
})

rl.on('close',()=>{
    for (let i of input){
        if (i===i.toUpperCase()){
            answer.push(i.toLowerCase());
        } else {
            answer.push(i.toUpperCase());
        }
    }
    console.log(answer.join(''));
    // 프로그래밍 성능 개선을 위해 하기 함수 활용 추천
    process.exit();
})