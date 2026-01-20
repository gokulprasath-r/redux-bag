import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleNav } from "../features/theme/themeSlice";
function Navbar() {
    const { count } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { theme, nav } = useSelector((state) => state.theme);
    return (
        <nav className="relative bg-white dark:bg-slate-800 shadow-sm py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 ml-4">
                <div className=" text-white font-bold rounded">
                    <img
                        srcSet="/logo.png"
                        height="64"
                        width="64"
                        alt=""
                        srcset=""
                    />
                </div>
                <span className="font-bold text-blue-500 dark:text-slate-100 text-lg">
                    Redux Bag
                </span>
            </div>

            <ul
                className={`${nav ? "hidden" : "block"} md:block md:flex absolute shadow-sm md:shadow-none top-21 md:top-0 items-center  w-full md:w-fit justify-center md:relative flex flex-col md:flex-row font-medium py-4 md:py-0 text-gray-700 dark:text-slate-100 space-y-8 md:space-y-0 md:space-x-4 bg-white dark:bg-slate-800`}
            >
                <Link
                    to="/"
                    onClick={() => dispatch(toggleNav())}
                    className="hover:text-blue-500 cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    onClick={() => dispatch(toggleNav())}
                    className="hover:text-blue-500 cursor-pointer"
                >
                    About
                </Link>
                <Link
                    to="/products"
                    onClick={() => dispatch(toggleNav())}
                    className="hover:text-blue-500 cursor-pointer"
                >
                    Products
                </Link>
                <Link
                    to="/checkout"
                    onClick={() => dispatch(toggleNav())}
                    className="hover:text-blue-500 cursor-pointer"
                >
                    Checkout
                </Link>
                <Link
                    to="/my-orders"
                    onClick={() => dispatch(toggleNav())}
                    className="hover:text-blue-500 cursor-pointer"
                >
                    My Orders
                </Link>
            </ul>

            <div className="flex items-center space-x-4 mr-4 ">
                <button
                    className="p-2 rounded-full hover:bg-blue-100 cursor-pointer"
                    onClick={() => dispatch(toggleTheme())}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>

                <div className="relative">
                    <Link
                        to="/cart"
                        className="p-2 rounded-full hover:bg-blue-100"
                    >
                        🛒
                    </Link>
                    <span className="absolute -top-3 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {count}
                    </span>
                </div>

                <button
                    className="font-bold md:hidden p-3 py-1.5 rounded-full hover:bg-blue-100 cursor-pointer dark:text-blue-600"
                    onClick={() => dispatch(toggleNav())}
                >
                    {nav ? "☰" : "✕"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
