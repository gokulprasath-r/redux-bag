import { Link } from "react-router-dom";

function SingleProduct() {
    const product = {
        id: 1,
        brand: "Essence",
        category: "beauty",
        description:
            "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        images: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        price: 9.99,
        rating: 2.56,
        reviews: [
            {
                reviewerName: "Eleanor Collins",
                reviewerEmail: "eleanor.collins@x.dummyjson.com",
                rating: 3,
                comment: "Would not recommend!",
                date: "2025-04-30T09:41:02.053Z",
            },
            {
                reviewerName: "John Doe",
                reviewerEmail: "john.doe@example.com",
                rating: 2,
                comment: "Too watery for my lashes",
                date: "2025-05-01T12:30:00.000Z",
            },
            {
                reviewerName: "Jane Smith",
                reviewerEmail: "jane.smith@example.com",
                rating: 3,
                comment: "Average mascara, not bad",
                date: "2025-05-02T10:15:00.000Z",
            },
        ],
    };
    return (
        <section className="max-w-5xl bg-blue-50 mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 flex flex-col ">
                <Link
                    to="/products"
                    className="mb-10 md:mb-3 w-full text-center text-sm text-blue-600 hover:underline"
                >
                    ← Go Back
                </Link>

                <img
                    src={product.images}
                    alt={product.brand}
                    className="w-full max-w-xs bg-white mx-auto rounded-lg shadow-md object-cover"
                />
            </div>

            <div className="md:w-1/2 space-y-4 px-15 md:p-0 ">
                <h1 className="text-3xl font-bold text-gray-800">
                    {product.brand}
                </h1>

                <p className="uppercase text-xs text-gray-500 tracking-wide">
                    {product.category}
                </p>

                <div className="flex items-center gap-5">
                    <span className="text-2xl font-semibold text-blue-600">
                        ${product.price}
                    </span>
                    <span className="text-yellow-500 text-sm">
                        {product.rating.toFixed(1)} ★
                    </span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                    {product.description}
                </p>

                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                        Quantity
                    </span>
                    <div className="flex items-center overflow-hidden">
                        <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer ">
                            −
                        </button>
                        <span className="px-4 py-1 text-sm">1</span>
                        <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer ">
                            +
                        </button>
                    </div>
                </div>

                <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </section>
    );
}

export default SingleProduct;
