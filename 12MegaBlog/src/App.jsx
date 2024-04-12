import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authservice from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true); //fo fetching complex data from database it good practice to use loading state
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })); // as userData is object
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //conditional rendering
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO : <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
