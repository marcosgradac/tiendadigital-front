import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

export default function App() {
  const location = useLocation();
  const hideSidebar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {hideSidebar ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ marginLeft: "250px", padding: "2rem", flex: 1 }}>
           <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<></>} />
        </Routes>
          </main>
        </div>
      )}
    </>
  );
}


        