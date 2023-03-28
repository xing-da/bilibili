// let str:String = '代';
// console.log(str);

// let num:number = 123;
// let s:String = `${num}`;
// console.log(s);

// /* Type Checking */
// "strict": false, 
// let v1:void = null
// let v2:void = undefined

// 可以穿插赋值
//需要把严格模式关闭
// let n:null = null;
// let a:undefined = undefined;
// n = a
// a = n

// void应用场景
// function myFn():void {

// }

// function myFn() {
//     return 1
// }

// let a:number = 999;
// console.log(a);

// any 任意类型 unknown 不知道的类型
// 1.top type 顶级类型 any unknown
// 2.Object
// 3.Number String Boolean
// 4.number string boolean
// 5.   1      '代' false
// 6.never
// unknown 只能赋值给自身 或者是any
// unknown 没有办法读任何属性 方法也不可以调用
// unknown 相较于any 比较安全

// Object 所有皆可，引用与基础类型 object，则是原始类型无法， {}，就像是new object跟Object一致
// 字面量，无法进行任何赋值的一个操作

// interface 重名 重合
// interface 任意key
// interface ？ readonly
// interface 接口继承
// interface 定义函数类型
/* 不能多也不能少，一比一还原 */
// interface Axx {
//     name: string
//     age: number
//     // 索引签名 推荐any，如果用string，其他成string
//     [propName: string]: any
// }
// let a: Axx = {
//     name: "代",
//     age: 88,
//     a: 1,
//     b: 2,
//     c: 3
// }
// interface Axx extends Bxx {
//     name: string
//     //?可写可不写
//     age?: number
//     cb: () => boolean
//     readonly id: number
// }
// // interface继承
// interface Bxx {
//     xxx: string
// }
// let a: Axx = {
//     name: "代",
//     age: 88,
//     cb: () => {
//         return false
//     },
//     id: 1,
//     xxx: '1'
// }
// a.cb()
//不加 readonly就可以修改,一般加在函数或者id上
// a.cb = () => { return true }
// a.id = 8
// interface定义函数类型
// interface Fn {
//     (name: string): number[]
// }
// const fn: Fn = function (name:string) {
//     return [1]
// }

// 数组类型
// number[] boolean[]
// let arr:boolean[] = [false,true]
// // 泛型
// let array:Array<boolean> = [false,true]
// 定义对象数组使用interface
// interface X{
//     name:string
//     age?:number
// }
// let arr:X[] = [{name:'代',age:4},{name:'carrot'}]
// 二维数组
// let arr: number[][] = [[1], [2], [3]];
// //使用泛型
// let array: Array<Array<number>> = [[4], [5], [6]]
// // 大杂烩数组 使用any
// let hotchpotchArr: any[] = [1, '2', {}, true]
// // 也可使用元组
// let hotchpotch: [number, string, {}, boolean] = [1, '2', {}, true]
// 可以在函数的剩余参数里面定义类型 number string 
// function a(...args: any[]) {
//     // console.log(args);
//     //类数组 伪数组
//     // console.log(arguments);
//     // let d:IArguments = arguments
//     let d:A = arguments
//     console.log(d);
// }
// a(1, 2, 3)
// interface A {
//     callee:Function
//     length:number
//     [index:number]:any
// }