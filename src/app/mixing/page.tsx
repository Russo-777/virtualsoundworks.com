export default function Mixing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Mixing</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Professionele Mixing Services</h2>
          <p className="text-gray-300 mb-6">
            Geef uw muziek de perfecte balans met onze mixing expertise.
            Wij zorgen voor een heldere, krachtige en professionele mix.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Online Mixing</h3>
              <p className="text-gray-400">Stuur uw tracks digitaal en ontvang een professionele mix</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Studio Mixing</h3>
              <p className="text-gray-400">Mix uw project in onze state-of-the-art studio</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-6">Werkwijze</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">1. Analyse</h3>
              <p className="text-gray-400">Bespreking van uw wensen en referenties</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">2. Mix</h3>
              <p className="text-gray-400">Professionele mixing met feedback rondes</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">3. Afronding</h3>
              <p className="text-gray-400">Laatste aanpassingen en oplevering</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}