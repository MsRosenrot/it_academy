// Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 
let coursorDate = new Date(Date.UTC(2000, 0, 13))
let currentDate = new Date()
let fridaysCount = 0;

while(coursorDate.getTime()<=currentDate.getTime()){
    
    if(coursorDate.getDay() === 5){
        fridaysCount++
    }

    let month = coursorDate.getMonth()+1;
    coursorDate.setMonth(month)
}
console.log(fridaysCount)