export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Sound Rank</h1>
        
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Welkom bij Sound Rank</h2>
            <p className="text-gray-300 mb-4">
              Ontdek de wereld van professionele audio productie en sound design.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Ontdek meer
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}