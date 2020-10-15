// 나이계산
// 주민등록증의 번호가 주어지면 주민등록증 주인의 나이와 성별을 판단하여 출력하는 프로그램
// 을 작성하세요. 주민등록증의 번호는 -를 기준으로 앞자리와 뒷자리로 구분된다.
// 뒷자리의 첫 번째 수가 1이면 1900년대생 남자이고, 2이면 1900년대생 여자, 3이면 2000년대
// 생 남자, 4이면 2000년대생 여자이다.
// 올해는 2019년입니다. 해당 주민등록증 주인의 나이와 성별을 출력하세요.
// ▣ 입력설명
// 첫 줄에 주민등록증 번호가 입력됩니다.
// ▣ 출력설명
// 첫 줄에 나이와 성별을 공백을 구분으로 출력하세요. 성별은 남자는 M(man), 여자는
// W(Woman)로 출력한다.

// 입력 : 780316-2376152 / 061102-3575393
// 출력 : 42 W / 14 M

let input = '780316-2376152';

let thisYear = 2019;
let solutionArr = input.split('-');
let years = 0;
let sex = -1;

switch (solutionArr[1][0] * 1) {
    case 1, 2:
        sex = (solutionArr[1][0] == 1) ? 0 : 1;
        years = 1900;
        break;
    case 3, 4:
        sex = (solutionArr[1][0] == 3) ? 0 : 1;
        years = 2000;
        break;
}

let age = thisYear - years - solutionArr[0].slice(0, 2);
let sexStr = (sex == 0) ? 'M' : 'W';
console.log(`${age + 1} ${sexStr}`)

// 쓸 때 없이 오래걸린 이유 > 변수 오타 (use strict 사용 할 것), type 신경 안써서 조건 안탔음.
