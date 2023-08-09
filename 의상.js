/* 
- 조합을 통해 구현하는 방식
- 1번 테스트케이스 런타임에러

function solution(clothes) {
    let clothesList = {};
    let clothesNum = [];
    let cnt = 0;

    for (let i = 0; i <= clothes.length-1; i++) {
        clothesList[clothes[i][1]] ? clothesList[clothes[i][1]] += 1 : clothesList[clothes[i][1]] = 1;
    }

    for (let clothe in clothesList){
        clothesNum.push(clothesList[clothe])
    }
    
    for (let j = 0; j <= clothesNum.length-1; j++) {
        let clothesNeed = j+1;
        let result = getCombinations(clothesNum, clothesNeed);

        result.forEach((el) => {
            let temp = 1
            
            for (let i = 0; i <= el.length-1; i++) {
                temp *= el[i]
            }
            cnt += temp
        });
    }
    return cnt
}

const getCombinations = function (arr, selectNumber) {
    let result = [];

    if (selectNumber === 1) {
        return arr.map(el => [el]);
    }

    arr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index+1);
        let combinations = getCombinations(rest, selectNumber -1);
        let attached = combinations.map((el) => [fixed, ...el])
        result.push(...attached);
    });

    return result;
} */

// 통과버전
// 옷의 갯수 + 1(해당 옷을 안입은 경우) * 옷의 갯수 +1 ..... -1(아무것도 안입은 경우, 조건에서 하루 최소 한개는 입는다고 했으므로)

function solution(clothes) {
    let clothesList = {};
    let clothesNum = [];
    let cnt = 1;

    for (let i = 0; i <= clothes.length-1; i++) {
        clothesList[clothes[i][1]] ? clothesList[clothes[i][1]] += 1 : clothesList[clothes[i][1]] = 1;
    }

    for (let clothe in clothesList){
        clothesNum.push(clothesList[clothe])
    }

    clothesNum.forEach(x => {
        cnt *= x+1
    })

    return cnt -1

}    
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))