let getinfo=document.querySelector('.getinfo')
let areabtn=document.querySelector('.areabtn')
let uniquelang=document.querySelector('.uniquelang')
let output=document.querySelector('.output')
let table1=document.querySelector('.table1')
// console.log(table1)
let table2=document.querySelector('.table2')
let table3=document.querySelector('.table3')
let thead=document.querySelector('.head')
let thead1=document.querySelector('.head2')
let thead2=document.querySelector('.head3')
let block1=document.querySelectorAll('table')[0]
let block2=document.querySelectorAll('table')[1]
let block3=document.querySelectorAll('table')[2]
// console.log(block1)
// console.log(block2)
// console.log(block3 )
getinfo.addEventListener('click',function(){
    fetch('https://restcountries.com/v2/all')
    .then((values)=>{
    return values.json()})
    .then((data)=>{
        console.log(data)
        let items=data.map((e,i)=>{
            // console.log(e.languages)
            let lan=e.languages
            // console.log(lan)
            var lang=lan.map((elem)=>{
                return (elem.name)
            })
        //    console.log(i+1,'country:',e.name,",capital:",e.capital,"languages:",lang.toString(),"population:",e.population)
           let elems=`
           <tr>
           <td>${i+1}</td>
           <td>${e.name}</td>
           <td>${e.capital}</td>
           <td>${lang.toString()}</td>
           <td>${e.population}</td>
        </tr>            `
       return elems
        })
      return  table1.innerHTML=items.join('')
    })
    setTimeout(()=>{thead.style.display=""},1100)
    block1.style.display="inline-block"
    block2.style.display="none"
    block3.style.display="none"
})
areabtn.addEventListener('click',function(){
    fetch(' https://restcountries.com/v3.1/all')
    .then((data)=>{
        return data.json()
    })
    .then(values=>{
        console.log(values)
        let areas=values.map((e,i)=>{
            // console.log(e.name,e.area)
            return {SNO:i+1,name:e.name.common,area:e.area}
        })
        let areaaftersort=areas.sort((a,b)=> b.area - a.area)
        console.log(areaaftersort)
        let lararea=areaaftersort.map((e,i)=>{
            if(i<10){
           let elems=`
           <tr>
           <td>${i+1}</td>
           <td>${e.name}</td>
           <td>${e.area}</td>
           </tr>`
       return elems
            }
        })
     return   table2.innerHTML=lararea.join('')
    })
    setTimeout(()=>{    thead1.style.display=""; },1100)
    block1.style.display="none"
    block3.style.display="none"
    block2.style.display="inline-block"

})
uniquelang.addEventListener('click',function(){
fetch('https://restcountries.com/v2/all')
.then((data)=>{
    return data.json()
})
.then((values)=>{
    // console.log(values)
    let items=values.map((e)=>{
        // console.log(e.languages) 
        let totlang=e.languages.map((elem)=>{
            return elem.name
        }) 
        return [...totlang]
    })
    // console.log(items.flat())
    let alllang=items.flat()
    // console.log(unilang)
        let unilang =[...new Set(alllang)];
        let elems=unilang.map((e,i)=>{
        return `<tr>
        <td>${i+1}</td>
        <td>${e}</td>
        </tr>`
    })
    table3.innerHTML=elems.join('')
    // console.log(elems)
    // console.log(removeDuplicates(alllang));
})
setTimeout(()=>{thead2.style.display=""; },1100) 
block1.style.display="none"
block2.style.display="none"
block3.style.display="inline-block"
})