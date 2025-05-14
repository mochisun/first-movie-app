

//pass through a movie object
function MovieCard({movie}){
    //call when click favorite button on movie
    function onFavClick(){alert("clicked")}

    return <div className="movie-card">
        <div className="movie-poster">
            {/* main image of our poster */}
            <img src={movie.url} alt={movie.title}></img>
            <div className="movie-overlay">
                {/* button to like or favorite our movie, maybe a heart?*/}
                <button className="favorite-button" onClick={onFavClick}> ♡ </button>
            </div>
        </div>
        <div className="movie-info" >
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard