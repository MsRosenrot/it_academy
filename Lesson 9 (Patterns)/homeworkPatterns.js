import { Present, NYPresentsForSchool } from './classes.js'

// Создать несколько объектов-конфет.
let present = new Present().addChocoBar('Alenka').addChocoBar('Milka with nuts').addLollipop('Watermelon explosion', 'Watermelon')
.addLollipop('Taste of cantaloupe', 'Cantaloupe').addChocoCandy('Bon-bon', 10).addChocoCandy('Aeroflot', 15).addToy(20, 'Simple Dimple', 6)

// Провести сортировку конфет в подарке на основе одного из параметров. Adapter
let sortedPresent = present.sortPresentByName()

// Собрать детский подарок с определением его веса. 
let presentWeight = present.countWeight()

// Найти конфету в подарке, соответствующую заданному диапазону параметров.

let filteredPresent = present.findCalAndPriceSweet(100, 100)

// Собрать набор подарков для конкретной школы - builder

let setForSchool = new NYPresentsForSchool(present, 10).addCongratsCard('May this year be bright for you!').deliverByElf()
.buildSetOfPresents()