function showTime(){
    let now = new Date()
    let currYear = document.getElementById('year')
    let currMonth = document.getElementById('month')
    let currDay = document.getElementById('day')
    let currDayNumb = document.getElementById('dayNumb')
    let currHour = document.getElementById('hours')
    let currMin = document.getElementById('minutes')
    let currSec = document.getElementById('seconds')
    let midDay = document.getElementById('midday')

    let year = now.getFullYear()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let ismidDay = (hour > 12) ? 'PM' : 'AM'
    //conversion a 12 hrs
    hour = (hour == 0) ? '12' : hour
    hour = (hour > 12) ? hour - 12 : hour
    minutes = checkTime(minutes)
    seconds = checkTime(seconds)

    arrMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']
    arrDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    currYear.innerHTML = year
    currMonth.innerHTML = arrMonths[now.getMonth()]
    currDayNumb.innerHTML = now.getDate()
    currDay.innerHTML = arrDays[now.getDay()]
    currHour.innerHTML = hour + ":"
    currMin.innerHTML = minutes + ":"
    currSec.innerHTML = seconds
    midDay.innerHTML = ismidDay

    setTimeout("showTime()", 1000)
}

function checkTime(i){
    if(i < 10){
       i = "0" + i
    }
    return i
}