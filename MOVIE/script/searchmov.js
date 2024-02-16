 let searchAPi=new URLSearchParams(window.location.search)
 let mov=searchAPi.get('id')
 console.log(mov)
 let films=document.querySelector('.films')
 let input=document.querySelector('input')
 let search=document.querySelector('i')
 search.addEventListener('click',function(){
    console.log(input.value)
    searchmovies(input.value)
})
 getmovie(`https://api.themoviedb.org/3/search/movie?api_key=2d33c24cbe8a02f124cb5c346fccbc02&query=${mov}`)
 function getmovie(api){
fetch(api)
.then((values)=>{
    return (values.json())
})
.then((data)=>{
console.log(data)   
let singletrendmovie=data.results.map((elem)=>{
    // console.log(elem)
    if( elem.poster_path==null){
console.log("movie not found..")
    }
    else{ 
    let elems= `<div class="singlemovie" onclick="dispmovdata('${elem.title}')">
     <img src="https://image.tmdb.org/t/p/original${elem.poster_path}" height=300px width=300px >
     <h5>${elem.title}</h5>
     </div>`
     return elems
    }
 })
films.innerHTML=singletrendmovie.join('')
})
}
function searchmovies(inputval){
window.location.href= `searchmov.html?id=${inputval}`
}
function dispmovdata(title){
    console.log(title)
    window.location.href = `singlemov.html?id=${title}`
}