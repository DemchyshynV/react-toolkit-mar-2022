"use strict";
// // const x = (a: number, b: string): number|string => {
// //     return
// // }
// //
// // x(12, 'ddd')
//
//
// // const user: { name: string, age: number, status: boolean } = {name: 'Max', age: 12, status: true}
// //
// // interface IUser {
// //     name: string;
// //     age: number;
// //     status: boolean;
// // }
// //
// // const user2: Partial<IUser> = {}
//
// // interface IAddress {
// //     city: string;
// //     house: number
// // }
// //
// // interface IUser<T, D> {
// //     name: string;
// //     age: number;
// //     status: boolean;
// //     data: T
// //     data2: D
// //     address: {
// //         city: string;
// //         house: number[]
// //     }
// // }
// //
// // const user: IUser<number[], number> = {name: 'Max', data: [1, 3, 4, 5,], age: 12, status: false, data2: 25}
//
// // type UserId = number
//
// // interface IMyArray{
// //
// // }
//
// // type useStateType = [string, (a:number, b:string)=>string]
// //
// // const useState:useStateType = ['sssss', (a, b) => {
// //     return `${a}--${b}`
// // }]
// //
// // let [user, setUser] = useState;
// //
// // setUser()
// // user.
//
// // class User{
// //
// //     constructor(public id: number, private name: string, private age: number) {
// //         this.id = id;
// //         this.name = name;
// //         this.age = age;
// //     }
// // }
// //
// // const user = new User(12,'Max', 15);
// //
// // user.name
//
// // const x = (a:number, b:string):void => {
// //     console.log(a + b);
// // }
// //
// // x(12,'dd')
//
// interface IShapeActions {
//     area: () => number;
//     perimeter: () => number;
// }
//
// interface IGreeting {
//     hello: () => void;
// }
//
// class Rectangle implements IShapeActions, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     hello(): void {
//         console.log('Hello');
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
//
// }
//
// class Triangle implements IShapeActions {
//
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c
//     }
//
//     perimeter(): number {
//         return this.a * this.c / this.b;
//     }
// }
//
// const shapes:IShapeActions[] = [new Triangle(1,5,7), new Rectangle(15,14)]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
exports.__esModule = true;
var user_service_1 = require("./services/user.service");
user_service_1.userService.getAll().then(function (_a) {
    var data = _a.data;
    console.log();
});
user_service_1.userService.getById(2).then(function (_a) {
    var data = _a.data;
    console.log(data.username);
});
