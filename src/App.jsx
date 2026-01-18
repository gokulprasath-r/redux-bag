import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Home,
    About,
    Products,
    SingleProduct,
    Cart,
    Checkout,
    MyOrders,
    Navbar,
} from "./pages/index";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
    const { theme } = useSelector((state) => state.theme);
    useEffect(() => {
        const root = document.documentElement;
        theme === "light"
            ? root.classList.remove("dark")
            : root.classList.add("dark");
    }, [theme]);

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-blue-50 dark:bg-slate-900">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route
                        exact
                        path="/products/:id"
                        element={<SingleProduct />}
                    />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/my-orders" element={<MyOrders />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
