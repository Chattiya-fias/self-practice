/* part 01 pass function to another function */
/* function type */
//1.anonymous function 
//function expression และ arrow function
//นิยมเอามาใช้เป็น callback function
//2.named function
//function declaration และ named function expression

/* ทบทวน function type จาก self-practice 03 */
//การสร้าง function
//1.function declaration 
function multiply1(a,b){return a*b}
console.log(`multiply1 : ${multiply1(5,5)}`)
//2.function expression (using arrow function syntax) 
const multiply2 = (a,b) => a*b
console.log(`multiply2 : ${multiply2(5,5)}`)
//3.function expression (using function declaration)
const multiply3 = function(a,b){return a*b}
console.log(`multiply3 : ${multiply3(5,5)}`)

//ข้อ 1 เป็นแบบ named function declaration 
//ข้อ 2 เป็นแบบ anonymous arrow function
//ข้อ 3 เป็นแบบ anonymous function expression ไม่ได้ตั้งชื่อฟังก์ชัน
//เพิ่มเติม ข้อ 4 named function expression ตั้งชื่อฟังก์ชัน
const multiply4 = function multiply(a,b){return a*b}
console.log(`multiply3 : ${multiply4(5,5)}`)

//Pass function = การส่งฟังก์ชันไปเป็น argument
//Callback function = ฟังก์ชันที่ถูกส่งไป และถูก “เรียกใช้” โดยฟังก์ชันอื่น //ใส่ชื่อ function แบบไม่ใส่วงเล็บ (ให้มันประมวลผลให้)
const words01 = ['spray','present']
const result = words01.filter(word => word.length > 6) //callback function
console.log(result)

function isMorethanFive(value){
    return value > 5
}                                   
const filterNums = [12,5,8,130,44].filter(isMorethanFive) //pass function
console.log(filterNums)

//โจทย์ฝึกทำ callback function
/*
เขียนฟังก์ชันชื่อ doMath(a, b, callback) รับเลขสองตัว a และ b
รับฟังก์ชัน callback มาทำงานกับ a และ b แล้วคืนค่าผลลัพธ์ออกมา
*/
function doMath(a,b,callback){
    return callback(a,b)
}
function sum(a,b){
    return a + b
}
console.log(doMath(4,3,sum))

/* ------------------------------------------------ */
const words = ['mango','apple','mangosteen','orange']
/* ------------------------------------------------ */
/* part 02 array iterator method */
/* ทำงานกับ callback function ----------*/
//forEach() วนลูปผ่าน array โดยเรียกใช้ callback function
//does not change an original array
const forEach = words.forEach(x => {console.log(x)})

//map() สร้าง array ใหม่ โดยมีสมาชิกเป็นผลลัพธ์ที่ได้
//does not change an original array
const mapWords = words.map(word => word.toUpperCase())
console.log(mapWords)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]             

//--map() & filter()--
                         //callback function              //callback function
console.log(students.map(students => students.id).filter(id => id %2 === 0))

//filter() สร้าง array ใหม่ โดยเก็บเฉพาะสมาชิกที่ผ่านเงื่อนไข
//does not change an original array
//1. annonymous arrow function
const shortWords1 = words.filter(word => word.length == 6)
//2. annonymous function declaration
const shortWords2 = words.filter((word) => {
    return word.length == 6
})
//3. reuse callback function (named function)
function wordLength(word){
    return word.length == 6
}
const shortWords3 = words.filter(wordLength) 
console.log(words)
console.log(shortWords1)
console.log(shortWords2)
console.log(shortWords3)

//--filter() & includes()--
/* ------------------------------------------------ */
const wordss = ['Mango','Apple','mangosteen','orange','mangoes']
/* ------------------------------------------------ */
const mangoWordss = wordss.filter(word => word.toLowerCase().includes("mango"))
console.log(mangoWordss)

//find()
//findIndex()
//does not change an original array
//หาแค่ first element ที่ตรงตามเงื่อนไข
//ถ้า find หาไม่เจอจะ undefined ถ้า findIndex หาไม่เจอจะ return -1
const findApple = wordss.find(word => word.toLowerCase() === 'apple')
const applefind = word => {
    if (word !== undefined) return "has apple"
    else return "does not has apple"
}

const findIndexApple = wordss.findIndex(word => word.toLowerCase() === 'apple')
const applefindIndex = word => {
    if (word === 1) return "has apple"
    else return "does not has apple"
}

console.log(applefind(findApple))
console.log(applefindIndex(findIndexApple))

/* ------------------------------------------------ */
const everyNumbers = [2, 4, 6, 8]
/* ------------------------------------------------ */
//every() ตรวจสอบว่าสมาชิกทุกตัวผ่านเงื่อนไขหรือไม่ และคืนค่าเป็น Boolean
//does not change an original array
const everyAllEven = everyNumbers.every(num => num % 2 === 0)
console.log(everyAllEven)

//some() ตรวจสอบว่าสมาชิกมีอย่างน้อยหนึ่งตัวที่ผ่านเงื่อนไขหรือไม่ (ถ้ามีอย่างน้อย 1 ตัว true ถ้าไม่มีเลย false)
//does not change an original array
const everyAllold = everyNumbers.every(num => num % 2 !== 0)
console.log(everyAllold)

//reduce() รวมสมาชิกทั้งหมดของ array ตามที่กำหนด เพื่อให้ได้ single value โดยจะวนลูปทีละตัวจากซ้ายไปขวา
//does not change an original array
const product = [1,'RED',102]
const productDetail = product.reduce((detail,prop)=>{  //detail = accumulator (ตัวสะสมค่าผลลัพธ์) //prop = สมาชิกปัจจุบันของ array
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '') //'' initial values ค่าเริ่มต้นของ accumulator
console.log(productDetail)

/* find cart total and return object that show the total {total: 1080} */
const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
const totalCart = cart.reduce((total,item) => {
    total.total += item.price * item.quantity //total.total total ตัวที่สองคือ key ของ object
    return total
}, {total: 0}) //{total: 0} initial values เป็นค่าเริ่มต้นที่สะสมผลลัพธ์
console.log(totalCart)

//return ใน callback คือสิ่งที่บอก reduce ว่า “เอาค่าที่ return นี้ไปเป็น accumulator สำหรับรอบถัดไป

/* part 03 stack and queue method */
/* ทำงานกับ array ---------- */
//push() เพิ่มสมาชิกเข้าไปที่ท้าย array และคืนค่าเป็นความยาวใหม่ของ array 
// change an original array
const fruits = ['apple', 'banana']
console.log(fruits)
const pushfriut= fruits.push('orange', 'mango')
console.log(fruits)

//pop() ลบสมาชิกตัวสุดท้ายของ array และคืนค่าสมาชิกที่ถูกลบออก
//change an original array
const carttt = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
//cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
console.log(carttt)
carttt.push({ productId: 5555, price: 1, quantity: 4 })
console.log(carttt)
console.log(carttt.length) //4
console.log(carttt.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(carttt.length) //3

//shift() ลบสมาชิกตัวแรกของ array และคืนค่าสมาชิกที่ถูกลบออก
//change an original array
const food = ['pasta','pizza','fish']
//console.log(food.shift()) //แสดงค่าที่ shift
console.log(food)
food.shift()
console.log(food) //แสดงที่เหลือจาก shift

//unshift() เพิ่มสมาชิกเข้าไปที่ด้านหน้าของ array และคืนค่าใหม่
//change an original array
food.unshift('salmon')
console.log(food)

/* part 04 subarry method */
/* ทำงานกับ index หรือ value ---------- */
//splice() -> splice(start, deleteCount, item1, item2, ...)
//ลบ แทนที่ เพิ่ม สมาชิกใน array เดิม
//change an original array
/* ------------------------------------------------ */
const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
/* ------------------------------------------------ */
words1.splice(2,1,'banana') //นับไป index ที่ 2 ลบ 1 ตัว และแทนที่ด้วย banana
console.log(words1)
words1.splice(3,2) //นับไป index ที่ 3 ลบ 2 ตัว และไม่แทนที่
console.log(words1)
words1.splice(2,0,'malon','cherry') //นับไป index ที่ 2 ลบ 0 ตัว และแทนที่ด้วย malon , cherry
console.log(words1)

//slice() return สมาชิกตั้งแต่ index start จนถึง end แต่ไม่รวม index end (ใช้ index ติดลบ เพื่อบอกตำแหน่งจากด้านท้าย ของ array ได้)
//does not change an original array
console.log(words1.slice(2))   //slice item at index 2 to last
console.log(words1.slice(0,3))   //slice the first to third items

//fill() เปลี่ยนสมาชิกของตั้งแต่ index start จนถึง end แต่ไม่รวม index end 
//change an original array
console.log(words1)
console.log(words1.fill(null))   //fill null to all item
console.log(words1)

/* part 05 search and sorting method */
/* ทำงานกับ value ---------- */
//indexOf() return index ของสมาชิกตัวแรกที่ตรงกับค่าที่ระบุ หากไม่พบสมาชิกที่ระบุจะ return -1
//does not change an original array
const food1 = ['pasta','fish','pizza','fish']
console.log(food1.indexOf('fish'))
console.log(food1.indexOf('rice'))

//include() ตรวจสอบว่าใน array มีค่าที่ระบุอยู่หรือไม่ และคืนค่าเป็น boolean เอาไว้เช็คค่าแต่เป็น case sensitive
//does not change an original array
//1.includes() array
const x = ['a','ab','abc']
console.log(x.includes('a'))
//2.includes() string
const y = 'code very hard'
console.log(y.includes('a'))
//3.object ต้องใช้ some()
const animal = [
    {animal: 'cat', color: 'black'},
    {animal: 'dog', color: 'white'},
    {animal: 'bat', color: 'black'}
]
console.log(animal.some(name => name.animal.includes('a')))

/* ทำงานกับ callback function ---------- */
//sort() เรียงลำดับสมาชิกของ array โดยตรง
//change original array
const food2 = ['pasta','fish','pizza','fish']
console.log(food2)
console.log(food2.sort())

const std = [
    {id: 70, name:'fias'},
    {id: 127, name:'non'},
    {id: 99, name:'jia'}
]
console.log(std.sort((a, b) => a.id - b.id)) 
//ลบกันถ้าน้อยกว่า 0 แปลว่า a มาก่อน b 
//ลบกันถ้าเท่ากับ 0  แปลว่า ไม่เปลี่ยนตำแหน่ง
//ลบกันถ้ามากกว่า 0 แปลว่า b มาก่อน a

/* ทำงานกับ array ---------- */
//reverse() กลับลำดับสมาชิกของ array โดยตรง
//change original array
const food3 = ['pasta','Fish','pizza','fish']
console.log(food3.reverse())

//concat() รวม array
//does not change an original array
const Fname = [
    {1:'Chattiya', 2:0},
    {1:'xxxxxx', 2:0}
]
const Lname = [
    {1:0, 2:'Songprakob'},
    {1:0, 2:'yyyyyy'}
]
console.log(Fname[0][1].concat(' ').concat(Lname[0][2]))

/* part 06 Array to String conversion */
/* ทำงานกับ array ----------*/
//join() return เป็น string ใหม่ โดยเอาสมาชิกทั้งหมดของ array หรือ array-like object (ต้องแปลง) มาต่อกัน
const element = ['fire','air','water']
console.log(element.join())
console.log(element.join(''))
console.log(element.join(' '))
console.log(element.join(' - '))

/* part 07 array & array-like object */
//array
const arr = [10, 20, 30]
console.log(arr)
console.log(arr.length)
console.log(arr[0])

//array-like object (object ที่ดูคล้าย array)
//มี index เป็นตัวเลข
//มี length บอกความยาว (จำเป็น!)
const arrlikeobj = {0: 10, 1: 20, 2: 30, length:3}
console.log(arrlikeobj)
console.log(arrlikeobj.length)   //ถ้าไม่กำหนด length จะ undefined
console.log(arrlikeobj[0])
//แปลง array-like object เป็น array
const arr1 = Array.from(arrlikeobj)   //ถ้าไม่กำหนด length จะแปลงได้เป็น array ว่าง
console.log(arr1)

/* part 08 */
/* 
- ใช้ filter() หาเฉพาะผลไม้ที่ชื่อยาวกว่า 5 ตัวอักษร
- จากนั้นใช้ map() แปลงผลลัพธ์เป็นตัวพิมพ์ใหญ่ทั้งหมด
- สุดท้ายใช้ join() ต่อเป็น string โดยคั่นด้วย comma
- เป้าหมาย: ฝึกรวม filter(), map(), join() */
const fruitsQuestion = ['apple', 'banana', 'orange', 'mango']
console.log(fruitsQuestion.filter(item => item.length > 5)
                          .map(word => word.toUpperCase())
                          .join(' , '))
   
/*
- ให้ใช้ filter() เลือกเฉพาะชื่อผลไม้ที่มีตัวอักษร "a",
- จากนั้นใช้ map() ให้ขึ้นต้นด้วยตัวพิมพ์ใหญ่ (apple → Apple),
- สุดท้ายใช้ sort() เรียงตามตัวอักษร A → Z
*/
console.log(fruitsQuestion.filter(word => word.includes('a'))
                          .map(word => word.charAt(0).toUpperCase().concat(word.slice(1))) //charAt() จะได้มาแค่ตัวเดียวจึงต้อง .slice() พื่อเอาตัวอักษรมาต่อ
                          .sort())
                          
/* 
- ใช้ array method ที่เหมาะสม หาเลขตัวแรกที่มากกว่า 10
- ใช้ callback function
- คืนค่าตัวเลขนั้นออกมา
- เป้าหมาย: ฝึกใช้ find() และ callback
*/
const numbersQuestion = [5, 12, 8, 130, 44]
console.log(numbersQuestion.find(num => num > 10))

/*
- ให้ใช้ filter() เลือกนักเรียนที่คะแนน >= 50,
- จากนั้นใช้ map() แปลงให้อยู่ในรูป string "Name: Score",
- ต่อด้วย sort() เรียงคะแนนจากมากไปน้อย,
- สุดท้ายใช้ join() ต่อเป็นข้อความเดียว โดยแต่ละนักเรียนคั่นด้วย |
*/
const studentsQuestion = [
  {name: 'A', score: 30},
  {name: 'B', score: 70},
  {name: 'C', score: 90},
  {name: 'D', score: 40}
]
console.log(studentsQuestion.filter(std => std.score >= 50)
                            .sort((a,b) => b.score - a.score)
                            .map(std => `${std.name}: ${std.score}`)
                            .join(" | "))