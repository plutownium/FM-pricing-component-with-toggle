const switchBox = document.getElementById("checkbox")

const basicMtm = document.getElementById("basic-mtm-price")
const basicYearly = document.getElementById("basic-yearly-price")
const proMtm = document.getElementById("pro-mtm-price")
const proYearly = document.getElementById("pro-yearly-price")
const masterMtm = document.getElementById("master-mtm-price")
const masterYearly = document.getElementById("master-yearly-price")

console.log("hi")
console.log(switchBox.checked)

switchBox.addEventListener("change", function () {
    console.log("this!", this)
    if (this.checked) {
        // switch to Full Year pricing
        const monthToMonthDivs = document.getElementsByClassName("month-to-month")
        for (const el of monthToMonthDivs) {
            el.classList.add("hidden-property")
        }
        const yearlyDivs = document.getElementsByClassName("yearly")
        for (const el of yearlyDivs) {
            el.classList.remove("hidden-property")
        }
    } else {
        // switch to Month-to-Month pricing
        const monthToMonthDivs = document.getElementsByClassName("month-to-month")
        for (const el of monthToMonthDivs) {
            el.classList.remove("hidden-property")
        }
        const yearlyDivs = document.getElementsByClassName("yearly")
        for (const el of yearlyDivs) {
            el.classList.add("hidden-property")
        }
    }
})