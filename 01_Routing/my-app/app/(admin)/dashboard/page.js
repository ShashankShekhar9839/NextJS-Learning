export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold">Total Users</h2>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold">Total Orders</h2>
          <p className="text-2xl">567</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold">Revenue</h2>
          <p className="text-2xl">$12,345</p>
        </div>
      </div>
    </div>
  );
}
