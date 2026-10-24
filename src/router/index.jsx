import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Productos from "../pages/products/Products";
import Ordenes from "../pages/orders/Orders";
import Login from "../pages/auth/Login";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element:(
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>) },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Productos />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            <Ordenes />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
