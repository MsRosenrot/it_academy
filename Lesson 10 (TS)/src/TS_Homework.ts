import { mapperInterface, filterFnInterface } from "./Interfaces/callbacks.js";
import { User, Modifiers, Admin } from "./Interfaces/objects.js"

// Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

let users: User[];
let user1, user2: User;

users = [
user1 = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
},
user2 = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}
]

// Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person, который будет соответствовать массиву
// I decided to re-use User interface:
type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// // Напишите анотации типов к этому классу.

export class ObjectManipulator implements Modifiers{

    constructor(protected obj: {}) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

// Обеспечьте правильную типизацию для указанных функций.
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 */
/**
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */

export function map<T>(mapper: mapperInterface<T>, input: T[]): Function | T[] {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */

export function filter<T>(filterer:filterFnInterface, input:T[]): Function | T[] {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */

export function add(a:number, b:number): Function | number {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}