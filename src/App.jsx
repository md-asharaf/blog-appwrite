import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/index";
import { login, logout } from "./store/index";
import { authService } from "./appwrite/index";
import { Outlet, useNavigate } from "react-router-dom";


function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        authService
            .getCurrentUser()
            .then((currentUser) => {
                if (currentUser) {
                    dispatch(login(currentUser));
                } else {
                    dispatch(logout());
                    navigate("/login");
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;
