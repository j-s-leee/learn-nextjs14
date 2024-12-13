import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";





export default async function MovieDetail({params}) {
    const {id} = await params;
    console.log('start fetching');
    
    // ver2. 문제점: getMovie, getVideos가 모두 끝나야 ui가 보임
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); 
    // ver1. 순차적으로 fetching
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    console.log('finish fetching');
    return <div>
        <h1>movie Details</h1>
        <Suspense fallback={<h1>Loading Movie Info...</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
            <MovieVideos id={id} />
        </Suspense>
        </div>
}