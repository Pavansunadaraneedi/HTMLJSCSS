async function fetchData()
{
//     fetch("")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// 
    const res = await fetch("https://iplocate.io/api/lookup");
    const data = await res.json();
    displayData(data);
}
fetchData();
function displayData(d)
{
    const cityEle = document.createElement("h1");
    cityEle.textContent = "You are from : " + d.city;
    document.getElementById("main").appendChild(cityEle);
}