// app/studio/page.tsx
export default function Studio() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8">Studio</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Onze Studio Faciliteiten</h2>
            <p className="text-gray-300 mb-6">
              State-of-the-art opnamestudio met de beste apparatuur en akoestiek.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Opnameruimte</h3>
                <p className="text-gray-400">Professioneel behandelde akoestiek</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Control Room</h3>
                <p className="text-gray-400">High-end monitoring en apparatuur</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-6">Tarieven & Boekingen</h2>
            <p className="text-gray-300">
              Interesse in het boeken van onze studio? Neem contact op voor beschikbaarheid en tarieven.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Studio Boeken
            </button>
          </section>
        </div>
      </main>
    )
  }