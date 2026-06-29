import { motion } from "framer-motion"

function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center gap-8 p-6"
      style={{ background: "linear-gradient(135deg, #1D9E75 0%, #185FA5 50%, #042C53 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-8xl mb-4">🌤️</p>
        <h1 className="text-4xl font-bold text-white mb-3">Weather App</h1>
        <p className="text-white/70 text-lg">🌍 Check the Weather in Any City Around the World</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
       className="flex flex-wrap justify-center gap-4 text-center w-full px-4"
      >
        <div
          className="px-6 py-4 rounded-2xl w-30"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
        >
          <p className="text-3xl mb-1  ">🌡️</p>
          <p className="text-white text-sm font-semibold  ">Temperature</p>
        </div>
        <div
          className="px-6 py-4 rounded-2xl w-24"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
        >
          <p className="text-3xl mb-1">💨</p>
          <p className="text-white text-sm font-semibold">Wind Speed</p>
        </div>
        <div
          className="px-6 py-4 rounded-2xl w-24"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
        >
          <p className="text-3xl mb-1">💧</p>
          <p className="text-white text-sm font-semibold">Humidity</p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-10 py-4 rounded-2xl text-white font-bold text-lg"
        style={{ background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.5)" }}
      >
        Get Started 🚀
      </motion.button>
    </motion.div>
  )
}

export default WelcomeScreen