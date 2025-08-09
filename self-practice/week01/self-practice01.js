/* part01 */
console.log("--- part01 ---")
const x = [1,2,3,'fias','070',"fias",true,false]
console.log(`array x :`, x)
console.log(`length of x : ${x.length}`)
console.log(`index 2 of x : ${x[2]}`)
console.log(`index length-1 : ${x[x.length-1]}`)
if (Array.isArray(x)) {
  for (let i = 0; i < x.length; i++) {
    console.log(`each i in array : ${x[i]}`);
  }
}


/* part02 */
console.log('--- part02 ---')
let o = ['sit', 'it', 70]
/* growing */
o.push('chattiya') //เพิ่มค่าเข้าไป
o[o.length+1] = 'fias' //เพิ่ม slot และเพิ่มค่า
console.log(`array o :`, o)
console.log(`length of o : ${o.length}`)
/* selete */
delete o[0] //ค่าหายแต่ slot ยังอยู่
console.log(`delete index 0 of o :`, o)
console.log(`length of o : ${o.length}`)
/* shrinking */
o.pop() //pop ให้ค่าตัวสุดท้ายและ slot หาย
console.log(`pop o :`, o)
console.log(`length of o : ${o.length}`)

o.length = 4
console.log(`modify length to 4`, o)
console.log(`length of o : ${o.length}`)

o = o.filter(item => item !== undefined)
console.log(`filter empty item`, o) 
console.log(`length of o : ${o.length}`)

o.splice(1, 1);
console.log(`splice o : `, o) 
console.log(`length of o : ${o.length}`)


/* part03 */
console.log('--- part03 ---')
/* array contains many objects */
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors[1].name)
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},{address:['Bangkok', 'Puket']}]
console.log(contacts[0].email[1])
/* array contains many arrays */
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups[0][1])
console.log(groups.map(group => group[group.length - 1]))


/* part04 */
console.log("--- part04 ---")
const spread = 'fias'
const spreadCh = [...spread] //แยกที่เหลือออกมา ถ้าเป็น string จะแยกออกเป็น character
console.log(`spread :`, spread)
console.log(`spreadCh :`, spreadCh)
const clonespread = ['checked', 'spread', ...spreadCh, 'done']
console.log(`clonegspread :`, clonespread)
const reversespread = ['checked', 'reverse', ...spreadCh.reverse(), 'done']
console.log(`reversespread :`, reversespread)

const fruit1 = ['banana', 'apple']
const fruit2 = ['melon']
const fruit = [...fruit1,...fruit2]
console.log(`fruit1 + fruit2 :`, fruit)

const animals = ['cat', 'dog']
const newAnimals = [...animals.slice(0, 1), 'rabbit', ...animals.slice(1)]
console.log(`animals :`, animals)
console.log(`new animals :`, newAnimals)

const j = Array.of(1,2,3) //static method
const k = Array(...j,4)
console.log(`j :`, j)
console.log(`k copy j :`, k)

/* part05 */
console.log("--- part05 ---")
/* โจทย์: เขียนฟังก์ชันรับ array ของตัวเลข แล้วคืนค่าผลรวมทั้งหมด */
let sum101= 0
function question101(num101){ //ใช้ loop
    for (let i = 0; i < num101.length; i++){
        sum101 += num101[i]
    }
    return sum101
}
let num101 = [2,2,2]
console.log(question101(num101))

let sum102 = 0
function question102(num102){ //ใช้ method
    return num102.reduce((sum102, value) => sum102 + value, 0)
}
let num102 = [3,3,3]
console.log(question102(num102))


/* part06 */
console.log("--- part06 ---")
/* โจทย์: เขียนฟังก์ชันที่คืนค่าทั้งค่ามากสุดและน้อยสุดใน array */
function question201(num201){ //ใช้ loop
    let min201 = num201[0]
    let max201 = num201[0]
    for (let i = 1; i < num201.length; i++){
        if (num201[i]<min201) {min201 = num201[i]} 
        if (num201[i]>max201) {max201 = num201[i]}
    }
    console.log(min201,',',max201)
}
let num201 = [4,7,1,9,2]
question201(num201)

function question202(num202) { //ใช้  method
    console.log(
        Math.min(...num202),',', 
        Math.max(...num202)
    )
}
let num202 = [4,7,1,9,2]
question202(num202)

/* part07 */
console.log("--- part07 ---")
/* โจทย์: เขียนฟังก์ชันที่รับ array และคืน array ที่ไม่มีค่าซ้ำกัน */
function question3(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, 2, 2, 3, 4, 4, 5]
console.log(question3(arr))