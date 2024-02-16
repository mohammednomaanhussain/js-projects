let time=document.querySelectorAll('h1')[1]
console.log(time)
let start=document.querySelectorAll('button')[0]
let resume=document.querySelectorAll('button')[1]
let reset=document.querySelectorAll('button')[2]
let hours=0
let minutes=0
let seconds=0
let miliseconds=0
let timer=null
function stopwatch(){
    miliseconds++
    if(miliseconds == 100){
        miliseconds=0
        seconds++
    }
    if(seconds==60){
        seconds=0
        minutes++
    }
    if(minutes == 60){
        minutes=0
        hours++
        // console.log(hours)
    }
    let h=hours<10 ? "0" + hours:hours
    let m=minutes<10 ? "0" + minutes:minutes
    let s=seconds<10 ? "0" + seconds:seconds
    let ms=miliseconds<10 ? "0" + miliseconds:miliseconds

    time.innerHTML=h+":"+m+":"+s+":"+ms
}
start.addEventListener('click',function(){
    if(timer !== null ){
        clearInterval(timer)
    }
    timer=setInterval(stopwatch,10);
})
resume.addEventListener('click',function(){
    clearInterval(timer)
})
reset.addEventListener('click',function(){
    // clearInterval(timer)
[hours,minutes,seconds]=[0,0,0]
    time.innerHTML="00:00:00"
})
