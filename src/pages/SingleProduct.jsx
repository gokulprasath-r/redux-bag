import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
    fetchSingleProduct,
    increaseQty,
    decreaseQty,
} from "../features/products/productsSlice";
import { addToCart, calculateTotal } from "../features/cart/cartSlice";

function SingleProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, selectedProduct } = useSelector((state) => state.products);
    const { cartItems } = useSelector((state) => state.cart);
    const isInCart = cartItems?.find((item) => {
        return item.product.id === selectedProduct.product.id;
    });
    useEffect(() => {
        if (!id) return;
        dispatch(fetchSingleProduct(id));
    }, [dispatch, id]);

    return loading || !selectedProduct.product ? (
        <Loader />
    ) : (
        <section className="max-w-5xl bg-blue-50 dark:bg-slate-900 mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 flex flex-col ">
                <div className="w-full mb-10  text-center md:mb-3">
                    <NavLink
                        to="/products"
                        className="mb-10 md:mb-3 w-fit text-sm text-blue-600 dark:text-slate-100 hover:underline"
                    >
                        ← Go Back
                    </NavLink>
                </div>

                <img
                    src={selectedProduct.product.images[0]}
                    alt={selectedProduct.product.brand}
                    className="w-full max-w-xs bg-white dark:bg-slate-800 mx-auto rounded-lg shadow-md object-cover"
                />
            </div>

            <div className="md:w-1/2 space-y-4 px-15 md:p-0 ">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-slate-100">
                    {selectedProduct.product.title}
                </h1>

                <p className="uppercase text-xs text-gray-500 tracking-wide dark:text-slate-100">
                    {selectedProduct.product.category}
                </p>

                <div className="flex items-center gap-5">
                    <span className="text-2xl font-semibold text-blue-600">
                        $&nbsp;{Math.ceil(selectedProduct.product.price)}
                    </span>
                    <span className="text-yellow-500 text-sm">
                        {selectedProduct.product.rating.toFixed(1)} ★
                    </span>
                </div>

                <p className="text-gray-700 dark:text-slate-100 text-sm leading-relaxed">
                    {selectedProduct.product.description}
                </p>

                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-100">
                        Quantity
                    </span>
                    <div className="flex items-center overflow-hidden">
                        <button
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300 dark:disabled:bg-slate-500"
                            onClick={() => {
                                dispatch(
                                    decreaseQty(selectedProduct.product.id),
                                );
                            }}
                            disabled={
                                selectedProduct.quantity < 2 && `disabled`
                            }
                        >
                            −
                        </button>
                        <span className="px-4 py-1 text-sm text-gray-900 dark:text-slate-100">
                            {selectedProduct.quantity}
                        </span>
                        <button
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300 dark:disabled:bg-slate-700"
                            onClick={() => {
                                dispatch(
                                    increaseQty(selectedProduct.product.id),
                                );
                            }}
                            disabled={
                                selectedProduct.quantity > 4 && `disabled`
                            }
                        >
                            +
                        </button>
                    </div>
                </div>

                {isInCart ? (
                    <NavLink
                        to="/cart"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition cursor-pointer"
                    >
                        Go To Cart
                    </NavLink>
                ) : (
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition cursor-pointer"
                        onClick={() => {
                            dispatch(addToCart(selectedProduct));
                            dispatch(calculateTotal());
                        }}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </section>
    );
}

export default SingleProduct;
