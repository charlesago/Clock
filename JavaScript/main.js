const hoursHand = document.querySelector('.hoursHand')
const minutesHand = document.querySelector('.minutesHand')
const secondsHand = document.querySelector('.secondsHand')


function displayTime(){
    let laDate = new Date();
    let seconds = laDate.getSeconds()
    let degreesSecondsHand = seconds*6
    console.log(degreesSecondsHand)
    secondsHand.style.transform = `rotate(${degreesSecondsHand}deg)`

    let minutes = laDate.getMinutes()
    let degreesMinutesHand = minutes*6+seconds/10
    minutesHand.style.transform = `rotate(${degreesMinutesHand}deg)`

    let hours = laDate.getHours()
    let degreesHoursHand = hours*30+minutes/2
    hoursHand.style.transform = `rotate(${degreesHoursHand}deg)`
}


displayTime()

setInterval(displayTime, 1000)
