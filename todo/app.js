let taskinput=document.querySelector('input[placeholder="Enter a task..."]')
let addbtn=document.querySelectorAll('button')[0]
let editbtn=document.querySelectorAll('button')[1]
let clear=document.querySelectorAll('button')[2]
let tasklistcont=document.querySelector('ul')
// console.log(addbtn,clear)
let taskval
let tasklist=[]
window.onload=function(){
    let dataLS =JSON.parse(localStorage.getItem("data"))
    // console.log(dataLS)
    let lists=dataLS.map((e,index)=>{
        let data=`
        <li>
            <span>${e.task}</span>
            <div>
                <span><input  onchange="updateStatus(this,${i})" type="checkbox" id="${index}" name="checkbox")></span>
            <span><i class="ri-edit-box-fill" onclick="edit(${index})"></i></span> 
            <span><i class="ri-delete-bin-line" onclick="deltask(${index})"></i></span>
            </div>
        </li>`
        return data
    })
    tasklistcont.innerHTML=lists.join('')
    
}
taskinput.addEventListener('keyup',function(e){
    taskval=e.target.value
})
addbtn.addEventListener('click',function(){
    if(taskval == null){
        alert("Please,Enter a task")
    }
    else{
   let objinps={"task":taskval, state:false}
//    tasklist.push(objinps)
   let dataLS = JSON.parse(localStorage.getItem('data')) || []
   dataLS.push(objinps)
   localStorage.setItem("data",JSON.stringify(dataLS))
   displaytasks(dataLS)
   taskinput.value=" "   
}
})
function displaytasks(dataLS){
    let lists=dataLS.map((e,index)=>{
        let data=`
        <li>
            <span>${e.task}</span>
            <div>
            <span><input  onclick="updateStatus(this)" type="checkbox" 
            id="${index}" name="checkbox" )></span>
            <span><i class="ri-edit-box-fill" onclick="edit(${index})"></i></span> 
            <span><i class="ri-delete-bin-line" onclick="deltask(${index})"></i></span>
            </div>
        </li>`
        return data
    })
    tasklistcont.innerHTML=lists.join('')
}
function updateStatus(selectedtask,i){
    if(selectedtask.checked){
        console.log("true")
    }
}
function deltask(i){
    let dataLS=JSON.parse(localStorage.getItem('data')) || []
    dataLS.splice(i,1)
    localStorage.setItem("data",JSON.stringify(dataLS))
    displaytasks(dataLS)
}
function edit(i){
    addbtn.setAttribute('id','nones')
    let dataLS=JSON.parse(localStorage.getItem('data')) || []
    taskinput.value=dataLS[i].task
    console.log(taskinput.value)
    taskinput.addEventListener('keyup',function(e){
        taskval=e.target.value
        // console.log(taskval)
    })

editbtn.style.display="inline"
editbtn.addEventListener('click',function(){
        taskinput=" "
        dataLS[i].task=taskval
        localStorage.setItem('data',JSON.stringify(dataLS))
        displaytasks(dataLS)
        editbtn.style.display="none"
        addbtn.setAttribute('id',' ')
})
}
