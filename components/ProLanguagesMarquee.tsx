export default function ProLanguagesMarquee() {
  return (
    <div className="marquee-container overflow-hidden bg-gray-100 p-4 shadow-sm">
      <div className="marquee-content animate-marquee flex min-w-max items-center gap-4 whitespace-nowrap">
        <div className="flex-shrink-0 rounded bg-blue-500 px-4 py-2 text-white">Breaking News</div>
        <div className="flex-shrink-0 rounded bg-green-500 px-4 py-2 text-white">Stock Update</div>
        {/* duplicate items for continuous loop */}
        <div className="flex-shrink-0 rounded bg-blue-500 px-4 py-2 text-white">Breaking News</div>
        <div className="flex-shrink-0 rounded bg-green-500 px-4 py-2 text-white">Stock Update</div>
      </div>
    </div>
  )
}
