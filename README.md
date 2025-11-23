Weather App

A full-stack weather application built with React, Tailwind CSS, Lucide React icons, Node.js, Express, PostgreSQL, and Redis. It fetches real-time weather data from WeatherAPI.com
 and provides a 7-day forecast, search history, and multi-city support. Redis is used for caching, and PostgreSQL stores long-term data.

Frontend
Tech Stack

React – UI library for building interactive interfaces

Tailwind CSS – Utility-first CSS framework for responsive styling

Lucide React – Icon library for UI icons

Recharts – Charting library for weather trends

Features

Search and view weather for 100+ cities

Display current weather and 7-day forecast

Responsive UI with Tailwind CSS

Global state management using React Context

Search history stored in localStorage for 7 days


cd frontend
npm install
npm start


Scripts

npm start – Run development server

npm build – Build production bundle

npm test – Run tests