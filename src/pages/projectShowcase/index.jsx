import { useState } from "react";
import { Server, Database, Package, Cloud, Sun } from "lucide-react";

export function ProjectShowcase() {
  const [showBackendJson, setShowBackendJson] = useState(false);
  const [showFrontendJson, setShowFrontendJson] = useState(false);

const backendPackageJson = `{
  "name": "server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^5.1.0",
    "axios": "^1.13.2",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "ioredis": "^5.8.2",
    "joi": "^18.0.2",
    "pg": "^8.16.3",
    "sequelize": "^6.37.7",
    "pino": "^10.1.0",
    "pino-pretty": "^13.1.2",
    "pino-roll": "^4.0.0",
    "nodemon": "^3.1.11"
  },
  "devDependencies": {
    "sequelize-cli": "^6.6.3"
  }
}`;


const frontendPackageJson = `{
  "name": "weather-app-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.9.6",
    "lucide-react": "^0.554.0",
    "react-scripts": "5.0.1",
    "recharts": "^3.5.0",
    "dotenv": "^17.2.3"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.18",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.22"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}`;


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <Cloud className="w-24 h-24 mx-auto text-blue-400 animate-pulse" />
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 my-4">
          Weather App Showcase
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl">
          A full-stack weather application built using Node.js, Express, Redis,
          PostgreSQL, and WeatherAPI. The frontend is powered by React, Tailwind
          CSS, and Lucide React icons.
        </p>
      </div>

      {/* Backend Section */}
      <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-10 border border-white/10 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">Backend Details</h2>
        </div>
        <p className="text-gray-300 mb-4">
          - Built using Node.js and Express for handling API requests.
          <br />
          - Uses PostgreSQL for long-term storage of weather data.
          <br />
          - Redis is used for caching to serve data quickly.
          <br />
          - Data is fetched from{" "}
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            WeatherAPI
          </a>{" "}
          and stored in the database.
          <br />
          - Data updates every 5 hours automatically when new requests come in.
          <br />
          - Supports search history and 7-day weather forecast per city.
        </p>
        <button
          onClick={() => setShowBackendJson(!showBackendJson)}
          className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          {showBackendJson ? "Hide Backend package.json" : "Show Backend package.json"}
        </button>
        {showBackendJson && (
          <pre className="mt-4 bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-green-400">
            {backendPackageJson}
          </pre>
        )}
      </div>

      {/* Frontend Section */}
      <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-10 border border-white/10 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-6 h-6 text-pink-400" />
          <h2 className="text-2xl font-bold">Frontend Details</h2>
        </div>
        <p className="text-gray-300 mb-4">
          - Built using React for a modern component-based UI.
          <br />
          - Tailwind CSS is used for responsive and beautiful styling.
          <br />
          - Lucide React provides clean and lightweight icons.
          <br />
          - Uses Context API for global state management (search history, forecast, and weather data).
          <br />
          - Supports 7-day forecast and maintains user search history.
        </p>
        <button
          onClick={() => setShowFrontendJson(!showFrontendJson)}
          className="mt-4 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
        >
          {showFrontendJson ? "Hide Frontend package.json" : "Show Frontend package.json"}
        </button>
        {showFrontendJson && (
          <pre className="mt-4 bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-green-400">
            {frontendPackageJson}
          </pre>
        )}
      </div>

      {/* Technology Stack Section */}
      <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold">Technology Stack</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div className="flex items-center gap-3">
            <Cloud className="w-5 h-5 text-blue-400" /> Node.js + Express
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-green-400" /> PostgreSQL
          </div>
          <div className="flex items-center gap-3">
            <Sun className="w-5 h-5 text-yellow-400" /> Redis
          </div>
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-pink-400" /> React + Tailwind CSS
          </div>
          <div className="flex items-center gap-3">
            <Cloud className="w-5 h-5 text-cyan-400" /> Lucide React Icons
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-purple-400" /> WeatherAPI Integration
          </div>
        </div>
      </div>
    </div>
  );
}
