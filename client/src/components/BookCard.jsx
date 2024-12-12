/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getImgUrl } from "../utils/getImgUrl";
import { Link } from "react-router-dom";

const BookCard = ({ books }) => {
  // console.log(books);
  return (
    <div className="flex justify-center gap-4 items-center">
      <div className="">
        <Link to={`/books/`}>
          <img
            src={`${getImgUrl(books.coverImage)}`}
            alt=""
            className="w-full"
          />
        </Link>
      </div>
      <div className="">
        <div>
          <Link to={`/books/${books._id}`}>{books.title}</Link>
        </div>
        <div>{books.description}</div>
        <div>
          <div>{books.newPrice}</div>
          <div>{books.oldPrice}</div>
        </div>
        <div>
          <button className="flex bg-[#FFCE1A] rounded-md px-4 py-2 items-center gap-2">
            <AiOutlineShoppingCart className="size-4" />
            <span className="text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
