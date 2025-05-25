async function fetchTopProducts (category,id)
{
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=4`)
    const data = await res.json()
    console.log(data.products);
    displayData(data.products,id);
}
const displayData = (data,id) =>
{
    data.forEach((v,i) =>
    {
        const productDiv = document.createElement("div")
        productDiv.classList.add('product')
        const productImage = document.createElement("img")
        productImage.src = v.thumbnail;
        productImage.alt= v.title
        const productTitle = document.createElement("h2")
        productTitle.textContent = v.title;
        const productlink = document.createElement("a")
        productlink.href = '/pages/product.html.html?pid=17'
        const productPrice = document.createElement("p")
        productPrice.textContent = "Price: ₹" + v.price;
        const addcartButton = document.createElement("button")
        addcartButton.textContent = "Add Cart";
        addcartButton.classList.add('btn','btn success','p-2')
        addcartButton.addEventListener('click', () =>
        {
            addToCart(v.id
	    productDiv.append(productImage, productTitle, productPrice,addcartButton)
	    document.getElementById(id).append(productDiv)
    })
}
fetchTopProducts("beauty", "topBeauty")
fetchTopProducts("smartphones", "topSmartPhone")
fetchTopProducts("furniture", "topFurnitures")
fetchTopProducts("groceries", "topGroceries")
fetchTopProducts("laptops", "topLaptops")