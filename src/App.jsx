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

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-blue-50">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route
                        exact
                        path="/productss"
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
