/* const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=furious";
 */


const API_key = "04c35731a5ee918f014970082a0088b1";
const API_home = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const API_search_prefix = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

/*
async function getMovies(url){
    const response = await fetch(url).then(response => response.json());
    console.log(response);

    response.results.forEach((element) => {
        const movie = document.createElement("div");
        const poster = document.createElement("img");

        poster.src = "https://image.tmdb.org/t/p/w500"
                    + element.poster_path;
                    
        document.body.appendChild(movie);
        movie.appendChild(poster);
    });

    return response;
};
*/

getMovies(API_home);

const main = document.querySelector("main");


async function getMovies(url) {
    const response = await fetch(url).then(response => response.json());
    console.log(response);

    main.innerHTML="";

    response.results.map((movie) => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        movieContainer.innerHTML =
            `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <div class="info">
                <span class="movie-title">${movie.title}</span>
                <span class="imdb-score">${movie.vote_average}</span>
            </div>`;
        main.appendChild(movieContainer);
    })
}

const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    const keyword = document.getElementById("search").value;
    const API_search  = API_search_prefix + keyword;
    getMovies(API_search);
})

