import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="relative bg-white border border-blue-100 shadow-sm py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 ml-4">
                <div className=" text-white font-bold rounded">
                    <img
                        src="/logo.png"
                        height="64"
                        width="64"
                        alt=""
                        srcset=""
                    />
                </div>
                <span className="font-bold text-blue-500 text-lg">
                    Redux Bag
                </span>
            </div>

            <ul className="hidden md:flex absolute shadow-sm md:shadow-none top-15 md:top-0 items-center  w-full md:w-fit justify-center md:relative flex flex-col md:flex-row font-medium py-4 md:py-0 text-gray-700 space-y-8 md:space-y-0 md:space-x-4 bg-white">
                <Link to="/" className="hover:text-blue-500 cursor-pointer">
                    Home
                </Link>
                <Link
                    to="/about"
                    className="hover:text-blue-500 cursor-pointer"
                >
                    About
                </Link>
                <Link
                    to="/products"
                    className="hover:text-blue-500 cursor-pointer"
                >
                    Products
                </Link>
                <Link
                    to="/checkout"
                    className="hover:text-blue-500 cursor-pointer"
                >
                    Checkout
                </Link>
                <Link
                    to="/my-orders"
                    className="hover:text-blue-500 cursor-pointer"
                >
                    My Orders
                </Link>
            </ul>

            <div className="flex items-center space-x-4 mr-4 ">
                <button className="p-2 rounded-full hover:bg-blue-100 cursor-pointer">
                    {true ? "🌙" : "☀️"}
                </button>

                <div className="relative">
                    <Link
                        to="/cart"
                        className="p-2 rounded-full hover:bg-blue-100"
                    >
                        🛒
                    </Link>
                    <span className="absolute -top-3 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        3
                    </span>
                </div>

                <button className="font-bold md:hidden p-3 py-1.5 rounded-full hover:bg-blue-100 cursor-pointer">
                    {true ? "☰" : "X"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
