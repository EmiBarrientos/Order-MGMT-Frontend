import { Outlet, Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }
    if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-sm">Cargando...</div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <ToastContainer />
      <nav className="p-4 flex gap-4 bg-slate-800">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Productos</Link>
        <Link to="/orders" className="hover:underline">Ordenes</Link>
         <div className="ml-auto flex items-center gap-4">
          {user && (
            <span className="text-sm text-slate-300">
              {user.username} · {user.role}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      <div className="p-4">
        <Outlet />
      </div>
      
    </div>
  );
}