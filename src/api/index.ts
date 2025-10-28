import axios from 'axios';
import type { Movie } from '../types';

const BASE_URL = '/api';

export const getMovies = async (): Promise<Movie[]> => {

    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);

    return response.data;
}