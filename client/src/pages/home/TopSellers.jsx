import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [selectedCategory, setselectedCategory] = useState("Choose a genre");
  const [books, setBooks] = useState([]);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter((books) => {
          return books.category === selectedCategory.toLowerCase();
        });
  //   console.log(filteredBooks);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await fetch("books.json");
    const json = await data.json();
    // console.log(json);
    setBooks(json);
  };
  return (
    <div className="m-20">
      <div>
        <h1>Top Sellers</h1>
      </div>
      <div>
        <select onChange={(e) => setselectedCategory(e.target.value)}>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredBooks.length > 0 &&
            filteredBooks.map((book, index) => {
              return (
                <SwiperSlide key={index}>
                  <BookCard books={book} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellers;
