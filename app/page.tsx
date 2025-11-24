import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-start overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Wedding Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-wedding-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        
        {/* Header Section */}
         <header className="text-center mb-12 md:mb-20 animate-fade-in-down">
          <div className="inline-block border-b-2 border-wedding-400 pb-2 mb-6">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-wedding-600 font-semibold">
              Save The Date
            </p>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-wedding-800 mb-6 leading-tight">
            Absa & Sofi
          </h1>
          <p className="font-serif text-2xl md:text-4xl text-wedding-600 mb-4">
            28 . 11 . 26
          </p>
          <p className="font-serif text-lg md:text-xl text-wedding-500 italic">
            Falta poco para nuestro "Sí, acepto"
          </p>
        </header>

        {/* Countdown Section */}
        <section className="w-full mb-16 md:mb-24">
          <CountdownTimer />
        </section>

        {/* Divider */}
        <div className="w-24 h-1 bg-wedding-200 rounded-full mb-16"></div>

        {/* Footer */}
        <footer className="mt-24 text-wedding-400 text-sm text-center font-medium">
          <p>Hecho con amor &bull; 28 de Noviembre de 2026</p>
        </footer>
      </div>
    </div>
  );

};
