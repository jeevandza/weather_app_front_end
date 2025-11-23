export function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-white font-semibold">Loading...</p>
      </div>
    </div>
  );
}