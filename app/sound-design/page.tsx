export default function SoundDesign() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8">Sound Design</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Onze Sound Design Services</h2>
            <p className="text-gray-300 mb-6">
              Wij creëren unieke en meeslepende geluidswerelden voor uw projecten.
              Van film en games tot commerciële producties.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Film & TV</h3>
                <p className="text-gray-400">Professionele geluidseffecten en atmospheres</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Game Audio</h3>
                <p className="text-gray-400">Interactieve geluidsontwerpen</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-6">Contact</h2>
            <p className="text-gray-300">
              Interesse in onze sound design services? Neem contact met ons op voor een vrijblijvend gesprek.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Contact opnemen
            </button>
          </section>
        </div>
      </main>
    )
  }