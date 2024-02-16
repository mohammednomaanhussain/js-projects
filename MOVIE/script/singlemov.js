let searchUrl = new URLSearchParams(window.location.search)
let title=searchUrl.get('id')
console.log(title)
let maincont=document.querySelector('.main-container')
console.log(maincont)
getmovie(`https://api.themoviedb.org/3/search/movie?api_key=2d33c24cbe8a02f124cb5c346fccbc02&query==${title}`,maincont)
function getmovie(api,type){
    // console.log(input.value)
fetch(api)
.then((values)=>{
    return (values.json())
})
.then((data)=>{
console.log(data)
let singletrendmovie=data.results.map((elem,i)=>{
    console.log(elem)
    if( elem.poster_path==null){
console.log("error")
    }
    else{
        while(i==0){
    let elems= 
   
      `<div class="img-container"><img src="https://image.tmdb.org/t/p/original${elem.poster_path}" alt=""></div>
    <div class="details-container">
        <div class="title"><h1>${elem.title}</h1></div>
        <div class="desc">
            <h3>Description:</h3>
            <h3>${elem.overview}</h3></div> 
            <div class="date">
                <h2>Release Date:</h2>
                <h2> ${elem.release_date}</h2>
            </div>
     </div>`
     return elems}}
 })
type.innerHTML=singletrendmovie.join('')
})
}
function dispmovdata(title){
    console.log(title)
    window.location.href = `singlemov.html?id=${title}`
}