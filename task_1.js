/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

let nums = 0;
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(nums);
    nums++;
}

