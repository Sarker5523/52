const apiKey = "cd46e7d1eed74fef08fe93b9dc4ca70b"; // Replace with your TMDb API key

function fetchMovies(category = "popular") {
    const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let moviesContainer = document.getElementById("moviesContainer");
            moviesContainer.innerHTML = ""; // Clear old content

            data.results.forEach(movie => {
                let movieCard = `
                    <div class="movie-card" data-aos="fade-up">
                        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}">
                        <h3>${movie.title}</h3>
                        <button class="trailer-btn" onclick="openTrailer(${movie.id})">Watch Trailer</button>
                    </div>
                `;
                moviesContainer.innerHTML += movieCard;
            });
        })
        .catch(error => console.log("Error fetching movies:", error));
}

function openTrailer(movieId) {
    const trailerApiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    fetch(trailerApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                let trailerKey = data.results[0].key;
                document.getElementById("trailerFrame").src = `https://www.youtube.com/embed/${trailerKey}`;
                document.getElementById("trailerModal").style.display = "flex";
            } else {
                alert("No trailer available.");
            }
        });
}

function closeTrailer() {
    document.getElementById("trailerModal").style.display = "none";
    document.getElementById("trailerFrame").src = "";
}

// Load popular movies by default
fetchMovies();