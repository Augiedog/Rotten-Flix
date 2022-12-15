import NavBar from "./Navbar/Navbar"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FetchMovies, genres, AuthenticateSession } from "../../lib"
import MovieRow from "./MovieRow/MovieRow"

const Home = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([])
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            AuthenticateSession(location.state.user)
            .then(user => user.message ? null : navigate('/'))
        } else {
            return navigate('/')
        }
        const fetchMovies = async () => {
            let temp = {}
            const response = await FetchMovies();
            genres.forEach(genre => {
                Object.assign(temp, {[genre]: response.data.filter( d => d.genre === genre)})
            })
            setMovies(temp)         
        }

        fetchMovies()
    }, [location, navigate])

    return (
        <>
            <NavBar />
            <div className="containerMain" style={{backgroundColor: "#141414", color: "#e9ecef"}}>
                {Object.keys(movies).map(movie => (
                    <div key={movie}>
                        <h2>{movie}</h2>
                        <MovieRow movies={movies[movie]} key={movie} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home