// 나이 차이
// N(2<=N<=100)명의 나이가 입력됩니다. 이 N명의 사람 중 가장 나이차이가 많이 나는 경우는
// 몇 살일까요? 최대 나이 차이를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N(2<=N<=100)이 입력되고, 그 다음 줄에 N개의 나이가 입력된다.
// ▣ 출력설명
// 첫 줄에 최대 나이차이를 출력합니다.


// 입력 : 10 \n 13 15 34 23 45 65 33 11 26 42
// 출력 : 54

let input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
let N = input.length;

let compare_max = -Infinity;
let compare_min = Infinity;

// 1차
// input.reduce((prev, curr) => {
//     if (curr > compare_max) compare_max = curr;
//     if (curr < compare_min) compare_min = curr;
//     //return curr;
// }, 0)
// 굳이 reduce를 쓸 필요가 있을까? (이전값이 필요도 없는데)
// 모든 리스트를 검사하니깐 foreach면 되지 않을까. 

input.forEach((value) => {
    if (value > compare_max) compare_max = value;
    if (value < compare_min) compare_min = value;
})

console.log(compare_max - compare_min);

