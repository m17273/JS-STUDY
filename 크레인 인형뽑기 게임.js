//통과


function solution(board, moves) {
    let basket = [];
    let answer = 0;

    for (let i = 0; i<= moves.length-1; i++) {
        let target = moves[i]-1;

        for (let j = 0; j<=board.length-1; j++){
            if (board[j][target] !== 0){
                if (basket.length !== 0 && basket.at(-1) === board[j][target]){
                    basket.pop();
                    board[j][target] = 0;
                    answer += 1;
                    break
                // 바스켓이 비어있거나 가장 마지막 인형과 새롭게 넣은 인형이 동일하지 않아도 바스켓에 새로운 인형을 넣고 break 필요    
                } else {
                    basket.push(board[j][target]);
                    board[j][target] = 0;
                    break
                }
                
            }
        }

    }
    return answer*2;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))