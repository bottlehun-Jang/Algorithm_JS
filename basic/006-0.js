let input = 'g0en2Ts8eSoft';
let res = 0;
for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57)
        res = res * 10 + (input[i] * 1)
}
// 10을 곱해서 자리수를 늘리고, 1의 자리에 기존 탐색한 변수를 넣음.

let cnt = 0;
for (let i = 0; i <= res; i++) {
    if (res % i == 0) cnt++;
}

console.log(`${res}, ${cnt}`)