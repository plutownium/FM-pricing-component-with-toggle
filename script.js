const switchBox = document.getElementById("checkbox")

const basicPrice = document.getElementById("basic-price")
const proPrice = document.getElementById("pro-price")
const masterPrice = document.getElementById("master-price")
// 19.99 -> 199.99
// 24.99 -> 249.99
// 39.99 -> 399.99
switchBox.addEventListener("change", function () {
    console.log("this!", this)
    if (this.checked) {
        // switch to Full Year pricing
        basicPrice.innerHTML = 199.99
        proPrice.innerHTML = 249.99
        masterPrice.innerHTML = 399.99
    } else {
        // switch to Month-to-Month pricing
        basicPrice.innerHTML = 19.99
        proPrice.innerHTML = 24.99
        masterPrice.innerHTML = 39.99
    }
})