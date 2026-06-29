import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import Loading from "./components/Loading"
import WelcomeScreen from "./components/WelcomeScreen"

const getBackground = (weatherMain) => {
  switch (weatherMain) {
    case "Clear":
      return "linear-gradient(135deg, #F0997B 0%, #EF9F27 50%, #BA7517 100%)"
    case "Rain":
    case "Drizzle":
      return "linear-gradient(135deg, #042C53 0%, #185FA5 50%, #3C3489 100%)"
    case "Clouds":
      return "linear-gradient(135deg, #444441 0%, #888780 50%, #B4B2A9 100%)"
    case "Snow":
      return "linear-gradient(135deg, #B5D4F4 0%, #E6F1FB 50%, #fff 100%)"
    case "Thunderstorm":
      return "linear-gradient(135deg, #0d1117 0%, #26215C 50%, #3C3489 100%)"
    case "Mist":
    case "Fog":
    case "Haze":
      return "linear-gradient(135deg, #B4B2A9 0%, #D3D1C7 50%, #F1EFE8 100%)"
    default:
      return "linear-gradient(135deg, #1D9E75 0%, #185FA5 50%, #042C53 100%)"
  }
}

function App() {
  const [started, setStarted] = useState(false)
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const API_KEY = import.meta.env.VITE_API_KEY

  const background = weather
    ? getBackground(weather.weather[0].main)
    : "linear-gradient(135deg, #1D9E75 0%, #185FA5 50%, #042C53 100%)"

  const handleSearch = async () => {
    if (!city) return
    setLoading(true)
    setError("")
    setWeather(null)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      const data = await response.json()
      if (data.cod !== 200) {
        setError("City nahi mili! Dobara likho.")
        return
      }
      setWeather(data)
    } catch (err) {
      setError("Kuch gadbad hui! Internet check karo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <WelcomeScreen key="welcome" onStart={() => setStarted(true)} />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, background }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="min-h-screen flex flex-col items-center justify-center px-4 py-6 gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
   className="text-xl font-bold text-white text-center"
          >
            🌤️ Weather App
          </motion.h1>

          <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
          {loading && <Loading />}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-200 text-lg"
            >
              {error}
            </motion.p>
          )}
          {weather && <WeatherCard data={weather} />}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App