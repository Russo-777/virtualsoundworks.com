export default function Mastering() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Mastering</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Professionele Mastering</h2>
          <p className="text-gray-300 mb-6">
            De finishing touch voor uw muziek. Onze mastering geeft uw tracks de
            kracht, helderheid en balans die ze verdienen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Stereo Mastering</h3>
              <p className="text-gray-400">Voor singles en albums</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Stem Mastering</h3>
              <p className="text-gray-400">Optimalisatie voor streaming platforms</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-6">Onze Apparatuur</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-400">High-end speakers en akoestiek</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-gray-400">Top kwaliteit analog en digital gear</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Conversion</h3>
              <p className="text-gray-400">Beste AD/DA conversie</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}