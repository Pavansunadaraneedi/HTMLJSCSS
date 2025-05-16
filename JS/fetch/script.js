function fetchData() 
{
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => displayData(err))
}
setInterval(() => {
    fetchData();
},5000);
function displayData (q) 
{   
    document.getElementById('main').textContent = " ";
    const quote = document.createElement('h2');
    const author = document.createElement('p');
    quote.textContent = q.quote;
    author.textContent = "------" + q.author;
    document.getElementById('main').append (quote, author);
}

























































































































































