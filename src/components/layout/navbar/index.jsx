import { NavLink, useLocation } from "react-router-dom";
import { Cloud, Home, Menu, X, User, Code } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/weather", label: "Weather", icon: <Cloud className="w-5 h-5" /> },
    {
      path: "/learn-more",
      label: "Read Me",
      icon: <Code className="w-5 h-5" />,
    },
    {
      path: "/about-me",
      label: "About Me",
      icon: <User className="w-5 h-5" />,
    },
  ];

  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cloud className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full group-hover:scale-110 transition-transform"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              WeatherApp
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActivePath(link.path)
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActivePath(link.path)
                        ? "bg-blue-500/20 text-blue-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
