$(document).ready(()=>{
    getalldata();
});

let getalldata = () =>{
console.log(" making request")


$.ajax({
    
    type:'GET',
    dataType: 'json',
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=30bea2aa',//'https://youtu.be/fEYx8dQr_cQ',
    success : (data)=>
    {
        console.log('data',data)   
        //  $("#Title").append(data.Title);
        //  $("#Year").append(data.Year);
        //  $("#Rated").append(data.Rated);//Released
        //  $("#Released").append(data.Released);//Runtime
        //  $("#Runtime").append(data.Runtime);//Genre
        //  $("#Genre").append(data.Genre);//Director
        //  $("#Director").append(data.Director);//Writer
        //  $("#Writer").append(data.Writer);//Actors
        //  $("#Actors").append(data.Actors);//Plot
        //  $("#Plot").append(data.Plot);//Language
        //  $("#Language").append(data.Language);//Country
        //  $("#Country").append(data.Country);//Awards
        //  $("#Awards").append(data.Awards);//Ratings
        //  $("#Ratings").append(data.Ratings[0].Source +"<br> Value = "+data.Ratings[0].Value+'<br>' );
        //  $("#Ratings").append(data.Ratings[1].Source +"<br> Value = "+data.Ratings[1].Value +'<br>' );
        //  $("#Ratings").append(data.Ratings[2].Source +"<br> Value = "+data.Ratings[2].Value +'<br>' );
        //  $("#Metascore").append(data.Metascore);//imdbRating"
        //  $("#imdbRating").append(data.imdbRating);
        //  $("#imdbVotes").append(data.imdbVotes);
        
    },
    error:(data)=>{
        console.log("in error")
        alert("404");   
    }
})  
}