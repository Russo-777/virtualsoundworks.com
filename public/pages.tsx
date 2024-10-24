import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-4">Virtual Sound Works</h1>
      {/* Vervang 'logo.png' met de naam van jouw afbeelding */}
      <Image 
        src="/images/logo.png"
        alt="Logo"
        width={200}
        height={200}
      />
    </main>
  )
}