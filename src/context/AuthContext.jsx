import { createContext, useContext, useState, useEffect } from "react";
import { apiGet, apiPost } from "../services/api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Al cargar la app verificamos si hay una cookie válida
  useEffect(() => {
    async function checkAuth() {
      try {
        const data = await apiGet("/auth/me");
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  async function login(username, password) {
    const data = await apiPost("/auth/login", { username, password });
    setUser({ username: data.username, role: data.role });
    return data;
  }

  async function logout() {
    try {
      await apiPost("/auth/logout", {});
    } catch {
      // si falla igual limpiamos el estado
    } finally {
      setUser(null);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}