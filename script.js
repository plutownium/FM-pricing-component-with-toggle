const switchBox = document.getElementById("checkbox")

console.log("hi")
console.log(switchBox.checked)

switchBox.addEventListener("change", function () {
    console.log("this!", this)
    if (this.checked) {
        // switch to Full Year pricing
    } else {
        // switch to Month-to-Month pricing
    }
})