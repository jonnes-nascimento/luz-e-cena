import { useEffect, useState } from "react";
import type { Movie } from "../types";

const useFilterMovies = (movies: Movie[]) => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

    const handleSearch = () => {
        
        const filtered = movies.filter((movie) => (
            movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        
        setFilteredMovies(filtered);
    };

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]); // esse [movies] eh um array de dependencias para o useEffect - valores que voce usa dentro dele

    return {searchTerm, setSearchTerm, filteredMovies, handleSearch}
}

export default useFilterMovies;