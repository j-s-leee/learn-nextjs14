import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/homepage.module.css";
import { Key } from "react";
import { API_URL } from "../constants";

export const metadata = {
    title: "Home"
}

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return <div className={styles.homepage}>
        {movies.map((movie: { key: Key; id: string; title: string; poster_path: string; }) => <Movie key={movie.key} id={movie.id} title={movie.title} imgUrl={movie.poster_path} />)}</div>
}