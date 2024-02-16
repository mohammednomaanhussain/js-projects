async function fetchdata(){
    let data=await fetch('https://dummyjson.com/products')
    let values=data.json()
    return values
}
window.onload=async function(){
   let proddata=await fetchdata()
   let products=proddata.products
   displayuniqcatg(products)
    displayproducts(products)
    ratingabovefour(products)   
    ratingabovefourpointfive(products)
    pricelowtohigh(products)
}
let categorycont=document.querySelector('.catg-container')
function displayuniqcatg(products){
    let allcatgs=products.map((items)=>{
        // console.log(items.category)
        return items.category
    })
    // console.log(allcatgs)
    let uniqcatg=allcatgs.filter((item,index)=>{
        return allcatgs.indexOf(item) === index
    })
    // console.log(uniqcatg)
    let singcatg=uniqcatg.map((item)=>{
        let elems=`<div onclick="displayacrdngtocatgs('${item}')">${item.toUpperCase()}</div>`
        return elems
    })
    categorycont.innerHTML=singcatg.join('')
}
function displayacrdngtocatgs(catgname){
    // console.log(catgname)
    window.location.href=`catgs.html?id=${catgname}`
}
let prodcont=document.querySelector('.products-container')
function displayproducts(products){
let allprod=products.map((e)=>{
    let elems=` <div class="single-prod" onclick="dispsingleprod('${e.id}')">
    <div class="img-detail-container">
        <div><img src="${e.thumbnail}" alt=""></div>           
        <div class="details">
            <div><h1>${e.title}</h1></div>
            <div class="rating">${e.rating}<i class="ri-star-s-fill"></i></div>
            <div>${e.description}</div>
        </div>
    </div>
    <div class="price-cont">
       <div class="price">$${e.price}
        <div><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt=""></div></div>
        <div class="off">${e.discountPercentage}% off</div>
    </div>  
        </div>`
        return elems
})
    prodcont.innerHTML=allprod.join('')
}
function dispsingleprod(prodid){
    window.location.href=`singleprod.html?id=${prodid}`
    console.log(prodid)
}
let searchinpt=document.querySelector('input[placeholder="Search for products,brands"]')
let searchbtn=document.querySelector('.ri-search-line')
let inputval
searchinpt.addEventListener('keyup',function(e){
    inputval=e.target.value
})
searchbtn.addEventListener('click',async function(){
    console.log(inputval)
    let proddata=await fetchdata()
    let product=proddata.products
    // console.log(product)
    let searcheddata=product.filter((e)=>{
        let title=e.title.toLowerCase()
        console.log(title)
        return title.includes(inputval)
    })
    displayproducts(searcheddata)
})
let ratingabove4=document.getElementById('ratabove4')
function ratingabovefour(products){
    ratingabove4.addEventListener('click',function(){
        if(ratingabove4.checked === true){
            ratingabove45.checked=false
            let ratingsortedarr=products.filter((elem)=>{
                return elem.rating>=4 && elem.rating<=4.5
            })
            displayproducts(ratingsortedarr)
            console.log(ratingsortedarr)
        }
        else{
            displayproducts(products)
        }
    })
}
let ratingabove45=document.getElementById('ratabove4.5')
// console.log(ratingabove45)
function ratingabovefourpointfive(products){
    ratingabove45.addEventListener('click',function(){
        console.log("clicked")
        if(ratingabove45.checked === true){
            ratingabove4.checked=false
            let ratingsortedarr=products.filter(elem=>{
                return elem.rating >= 4.5 && elem.rating <= 5
            })
            displayproducts(ratingsortedarr)
            console.log(ratingsortedarr)
        }
        else{
            displayproducts(products)
        }
    })
}

let lowtohigh=document.getElementById('lowtohigh')
let hightolow=document.getElementById('hightolow')
// console.log(lowtohigh)
// console.log(hightolow)
function pricelowtohigh(products){
    lowtohigh.addEventListener('click',function(){
        console.log("clicked")
        if(lowtohigh.checked === true){
            hightolow.checked=false
        }

    })
}
