import { useAuth } from "../../context/AuthContext";
1
export default function AuthGate({ children }) {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-sm">Cargando...</div>
      </div>
    );
  }

  return children;
}