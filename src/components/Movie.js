const Movie = ({image, title}) => {
    return (


        <div className="movie_block">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
        
        
    )
}

export default Movie;