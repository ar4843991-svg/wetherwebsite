import { motion } from "framer-motion"

function WeatherCard({ data }) {
  if (!data) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
     className="rounded-2xl p-6 w-full md:max-w-md text-center"
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.3)"
      }}
    >
      <p className="text-white/70 text-sm mb-1">📍 {data.name}, {data.sys.country}</p>
      <p className="text-white font-bold mb-2" style={{fontSize: "52px", lineHeight: "1"}}>
        {Math.round(data.main.temp)}°C
      </p>
      <p className="text-white/70 text-sm capitalize mb-4">
        ☀️ {data.weather[0].description}
      </p>

      <div className="flex justify-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex-1 py-3 rounded-xl text-center"
          style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
        >
          <p className="text-white/50 text-xs">Humidity</p>
          <p className="text-white font-semibold text-sm mt-1">{data.main.humidity}%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex-1 py-3 rounded-xl text-center"
          style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
        >
          <p className="text-white/50 text-xs">Wind</p>
          <p className="text-white font-semibold text-sm mt-1">{data.wind.speed} m/s</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex-1 py-3 rounded-xl text-center"
          style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
        >
          <p className="text-white/50 text-xs">Feels Like</p>
          <p className="text-white font-semibold text-sm mt-1">{Math.round(data.main.feels_like)}°C</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WeatherCard