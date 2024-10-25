export default function About() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8">Over Sound Rank</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Onze Missie</h2>
              <p className="text-gray-300 mb-6">
                Sound Rank is toegewijd aan het leveren van hoogwaardige audio-oplossingen 
                en het ondersteunen van creatieve professionals in hun muzikale reis.
              </p>
              
              <h2 className="text-3xl font-semibold mb-4">Onze Visie</h2>
              <p className="text-gray-300 mb-6">
                We streven ernaar de toonaangevende partner te zijn in de audio-industrie, 
                door innovatie en kwaliteit samen te brengen.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-semibold mb-6">Ons Team</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium">John Doe</h3>
                  <p className="text-gray-400">Hoofdproducer</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Jane Smith</h3>
                  <p className="text-gray-400">Sound Designer</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Mike Johnson</h3>
                  <p className="text-gray-400">Studio Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }