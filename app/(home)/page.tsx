import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/homepage.module.css";

export const metadata = {
    title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return <div className={styles.homepage}>
        {movies.map(movie => <Movie key={movie.key} id={movie.id} title={movie.title} imgUrl={movie.poster_path} />)}</div>
}