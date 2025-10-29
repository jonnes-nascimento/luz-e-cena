import styles from './MovieSection.module.css'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import MovieList from '../MovieList'
import useFetchMovies from '../../hooks/useFetchMovies'
import useFilterMovies from '../../hooks/useFilterMovies'

const MovieSection = () => {

    const { movies, error, isLoading } = useFetchMovies();
    const { searchTerm, handleSearch, setSearchTerm, filteredMovies } = useFilterMovies(movies)

    return (
        <main>
            <section className={styles.container}>
                <FieldSet variant='secondary'>
                    <InputText
                        value={searchTerm}
                        placeholder='Buscar filmes...'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
                    />
                    <Button variant='icon' onClick={handleSearch}>
                        <FaSearch />
                    </Button>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                {isLoading && <p>Carregando filmes...</p>}
                {error && <p className={styles.error}>{error}</p>}
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    )
}

export default MovieSection