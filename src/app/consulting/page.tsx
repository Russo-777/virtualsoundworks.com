export default function Consulting() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Consulting</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Audio Consultancy</h2>
          <p className="text-gray-300 mb-6">
            Professioneel advies voor uw studio, producties en audio projecten.
            Onze experts helpen u de beste keuzes te maken.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Studio Design</h3>
              <p className="text-gray-400">Advies over studio bouw en inrichting</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Workflow Optimalisatie</h3>
              <p className="text-gray-400">Verbeter uw productieproces</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Training</h3>
              <p className="text-gray-400">Persoonlijke coaching en workshops</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Apparatuur Advies</h3>
              <p className="text-gray-400">Hulp bij keuze en aanschaf</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project Review</h3>
              <p className="text-gray-400">Analyse en feedback op uw projecten</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}