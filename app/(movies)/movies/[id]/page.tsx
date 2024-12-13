import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
    console.log(`fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    console.log(`fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({params}) {
    const {id} = await params;
    console.log('start fetching');

    // ver2. 문제점: getMovie, getVideos가 모두 끝나야 ui가 보임
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); 
    // ver1. 순차적으로 fetching
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    console.log('finish fetching');
    return <div>
        <h1>{movie.title}</h1>
        {JSON.stringify(videos)}
        </div>
    
}