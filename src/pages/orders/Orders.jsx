import { useState } from "react";
import { getAllOrders, deleteOrder } from "../../services/orders";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import OrderActions from "../../components/orders/OrdersActions";
import OrderForm from "../../components/orders/OrderForm";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [formMode, setFormMode] = useState(null); // null | "create" | "edit"
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
      setError("Error al cargar órdenes");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
      await fetchData();
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteOrder(id);
          await fetchData();
          Swal.fire("¡Eliminada!", "La orden ha sido borrada.", "success");
        } catch (err) {
          console.error(err);
          toast.error("Error al eliminar la orden");
        }
      }
    });
  };

  const handleFormSuccess = () => {
    setFormMode(null);
    setSelectedOrder(null);
    fetchData(); // refresca la lista sin toggle
  };

  const handleFormCancel = () => {
    setFormMode(null);
    setSelectedOrder(null);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Órdenes</h1>

      <OrderActions
        visible={visible}
        loading={loading}
        onToggle={handleToggle}
        onNewOrder={() => setFormMode("create")}
      />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {visible && (
        <div className="space-y-4 mt-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 bg-slate-800 rounded-lg border border-slate-700"
            >
              <p>
                <span className="font-semibold">ID:</span> {order.id}
              </p>
              <p>
                <span className="font-semibold">ID Usuario:</span> {order.userId}
              </p>
              <p>
                <span className="font-semibold">Estado:</span>{" "}
                {order.estadoPedido}
              </p>

              <h3 className="font-semibold mt-3 mb-2 text-blue-300">
                Productos:
              </h3>
              <ul className="pl-4 space-y-1 list-none">
                {Array.isArray(order.productDtoList) &&
                  order.productDtoList.map((product) => (
                    <li key={`${order.id}-${product.id}`} className="text-sm">
                      <div className="font-bold">{product.productName}</div>
                      <div className="ml-2">
                        Precio: ${product.price.toFixed(2)}
                      </div>
                    </li>
                  ))}
              </ul>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => {
                    setSelectedOrder(order);
                    setFormMode("edit");
                  }}
                  className="bg-blue-400 hover:bg-blue-300 text-white px-4 py-2 rounded shadow"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded shadow"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {formMode && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleFormCancel();
          }}
        >
          <div
            className="bg-slate-600 rounded-lg p-6 w-[500px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleFormCancel}
              className="absolute top-2 right-3 text-white"
            >
              ✕
            </button>
            <OrderForm
              mode={formMode}
              order={selectedOrder}
              onSuccess={handleFormSuccess}
              onCancel={handleFormCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
}
/**********************************************
 *   
 
  useEffect(() => {
    getAllOrders()
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Error al cargar órdenes");
        setLoading(false);
      });
  }, []);


if (loading) {
    return <div className="text-white">Cargando órdenes...</div>;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  if (!orders.length) {
    return <div className="text-white">No hay órdenes registradas.</div>;
  }



 * 
 * no tengo ni idea de que hice aca jojojo
 * 
 * 
*/