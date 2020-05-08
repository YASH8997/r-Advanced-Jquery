$(document).ready(()=>{
    $('#call').click(()=>{
        getalldata();
    });
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
        $("#showdata").append(data+'<br>');
        $("#showdata").append(data.Title+'<br>');
        $("#showdata").append(data.Year+'<br>');
        $("#showdata").append(data.Rated+'<br>');//Released
        $("#showdata").append(data.Released+'<br>');//Runtime
        $("#showdata").append(data.Runtime+'<br>');//Genre
        $("#showdata").append(data.Genre+'<br>');//Director
        $("#showdata") .append(data.Director+'<br>');//Writer
        $("#showdata").append(data.Writer+'<br>');//Actors
        $("#showdata").append(data.Actors+'<br>');//Plot
        $("#showdata").append(data.Plot+'<br>');//Language
        $("#showdata").append(data.Language+'<br>');//Country
        $("#showdata").append(data.Country+'<br>');//Awards
        $("#showdata").append(data.Awards+'<br>');//Ratings
        $("#showdata").append(data.Ratings[0].Source +"<br> Value = "+data.Ratings[0].Value+'<br>' );
        $("#showdata").append(data.Ratings[1].Source +"<br> Value = "+data.Ratings[1].Value +'<br>' );
        $("#showdata").append(data.Ratings[2].Source +"<br> Value = "+data.Ratings[2].Value +'<br>' );
        $("#showdata").append(data.Metascore+'<br>');//imdbRating"
        $("#showdata").append(data.imdbRating+'<br>');
        $("#showdata").append(data.imdbVotes+'<br>');
        
    },
    error:(data)=>{
        console.log("in error")
        alert("404");   
    }
})  
}