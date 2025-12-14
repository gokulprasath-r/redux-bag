import { Link } from "react-router-dom";

function Cart() {
    const cartItems = [
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            brand: "Essence",
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
            price: 9.99,
            rating: 2.6,
            quantity: 1,
        },
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            brand: "Essence",
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
            price: 9.99,
            rating: 2.6,
            quantity: 1,
        },
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            brand: "Essence",
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
            price: 9.99,
            rating: 2.6,
            quantity: 1,
        },
    ];
    return (
        <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>

                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-6 bg-white p-4 rounded-lg shadow-sm"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-24 h-24 object-cover rounded-md"
                        />

                        {/* Details */}
                        <div className="flex-1 space-y-2">
                            <h2 className="font-semibold text-gray-800">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Brand: {item.brand}
                            </p>

                            {/* Rating */}
                            <p className="text-sm text-yellow-500">
                                {item.rating} ★
                            </p>

                            {/* Quantity + Price */}
                            <div className="flex items-center justify-between mt-3">
                                {/* Quantity */}
                                <div className="flex items-center border rounded-md overflow-hidden">
                                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                                        −
                                    </button>
                                    <span className="px-4 py-1 text-sm">
                                        {item.quantity}
                                    </span>
                                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                                        +
                                    </button>
                                </div>

                                {/* Price */}
                                <span className="font-semibold text-blue-600">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span>Items (1)</span>
                        <span>$9.99</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>$1.00</span>
                    </div>

                    <hr />

                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>$10.99</span>
                    </div>
                </div>

                <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition">
                    <Link to="/checkout"> Proceed to Checkout</Link>
                </button>
            </div>
        </section>
    );
}

export default Cart;
