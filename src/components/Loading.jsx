function Loading() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Loading