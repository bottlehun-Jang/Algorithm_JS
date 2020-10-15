let input = '780316-2376152';

let year, age;

if (input[7] == '1' || input[7] == '2')
    year = 1900 + (parseInt(input[0]) * 10 + parseInt(input[1]));
else
    year = 2000 + (parseInt(input[0]) * 10 + parseInt(input[1]));

age = 2019 - year + 1;

let sex = (input[7] == '1' || input[7] == '3') ? 'M' : 'W';

console.log(`${age} ${sex}`);