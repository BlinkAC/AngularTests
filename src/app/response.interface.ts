import { Movie } from "./movies.interface";

export interface APIResponse{
    page: number,
    results: Array<Movie>
}