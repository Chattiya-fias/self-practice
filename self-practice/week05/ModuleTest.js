/* part 04 */
//CommonJS
// const {echo, getlength, maxstudent}  = require('./self-practice05.js')
// console.log(echo("cat"))
// console.log(getlength('hello'))
// console.log(maxstudent)

//ES module
//กำหนด "type : module" ใน package.json
import {TAX,sum,total} from './self-practice05.js'
console.log(TAX)
console.log(sum(4,5))
console.log(total(4,5,sum))

import {pi,add as plus,minus} from './self-practice05.js'
console.log(5*pi)
console.log(plus(2,3))
console.log(minus(5,1))

import mul from './self-practice05.js' //import ชื่อตาม default หรือ ตั้งชื่อใหม่ก็ได้
console.log(mul(2,3))

/* part 05 */
import {addProperty} from './self-practice05.js'
console.log(addProperty({ name: 'John' }, 'age', 25))
console.log(addProperty({}, 'city', 'New York'))

import {mergeObject} from './self-practice05.js'
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))

import {extractAndRename} from './self-practice05.js'
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
console.log(extractAndRename({ name: 'Jane', age: 30 }))