function Checkout() {
    return (
        <section className=" mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
            {/* Address Form */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">
                    Delivery Address
                </h2>

                <div className="grid md:grid-cols-3 gap-2">
                    <input
                        type="text"
                        placeholder="Name"
                        className="md:col-span-3 border rounded-md px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="md:col-span-3 border rounded-md px-3 py-2"
                    />
                </div>
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition">
                    Place Order
                </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span>Items (2)</span>
                        <span>$19.98</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>$1.50</span>
                    </div>

                    <hr />

                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>$21.48</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
