export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      {/* Admin navigation */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/admin/users">Users</a>
            </li>
            <li>
              <a href="/admin/settings">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
