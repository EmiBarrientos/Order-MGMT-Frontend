export default function OrderActions({ visible, loading, onToggle, onNewOrder }) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={onToggle}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow disabled:opacity-60"
      >
        {visible ? "Ocultar órdenes" : "Mostrar órdenes"}
      </button>

      <button
        onClick={onNewOrder}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
      >
        Nueva Orden
      </button>

      {loading && <span className="text-sm text-gray-300 ml-2">Cargando...</span>}
    </div>
  );
}