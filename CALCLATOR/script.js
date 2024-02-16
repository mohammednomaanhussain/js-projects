let plus=document.getElementById('plus')
let minus=document.getElementById('minus')
let mul=document.getElementById('mul')
let division=document.getElementById('division')
let seven=document.getElementById('seven')
let eight=document.getElementById('eight')
let nine=document.getElementById('nine')
let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let four=document.getElementById('four')
let five=document.getElementById('five')
let six=document.getElementById('six')
let zerozero=document.getElementById('zerozero')
let zero=document.getElementById('zero')
let ac=document.getElementById('ac')
let equal=document.getElementById('equal')
let perc=document.getElementById('perc')
let dot=document.getElementById('dot')
let output=document.querySelector('.output')
let answer=document.querySelector('.answer')
let del=document.getElementById('del')
del.addEventListener('click',deletes)
function deletes(){
    output.value=output.value.substr(0,output.value.length-1)
}
one.addEventListener('click',numone)
function numone(){
    output.value += '1'
}
zero.addEventListener('click',numzero)
function numzero(){
    output.value += '0'
}
two.addEventListener('click',numtwo)
function numtwo(){
    output.value += '2'
}
three.addEventListener('click',numthree)
function numthree(){
    output.value += '3'
}
four.addEventListener('click',numfour)
function numfour(){
    output.value += '4'
}
five.addEventListener('click',numfive)
function numfive(){
    output.value += '5'
}
six.addEventListener('click',numsix)
function numsix(){
    output.value += '6'
}
seven.addEventListener('click',numseven)
function numseven(){
    output.value += '7'
}
eight.addEventListener('click',numeight)
function numeight(){
    output.value += '8'
}
nine.addEventListener('click',numnine)
function numnine(){
    output.value += '9'
}
zerozero.addEventListener('click',dbzero)
function dbzero(){
    output.value += '00'
}
plus.addEventListener('click',add)
function add(){
    output.value += '+'
}
minus.addEventListener('click',sub)
function sub(){
    output.value += '-'
}
mul.addEventListener('click',multi)
function multi(){
    output.value += '*'
}
division.addEventListener('click',divide)
function divide(){
    output.value += '/'
}

dot.addEventListener('click',dec)
function dec(){
    output.value += '.'
    
}
ac.addEventListener('click',AC)
function AC(){
    output.value = ''
    answer.value=''
}
perc.addEventListener('click',percent)
function percent(){
    output.value += '%'
}
equal.addEventListener('click',evalu)
function evalu(){
    if(output.value=='')
    alert('enter any number')
else{
    answer.value = eval(output.value)
}
}
let body=document.querySelector('body')
let toggle=document.querySelector('#toggle')
let switchs=document.querySelector('.switch')
let cont=document.querySelector('.container')
// console.log(z,toggle,switchs)
toggle.addEventListener('click',move)
function move(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    cont.classList.toggle('active')
    answer.classList.toggle('active')
    output.classList.toggle('active')
}