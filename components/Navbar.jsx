export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6">
        <h1 className="text-xl font-bold text-gray-800">Cxz Key System</h1>
        <div className="space-x-4 text-gray-600">
          <a href="#quest" className="hover:text-blue-600">Quest</a>
          <a href="#verify" className="hover:text-blue-600">Verify</a>
        </div>
      </div>
    </nav>
  );
}
