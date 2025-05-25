//import {a,sum} from './script2.js'// //named import
import * as obj from './script2.js'; // import alias 
import display from './script2.js'; 
console.log(obj.a); // 25
console.log(obj.sum(5, 3)); // 8 
pavan(); 

class student //superclass
{[]
    id; name; marks;
    constructor(a, b, c) //
    {
        this.id = a;
        this.name = b;
        this.marks = c;
    }
    display()
    {
        console.log(this.id, this.name, this.marks);
    }
}
class topper extends student //subclass
{
    rank; 
}
let obj4 = new topper()
console.log(obj4)

console.log(typeof student, student);
let obj2 = new student(201, 'pavan', 100); 
console.log(obj2);
let obj3 = new student(200, 'sandy', 90);
console.log(obj3);