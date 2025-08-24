/* part 01 */
//การสร้าง function
//1.function declaration 
function multiply1(a,b){return a*b}
console.log(`multiply1 : ${multiply1(5,5)}`)
//2.function expression (using arrow function syntax) //arrow ไม่ support this.xxx
const multiply2 = (a,b) => a*b //เสมือนมี return ข้างหน้า เลยไม่ต้องใส่ก็ได้
console.log(`multiply2 : ${multiply2(5,5)}`)
//3.function expression (using function declaration)
const multiply3 = function(a,b){return a*b}
console.log(`multiply3 : ${multiply3(5,5)}`)

//โจทย์จาก array self-practce 01
/* โจทย์: เขียนฟังก์ชันที่รับ array และคืน array ที่ไม่มีค่าซ้ำกัน */
const question3 = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, 2, 2, 3, 4, 4, 5]
console.log(`question3 : ${question3(arr)}`)

/* part 02 */
//Higher-Oder function ฟังก์ชันที่ทำงานกับ “ฟังก์ชัน” โดยตรง
//1. store function in variables
//2. passing a function to another function
//3. return function as value of another function คืนฟังก์ชันที่เป็นผลลัพธ์ของฟังก์ชันอีกตัวหนึ่ง

//จาก function multiply1(a,b){return a*b}
const x = multiply1          /* (1.) */
function doSomething(x){
    return x //return multiply1  
}
console.log(doSomething(multiply1)) //ได้ [function multiply1]   /* (2.) */
const y = doSomething(x)     /* (3.) */
console.log(y(2,4)) // = multiply1(2,4)

//ตัวอย่าง (3.)
function sayGoodBye(){ 
    return 'Good Bye'
}
function doSomeThing(){
    return sayGoodBye  //คืนฟังก์ชัน sayGoodbye() ที่เป็นผลลัพธ์ของฟังก์ชัน doSomeThing()
}
                                        //first ()      //second ()
console.log(doSomeThing()()) //doSomeThing() => sayGoodbye()

/*
เขียนฟังก์ชันชื่อ makeAdder ที่รับตัวเลข n เป็นพารามิเตอร์ แล้ว คืนฟังก์ชันอีกตัวหนึ่ง ที่เมื่อเรียกด้วยตัวเลข x จะบวก n + x แล้วคืนค่า

ตัวอย่างการใช้งาน:
const add5 = makeAdder(5);
console.log(add5(10)); // 15

const add10 = makeAdder(10);
console.log(add10(7)); // 17
*/
function makeAdder(n){
    return x => {
        return n + x
    }
}
console.log(makeAdder(5)(10))
console.log(makeAdder(7)(10))

/* part 03 */
//parameter passing
// 1. primitive parametor passing
/* Pass by Value 
- ส่งค่าผ่านสำเนา
- ใช้กับ primitive types (number, string, boolean, null, undefined, symbol)
- ฟังก์ชันรับค่าที่ส่งเข้าไปเป็น สำเนา
- การเปลี่ยนค่าภายในฟังก์ชัน ไม่กระทบตัวแปรต้นฉบับ
*/
function square1(side){
    side = 9
}
let theside1 = 2
console.log(square1(theside1)) //ใน function ไม่ได้ return ต่อให้ส่ง theside ไปก็จะ undefined 
                              //ใน JavaScript ฟังก์ชันที่ไม่คืนค่าใด ๆ จะ คืนค่า undefined โดยอัตโนมัติ
console.log(theside1) //2 เหมือนเดิมเพราะไม่กระทบตัวแปร

function square2(side){
    return side = 9 //เปลี่ยน theside แค่ที่อยู่ใน function
}

let theside2 = 2
console.log(square2(theside2)) //9  //ไม่ undefined เพราะใน function มี return
console.log(theside2) // 2 

//2. object parameter passing
/* Pass by Reference 
- ส่งที่อยู่ของค่า
- ใช้กับ object types (object, array, function)
- ฟังก์ชันรับ reference หรือที่อยู่ของ object
- การเปลี่ยนค่าภายในฟังก์ชัน กระทบตัวแปรต้นฉบับ
*/
function myFunc(theObject){
    theObject.model = "A9999"
}
const product = {model: "A1001", price: 199}
console.log(product.model) //"A10001"

console.log(myFunc(product)) //ถ้าทำแบบนี้ ใน function ไม่ได้ return ส่งไปก็จะ undefined 
myFunc(product)
console.log(product.model) //"A9999"

/* part 04 */
//argument object เป็น local variable within all-non arrow function 
//argument object เป็น object ที่มีลักษณะคล้าย array แต่ ไม่ใช่ array จริง ๆ (array-like object)
/*
- มี .length
- เข้าถึง index เหมือน array ได้
- ไม่มี method ของ array ต้องแปลงก่อนถึงใช้ method ได้
*/
function sum1(x,y){
    return arguments[0] + arguments[arguments.length-1]   //มีค่าเท่ากับ return x + y 
}
console.log(sum1(1,2,3,4,5,6,7,8))

function sum2(x,y,...z){
    for(argu of arguments){
        console.log(argu)
    }
    console.log(`length: ${arguments.length}`)
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
    console.log(`z: ${z}`)
}
sum2(1,2,3,4,5,6,7,8)

// โจทย์ : หา sum โดย parameter ไม่จำกัดจำนวนตัว รองรับทุกรูปแบบ
function sum3(...x){ //ใช้ spread parameter เพราะไม่จำกัดจำนวนตัว
    let sum = 0
    for(argu of x){
        sum += Number(argu) || 0   //ใน JavaScript Number() หมายถึงแปลงค่าให้เป็นตัวเลข 
        // || 0 หมายถึง ถ้าแปลไม่ได้ให้ค่าเป็น 0
    }
    return sum
}
console.log(sum3(1,2,3)) //6
console.log(sum3("4", 5)) // 9
console.log(sum3("hello", 10)) // 10  //("hello" → NaN → 0)
console.log(sum3([1,2], 3)) // 3  //([1,2] → NaN → 0)

/* part 05 */
/*
โจทย์ : รับประโยคเข้ามาและนำคำแต่ละคำในประโยคมากำหนดเป็น key ของ object แบบตัวพิมพ์เล็ก
รวมถึงบอกความถี่ที่ปรากฏ และเช็ค type หากเป็น undefined และ null ให้ return undefined
*/
function getfreqOfWords(sentence){
    if(sentence===undefined || sentence===null){return undefined}

    let arr = sentence.split(" ")
    let object = {}
    for(let i = 0 ; i < arr.length ; i++){
        let key = arr[i].toLowerCase()
        if (object[key] === undefined) { //object[arr[i]] คือเอาค่า i ใน arr มาเป็น key ใน object
            object[key] = 1   // ถ้ายังไม่เคยเจอ (undefined) กำหนดให้ value เป็น 1
        } else {
            object[key] += 1  // ถ้าเคยเจอแล้ว เพิ่มค่า value ไปอีก 1
        }
    }
    return object
}
console.log(getfreqOfWords('Coding very very very hard'))
console.log(getfreqOfWords(null))
console.log(getfreqOfWords(undefined))