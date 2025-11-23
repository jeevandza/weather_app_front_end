import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export  function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}