const submitButton = document.getElementById('calculate-age')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

const outputDay = document.getElementById('app-output-day')
const outputMonth = document.getElementById('app-output-month')
const outputYear = document.getElementById('app-output-year')

const checkInput = (event) => {
    // console.log(event.target.validity.valid);
}

const validDate = (date) => {
    const dateCheck = Date.parse(date)
    if (!isNaN(dateCheck)) return
    // Error action here
}

const calculateAge = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const birthday = new Date(year.value, month.value-1, day.value);
    const diffTime = currentDate - birthday
    const ageYears = diffTime/(1000*60*60*24*30.4167*12)
    const ageMonths = (ageYears % 1) * 12
    const ageDays = (ageMonths % 1) * 30.4167
    
    outputYear.innerText = Math.floor(ageYears)
    outputMonth.innerText = Math.floor(ageMonths)
    outputDay.innerText = Math.ceil(ageDays)
}
[day, month, year].forEach(element => {
    element.addEventListener('keydown', (e) => checkInput(e))
})
submitButton.addEventListener('click', (e) => calculateAge(e))