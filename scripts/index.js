let images = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5025/1185025-h-ede36e0baddd",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6535/846535-h",
]
let i=0
let img = document.createElement("img")
let id = setInterval(function(){
    
    
   img.src = images[i]
   document.querySelector("#slideshow").append(img)
    i++
    if(i==images.length )
    {
        i=0
    }
    
    
},2000)


// Film data start here

let filmsdata = [
    {
       filmname :"1983" ,
       Releasedate :"1 jan 2022",
       posterimg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7" ,
       IMDB_Rating: "4",
    },
    {
       filmname :"Turning Red" ,
       Releasedate : "5 feb 2021",
       posterimg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4372/1124372-h-04b0f9e40986",
       IMDB_Rating: "3",
    },
    {
        filmname :"TADAP" ,
       Releasedate : "8 March 2019",
       posterimg:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6715/1106715-h-7b88aaf59197" ,
       IMDB_Rating: "3.5",
    },
    {
       filmname : "AVENGERS" ,
       Releasedate :"6 April 2021" ,
       posterimg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4652/674652-h",
       IMDB_Rating: "5",
    },
    {
        filmname : "SHIDDAT",
       Releasedate :"6 May 2019" ,
       posterimg:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2068/1062068-h-54b155e41999" ,
       IMDB_Rating: "3",
    },
    {
       filmname : "JUNGLE CRUISE",
       Releasedate : "8 Dec 2018",
       posterimg:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8687/1078687-h-029e9d313239" ,
       IMDB_Rating: "4",
    },
    {
        filmname :"M.S.Dhoni",
       Releasedate : "9 july 2017",
       posterimg:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h" ,
       IMDB_Rating:"4" ,
    },
    {
      filmname : "LION KING",
       Releasedate :"9 Aug 2020" ,
       posterimg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4600/674600-h",
       IMDB_Rating:"5" ,
    },
    {
      filmname :"CHHICHHORE" ,
       Releasedate : "9 june 2016",
       posterimg:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1331/641331-h" ,
       IMDB_Rating: "3",
    },
    ]

    
    localStorage.setItem("movies", JSON.stringify(filmsdata))

let filmdata = JSON.parse(localStorage.getItem("movies"))

window.onload= function()
{
   display(filmdata)
}



    function display(data){
      document.querySelector("#movies").innerHTML=""
    data.map(function(el,i){

    let div = document.createElement("div")

    let h2 = document.createElement("h2")
   h2.innerText = el.filmname
    let p = document.createElement("p")
  p.innerText =`Release date : ${el.Releasedate}`
    let img = document.createElement("img")
    img.src =el.posterimg

    let span = document.createElement("span")
    span.innerText= `Rating : ${el.IMDB_Rating}`

  div.append(img,h2,p,span)

  document.querySelector("#movies").append(div)

    })
   }







   //  sorting script start here

   // localStorage.setItem("movies", JSON.stringify(filmsdata))

   document.querySelector("#sort-lh").addEventListener("click",lowsortfun)

   function lowsortfun()
   {
      
      // console.log("low")
      var lowdata = JSON.parse(localStorage.getItem("movies"))

      // console.log(lowdata)
      lowdata.sort(function(a,b){
        return a.IMDB_Rating-b.IMDB_Rating
      })
      console.log(lowdata)
      
      // console.log(lowdata)
     localStorage.setItem("movies", JSON.stringify(lowdata))
   //   window.location.reload()
     var data = JSON.parse(localStorage.getItem("movies"))
   display(data)
   }





   document.querySelector("#sort-hl").addEventListener("click",highsortfun)

   function highsortfun()
   {
      // console.log("high")
      var highdata = JSON.parse(localStorage.getItem("movies"))

      highdata.sort(function(a,b){
         return b.IMDB_Rating-a.IMDB_Rating
       })
      //  console.log(lowdata)
       
       // console.log(lowdata)
      localStorage.setItem("movies", JSON.stringify(highdata))
    //   window.location.reload()
      var data1 = JSON.parse(localStorage.getItem("movies"))
    display(data1)
   }