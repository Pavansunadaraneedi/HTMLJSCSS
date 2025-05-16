const movies =[
    {
        url: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
        title : "RRR"
    },
    {
        url: "https://images.justwatch.com/poster/100236294/s718/k-g-f-chapter-1.jpg",
        title: "KGF"
    },
    {
        url: "https://m.media-amazon.com/images/M/MV5BOGE3YWQ3NzAtNmEwOS00OGY5LThkNzEtZDg5NDRjMzRmMzhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        title: "SALAAR"
    },
]
function displayData ()
{
    movies.forEach((val, i) =>
    {
        const movieDiv = document.createElement("div")
        const movieImage = document.createElement("img")
        movieImage.src = val.url;
        movieImage.alt = val.title;
        movieImage.height='200px'
        const movieTitle = document.createElement("h1")
        movieTitle.textContent = val.title;
        movieDiv.append(movieImage,movieTitle)
        document.getElementById('main').append(movieDiv);
    }) 
}
displayData();