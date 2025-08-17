/* part 01 */
let std1 = {
    Fname:'Chattiya',
    Lname:'Songprakob',
    study:true,
    age: 19,
    age: 20, //ถ้า key ซ้ำกัน จะเอา key สุดท้าย
    getname: function(){return this.Fname},
    program: {
        faculty: 'SIT',
        major:['IT','DSI','CS'],
        getprogram(){return this.faculty+""+this.major[0]}
    }
}

/* part 02 */
std1.nickname = 'Fias'
delete std1.study

/* part 03 */
//เรียกใช้ property เพื่ออ่านและแสดงค่า
//1.loop
for(const key in std1){console.log(std1[key])} //ใน loop อ้างถึง key ได้แบบเดียว
//2.Bracket notation
console.log(std1["Fname"]) //ถ้าไม่เข้า loop อ้างถึง key ได้ 2 แบบ
//3.Dot notation
console.log(std1.Fname)
//4.Object destructuring
let { nickname, age } = std1;
console.log(nickname); // "Chattiya"
console.log(age);   // 20
//5.Object methods
Object.keys(std1); 
Object.values(std1);
Object.entries(std1); //แปลง object เป็น array ของ key-value คู่กัน

/* part 04 */
function std2(Fname,Lname,nickname,study,age,program){
    this.Fname=Fname,
    this.Lname=Lname,
    this.nickname=nickname,
    this.study=study,
    this.age=age,
    this.getname = function(){return this.Fname},
    this.program = new Program2()
}
function Program2(faculty,major){  //constructure function ซ้อน constructure function
    this.faculty = 'SIT';
    this.major = ['IT','DSI','CS'];
    this.getprogram = function() {
        {return this.faculty+""+this.major[0]}
    }
}

//object และ array จะเก็บ reference สามารถ new สร้างได้เลย
const mystd2 = new std2("Chattiya","Songprakob","fias",true,20)
console.log(mystd2)
console.log(mystd2.getname())
console.log(mystd2.program.getprogram()) // "SIT IT"

/* part 05 */
class std3{
    constructor(Fname, Lname, nickname, study, age) {
        this.Fname = Fname,
        this.Lname = Lname,
        this.nickname = nickname,
        this.study = study,
        this.age = age,
        this.program = new Program3()
    }
    getname() {return this.Fname}
}
class Program3 {
    constructor(faculty = 'SIT', major = ['IT', 'DSI', 'CS']) {
        this.faculty = faculty;
        this.major = major;
    }
    getprogram() {return this.faculty + " " + this.major[0]}
}

const mystd3 = new std3("Chattiya", "Songprakob", "fias", true, 20)
console.log(mystd3)
console.log(mystd3.getname()) 
console.log(mystd3.program.getprogram())

/* part 06 */
const mystd4 = Object.create(mystd3) //object ใหม่ โดยใช้ object ที่มีเป็น prototype
mystd4.gender = "female" //เพิ่ม property ใหม่ให้ object ใหม่ได้
console.log(mystd4.Fname) //เข้าถึง property หรือ method ของ prototype ได้
console.log(mystd4.gender)

/* part 07 */
//destructuring on object
const destructuring={id:70, student:{firstname: 'Chattiya',lastname:'Songrakob'}}

const {id:studentID,student:{firstname}} = destructuring  //id:studentID เป็นการตั้งชื่อให้ key ใหม่
console.log(studentID) //70
console.log(firstname) //Chattiya

//โจทย์ผสมการ destructuring array + object Destructuring
// สร้าง array ที่เก็บ object และใช้ destructuring เพื่อดึง object ของนักเรียนคนที่ 3 และเอา name, age ออกมา
const students = [
    { id: 1, Name: "jia", Age: 20 },
    { id: 2, Name: "non", Age: 20 },
    { id: 3, Name: "fias", Age: 20 }
];
let [, , {Name,Age}] = students //, , คือข้ามไป index 2

/* part 08 */
const x1 = {topic:"self-practice"}
const y1 = {topic:"self-practice"}
//การเทียบว่าเท่ากันกันไหม ควรใช้เป็น === เพราะจะเช็คทั้งค่าและtype 
console.log(x1===y1) //false
console.log(Object.is(x1,y1)) //false
//การสร้าง object มันจะถูกจอง memory address เอาไว้เก็บ reference โดยไม่สนใจ content
//เมื่อเทียบว่าเท่ากันก็จะ false
const x2 = {topic:"self-practice"}
const y2 = x2 
console.log(x2===y2) //true
console.log(Object.is(x2,y2)) //true
//ถ้าเป็น reference เดียวกันถึงจะเป็น true
//=== กับ Object.is() ทำงานได้เหมือนกันเลยแต่ก็ยังมีกรณีพิเศษที่เป็น NaN และ +0/-0

/* part 09 */
//Objecy.key() เป็น method ที่ถอด key ออกมาเป็น array
//Object.values() เป็น method ที่ถอด values ออกมาเป็น array
let book1 = {isdn: 123456789, title: "JavaScript"}
let book2 = {isdn: 123456789, title: "JavaScript"}

const key1=Object.keys(book1) 
const key2=Object.keys(book2) 
const values1=Object.values(book1) 
const values2=Object.values(book2) 
console.log(key1)  //[ 'isbn', 'title' ]
console.log(key2)  //[ 'isbn', 'title' ]
console.log(values1)  //[ 123456789, 'JavaScript' ]
console.log(values2)  //[ 123456789, 'JavaScript' ]

//นำ method Objecy.key() และ Object.values() ใช้เพื่อเทียบความเท่ากันของ object
function shallowEquality(object1,object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length !== keys2.length){ //เช็คความยาวเพื่อป้องกันกรณีที่มี property ไม่เท่ากัน
        return false
    }
    for(let key of keys1){ 
        if(object1[key] !== object2[key]){
            return false
        }
    }
    return true
}
console.log("shallow equality: " + shallowEquality(book1,book2))

/*
for...in
ใช้วนลูป key ใน object หรือถ้าต้องการ index ของ array
for...of
ใช้นลูป value โดยตรง ใน array และอื่นๆ

*/

/* part 10 */
//การเช็ค object empty 1. ต้องแปลงเป็น string ก่อน และ 2. เช็ค length
const emptyObj = {}

if(JSON.stringify(emptyObj) === '{}') //JSON.stringify() เป็น method ของ JavaScript ที่แปลงค่าเป็น string
    console.log('1. emptyOdj is empty object')

if(Object.keys(emptyObj).length === 0)
    console.log('2. emptyObj is empty object')