// Options 
  function Authorization() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzhlMDdjMThkZDBhMWM0NTM0YjUxNTBhZDYxM2U5NSIsInN1YiI6IjY1MmUzNzdkMDI0ZWM4MDBjNzc1YmRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_ZMM9I8ONt9rx1KohktMjCW18-Y_8mbUmMQRwZgZ0I"
        }
    };
    return options;
}

// Url
  async function MovieImgUrl() {
    const response = await fetch('https://api.themoviedb.org/3/configuration', Authorization());
    const jsonData = await response.json()
    return jsonData.images.base_url + jsonData.images.poster_sizes[3];
}

// Add-data
export  async function MoviesData() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular', Authorization())
    const jsonData = await response.json()
    const url = await MovieImgUrl();
    const moviedata = jsonData.results;
    const appendmovie = document.getElementById("movie-container");
    moviedata.forEach(movie => {
        let addhtml = `
            <div class="movie-card" data-id=${movie.id} style="display:block">
                <img src="${url}${movie.poster_path}" alt="" width="300px">
                <p class="movie-title" id="${movie.id}">${movie.title}</p>
                <p class="movie-vote_average">${movie.vote_average}</p>
                <p class="movie-overview">${movie.overview}</p>
            </div>
        `;
        appendmovie.innerHTML += addhtml;
    });
}
