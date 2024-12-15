import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css"

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovie(id);

    const backdropStyle = {
        backgroundImage: `url(${movie.backdrop_path})`,
    };

    return <div className={styles.contanier}>
        <div className={styles.backdrop} style={backdropStyle}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <img src={movie.poster_path} alt="Poster" className={styles.poster} />
                    <div className={styles.info}>
                        <h1 className={styles.title}>{movie.title}</h1>
                        <p className={styles.tagline}>{movie.tagline}</p>
                        <p><strong>Overview: </strong> {movie.overview}</p>
                        <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                        <p><strong>Release Date: </strong> {movie.release_date}</p>
                        <p><strong>Runtime: </strong> {movie.runtime} minutes</p>
                        <p><strong>Budget: </strong> ${movie.budget.toLocaleString()}</p>
                        <p><strong>Rating: </strong> {movie.vote_average} (Votes: {movie.vote_count})</p>
                        <p><strong>Homepage: </strong> <a href={movie.hompage} target="_blank" rel="noopener noreferrer">Visit</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}