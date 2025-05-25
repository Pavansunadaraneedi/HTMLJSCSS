const count = document.getElementById("count")
function addToCart()
{
    alert("added successfully");
    console.log(item)
    cartItems.push(item)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}