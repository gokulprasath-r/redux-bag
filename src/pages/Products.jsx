import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Products() {
    const { data } = useFetch("https://dummyjson.com/products");

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters */}
                <aside
                    className="
      w-full
      md:w-3/10
      md:min-w-[280px]
      bg-white
      p-5
      rounded-lg
      shadow-sm
      h-fit
    "
                >
                    <h2 className="text-xl font-semibold mb-4">Filters</h2>

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search product..."
                        className="w-full mb-4 border rounded-md px-4 py-2"
                    />

                    {/* Category */}
                    <select className="w-full mb-4 border rounded-md px-4 py-2">
                        <option>All Categories</option>
                        <option>Beauty</option>
                        <option>Furniture</option>
                        <option>Food</option>
                    </select>

                    {/* Company */}
                    <select className="w-full mb-4 border rounded-md px-4 py-2">
                        <option>All Companies</option>
                        <option>Essence</option>
                        <option>Apple</option>
                        <option>Samsung</option>
                    </select>

                    {/* Sort */}
                    <select className="w-full mb-4 border rounded-md px-4 py-2">
                        <option>Sort by</option>
                        <option>Price (Low → High)</option>
                        <option>Price (High → Low)</option>
                        <option>Rating</option>
                    </select>

                    {/* Free Shipping */}
                    <label className="flex items-center gap-2 mb-4 text-sm">
                        <input type="checkbox" />
                        Free Shipping
                    </label>

                    {/* Price Range */}
                    <div className="mb-6">
                        <label className="text-sm text-gray-600">
                            Price Range
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            className="w-full mt-2"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button className="flex-1 bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600">
                            Search
                        </button>
                        <button className="flex-1 border py-2 rounded-md text-sm font-semibold hover:bg-gray-100">
                            Reset
                        </button>
                    </div>
                </aside>

                {/* Products Grid */}
                <div className="flex-1 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        {data.map((item) => (
                            <Link
                                to="/productss"
                                key={item.id}
                                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={item.images}
                                    alt={item.title}
                                    className="w-full h-40 object-cover rounded-md mb-3"
                                />

                                <h3 className="font-semibold text-gray-800 truncate">
                                    {item.title}
                                </h3>

                                {/* Brand + Category */}
                                <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                                    <span>{item.brand}</span>
                                    <span className="capitalize">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-sm text-yellow-500 mt-2">
                                    <span>{item.rating?.toFixed(1)}</span>
                                    <span>★</span>
                                </div>

                                {/* Price */}
                                <p className="mt-2 font-semibold text-blue-600">
                                    ₹{Math.floor(item.price * 90)}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="flex items-center gap-2">
                            {/* Prev */}
                            <button className="px-3 py-2 rounded-md border text-sm hover:bg-gray-100">
                                ← Prev
                            </button>

                            {/* Pages */}
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                                        page === 1
                                            ? "bg-blue-500 text-white"
                                            : "border hover:bg-gray-100"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next */}
                            <button className="px-3 py-2 rounded-md border text-sm hover:bg-gray-100">
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        //     {data.map((item) => (
        //         <div
        //             key={item.id}
        //             className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
        //         >
        //             {console.log(item)}
        //             <img
        //                 src={item.images}
        //                 alt={item.title}
        //                 className="w-full h-40 object-cover rounded-lg mb-4"
        //             />

        //             <h2 className="font-semibold text-lg mb-1 truncate">
        //                 {item.title}
        //             </h2>

        //             <p className="text-green-600 font-bold mb-3">
        //                 ₹{Math.floor(item.price * 90)}
        //             </p>

        //             {/* <button className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        //                 Add to Cart
        //             </button> */}
        //         </div>
        //     ))}
        // </div>
    );
}

export default Products;
