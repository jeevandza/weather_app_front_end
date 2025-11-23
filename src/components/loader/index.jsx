export  function Loader() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 w-full flex items-center justify-center min-h-40">
              <div className="w-12 h-12 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
    </div>
  );
}
