import { motion } from "framer-motion"

function SearchBar({ city, setCity, onSearch }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-2 w-full max-w-sm px-4"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="City ka naam likho..."
        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/60 outline-none text-sm"
        style={{
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.4)"
        }}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSearch}
        className="w-full py-3 rounded-xl text-white font-semibold text-sm"
        style={{
          background: "rgba(255,255,255,0.25)",
          border: "1px solid rgba(255,255,255,0.5)"
        }}
      >
        Search
      </motion.button>
    </motion.div>
  )
}

export default SearchBar