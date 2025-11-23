import React, { createContext, useContext, useState, useCallback } from "react";
import { X, AlertCircle, CheckCircle, Info } from "lucide-react";

const SnackbarContext = createContext();

export function ProvideSnackbarContext({ children }) {
  const [snackbars, setSnackbars] = useState([]);

  const showSnackbar = useCallback((message, type = "info") => {
    const id = Date.now();
    const newSnackbar = { id, message, type };
    setSnackbars((prev) => [...prev, newSnackbar]);
    return id;
  }, []);

  const dismissSnackbar = useCallback((id) => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, dismissSnackbar }}>
      {children}
      <SnackbarContainer snackbars={snackbars} onDismiss={dismissSnackbar} />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within ProvideSnackbarContext");
  }
  return context;
}

function SnackbarContainer({ snackbars, onDismiss }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {snackbars.map((snackbar) => (
        <SnackbarItem
          key={snackbar.id}
          snackbar={snackbar}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  );
}

function SnackbarItem({ snackbar, onDismiss }) {
  const { id, message, type } = snackbar;

  const typeConfig = {
    success: {
      bg: "bg-green-500",
      icon: <CheckCircle size={20} />,
    },
    error: {
      bg: "bg-red-500",
      icon: <AlertCircle size={20} />,
    },
    info: {
      bg: "bg-blue-500",
      icon: <Info size={20} />,
    },
  };

  const config = typeConfig[type] || typeConfig.info;

  return (
    <div
      className={`${config.bg} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 pointer-events-auto`}
    >
      {config.icon}
      <span className="font-medium flex-1">{message}</span>
      <button
        onClick={() => onDismiss(id)}
        className="hover:bg-white/20 p-1 rounded transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
}