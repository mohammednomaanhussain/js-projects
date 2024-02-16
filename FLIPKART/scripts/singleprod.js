let searchprodurl = new URLSearchParams(window.location.search)
let idprod=searchprodurl.get('id')
console.log(idprod)
console.log(idprod)
// console.log(idcatgs)
async function fetchsingleData(){
    let singdata=await fetch(`https://dummyjson.com/products/${idprod}`)
    let response=singdata.json()
    console.log
       return response
}
window.onload=async function(){
        let singleprod=await fetchsingleData()
        let detprod=singleprod
        displayimages(detprod)
        displaydetails(detprod)
        // console.log(detprod)
}
let maincont=document.querySelector('.main-container')
let subimg=document.querySelector('.sub-images')
let mainimgcont=document.querySelector('.main-image')
console.log(mainimgcont)
async function displayimages(detprod){
    console.log(detprod)
 let dispsubimg=detprod.images.map((elem)=>{
    let subimgs=`<div onclick="dismainimg('${elem}')" class="single-sub-img"><img src="${elem}" alt="" height="65px" width="65px"></div>`
    return subimgs
 })
    subimg.innerHTML=dispsubimg.join('')
 let thumbnailimg=detprod.thumbnail
 let mainimg=`<img src="${thumbnailimg}" alt="" height="380px" width="380px">`
        mainimgcont.innerHTML=mainimg
}
function dismainimg(elem){
    let mainimg=`<img src="${elem}" alt="" height="380px" width="380px">`
    mainimgcont.innerHTML=mainimg
}
let detailscont=document.querySelector('.details-cont')
async function displaydetails(detprod){
    let dispri=((detprod.price)+(detprod.price*detprod.discountPercentage)/100)
    console.log(dispri)
    let elems = `<div><h2>${detprod.brand}</h2></div>
        <div><h2>${detprod.title}</h2></div>
        <div>
        <div>${detprod.rating}</div>
        <div><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" width
        ="75px"></div>
        </div>
        <div class="price-cont">
        <div>${detprod.price}</div>
        <div>${detprod.price}*${detprod.discountPercentage}/100</div>
        </div>`
    detailscont.innerHTML=elems
}
