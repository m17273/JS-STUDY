
/* 조합 알고리즘
>> 재귀함수 사용
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
  }
  
  const example = [1,2,3,4];
  const result = getCombinations(example, 3);
  console.log(result);
  
*/

// 통과
function solution(elements){
    let new_arr = [...elements];
    let num = 2;



    while (num <= elements.length){
        let cnt = 1;
        

        while (cnt <= elements.length){
        let answer = 0;

        for(let i = 0; i<= num-1; i++){
            answer += elements[i];
        }
        new_arr.push(answer);
        cnt += 1;
        let next_num = elements.shift();
        elements.push(next_num);
        }
        num += 1;
    }
    // 배열 내 중복값을 set객체를 통해 제거
    // set객체로 만들ㅇ 중복을 제거한 후, 스프레드연산자를 통해 set객체 > 다시 배열로 전환!!
    let set = new Set(new_arr);
    let answer_arr = [...set]

    return answer_arr.length
}

console.log(solution([7,9,1,1,4]))
