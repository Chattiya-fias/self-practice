/* part 01 */
const studentScores = [
    {name: 'Alice', score: 85},
    {name: 'Bob', score: 92},
    {name: 'Charlie', score: 68},
    {name: 'David', score: 55},
    {name: 'Eve', score: 78}
]

//declarative programing (functional programing) บอกว่าอยากได้อะไรและให้คำสั่ง
function getPassingNames(stdnames){
    return stdnames.filter(stdscores => stdscores.score >= 70) //input หนึ่ง ไปเป็น input ต่อไป
                   .map(stdnames => stdnames.name.toUpperCase())
}

/*
//imperative programing ให้คำสั่งเลย
function getPassingNames(studentScores) {
    let result = [];
    for (let i = 0; i < studentScores.length; i++) {
        let student = studentScores[i];
        if (student.score >= 70) {
            result.push(student.name.toUpperCase());
        }
    }
    return result;
}
*/

const passingNames = getPassingNames(studentScores)
// console.log(passingNames)

/* part 02 */
//Array.isArray() ใช้เช็คว่าเป็น Array ไหม
// console.log(Array.isArray([]))
// console.log(Array.isArray("[]"))
const arr1 = [1,2,3]
const arr2 = [4,5,6]
// console.log(arr1.concat(arr2))
// console.log(arr1.toString())

/* part 03 */
const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
//อยากเรียง name น้อยไปมากจากตัวอักษรโดยไม่สนตัวเล็กตัวใหญ่
const sortstds = stds.sort((a, b) => a.name.localeCompare(b.name))
// console.log(sortstds)

/* part 04 */
/*
Tree shaking มันคือการลบโค้ดที่ไม่ได้ใช้งานออก เพื่อทำให้ไฟล์ clean และมีขนาดเล็กลง
ทำได้โดยการใช้ export import

การแบ่ง code เป็น module จะทำให้จัดการโค้ดได้ง่าย นำกลับมาใช้ซ้ำได้ และช่วยทำให้เครื่องมือ
ที่รวมไฟล์ (bundler) รู้ว่า code ไหนถูกใช้ ซึ่ง tree shaking คือหนึ่งในฟีเจอร์ของ bundler
*/

//Js module มี 2 ประเภท
/* 
1.CommonJS (ไม่รองรับ tree shaking) 
Export ใช้ module.export
Import ใช้ require()
*/
function echo(value){
    return value
}
function getlength(str){ //ระบุ export แค่ที่ต้องการ 
    return str.length
}
const maxstudent = 60
// module.exports = {echo, getlength, maxstudent} //ใช้ echo หรือ {echo} -> destructuring
//{echo:echo , getlength:getlength, maxstudent:maxstudent}

/*
2. ES module (รองรับ tree shaking) 
ถ้าจะใช้ต้องเปลี่ยนไฟล์จาก .js เป็น .mjs
หรือกำหนด "type : module" ใน package.json หรือ <script> ใน html
Export ใช้ export
Import ใช้ import
*/
export const TAX = 0.7
function sum(a,b){    //เป็น callback function
    return a + b
}
function total(a,b,sum){   //รับ callback
    const subtotal = sum(a,b)
    return subtotal * TAX
}
export {sum,total}

//export ของ ES module จะส่งออก function, object หรือ value ได้
/*
มี 2 แบบ
1. Named export ส่งออกหลายไฟล์ในไฟล์เดียว ซึ่งตอน import จะต้องใช้ {} 
และต้องเรียกชื่อให้ตรงกันกับ export แต้หากต้องการเปลี่ยนให้ใช้ as
-Export individual (ส่งเดี่ยวๆ)
-Ecport list (ส่งเป็นกลุ่ม)
*/
export const pi = 3.14  //export individual
function add(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b        
}
export {add,subtract as minus}    //export list

/*
2. Default export ส่งออกได้เพียงหนึ่งค่า
Import ด้วยชื่ออะไรก็ได้ ไม่จำเป็นต้องตรงกันกับ export
*/
export default function multiply(a, b) {
    return a * b
}
function power(a,b){
    return a ** b
}
// export {power as default} //เป็น default export แบบนี้ก็ได้

/* part 05 */
//practice
/*
Write a function addProperty(obj, key, value) 
that adds a new property to an object 
and returns the updated object.
*/
export function addProperty(obj, key, value) {
  obj[key] = value
  return obj
}

/*
Write a function mergeObject(obj1, obj2)
and return merges two objects.
*/
export function mergeObject(obj1, obj2) {
  return {...obj1, ...obj2}
}

/*
Write a function extractAndRename(obj) 
that extracts properties name and age from an object, 
renames them to fullName and yearsOld, 
and returns a new object with these properties.
*/
export function extractAndRename(obj) {
  const {name, age} = obj 
  return {fullName: name, yearsOld: age}
}
