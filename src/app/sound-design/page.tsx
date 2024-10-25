export default function SoundDesign() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8">Sound Design</h1>
          
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Professionele Audio Oplossingen</h2>
              <p className="text-gray-300 mb-6">
                Wij creëren unieke en meeslepende geluidswerelden voor uw projecten.
                Van film en games tot commerciële producties.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Creatieve geluidseffecten</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Karakter stemmen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atmosphere design</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Onze Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Film & TV</h4>
                  <p className="text-gray-400">Professionele geluidseffecten en atmospheres</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Game Audio</h4>
                  <p className="text-gray-400">Interactieve geluidsontwerpen</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Commercials</h4>
                  <p className="text-gray-400">Impactvolle audio voor advertenties</p>
                </div>
              </div>
            </div>
          </section>
  
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-8">Ons Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-500 mb-2">01</div>
                <h3 className="font-medium mb-2">Concept</h3>
                <p className="text-gray-400">Bespreken van uw wensen en ideeën</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-500 mb-2">02</div>
                <h3 className="font-medium mb-2">Design</h3>
                <p className="text-gray-400">Creatie van unieke geluiden</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-500 mb-2">03</div>
                <h3 className="font-medium mb-2">Review</h3>
                <p className="text-gray-400">Feedback en aanpassingen</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-500 mb-2">04</div>
                <h3 className="font-medium mb-2">Delivery</h3>
                <p className="text-gray-400">Finale oplevering</p>
              </div>
            </div>
          </section>
  
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">Interesse?</h2>
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                Neem contact op
              </button>
            </div>
          </section>
        </div>
      </main>
    )
  }