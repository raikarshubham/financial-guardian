import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Financial Guardian</h1>
            <p className="text-sm text-gray-500">Welcome back, {user?.name}</p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Sign out
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-gray-400">
          Dashboard coming on Day 5 — auth is working!
        </div>
      </div>
    </div>
  );
}