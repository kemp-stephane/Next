//this function allows you to see the picture of the movie in my app
const Movie = ({title, index, overview, poster_path}) => {
    const IMAGES_API = 'https://image.tmdb.org/t/p/w500/';

    return(
        <div className="movie" key={index}>
            <h3>{title}</h3>
            <img src={IMAGES_API + poster_path} alt={title}/>
            <div>{overview}</div>
        </div>
    )
}

export default Movie;