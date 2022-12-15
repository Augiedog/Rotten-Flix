import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperInit = ({ children }) => {
  return (
    <Swiper
      className="movieShowcase__container"
      navigation={true}
      grabCursor={false}
      draggable={false}
      breakpoints={{
        1378: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
        998: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        625: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        0: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }}
      spaceBetween={8}
      preventClicksPropagation={true}
      preventClicks={true}
      scrollbar={{ draggable: false, hide: true }}
      slideToClickedSlide={false}
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  );
}

export default SwiperInit;