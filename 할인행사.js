//통과

function solution(wants, number, discount) {
    let result = 0;

    // 10일동안의 회원자격 제한으로 인해 전체 할인 목록 길이 - 10만큼만 확인 가능
    for (let i = 0; i <= discount.length-10; i++) {

        // 따라서 총 확인 필요한 날짜에 해당하는 새로운 할인목록 리스트를 추출
        // 원본 배열을 보존하기 위해 slice()함수 사용
        let discountList = discount.slice(i, i+10);
        let list = {};
        let listNum = 0;

        
        for (let i = 0; i <= wants.length-1; i++) {
            list[wants[i]] = number[i];
        }
        // 날짜에 따른 할인목록 리스트를 돌며 {물건: 수량} 객체를 탐색해 물건이 있으면 수랑 -1
        for (let j = 0; j <= discountList.length-1; j++) {
            if (list[discountList[j]]){
                list[discountList[j]] -= 1;
            }
        }

        // 남아있는 객체의 value값을 더한 값이 0보다 작으면 구매하고자 하는 모든 물건을 구매할 수 있는 경우라 result +1
        for (let key in list) {
            listNum += list[key];
        }
        if (listNum <= 0) {
            result += 1;
        }
    }
    return result;
}

console.log(solution(["apple"], [10],["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]))