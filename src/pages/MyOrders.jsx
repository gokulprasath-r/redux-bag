import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/checkout/checkoutSlice";
import Loader from "../components/Loader";

function MyOrders() {
    const { users, localUsers, loading } = useSelector(
        (state) => state.checkout,
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const formatDate = (isoDate) =>
        new Date(isoDate).toLocaleString("en-IN", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        });
    return (
        <section className="w-full md:max-w-4xl mx-auto px-4 py-10 bg-blue-50 dark:bg-slate-900">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-black dark:text-slate-100">
                    Your Orders
                </h1>
                <span className="bg-blue-100 text-blue-600 px-4 py-1 flex rounded-full text-sm font-medium">
                    Total Orders :&nbsp;
                    {loading ? (
                        <Loader size="sm" />
                    ) : (
                        [...users, ...localUsers].length
                    )}
                </span>
            </div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {[...users, ...localUsers].length > 0 ? (
                        <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-blue-100 text-sm text-gray-600 dark:text-slate-900">
                                    <tr>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Address</th>
                                        <th className="px-4 py-3">Products</th>
                                        <th className="px-4 py-3">Price</th>
                                        <th className="px-4 py-3 hidden md:block">
                                            Date & Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...users, ...localUsers]
                                        .sort(
                                            (a, b) =>
                                                new Date(b.date) -
                                                new Date(a.date),
                                        )
                                        .map((order) => (
                                            <tr
                                                key={order.id}
                                                className=" text-sm hover:bg-gray-300 cursor-pointer hover:dark:bg-slate-700"
                                            >
                                                <td className="px-3 py-3 font-medium dark:text-slate-100">
                                                    {order.name}
                                                </td>
                                                <td className="px-3 py-3 text-gray-600 dark:text-slate-100">
                                                    {order.address}
                                                </td>
                                                <td className="px-3 py-3 dark:text-slate-100">
                                                    {order.totalItems}
                                                </td>
                                                <td className="px-3 py-3 font-semibold text-blue-600 dark:text-slate-100 ">
                                                    ${order.totalPrice}
                                                </td>
                                                <td className="px-3 py-3 text-gray-500 dark:text-slate-100 hidden md:block">
                                                    {formatDate(order.date)}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <h3 className="text-center dark:text-slate-100 mt-5">
                            No Order History
                        </h3>
                    )}
                </>
            )}
        </section>
    );
}

export default MyOrders;
