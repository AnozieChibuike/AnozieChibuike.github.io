const startElem = document.getElementById('start')
const stopElem = document.getElementById('stop')
const resetElem = document.getElementById('reset')
const toggleElem = document.getElementById('toggle')
const pElem = document.getElementsByClassName('time')[0]
console.log(pElem)
let hour = 0;
let minute = 0;
let seconds = 0;
let t;
const toggle = () => {
    if (toggleElem.innerText === 'Night Mode') {
        toggleElem.innerText = 'Light Mode'
    } else if (toggleElem.innerText === 'Light Mode') {
        toggleElem.innerText = 'Night Mode'
    }
    document.body.classList.toggle('dark')
    document.querySelectorAll('button').forEach((value) => {
        value.classList.toggle('dark-button')
    })
}
toggleElem.addEventListener('click',toggle)


function start() {
    t = setInterval(() => {
        seconds = Number(seconds)
        minute = Number(minute)
        hour = Number(hour)
        if (seconds >= 59 ) {
            minute += 1
            seconds = -1
        }
        if (minute == 60 ) {
            hour += 1
            minute =0
        }
        seconds += 1
        if (seconds < 10) {
            seconds = "0" + seconds
        } else {
            seconds = seconds.toString().slice()
        }
        if (minute < 10) {
            minute = "0" + minute
        } else {
            minute = minute.toString().slice()
        }
        if (hour < 10) {
            hour = "0" + hour
        } else {
            hour = hour.toString().slice()
        }
        pElem.innerText = `${hour}:${minute}:${seconds}`
    },1000)
    stopElem.style.cursor = 'pointer'
    stopElem.disabled = false
    startElem.style.cursor = 'not-allowed'
    startElem.disabled = true
}

function interva() {
    clearInterval(t)
    stopElem.style.cursor = 'not-allowed'
    stopElem.disabled = true
    startElem.style.cursor = 'pointer'
    startElem.disabled = false
}

function reset() {
    hour = 0;
    minute = 0
    seconds = 0
    pElem.innerText = `0${hour}:0${minute}:0${seconds}`
}

startElem.addEventListener('click',start)
stopElem.addEventListener('click',interva)
resetElem.addEventListener('click',reset)