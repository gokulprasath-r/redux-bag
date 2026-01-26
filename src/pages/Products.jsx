import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    changePage,
    applyFilters,
    finalProducts,
} from "../features/products/productsSlice";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
function Products() {
    const dispatch = useDispatch();
    const [filterOptions, setFilterOptions] = useState({
        searchText: "",
        category: "",
        company: "",
        sort: "",
        price: 3000,
    });
    const {
        products,
        loading,
        limitedProducts,
        totalPages,
        page,
        filteredProducts,
    } = useSelector((state) => state.products);
    const { searchText } = filterOptions;
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(finalProducts());
    }, [dispatch, filteredProducts, page]);

    const handlefilter = (e) => {
        e.preventDefault();
        setFilterOptions({
            ...filterOptions,

            [e.target.name]: e.target.value,
        });
    };
    return (
        <section className="bg-blue-50 dark:bg-slate-900 px-4 py-4">
            <div className="flex flex-col md:flex-row gap-10">
                <aside className=" md:max-w-[280px] bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm h-fit ">
                    <h2 className="text-xl font-semibold mb-3 text-black dark:text-slate-100">
                        Filters
                    </h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Search product..."
                            onChange={(e) => handlefilter(e)}
                            name="searchText"
                            value={searchText}
                            className="w-full mb-4 border dark:border-slate-900 rounded-md px-4 py-2 text-black bg-white"
                        />

                        <select
                            name="category"
                            value={filterOptions.category}
                            onChange={(e) => handlefilter(e)}
                            className="w-full mb-4 border dark:border-slate-900 rounded-md px-4 py-2 bg-white cursor-pointer"
                        >
                            <option value="">All Categories</option>
                            {[...new Set(products.map((p) => p.category))].map(
                                (item, key) => {
                                    return (
                                        <option key={key} value={`${item}`}>
                                            {item}
                                        </option>
                                    );
                                },
                            )}
                        </select>

                        <select
                            name="company"
                            className="w-full mb-4 border dark:border-slate-900 rounded-md px-4 py-2 bg-white cursor-pointer"
                            value={filterOptions.company}
                            onChange={(e) => handlefilter(e)}
                        >
                            <option value="">All Companies</option>
                            {[...new Set(products.map((p) => p.brand))].map(
                                (item, key) => {
                                    return (
                                        <option key={key} value={`${item}`}>
                                            {item}
                                        </option>
                                    );
                                },
                            )}
                        </select>

                        <select
                            name="sort"
                            className="w-full mb-4 border dark:border-slate-900 rounded-md px-4 py-2 bg-white cursor-pointer"
                            value={filterOptions.sort}
                            onChange={(e) => handlefilter(e)}
                        >
                            <option value="">Sort by</option>
                            <option value="lth">Price (Low → High)</option>
                            <option value="htl">Price (High → Low)</option>
                        </select>

                        <div className="mb-5">
                            <label className="text-sm text-gray-600 flex justify-between">
                                <span>Price Range</span>
                                <span className="font-medium text-blue-600">
                                    $ {filterOptions.price}
                                </span>
                            </label>

                            <input
                                type="range"
                                min="0"
                                max="3000"
                                value={filterOptions.price}
                                name="price"
                                onChange={(e) => handlefilter(e)}
                                className="w-full mt-2 accent-blue-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col  gap-4">
                            <button
                                className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(applyFilters(filterOptions));
                                    dispatch(finalProducts());
                                }}
                            >
                                Search
                            </button>
                            <button
                                className="w-full py-2 rounded-md text-sm font-semibold hover:bg-blue-100 bg-blue-50 text-gray-900 cursor-pointer border dark:border-slate-900"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFilterOptions({
                                        searchText: "",
                                        category: "",
                                        company: "",
                                        sort: "",
                                        price: 3000,
                                    });
                                    dispatch(
                                        applyFilters({
                                            searchText: "",
                                            category: "",
                                            company: "",
                                            sort: "",
                                            price: 3000,
                                        }),
                                    );
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    </form>
                </aside>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="flex flex-col flex-1 relative">
                        {limitedProducts.length > 0 ? (
                            <>
                                {" "}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 ">
                                    {limitedProducts.map((item) => (
                                        <NavLink
                                            to={`/products/${item.id}`}
                                            key={item.id}
                                            className="bg-white dark:bg-slate-800 px-4 py-1 rounded-lg shadow-sm hover:shadow-md transition"
                                        >
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-full h-25 rounded-md mb-3"
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
                                                    $&nbsp;{item.price}
                                                </p>
                                                <span>
                                                    {item.rating?.toFixed(1)} ★
                                                </span>
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                                <div className="flex mt-5 md:mt-0 items-center md:absolute bottom-0 items-center justify-center w-full">
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="px-3 py-2 rounded-md cursor-pointer text-sm text-slate-100 hover:bg-blue-700 bg-blue-600  disabled:cursor-not-allowed disabled:bg-blue-300 disabled:dark:bg-slate-700"
                                            onClick={() => {
                                                dispatch(changePage("dec"));
                                                dispatch(finalProducts());
                                            }}
                                            disabled={page <= 1 && `disabled`}
                                        >
                                            ← Prev
                                        </button>

                                        {[...Array(totalPages).keys()].map(
                                            (page1) => (
                                                <button
                                                    key={page1 + 1}
                                                    className={`px-3 py-2 rounded-md cursor-pointer text-sm  hover:bg-blue-700 hover:border-blue-700 hover:text-white disabled:cursor-not-allowed disabled:bg-blue-300 disabled:dark:bg-slate-700 border-1 border-black text-black  dark:text-white dark:border-slate-800 ${
                                                        page === page1 + 1
                                                            ? "border-blue-700 bg-blue-600 text-white "
                                                            : "bg-white dark:bg-slate-800 "
                                                    }`}
                                                    onClick={() => {
                                                        dispatch(
                                                            changePage(
                                                                page1 + 1,
                                                            ),
                                                        );
                                                        dispatch(
                                                            finalProducts(),
                                                        );
                                                    }}
                                                >
                                                    {page1 + 1}
                                                </button>
                                            ),
                                        )}

                                        <button
                                            className="bg-blue-600 px-3 py-2 rounded-md cursor-pointer text-slate-100 text-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:dark:bg-slate-700"
                                            onClick={() => {
                                                dispatch(changePage("inc"));
                                                dispatch(finalProducts());
                                            }}
                                            disabled={
                                                page >= totalPages && `disabled`
                                            }
                                        >
                                            Next →
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <h3 className="m-auto text-center text-black dark:text-slate-100">
                                No Products Found
                            </h3>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Products;
