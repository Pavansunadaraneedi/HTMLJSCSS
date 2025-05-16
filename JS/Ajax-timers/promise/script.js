let p = new Promise((resolve, reject) =>
{
    let n = 20;
    if (n % 2 == 0)
    {
    setTimeout(() => 
        {
            resolve("i got a job");
        },5000)
    }
    else
    {
        reject("i did not get a job");
    }
})

p
   .then((res) => console.log(res))
   .catch((err) => console.log(err))
   


        
        