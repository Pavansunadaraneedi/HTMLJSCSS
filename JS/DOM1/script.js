
// console.log(document)
// let x = document.
// getElementsByTagName('h1')
// console.log(x[0]);
// let y = document.
// getElementsByClassName('bujji')
// console.log(y[0]);
// let z = document.
// getElementById('chitti')
// console.log(z)

// console.log(document)
// let a = document.
// getElementsByTagName('h1')
// console.log(a[0]);
// let b = document.
// getElementsByClassName('para')
// console.log(b[0]);
// let c = document.
// getElementById('mypara')
// console.log(c)

// let p = document.querySelector('.bujji');
// console.log(p);
// let q = document.querySelectorAll('.bujji');
// console.log(q);

let value = 0;
let c = document.getElementById("count")
function incr ()
{
    value++;
    c.textContent = value
}
function decr()
{
    value--
    c.textContent = value
}
function reset ()
{
    value=0;
    c.textContent = value
}
