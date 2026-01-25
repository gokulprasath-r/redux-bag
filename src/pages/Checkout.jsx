import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../features/checkout/checkoutSlice";
import { clearCart } from "../features/cart/cartSlice";
function Checkout() {
    const { count, total, cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        address: "",
        totalPrice: total + 1,
        totalItems: count,
        date: "",
    });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <section className="flex flex-col w-full md:max-w-4xl mx-auto px-4 py-10 gap-8 bg-blue-50 dark:bg-slate-900">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-slate-100 text-center">
                Checkout
            </h1>
            {cartItems.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {" "}
                    <div className="md:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm ">
                        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-slate-100">
                            Delivery Address
                        </h2>

                        <form
                            className="flex flex-col gap-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const updatedData = {
                                    ...data,
                                    date: new Date().toISOString(),
                                };
                                dispatch(placeOrder(updatedData));
                                console.log(updatedData.date);
                                dispatch(clearCart());
                                setData({
                                    name: "",
                                    address: "",
                                    totalPrice: 1,
                                    totalItems: 0,
                                    date: "",
                                });
                                navigate("/my-orders");
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={handleChange}
                                value={data.name}
                                className="md:col-span-3 border dark:border-slate-900 rounded-md px-3 py-2 bg-white "
                                required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                onChange={handleChange}
                                value={data.address}
                                className="md:col-span-3 border rounded-md px-3 py-2 bg-white dark:border-slate-900"
                                required
                            />
                            <button
                                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
                                type="submit"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm h-fit dark:bg-slate-800">
                        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-slate-100">
                            Order Summary
                        </h2>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-black dark:text-slate-100">
                                <span>Items ({data.totalItems})</span>
                                <span>$ {data.totalPrice - 1}.00</span>
                            </div>
                            <div className="flex justify-between text-black dark:text-slate-100">
                                <span>Delivery</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-black dark:text-slate-100">
                                <span>Tax</span>
                                <span>$ 1.00</span>
                            </div>

                            <hr className="text-black dark:text-slate-100" />

                            <div className="flex justify-between font-semibold text-lg text-black dark:text-slate-100">
                                <span>Total</span>
                                <span>$&nbsp;{data.totalPrice}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h3 className="text-center dark:text-slate-100">
                    Your Bag is Empty. Add Items to the Cart to proceed
                </h3>
            )}
        </section>
    );
}

export default Checkout;
