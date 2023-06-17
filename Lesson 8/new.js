// let promice1 = new Promise((resolve, reject)=>{
//     let delay = Math.floor(Math.random()*5)+1
//     setTimeout(()=>{
//         resolve(1)
//     }, delay)
// })
// let promice2 = new Promise((resolve, reject)=>{
//     let delay = Math.floor(Math.random()*5)+1
//     setTimeout(()=>{
//         resolve(2)
//     }, delay)
// }
// )
// let promice3 = new Promise((resolve, reject)=>{
//     let delay = Math.floor(Math.random()*5)+1
//     setTimeout(()=>{
//         resolve(3)
//     }, delay)
// }
// )
// Promise.race([promice1, promice2, promice3])
// .then((value)=>{
//     console.log(value)
// })

//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат
//  и выводить на экран.

// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1
//             resolve(num)  
//         },3000)
//     })
// }

// let getSquare = async() =>{
// let number = await getNum()
// .then((number)=>{
//     return number
// })
// console.log(number*number)
// }
// getSquare()

// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//  Используйте также функцию getNum, чобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum, 
// а затем найдет сумму полученных чисел и выводит на экран.

// function getNum1(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 let num = Math.floor(Math.random()*5)+1
//                 resolve(num)  
//             },3000)
//         })
//     }

//     function getNum2(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 let num = Math.floor(Math.random()*5)+6
//                 resolve(num)  
//             },5000)
//         })
//     }

// let waitForSum = async() =>{
//         let number1 = await getNum1()
//         .then((number)=>{
//             return number
//         })
//         let number2 = await getNum2()
//         .then((number)=>{
//             return number
//         })
//         console.log(`Number 1 is ${number1}`)
//         console.log(`Number 2 is ${number2}`)
//         console.log(number1+number2)
//         }
//         waitForSum()

// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// промиса. После окончания манипуляций выведите число консоль лог на экран.

let promiseChainElem = (numberToCount, delay=3000) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(numberToCount)
        }, delay)
    })
}
promiseChainElem(6, 0)
.then((numberToCount)=>{
    let res = numberToCount*numberToCount
    return promiseChainElem(res)
})
.then((secondPromiseNum)=>{
    let res = secondPromiseNum*secondPromiseNum
    console.log(res)
})
