//Singleton

// function singleton(){
// let counter = 0;

// let increaseCounter = (counter) => {
//     return counter++
// }

// let getCounter = (counter) =>{
//     counter
// }
// }

// let instance;
// class Singleton{
//     constructor(){
//         if(!instance){
//         instance = this
//         }
//         this.count = 0
//         return instance
//     }
//     getCounter(){
//         return this.count
//     }
//     increaseCounter(){
//         return this.count++
//     }
// }
// let obj1 = new Singleton
// let obj2 = new Singleton
// console.log(obj1, obj2)
// obj1.increaseCounter()
// obj1.increaseCounter()
// obj1.increaseCounter()
// obj2.increaseCounter()
// // console.log
// console.log(obj1.getCounter())
// console.log(obj2.getCounter())

// class newCounter{
//     constructor(){
//         if(!newCounter.instance){ // Можно еще прописать typeof newCounter.instance === 'object'
//             newCounter.instance = this,
//             this.count = 0
//         }
//         return newCounter.instance
//     }
//     getCounter(){
//                 return this.count
//             }
//     increaseCounter(){
//                 return this.count++
//             }
// }
// let obj1 = new newCounter
// let obj2 = new newCounter

// console.log(obj1, obj2)
// obj1.increaseCounter()
// obj1.increaseCounter()
// obj1.increaseCounter()
// obj2.increaseCounter()

// console.log(obj1.getCounter())
// console.log(obj2.getCounter())

//Factory method
//Classes that construct objects themselves
// class Truck{
//     constructor(brand){
//         this.brand = brand
//     }
//     liftWeight(kg){
//         return `I just lifted ${kg} kg`
//     }
// }
// class Car{
//     constructor(brand, isLux){
//         this.brand = brand,
//         this.isLux = isLux
//     }
//     driveFam(lastNameOfFamily){
//         return `I just drove ${lastNameOfFamily} family`
//     }
// }
// //Class that will create instance of any of these classes based on set conditions
// class VehichleCreator{
//     createVehichle(isCar, brand, isLux){
//         let vehichle
//         if(isCar){
//            vehichle = new Car(brand,isLux)
//         } else {
//             vehichle = new Truck(brand)
//         }
//         return vehichle
//     }
// }
// let myCar = new VehichleCreator().createVehichle(true, 'VW', false)
// let myTrack = new VehichleCreator().createVehichle(false, 'MAZ')
// console.log(myCar)
// console.log(myTrack.liftWeight(1000))

// Abstract factory
// Это классы
// class Sedan{
//     constructor(color, hasParctronic){
//         this.color = color,
//         this.hasParctronic = hasParctronic
//     }
//     getCar(){
//         return `This is ${this.color} Sedan. Has parctronic: ${this.hasParctronic}`
//     }
// }
// class Universal{
//     constructor(color, hasParctronic){
//         this.color = color,
//         this.hasParctronic = hasParctronic
//     }
//     getCar(){
//         return `This is ${this.color} Universal. Has parctronic: ${this.hasParctronic}`
//     }
// }
// class Sport{
//     constructor(color, hasParctronic){
//         this.color = color,
//         this.hasParctronic = hasParctronic
//     }
//     getCar(){
//         return `This is ${this.color} Sport. Has parctronic: ${this.hasParctronic}`
//     }
// }

// // Эти функции мне создают инстансы классов
// function buildSedan(color, hasParctronic){
//     return new Sedan(color, hasParctronic)
// }
// function buildUniversal(color, hasParctronic){
//     return new Universal(color, hasParctronic)
// }
// function buildSport(color, hasParctronic){
//     return new Sport(color, hasParctronic)
// }

// //Функция, которая в зависимости от переданного аргумента будет вызывать другую функцию, которая будет
// // в свою очередь создавать инстанс объекта определенного класса
// function carProducer(kind){
//     if(kind.toLowerCase === 'sedan'){
//         return buildSedan()
//     } else if(kind.toLowerCase === 'universal'){
//         return buildUniversal()
//     } else if(kind.toLowerCase === 'sport'){
//         return buildSport()
//     }
// }

// let mySedan = buildSedan('red', true)
// console.log(mySedan.getCar())

// Builder
// First, I create default classes that I plan to expand/change with builder-class later
// class VM {
//     constructor(){
//         this.model = 'VM',
//         this.parktronic = false,
//         this.model = 'Polo',
//         this.color = 'white'
//     }
// }
// // Class-builder
// // In constructor I create an object VMBuilder with the only property - car. It contains new Car object
// class VMBuilder {
//     constructor(){
//         this.car = new VM()
//     }
//     addParktronic(parktronic){ //I keep adding new properties to new Car object in VMBuilder class -> Car property 
//         this.car.parktronic = parktronic
//         return this //Always return VMObject(builder object) so that you could chain other objects
//     }
//     addSignal(signal) {
//         this.car.signal = signal;
//         return this;
//     }
//     changeModel(model) {
//         this.car.model = model;
//         return this;
//     }
//     build(){
//         return this.car
//     }
// }

// console.log(new VMBuilder().addParktronic('dndmf').addSignal('my signal'))

// Prototype

// class carPrototype{
//     constructor(model, color, hasParktronic, numOfDoors){
//         this.model = model,
//         this.color = color, 
//         this.hasParktronic = hasParktronic, 
//         this.numOfDoors = numOfDoors
//     }
//     createPrototype(){
//         return new carPrototype(this.model, this.color, this.hasParktronic, this.numOfDoors)
//     }
// }
// let carProto1 = new carPrototype('VM', 'red', false, 4)
// let carProto2 = new carPrototype('BMV', 'white', true, 4)

// let myVMCar = carProto1.createPrototype()
// let myBMVCar = carProto1.createPrototype()
// console.log(myBMVCar)
// console.log(myVMCar)

// Adapter
// class SimpleEngine {
//     simpleEngineInterface() {
//         console.log(`Simple Engine`)
//     }
// }

// class TurboEngine {
//     turboEngineInterface() {
//         console.log(`Turbo Engine`)
//     }
// }
// class TurboEngineAdapter {
//     constructor(engine) {
//         this.engine = engine;
//     }

//     simpleEngineInterface() {
//         this.engine.turboEngineInterface();
//     }
// }
// class Car { //В классе Car машина работает только с simple engine
//     startEngine(engine) {
//         engine.simpleEngineInterface();
//     }
// }

// let car = new Car(); //Пустой объект

// let simpleEngine = new TurboEngine(); //Я не могу передать сюда TurboEngine, т.к.
// // StartEngine ожидает что у объекта, переданного в кач-ве аргумента будет метод simpleEngineInterface()
// // Конечно, у объекта TurboEngine нет метода simpleEngineInterface(), у него есть метод turboEngineInterface()
// // car.startEngine(simpleEngine) 

// let turboEngine = new TurboEngineAdapter(new TurboEngine()); //Но я могу передать сюда TurboEngineAdapter, у которого
// // есть такой метод. В TurboEngineAdapter я взяла переданный мне TurboEngine объект, засунула его в свойство и долепила
// // сверху метод simpleEngineInterface(). Итого я получила объект TurboEngineAdapter со свойством engine, которое
// // содержит объект TurboEngine и с методом simpleEngineInterface
// car.startEngine(turboEngine);

// class Parts {
//     getPrice() {
//         return this.price || 0;
//     }

//     getName() {
//         return this.name;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     setPrice(price) {
//         this.price = price;
//     }
// }

// class Cabin extends Parts {
//     constructor() {
//         super();
//         this.setName('Cabin');
//         this.setPrice(1000)
//     }
// }

// class Transmission extends Parts {
//     constructor() {
//         super();
//         this.setName('Transmission');
//         this.setPrice(2500)
//     }
// }

// class Interier extends Parts {
//     constructor() {
//         super();
//         this.setName('Interier');
//         this.setPrice(1800)
//     }
// }

// class TurboEngine extends Parts {
//     constructor() {
//         super();
//         this.setName('Turbo engine');
//         this.setPrice(5000)
//     }
// }
// class Composite extends Parts {
//     constructor() {
//         super();
//         this.parts = [];
//     }

//     add(part) {
//         this.parts.push(part);
//     }

//     getPrice() {
//         return this.parts
//             .map(part => part.getPrice())
//             .reduce((a, b) => a + b)
//     }
// }

class Car {
    setCabin() {
        console.log(`Cabine is ready`);
    }

    setEngine() {
        console.log(`Engine is ready`);
    }

    setTransmission() {
        console.log(`Transmission is ready`)
    }

    setInterier() {
        console.log(`Interier is ready`);
    }

    paintCar() {
        console.log(`Car is painted`)
    }

    setWheels() {
        console.log(`Wheels is setted`)
    }
}

class CarFacade {
    constructor(car) {
        this.car = car;
    }
    buildCar() {
        this.car.setCabin();
        this.car.setEngine();
        this.car.setTransmission();
        this.car.setInterier();
        this.car.paintCar();
        this.car.setWheels();
    }

    buildCabrio() {
        this.car.setEngine();
        this.car.setTransmission();
        this.car.setInterier();
        this.car.paintCar();
        this.car.setWheels();
    }

    buildSimpleCar() {
        this.car.setEngine();
        this.car.setTransmission();
        this.car.setWheels();
    }
}
