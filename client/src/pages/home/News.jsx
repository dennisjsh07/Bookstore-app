import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const data = await fetch("news.json");
    const json = await data.json();
    // console.log(json);
    setNews(json);
  };
  return (
    <div className="m-20">
      <div>
        <h1>News</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {news.length > 0 &&
          news.map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <NewsCard news={news} />;
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default News;
