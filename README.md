# 🌦️ Weather App UI

A **premium, glassmorphic weather dashboard** built with React and Vite — featuring animated background orbs, hourly & 7-day forecasts, and a fully responsive layout that looks stunning on every screen.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **City Search** | Search bar to look up weather by city name |
| 🌡️ **Current Weather** | Large temperature display with condition, high/low temps, and animated weather icon |
| ⏱️ **Hourly Forecast** | Horizontally scrollable hour-by-hour breakdown |
| 📅 **7-Day Forecast** | Daily overview with condition icons and gradient temperature bars |
| 📊 **Weather Details** | Six key metrics — Feels Like, Wind, Humidity, UV Index, Visibility, Pressure |
| 🎨 **Glassmorphism UI** | Frosted-glass panels with subtle border gradients and inner shadows |
| 🔮 **Animated Orbs** | Three floating, blurred background orbs that drift smoothly behind the dashboard |
| 📱 **Fully Responsive** | Adapts seamlessly from desktop (two-column grid) to mobile (stacked layout) |
| ✍️ **Google Fonts** | Uses the modern **Outfit** typeface for a clean, premium feel |

---

## 🛠️ Tech Stack

- **React 19** — Component-driven UI
- **Vite 8** — Lightning-fast dev server & build tool
- **Vanilla CSS** — Custom glassmorphism design system with CSS variables
- **Lucide React** — Beautiful, open-source SVG icons
- **ESLint** — Code quality & linting

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/weather-app-ui.git
cd weather-app-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 📁 Project Structure

```
weather-app-ui/
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── assets/              # Images & media
│   ├── components/
│   │   ├── SearchBar.jsx        # City search input
│   │   ├── SearchBar.css
│   │   ├── CurrentWeather.jsx   # Main temperature & condition display
│   │   ├── CurrentWeather.css
│   │   ├── HourlyForecast.jsx   # Scrollable hourly forecast
│   │   ├── HourlyForecast.css
│   │   ├── DailyForecast.jsx    # 7-day forecast with temp bars
│   │   ├── DailyForecast.css
│   │   ├── WeatherDetails.jsx   # Six-metric detail grid
│   │   └── WeatherDetails.css
│   ├── App.jsx              # Root layout & mock data
│   ├── App.css              # Dashboard grid, orbs & layout
│   ├── index.css            # Global styles, glass-panel system, fonts
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML shell
├── vite.config.js           # Vite configuration
├── package.json
└── eslint.config.js
```

---

## 🎨 Design System

The app is built around a custom **glassmorphism** design system defined entirely with CSS custom properties:

| Token | Value | Purpose |
|---|---|---|
| `--bg-gradient-start` | `#09090b` | Page background (dark base) |
| `--glass-bg` | `rgba(255,255,255,0.03)` | Panel fill |
| `--glass-border` | `rgba(255,255,255,0.08)` | Panel border |
| `--accent-color` | `#38bdf8` | Icon highlights & accents |
| `--text-primary` | `#ffffff` | Headings & values |
| `--text-secondary` | `#a1a1aa` | Labels & muted text |
| `--font-main` | `Outfit` | Typeface |

Panels use `backdrop-filter: blur(24px)` with layered `box-shadow` and a gradient `::before` pseudo-element for the signature frosted-glass look.

---

## 🧩 Components

### `SearchBar`
Glass-panel form with a Lucide search icon. Submits the query to the parent via `onSearch` callback.

### `CurrentWeather`
Displays city/country, a large gradient temperature, condition text, high/low, and an animated weather icon that bounces gently.

### `HourlyForecast`
Horizontally scrollable list of hour cards — each showing the time, icon, and temperature.

### `DailyForecast`
7-day list with day name, condition icon, and a gradient temperature bar whose position and width are calculated from min/max temps.

### `WeatherDetails`
A 2×3 grid of detail cards (Feels Like, Wind, Humidity, UV, Visibility, Pressure), each with an accent-coloured icon and hover lift effect.

---

## 🔧 Customization

- **Swap the data source** — Replace the `MOCK_WEATHER` object in `App.jsx` with a real API call (e.g., OpenWeatherMap, WeatherAPI).
- **Change the colour palette** — Edit the CSS variables in `src/index.css` to match your brand.
- **Add more metrics** — Extend the `detailsList` array in `WeatherDetails.jsx`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React & Vite
</p>
