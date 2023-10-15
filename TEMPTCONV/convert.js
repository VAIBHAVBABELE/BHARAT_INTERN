let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function(){
    let CT = parseFloat(celsiusInput.value)
    let FT = (CT*(9/5)) + 32
    let KT = CT + 273.15

    fahrenheitInput.value = roundNumber(FT)
    kelvinInput.value = roundNumber(KT)
})


/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let FT = parseFloat(fahrenheitInput.value)
    let CT = (FT - 32) * (5/9)
    let KT = (FT -32) * (5/9) + 273.15
    celsiusInput.value = roundNumber(CT)
    kelvinInput.value = roundNumber(KT)
})

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let KT = parseFloat(kelvinInput.value)
    let CT = KT - 273.15
    let FT = (KT - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(CT)
    fahrenheitInput.value = roundNumber(FT)
})


