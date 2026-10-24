import { useState, useEffect } from "react";
import { createOrder, updateOrder } from "../../services/orders";
import { getAllProducts } from "../../services/products";
import { toast } from "react-toastify";

const ESTADOS = ["PENDIENTE", "LISTO", "ENTREGADO", "CANCELADO"];

export default function OrderForm({ mode, order, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    userId: "",
    idProducto: [],
    estadoPedido: "PENDIENTE",
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts().then(setProducts).catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    if (mode === "edit" && order) {
      setFormData({
        userId: order.userId,
        idProducto: order.productDtoList.map((p) => p.id),
        estadoPedido: order.estadoPedido,
      });
    }
  }, [mode, order]);

  const toggleProduct = (id) => {
    setFormData((prev) => ({
      ...prev,
      idProducto: prev.idProducto.includes(id)
        ? prev.idProducto.filter((pid) => pid !== id)
        : [...prev.idProducto, id],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      ...formData,
      userId: Number(formData.userId),
    };

    try {
      if (mode === "create") {
        await createOrder(payload);
        toast.success("Orden creada correctamente");
      } else {
        await updateOrder(order.id, payload);
        toast.success("Orden actualizada correctamente");
      }
      onSuccess();
    } catch (err) {
      setError(
        mode === "create"
          ? "Error al crear la orden: " + err.message
          : "Error al editar la orden: " + err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-black">
        {mode === "create" ? "Nueva Orden" : "Editar Orden"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ID Usuario
          </label>
          <input
            type="number"
            value={formData.userId}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, userId: e.target.value }))
            }
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Productos
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto border border-gray-200 rounded-md p-2">
            {products.map((product) => (
              <label
                key={product.id}
                className="flex items-center gap-2 cursor-pointer text-black text-sm"
              >
                <input
                  type="checkbox"
                  checked={formData.idProducto.includes(product.id)}
                  onChange={() => toggleProduct(product.id)}
                />
                <span>{product.productName}</span>
                <span className="text-gray-400 ml-auto">
                  ${product.price.toFixed(2)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            value={formData.estadoPedido}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                estadoPedido: e.target.value,
              }))
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          >
            {ESTADOS.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-md text-black"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md disabled:opacity-50"
          >
            {loading ? "Guardando..." : mode === "edit" ? "Guardar cambios" : "Crear Orden"}
          </button>
        </div>
      </form>
    </div>
  );
}