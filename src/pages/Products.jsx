import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, changePage } from "../features/products/productsSlice";
import { useEffect } from "react";
import Loader from "../components/Loader";
function Products() {
    const dispatch = useDispatch();

    const { products, loading, page } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts(page));
    }, [dispatch, page]);

    return (
        <section className="bg-blue-50 dark:bg-slate-900 px-4 py-4">
            <div className="flex flex-col md:flex-row gap-10">
                <aside className=" md:max-w-[280px] bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm h-fit ">
                    <h2 className="text-xl font-semibold mb-5 text-black dark:text-slate-100">
                        Filters
                    </h2>
                    <input
                        type="text"
                        placeholder="Search product..."
                        className="w-full mb-5 border dark:border-slate-900 rounded-md px-4 py-2 text-black bg-white"
                    />

                    <select className="w-full mb-5 border dark:border-slate-900 rounded-md px-4 py-2 bg-white cursor-pointer">
                        <option>All Categories</option>
                        <option>Beauty</option>
                        <option>Furniture</option>
                        <option>Food</option>
                    </select>

                    <select className="w-full mb-5 border dark:border-slate-900 rounded-md px-4 py-2 bg-white cursor-pointer">
                        <option>All Companies</option>
                        <option>Essence</option>
                        <option>Apple</option>
                        <option>Samsung</option>
                    </select>

                    <select className="w-full mb-5 border dark:border-slate-900 rounded-md px-4 py-2 bg-white cursor-pointer">
                        <option>Sort by</option>
                        <option>Price (Low → High)</option>
                        <option>Price (High → Low)</option>
                        <option>Rating</option>
                    </select>

                    <label className="flex items-center gap-2 mb-5 text-sm  text-black dark:text-slate-100">
                        <input type="checkbox" />
                        Free Shipping
                    </label>

                    <div className="flex flex-col  gap-4">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600 cursor-pointer">
                            Search
                        </button>
                        <button className="w-full py-2 rounded-md text-sm font-semibold hover:bg-blue-100 bg-blue-50 text-gray-900 cursor-pointer border dark:border-slate-900">
                            Reset
                        </button>
                    </div>
                </aside>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 ">
                            {products.map((item) => (
                                <Link
                                    to={`/products/${item.id}`}
                                    key={item.id}
                                    className="bg-white dark:bg-slate-800 px-4 py-1 rounded-lg shadow-sm hover:shadow-md transition"
                                >
                                    <img
                                        src={item.images}
                                        alt={item.title}
                                        className="w-full h-20 rounded-md mb-3"
                                    />

                                    <h3 className="font-semibold text-gray-800 truncate dark:text-slate-100">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1 dark:text-slate-100">
                                        <span>{item.brand}</span>
                                        <span className="capitalize">
                                            {item.category}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center gap-1 text-sm text-yellow-500 mt-1">
                                        <p className="font-semibold text-blue-600">
                                            ₹{Math.floor(item.price * 90)}
                                        </p>
                                        <span>{item.rating?.toFixed(1)} ★</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-10">
                            <div className="flex items-center gap-2">
                                <button
                                    className="px-3 py-2 rounded-md  text-sm hover:bg-blue-700 bg-blue-600 dark:text-slate-100"
                                    onClick={() => dispatch(changePage("dec"))}
                                >
                                    ← Prev
                                </button>

                                {/* {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        className={`px-4 dark:text-slate-100 py-2 rounded-md text-sm font-medium cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300 ${
                                            page === 1
                                                ? "bg-blue-500 text-white"
                                                : " bg-white dark:bg-slate-800 hover:bg-gray-100"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))} */}

                                <button
                                    className="bg-blue-600 px-3 py-2 rounded-md dark:text-slate-100 text-sm hover:bg-blue-700"
                                    onClick={() => dispatch(changePage("inc"))}
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Products;
