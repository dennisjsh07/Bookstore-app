/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getImgUrl } from "../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/CartSlice";

const BookCard = ({ books }) => {
  // console.log(books);

  const dispatch = useDispatch();
  const addToCartHandler = (book)=>{
    dispatch(addToCart(book))
  }
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
        <div className="flex gap-3">
          <div>{books.newPrice}</div>
          <div className="line-through">{books.oldPrice}</div>
        </div>
        <div>
          <button onClick={()=>addToCartHandler(books)} className="flex bg-[#FFCE1A] rounded-md px-4 py-2 items-center gap-2">
            <AiOutlineShoppingCart className="size-4" />
            <span className="text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
