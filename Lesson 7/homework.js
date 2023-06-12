
let nums = [1,2,345,7,7,7,5,6]
// поменять массив в обратном порядке
function changeArraySequence(myArray){
    return myArray.reverse()
}

console.log(changeArraySequence(nums))

// найти максимальное значение числа в массиве ([3,67,15...])
// function findMaxNumInArray(myArray){
//     return myArray.reduce((curr, next) => curr>next ? curr : next)
// }

// сортировка массива по возрастанию/убыванию
// function sortArrayAsc(myArray){
//     return myArray.sort((a, b) => a-b)
// }
// function sortArrayDesc(myArray){
//     return myArray.sort((a, b) => b-a)
//  }


// удалить из массива все повторяющиеся элементы
//     let deleteRepeatingValues = (myArray) => {
//     return myArray.filter((item, index)=>{
//         return myArray.indexOf(item) === index;
//     })
// }
// console.log(deleteRepeatingValues(nums))

// даны 2 4-х значных числа с неповторяющимися цифрами, надо
// определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по 
// значению (3487 и 3794 ---> 1 и 2 )

// let a = 1238
// let b = 8215

// function compareNums(a, b){
//     let equalByValue = 0;
//     let equalByValueAndIndex = 0;
    
//     let aArray = String(a).split('');
//     let bArray = String(b).split('');
//     // let commonArray = [...aArray, ...bArray]
//     for(aElem of aArray){
//         if(bArray.some((bElem) => bElem === aElem)){ //Check if there's a value in bArray that equals aElem
//             equalByValue++;                           //If yes, equalByValue counter +1
//         }
//         for(bElem of bArray){
//             if(bArray.indexOf(bElem) === aArray.indexOf(aElem)){
//                 if(bElem === aElem){
//                     equalByValueAndIndex++;
//                 }
//             }
//         }
//     }
//     console.log(equalByValue, equalByValueAndIndex)
// }
// compareNums(a, b)


// записать в массив ряд фибоначчи начиная с N члена с длиной массива M

// function fibonacchi (number, length){
//     let fibonacciArray = []
//     let n1 = 0, n2 = 1, nextNum
//     for(let i = 3; i<number; i++){
//             nextNum = n1+n2
//             n1 = n2;
//             n2 = nextNum;
//         }

//     for(let j =1; j<=length; j++){
//             nextNum = n1+n2
//             n1 = n2;
//             n2 = nextNum;
//             fibonacciArray.push(nextNum)
//     }
//     return fibonacciArray
// }
// console.log(fibonacchi(4, 5))
