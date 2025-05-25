let a = 25 , b =[2, 6, 7];
function sum (a, b)
{
    return a + b;
}
function display()
{
    console.log("Hello World");
}

export {a, b, sum} //named export
export default display; //default export