export default function Studio() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8">Studio Faciliteiten</h1>
          
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4">State-of-the-art Studio</h2>
              <p className="text-gray-300 mb-6">
                Onze professioneel ingerichte studio biedt alle faciliteiten
                voor uw opnames en producties.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Akoestisch behandelde ruimtes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Hoogwaardige apparatuur</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Professionele monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Live Room</h3>
                <p className="text-gray-400">Perfect voor band opnames</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Control Room</h3>
                <p className="text-gray-400">State-of-the-art mixing</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Vocal Booth</h3>
                <p className="text-gray-400">Ideaal voor vocals</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Lounge</h3>
                <p className="text-gray-400">Ontspannen werksfeer</p>
              </div>
            </div>
          </section>
  
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-8">Studio Tarieven</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Basis</h3>
                <p className="text-3xl font-bold mb-4">€75<span className="text-sm">/uur</span></p>
                <ul className="text-gray-400 space-y-2">
                  <li>Live Room</li>
                  <li>Engineer</li>
                  <li>Basic Mix</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <p className="text-3xl font-bold mb-4">€95<span className="text-sm">/uur</span></p>
                <ul className="text-gray-400 space-y-2">
                  <li>Alle Ruimtes</li>
                  <li>Senior Engineer</li>
                  <li>Pro Mix</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Premium</h3>
                <p className="text-3xl font-bold mb-4">€150<span className="text-sm">/uur</span></p>
                <ul className="text-gray-400 space-y-2">
                  <li>Volledige Studio</li>
                  <li>Team van Engineers</li>
                  <li>Master Package</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }