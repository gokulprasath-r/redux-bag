import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import {
    removeFromCart,
    removeAllFromCart,
    increaseQty,
    decreaseQty,
    calculateTotal,
} from "../features/cart/cartSlice";
import Loader from "../components/Loader";
function Cart() {
    const { cartItems, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <section className="w-full md:max-w-2xl mx-auto px-4 py-10  gap-8 bg-blue-50 dark:bg-slate-900">
            <div className="col-span-3 md:col-span-2 space-y-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-slate-100 text-center">
                    Your Cart
                </h1>
                {cartItems.length < 1 ? (
                    <h3 className="text-center text-black dark:text-slate-100">
                        Your Cart is Empty
                    </h3>
                ) : (
                    <>
                        {" "}
                        {cartItems.map((item) => (
                            <div
                                key={item.product.id}
                                className="flex gap-6 bg-white p-4 rounded-lg shadow-sm dark:bg-slate-800"
                            >
                                <img
                                    src={item.product.images[0]}
                                    alt={item.product.title}
                                    className="w-24 h-24 object-cover rounded-md"
                                />

                                <div className="flex-1 space-y-2">
                                    <h2 className="font-semibold text-gray-800 dark:text-slate-100">
                                        {item.product.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-slate-100">
                                        Brand: {item.product.brand}
                                    </p>

                                    <p className="text-sm text-yellow-500">
                                        {item.product.rating} ★
                                    </p>

                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center  overflow-hidden">
                                            <button
                                                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300 disabled:dark:bg-slate-700"
                                                onClick={() => {
                                                    dispatch(
                                                        decreaseQty(
                                                            item.product.id,
                                                        ),
                                                    );
                                                    dispatch(calculateTotal());
                                                }}
                                                disabled={
                                                    item.quantity < 2 &&
                                                    `disabled`
                                                }
                                            >
                                                −
                                            </button>
                                            <span className="px-2 py-1 text-sm text-gray-900 dark:text-slate-100">
                                                {item.quantity}
                                            </span>
                                            <button
                                                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300 disabled:dark:bg-slate-700"
                                                onClick={() => {
                                                    dispatch(
                                                        increaseQty(
                                                            item.product.id,
                                                        ),
                                                    );
                                                    dispatch(calculateTotal());
                                                }}
                                                disabled={
                                                    item.quantity > 4 &&
                                                    `disabled`
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span className="font-semibold text-blue-600">
                                            $&nbsp;
                                            {item.product.price * item.quantity}
                                        </span>
                                        <button
                                            onClick={() => {
                                                dispatch(
                                                    removeFromCart(
                                                        item.product.id,
                                                    ),
                                                );
                                                dispatch(calculateTotal());
                                            }}
                                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr className="text-gray-900 dark:text-slate-100" />
                        <div className="flex justify-between mb-0">
                            <h3 className="font-bold text-lg dark:text-slate-100">
                                Total :
                            </h3>
                            <h3 className="font-bold text-lg dark:text-slate-100">
                                $ {total}.00
                            </h3>
                        </div>
                        <div className="flex flex-row gap-2">
                            {" "}
                            <button className="mt-6 w-full bg-blue-500 text-white rounded-md  font-semibold hover:bg-blue-600 transition cursor-pointer flex">
                                <NavLink
                                    to="/checkout"
                                    className="w-full py-3 rounded-md"
                                >
                                    {" "}
                                    Proceed to Checkout
                                </NavLink>
                            </button>
                            <button
                                className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition cursor-pointer"
                                onClick={() => dispatch(removeAllFromCart())}
                            >
                                {" "}
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Cart;
