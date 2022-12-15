import SwiperInit from "./SwiperInit"
import MovieItem from "./MovieItem"
import { SwiperSlide } from 'swiper/react';
import "./MovieRow.css"
import 'swiper/css';

const MovieRow = (props) => {
    return (
        <div className="movierow">
            <SwiperInit>
                {props.movies &&
                    props.movies.map((movie,key) => (
                        <SwiperSlide key={key}>
                            <MovieItem key={key} movie={movie} />
                        </SwiperSlide>
                    ))
                }
            </SwiperInit>
        </div>
    )
}

export default MovieRow