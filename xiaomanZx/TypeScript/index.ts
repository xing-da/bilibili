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

//函数类型
// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// 2.函数默认的参数 | 函数可选参数 ?
// 3.参数是一个对象如何定义
// 4.函数this类型
// 5.函数重载
// function add(a: number, b: number): number {
//     return a + b
// }
// const add = (a: number, b: number): number => a + b
// console.log(add(2, 4));
//.
// function add(a: number, b: number = 5): number {
//     return a + b
// }
// console.log(add(1));
// .
// interface User {
//     name: string
//     age: number
// }
// function add(user: User): User {
//     return user
// }
// console.log(add({ name: '代', age: 4 }));
// .
// interface Obj {
//     user: number[]
//     add: (this: Obj, num: number) => void
// }
// // ts 可以定义this的类型 在js中无法使用 必须是第一个参数定义this 的类型
// let obj: Obj = {
//     user: [1, 2, 3],
//     add(this: Obj, num: number) {
//         this.user.push(num)
//     }
// }
// obj.add(4)
// console.log(obj.user);
// .
// let user: number[] = [1, 2, 3];
// function findNum(): number[]//如果没有传入东西就是查询全部
// function findNum(id: number): number[]//如果传入了id就单个查询
// function findNum(add: number[]): number[]//如果传入的是一个number类型的数组那就做添加
// function findNum(ids?: number | number[]): number[] {
//     if (typeof ids == 'number') {
//         return user.filter(v => v == ids)
//     }
//     else if (Array.isArray(ids)) {
//         user.push(...ids)
//         return user
//     } else {
//         return user
//     }
// }
// console.log(findNum());
// console.log(findNum(3));
// console.log(findNum([4]));

// 联合类型|类型断言|交叉类型
// let phone:number | string = 13486552472
// let fn = function (type: number | boolean): boolean {
//     return !!type;
// }
// let result = fn(0);
// console.log(result);
// .
// interface Popple {
//     name: string
//     age: number
// }
// interface Man {
//     sex: number
// }
// const dai = (man: Popple & Man): void => {
//     console.log(man);
// }
// dai({
//     name: 'dai',
//     age: 4,
//     sex: 2
// })
// .
// let fn = function (num: number | string): void {
//     console.log((num as string).length);
// }
// fn('1223')
// interface A{
//     run:string
// }
// interface B{
//     build:string
// }
// let fn = (type:A | B):void =>{
//     console.log((<A>type).run);
//     console.log((type as A).run);
// }
// fn({
//     run:'1212'
// })

// 内置对象
// 1.ecma Number Date RegExp Error XMLHttpRequest
// 2.dom querySelect MouseEvent
// 3.bom promise localstorage location cookie
// 4.案例
// let num:Number = new Number(1)
// let date:Date = new Date()
// HTML(元素名称)Element 
// HTMLDivElement 
// let div = document.querySelector('div')
// HTMLSpanElement 
// let span = document.querySelector('span')
// HTMLElement 
// let footer = document.querySelector('footer')
// let div:NodeList = document.querySelectorAll('div');
// let div:NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div footer');
// .
// let local:Storage = localStorage
// let lo:Location = location
// let promise:Promise<string> = new Promise((r)=>r('dai'))
// promise.then(res=>{
//     res.length
// })
// let cookie:string = document.cookie

//代码雨 
// let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
// let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
// canvas.width = screen.availWidth
// canvas.height = screen.availHeight

// let str: string[] = '010101'.split('')
// let Arr = Array(Math.ceil(canvas.width / 10)).fill(0)

// const rain = () => {
//     ctx.fillStyle = 'rgba(0,0,0,0.05)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
//     ctx.fillStyle = '#0f0'
//     Arr.forEach((item, index) => {
//         ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10)
//         Arr[index] = item > canvas.height || item > 15000 * Math.random() ? 0 : item + 10
//     })
// }
// setInterval(rain, 40)

// Class
// 1.class的基本用法 继承 和 类型约束 implements
// 2.class的修饰符 readonly:只读的 private:私有的 protected:给子类 | 内部使用 public:共有的
// 3.super 原理
// 4.静态方法
// 5.get set
// interface Options {
//     el: string | HTMLElement
// }
// interface VueCls {
//     options: Options
//     init(): void
// }

// interface Vnode {
//     tag: string
//     text?: string
//     children?: Vnode[]
// }
// // 虚拟dom 简单版
// class Dom {
//     constructor(x) {
//         console.log(x);

//     }
//     //创建节点的方法
//     createElement(el: string) {
//         return document.createElement(el)
//     }
//     // 填充文本的方法
//     setText(el: HTMLElement, text: string | null) {
//         el.textContent = text;
//     }
//     // 渲染函数
//     render(data: Vnode) {
//         let root = this.createElement(data.tag)
//         if (data.children && Array.isArray(data.children)) {
//             data.children.forEach(item => {
//                 let child = this.render(item)
//                 root.appendChild(child)
//             })
//         } else {
//             this.setText(root, data.text)
//         }
//         return root;
//     }
// }
// class Vue extends Dom implements VueCls {
//     options: Options
//     constructor(options: Options) {
//         //父类的prototype.constructor.call
//         super('代')
//         this.options = options
//         this.init()
//     }
//     // 静态方法 this能互调跟属性,但无法调用非静态方法
//     static version() {
//         return '1.0.0'
//     }
//     init(): void {
//         let data: Vnode = {
//             tag: "div",
//             children: [
//                 {
//                     tag: 'section',
//                     text: '我是子节点1'
//                 },
//                 {
//                     tag: 'section',
//                     text: '我是子节点2'
//                 },
//             ]
//         }
//         let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
//         app.appendChild(this.render(data))

//     }
// }
// new Vue({
//     el: "#app",
// })
// Vue.version()

// .
// class Ref {
//     _value: any
//     constructor(value: any) {
//         this._value = value
//     }

//     get value() {
//         return this._value + 'ddd'
//     }
//     set value(newValue) {
//         this._value = newValue + 'd'
//     }
// }

// const ref = new Ref('哈哈哈')
// console.log(ref.value);
// ref.value = 'tt'
// console.log(ref.value);

// 基类 抽象类
// abstract 所定义的抽象类
// abstract 所定义的方法 都只能描述不能进行一个实现
// abstract class Vue {
//     name: string
//     constructor(name?: string) {
//         this.name = name;
//     }
//     abstract init(name: string): void
//     getName(): string {
//         return this.name
//     }
// }

// class React extends Vue {
//     constructor() {
//         super()
//     }
//     init(name: string): void {

//     }
//     setName(name: string) {
//         this.name = name
//     }
// }
// const react = new React();
// react.setName('d')
// console.log(react.getName());

// 元组类型

// let arr = [1, true]; readonly 只读,不可修改
// let arr:[number,boolean] = [1, true];
//可以更改 number,定义什么,才能添加什么
// arr[0] = 666
// 应用
// let excel:[string,string,number][] = [
//     ['d','d',64],
//     ['d','d',64],
//     ['d','d',64],
//     ['d','d',64],
// ]
// 类型别名
// let arr: [x: number, y: boolean] = [1, true];
// type first = typeof arr[0]
// type first = typeof arr['length']