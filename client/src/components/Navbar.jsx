import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigate = [
  { name: "dashboard", href: "/dashboard" },
  { name: "order", href: "/orders" },
  { name: "cart", href: "/cart" },
  { name: "checkout", href: "/checkout" },
];

const Navbar = () => {
  const currentUser = true;

  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  //   console.log(isDropdownOpen);

  return (
    <div className="flex justify-between items-center border-2 border-solid border-black px-4 py-6">
      {/*left side */}
      <div className="flex justify-between items-center gap-10">
        <Link to="/">
          <HiBars3CenterLeft className="size-8" />
        </Link>

        {/*input box */}
        <div className="flex relative">
          <CiSearch className="absolute inset-2 start-1 size-4" />
          <input
            type="text"
            className="rounded-md px-7 py-1 bg-[#EAEAEA]"
            placeholder="search"
          />
        </div>
      </div>

      {/*right side */}
      <div>
        <ul className="flex items-center gap-8">
          <li>
            {currentUser ? (
              <button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatarImg}
                  className="size-7 rounded-full ring-2 ring-blue-500"
                />
              </button>
            ) : (
              <Link to="/user">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2">
                <ul>
                  {navigate.map((i) => {
                    return (
                      <li key={i.name}>
                        <Link
                          to={i.href}
                          className="block px-4 py-1 text-sm hover:bg-gray-300"
                          onClick={()=>setisDropdownOpen(false)}
                        >
                          {i.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
          <li>
            <FaRegHeart className="size-6" />
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 bg-yellow-300 px-4 py-2"
            >
              <AiOutlineShoppingCart className="size-5" />
              <span>0</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;