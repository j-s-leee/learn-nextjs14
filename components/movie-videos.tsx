import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}:{id:string}) {
    const movie = await getVideos(id);
    return <h6>{JSON.stringify(movie)}</h6>
}