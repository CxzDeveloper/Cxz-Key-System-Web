export default function Generate() {
  const key =
    "CXZ-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
        <h2 className="text-xl font-bold mb-2">Your Key</h2>
        <code className="block bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg">
          {key}
        </code>
        <p className="text-sm text-gray-500 mt-3">
          Key valid for 48 hours
        </p>
      </div>
    </div>
  );
}
