import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import logo from "../assets/logo.png";

function Home() {
    return (
        <>
            <section className="flex-1 text-white bg-blue-50 dark:bg-slate-900 flex flex-col md:flex-row items-center justify-center px-8 md:px-16">
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-slate-100">
                        Welcome to
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-500 dark:text-slate-100">
                        Redux Bag
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-500 dark:text-slate-100">
                        The best online store for all your shopping needs
                    </p>
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-550 transition">
                        <NavLink to="/products">Explore Products</NavLink>
                    </button>
                </div>

                <div className="hidden md:block bg-blue-50 dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-xl cursor-pointer transition">
                    <img
                        src={logo}
                        alt="Redux Bag Hero"
                        height="350"
                        width="350"
                        className="rounded-lg shadow-lg bg-white dark:bg-slate-800"
                    />
                </div>
            </section>
        </>
    );
}

export default Home;
