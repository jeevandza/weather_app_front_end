import { Search, Cloud } from "lucide-react";

export function NoDataFound({ title = "No Data Found", description = "Try searching with different filters" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Cloud size={64} className="text-gray-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
        
        <p className="text-gray-500 mb-6 max-w-sm">{description}</p>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto">
          <Search size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
}