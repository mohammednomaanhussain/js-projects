let input=document.querySelector('input')
let btn=document.querySelector('i')
let popular=document.querySelector('.popular')
let Trending=document.querySelector('.Trending')
let newrelease=document.querySelector('.newrelease')
console.log(popular)
let films=document.querySelector('.films')
console.log(films)
let search=document.querySelector('i')
console.log(search)
search.addEventListener('click',function(){
    getmovie(`https://api.themoviedb.org/3/search/movie?api_key=2d33c24cbe8a02f124cb5c346fccbc02&query==${input.value}`)
    // console.log(input.value)
    searchmovies(input.value)
})
    window.onload=function(){
    getmovie(`https://api.themoviedb.org/3/movie/now_playing?api_key=2d33c24cbe8a02f124cb5c346fccbc02`,Trending)
    getmovie(`https://api.themoviedb.org/3/movie/popular?api_key=2d33c24cbe8a02f124cb5c346fccbc02`,popular)
    getmovie(`https://api.themoviedb.org/3/movie/upcoming?api_key=2d33c24cbe8a02f124cb5c346fccbc02`,newrelease)}
function getmovie(api,type){
    // console.log(input.value)
fetch(api)
.then((values)=>{
    return (values.json())
})
.then((data)=>{
console.log(data)
let singletrendmovie=data.results.map((elem)=>{
    // console.log(elem)
    if( elem.poster_path==null){
console.log("error")
    }
    else if(type==films){
        console.log("asslamualikum")
    }
    else{ 
    let elems= `<div class="singlemovie" onclick="dispmovdata('${elem.title}')">
     <img src="https://image.tmdb.org/t/p/original${elem.poster_path}" height=300px width=300px >
     <h5>${elem.title}</h5>
     </div>`
     return elems
    }
 })
type.innerHTML=singletrendmovie.join('')
})
}
function dispmovdata(title){
   console.log(title)
   window.location.href = `singlemov.html?id=${title}`
}
function searchmovies(inputval){
    window.location.href= `searchmov.html?id=${inputval}`
}


