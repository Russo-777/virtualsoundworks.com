export default function Mixing() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8">Mixing</h1>
          
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Professionele Mix</h2>
              <p className="text-gray-300 mb-6">
                Onze mixing engineers zorgen voor de perfecte balans in uw muziek,
                met oog voor detail en gevoel voor uw artistieke visie.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Gedetailleerde EQ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Dynamische processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Ruimtelijke effecten</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Onze Aanpak</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Analyse</h4>
                  <p className="text-gray-400">Grondige analyse van uw tracks</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Processing</h4>
                  <p className="text-gray-400">Professionele mixing technieken</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Feedback</h4>
                  <p className="text-gray-400">Revisies tot perfectie</p>
                </div>
              </div>
            </div>
          </section>
  
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-8">Mix Pakketten</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Basic Mix</h3>
                <p className="text-3xl font-bold mb-4">€50<span className="text-sm">/track</span></p>
                <ul className="text-gray-400 space-y-2">
                  <li>Basis mixing</li>
                  <li>1 revisie</li>
                  <li>MP3 delivery</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-semibold mb-4">Pro Mix</h3>
                <p className="text-3xl font-bold mb-4">€80<span className="text-sm">/track</span></p>
                <ul className="text-gray-400 space-y-2">
                  <li>Geavanceerde mixing</li>
                  <li>3 revisies</li>
                  <li>WAV + MP3</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Premium Mix</h3>
                <p className="text-3xl font-bold mb-4">€120<span className="text-sm">/track</span></p>
                <ul className="text-gray-400 space-y-2">
                  <li>Premium mixing</li>
                  <li>Onbeperkt revisies</li>
                  <li>Alle bestandsformaten</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }