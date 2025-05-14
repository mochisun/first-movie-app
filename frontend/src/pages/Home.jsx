import MovieCard from "../components/MovieCard"


function Home(){
    //setup movie obj list
    const movies = [
        {id: 1, title: "john wick", release_date: "2020"},
        {id: 2, title: "terminator", release_date: "1999"},
        {id: 3, title: "the matrix", release_date: "2015"}
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home