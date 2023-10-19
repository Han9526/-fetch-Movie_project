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
async function MoviesData() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular', Authorization())
    const jsonData = await response.json()
    const url = await MovieImgUrl();
    const moviedata = jsonData.results;
    const appendmovie = document.getElementById("movie-container");
    moviedata.forEach(element => {
        let addhtml = `
            <div class="movie-card" data-id=${element.id} style="display:block">
                <img src="${url}${element.poster_path}" alt="" width="300px">
                <p class="movie-title" id="${element.id}">${element.title}</p>
                <p class="movie-vote_average">${element.vote_average}</p>
                <p class="movie-overview">${element.overview}</p>
            </div>
        `;
        appendmovie.innerHTML += addhtml;
    });

}

//  Click-event
function addlistener() {
    const movieCards = document.getElementsByClassName('movie-card');
    Array.from(movieCards).forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            alert(id);
        });
    });
}

// Search-function
function Searchfunction() {
    Array.from(document.getElementsByClassName("movie-card")).forEach((a) => {
        let movieTitle = document.getElementById(`${a.dataset.id}`).innerHTML;
        let inputField = document.getElementById("input_field").value;
        if (movieTitle.toLowerCase().indexOf(inputField.toLowerCase()) !== -1) {
            a.style.display = "block"
        } else {
            a.style.display = "none"
        }
    })
    inputFocus();
}
// Btn-click
function ClickBtn() {
    document.getElementById("search_btn").addEventListener('click', () => {
        Searchfunction();
    });
}
// Enter-click
function EnterBtn(event) {
    if (event.keyCode == 13) {
        Searchfunction();
    }
}
// Input-Focus
function inputFocus() {
    document.getElementById('input_field').focus();
}

async function Order() {
    inputFocus();
    await MoviesData();
    addlistener();
    ClickBtn();

}

Order();