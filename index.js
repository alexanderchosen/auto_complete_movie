const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d004f2b9';
let movies = [];
const moviesListElement = document.querySelector('.movies-list');
const moviesInputElement = document.querySelector('.movie-input');

function fetchMovies (title){
    fetch(`${API_URL}&s=${title}`)
    .then((response)=> response.json())
    .then((data)=> {
        movies = data.Search.map((movie) => movie.Title);
        movies.sort();
       loadMovies(movies, moviesListElement);
       
            
        })
}


// async function fetchMovies (){
//     const response = await fetch (`${API_URL}&s=title`);
//     const data = await response.json();
//     movies = data.Search.map((movie)=> {
//        // movies.sort();
//         console.log(movie.Title);
//     })

// }

// fetchMovies() 

function loadMovies(data, element){
    if (data){
        element.innerHTML = '';
        let innerElement = '';
        data.forEach((item) => {
            innerElement += `<li> ${item}</li>`;
        });

        element.innerHTML = innerElement;
    }
}

function filterData(data, searchText){
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));

}

let movieTitle = prompt (' Please Choose A Movie Title To Search: ');
fetchMovies(movieTitle);


moviesInputElement.addEventListener("input", function(){
    const filteredMovies = filterData(movies, moviesInputElement.value);
    loadMovies(filteredMovies, moviesListElement);
});
