import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import styles from "../../../../styles/moviepage.module.css";
import LoadingComponent from "../../../../components/loading-component";

export default async function MovieDetail({params}) {
    const {id} = await params;
    return <div className={styles.container}>
        <Suspense fallback={<LoadingComponent />}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<LoadingComponent />}>
            <MovieVideos id={id} />
        </Suspense>
            </div>
    
}