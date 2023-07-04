interface User{
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}
interface Admin{
name: string,
age: number,
role: string
}
interface Modifiers {
    // obj: {},
    set(key: string, value: any): object,
    get(key: string): any,
    delete(key: string): {},
    getObject(): {}
}
export { User, Modifiers, Admin }