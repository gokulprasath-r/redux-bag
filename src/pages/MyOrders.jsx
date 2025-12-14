function MyOrders() {
    const orders = [
        {
            id: 1,
            name: "Gokul",
            address: "12, MG Road, Chennai",
            productsCount: 3,
            price: 59.99,
            date: "2025-05-12T14:32:00",
        },
        {
            id: 2,
            name: "Gokul",
            address: "12, MG Road, Chennai",
            productsCount: 1,
            price: 19.99,
            date: "2025-05-10T10:15:00",
        },
    ];
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Your Orders
                </h1>
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                    Total Orders: {orders.length}
                </span>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-sm text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Address</th>
                            <th className="px-4 py-3">Products</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="border-t text-sm hover:bg-gray-50"
                            >
                                <td className="px-4 py-3 font-medium">
                                    {order.name}
                                </td>
                                <td className="px-4 py-3 text-gray-600">
                                    {order.address}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    {order.productsCount}
                                </td>
                                <td className="px-4 py-3 font-semibold text-blue-600">
                                    ${order.price}
                                </td>
                                <td className="px-4 py-3 text-gray-500">
                                    {new Date(order.date).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default MyOrders;
