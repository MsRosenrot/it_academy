// Определить иерархию конфет и прочих сладостей. Composite и обычное наследование
export { Present, NYPresentsForSchool }
 class Sweets{
    setPrice(price){
        this.price = price
    }
    setCalories(calories){
        this.calories = calories
    }
    setWeight(weight){
        this.weight = weight
    }
    setName(name){
        this.name = name
    }
}
class ChocolateSweets extends Sweets{
    constructor(){
        super()
        this.setCalories(800)
    }
}
export class Lollipop extends Sweets{
    constructor(name, taste){
        super()
        this.setPrice(50)
        this.setCalories(100)
        this.setWeight(10)
        this.setName(name)
        this.taste = taste
    }
    lick(){
        return `This ${this.name} lollipop has been licked!`
    }
}

class ChocoBar extends ChocolateSweets{
    constructor(name){
        super()
        this.setWeight(100)
        this.setPrice(100)
        this.stuffing = false
        this.setName(name)
    }
}
class ChocoCandy extends ChocolateSweets{
    constructor(name, numInPack){
        super()
        this.setWeight(2 * numInPack)
        this.setPrice(5 * numInPack)
        this.setName(name)
        if(!numInPack){
            this.numInPack = 1
        } else {
            this.numInPack = numInPack
        }
    }
}
// Added additional class Toy to later exercise Adapter on it
class Toy{
    constructor(weight, type, fromAge){
        this.price = 200
        this.weight = weight
        this.type = type
        this.fromAge = fromAge
    }
}
class Adapter{
    constructor(objWithoutName, name){
        this.obj = objWithoutName
        this.name = name // Added new property name so that objects without name (Toy in the example) could be sorted by name
        this.calories = 0 // Added new property calories so that objects without calories could be filtered by that
    } 
}
 class Present{
    constructor(){
        this.present = []
    }
    addChocoBar(name){
        this.present.push(new ChocoBar(name))
        return this
    }
    addChocoCandy(name, numInPack){
        this.present.push(new ChocoCandy(name, numInPack))
        return this
    }
    addLollipop(name, taste){
        this.present.push(new Lollipop(name, taste))
        return this
    }
    addToy(weight, type, fromAge){
        this.present.push(new Toy(weight, type, fromAge))
        return this
    }
    sortPresentByName(nameOfAdapter) {
        let i;
        for (i = 0; i<this.present.length; i++){
            if(!this.present[i].name){
                if(nameOfAdapter){
                    this.present[i] = new Adapter(this.present[i], nameOfAdapter.toString())
                } else {
                    this.present[i] = new Adapter(this.present[i], this.present[i].type.toString())
                } 
            }
        }
        this.present.sort((a, b) => (a.name > b.name) ? 1 : -1)
        return this
    }
    countWeight(){
        let i;
        let weightCounter = 0;
        for(i = 0; i<this.present.length; i++){
        if(!this.present[i].weight){
            weightCounter += this.present[i].obj.weight
        } else {
            weightCounter += this.present[i].weight
        }}
        this.weight = weightCounter
        return weightCounter
         
    }
    findCalAndPriceSweet(maxCalories, maxPrice){
        let foundSweets = []
        let i;
        let item;
        for(i = 1; i<this.present.length; i++){
        item = this.present[i]
        if(item.calories <= maxCalories) {
                if((!item.obj && item.price <= maxPrice) || 
                (item.obj && item.obj.price <= maxPrice)){
            foundSweets.push(item)
            }}}
        return foundSweets
    }
    buildPresent(){
        return this.present
    }
}

class NYPresentsForSchool{
    constructor(presentSet, numOfKids){
        this.presentSet = presentSet.present,
        this.numOfKids = numOfKids 
        this.totalWeight = presentSet.weight*numOfKids
    }
    addCongratsCard(congratsMessage){
        this.presentSet.congratsCard = `On behalf of Santa we are excited to wish you Happy New Year! ${congratsMessage}`
        return this
    }
    deliverByElf(){
        this.presentSet.deliverByElf = true
        return this
    }
    buildSetOfPresents(){
        let i;
        let setOfPresents = []
        for(i = 1; i<=this.numOfKids; i++){
            let presentForChild = {
                setNumber: i,
                present: this.presentSet  
            } 
            setOfPresents.push(presentForChild)
        }
        return {
            setOfPresents: setOfPresents,
            totalWeight: this.totalWeight, 
            numOfKids: this.numOfKids}
        }
    }