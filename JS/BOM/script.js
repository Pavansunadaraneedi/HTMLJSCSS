// let obj ={
//     name: "Raj",
//     age: 25,
//     fun:function(){console.log(this.name) }
// }       
//  obj.fun();
console.log(this);
    // --get url details--
    let a = window.location.href;
    console.log(a);
    console.log(window.location.search);
    //window.location.reload //reloads the page
   // window.location.replace(url) //replace the url
    const vd = getElementById('vd');
   document.getElementById("btn1").addEventListener("click",()=>
    {
        //window.history.forward();

     window.navigator.mediaDevices
        .getUserMedia ({ video:true, audio:true })
        .then((res)=>vd.srcObject = res)
        .catch((err)=>console.log(err))

    })

// localStorage.setItem('name','Pavan')
//document.cookie = "username:Pavan"
