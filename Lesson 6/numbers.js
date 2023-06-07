// Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)
let numberToDivide = 15;
let numberOfDividers = 5;

let divider = Math.floor(Math.random()*(numberToDivide+1));


if(numberOfDividers === 2){
    console.log(divider);
    console.log(numberLeft);
} else if (numberOfDividers === 1){
    console.log(numberToDivide)
} else{ 
    console.log(divider);
    let numberLeft = numberToDivide - divider;
    for(let i = 2; i<=numberOfDividers; i++){ 
    divider = Math.floor(Math.random()*(numberLeft+1));
    numberLeft -= divider;
    console.log(divider)
    }
    console.log(numberLeft)
}

// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

let numberToDivideDec = 15;
let numberOfDividersDec = 5;
let dividerDec = (Math.random()*(numberToDivideDec)).toFixed(2);

if(numberOfDividersDec === 2){
    console.log(dividerDec)
    console.log(numberLeft)
} else if (numberOfDividersDec === 1) {
    console.log(numberToDivideDec)
} else {
    console.log(dividerDec);
    let numberLeftDec = (numberToDivideDec - dividerDec).toFixed(2);
        for(let i = 2; i<=numberOfDividersDec; i++){ 
            dividerDec = (Math.random()*(numberLeftDec)).toFixed(2);
            numberLeftDec -= dividerDec;
        console.log(numberLeftDec.toFixed(2))
        }
}