import Link from "next/link"
import styles from "../styles/movie.module.css"

export default function Movie({id, imgUrl, title}) {
    return <Link href={`/movies/${id}`} className={styles.movie}>
        <img src={imgUrl} />
        <span>{title}</span>
    </Link>
}