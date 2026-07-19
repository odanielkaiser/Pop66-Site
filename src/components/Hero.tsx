import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#040404]">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 pt-28 relative">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Sua cidade
            <br />
            <span className="text-primary">na palma da mão</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left - empty on this layout, keeps balance */}
          <div className="lg:col-span-1" />

          {/* Center - Tablet with GPS map and logo overlay */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative" style={{ transform: "rotate(-3deg)" }}>
              {/* Tablet body */}
              <div className="w-72 h-[460px] sm:w-80 sm:h-[500px] bg-[#111] rounded-[2.5rem] border-[3px] border-white/30 shadow-2xl shadow-white/5 p-2 flex flex-col">
                {/* Status bar */}
                <div className="flex justify-between items-center px-4 pt-4 pb-1">
                  <div className="text-white/60 text-xs font-medium">9:41</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-2 rounded-sm border border-white/40" />
                    <div className="w-4 h-2 rounded-sm bg-white/40 relative">
                      <div className="w-3 h-1.5 bg-primary rounded-sm absolute top-0.5 left-0.5" />
                    </div>
                  </div>
                </div>

                {/* Map screen */}
                <div className="flex-1 mx-1 mb-2 rounded-2xl overflow-hidden relative bg-[#1a2a3a]">
                  {/* Map background - simplified city map */}
                  <svg viewBox="0 0 300 380" className="w-full h-full">
                    {/* Base map color */}
                    <rect width="300" height="380" className="fill-[#1a2a3a]" />

                    {/* Roads - main arteries */}
                    <path d="M0 100 Q80 95 150 120 Q220 145 300 140" className="stroke-[#2a4a5a]" strokeWidth="6" fill="none" />
                    <path d="M0 200 Q60 210 120 195 Q200 175 300 190" className="stroke-[#2a4a5a]" strokeWidth="5" fill="none" />
                    <path d="M0 300 Q100 290 180 310 Q240 325 300 315" className="stroke-[#2a4a5a]" strokeWidth="4" fill="none" />

                    {/* Vertical roads */}
                    <path d="M80 0 L80 380" className="stroke-[#2a4a5a]" strokeWidth="4" fill="none" />
                    <path d="M180 0 L180 380" className="stroke-[#2a4a5a]" strokeWidth="4" fill="none" />
                    <path d="M250 0 L250 380" className="stroke-[#2a4a5a]" strokeWidth="3" fill="none" />

                    {/* Secondary roads */}
                    <path d="M0 50 Q75 45 150 60 Q225 75 300 65" className="stroke-[#1d3545]" strokeWidth="3" fill="none" />
                    <path d="M0 150 Q90 155 160 145 Q230 135 300 148" className="stroke-[#1d3545]" strokeWidth="2.5" fill="none" />
                    <path d="M0 250 Q80 255 150 245 Q220 235 300 250" className="stroke-[#1d3545]" strokeWidth="2.5" fill="none" />

                    {/* Tertiary roads */}
                    <path d="M30 0 L30 380" className="stroke-[#162a38]" strokeWidth="2" fill="none" />
                    <path d="M130 0 L130 380" className="stroke-[#162a38]" strokeWidth="2" fill="none" />
                    <path d="M210 0 L210 380" className="stroke-[#162a38]" strokeWidth="2" fill="none" />

                    {/* Buildings - blocks */}
                    <rect x="20" y="15" width="25" height="20" rx="1" className="fill-[#3a4a5a] opacity-60" />
                    <rect x="90" y="15" width="30" height="18" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="190" y="20" width="22" height="16" rx="1" className="fill-[#3a4a5a] opacity-60" />
                    <rect x="260" y="15" width="20" height="22" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="20" y="70" width="28" height="15" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="260" y="70" width="18" height="20" rx="1" className="fill-[#3a4a5a] opacity-60" />
                    <rect x="140" y="130" width="22" height="18" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="15" y="165" width="30" height="22" rx="1" className="fill-[#3a4a5a] opacity-60" />
                    <rect x="260" y="160" width="20" height="18" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="90" y="215" width="25" height="20" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="200" y="210" width="30" height="15" rx="1" className="fill-[#3a4a5a] opacity-60" />
                    <rect x="30" y="270" width="22" height="18" rx="1" className="fill-[#3a4a5a] opacity-50" />
                    <rect x="260" y="280" width="18" height="22" rx="1" className="fill-[#3a4a5a] opacity-60" />
                    <rect x="140" y="330" width="28" height="20" rx="1" className="fill-[#3a4a5a] opacity-50" />

                    {/* Green areas / parks */}
                    <ellipse cx="160" cy="280" rx="28" ry="18" className="fill-[#1a3a2a] opacity-60" />
                    <ellipse cx="50" cy="340" rx="20" ry="15" className="fill-[#1a3a2a] opacity-50" />
                    <rect x="82" y="50" width="15" height="10" rx="2" className="fill-[#1a3a2a] opacity-40" />

                    {/* Water / river */}
                    <path d="M0 360 Q80 340 150 350 Q220 360 300 345 L300 380 L0 380 Z" className="fill-[#0a2a4a] opacity-50" />

                    {/* Route line - navigation path */}
                    <path
                      d="M230 330 Q210 280 180 250 Q150 220 140 180 Q130 140 100 110 Q70 80 60 50"
                      className="stroke-primary"
                      strokeWidth="3.5"
                      fill="none"
                      strokeDasharray="8 4"
                    />

                    {/* Start marker */}
                    <circle cx="230" cy="330" r="7" className="fill-primary" />
                    <circle cx="230" cy="330" r="4" className="fill-white" />

                    {/* End marker / destination */}
                    <circle cx="60" cy="50" r="7" className="fill-[#ff3333]" />
                    <circle cx="60" cy="50" r="3" className="fill-white" />

                    {/* Car icon on route */}
                    <g transform="translate(140, 180)">
                      <rect x="-8" y="-5" width="16" height="10" rx="2" className="fill-primary" />
                      <rect x="-4" y="-3" width="8" height="6" rx="1" className="fill-[#040404]" />
                    </g>

                    {/* Map labels */}
                    <text x="148" y="282" textAnchor="middle" className="fill-white/30 text-[8px]" fontFamily="sans-serif">Parque Central</text>
                    <text x="40" y="110" textAnchor="middle" className="fill-white/20 text-[7px]" fontFamily="sans-serif">Av. Paulista</text>
                    <text x="200" y="155" textAnchor="middle" className="fill-white/20 text-[7px]" fontFamily="sans-serif">Rua Augusta</text>
                  </svg>

                  {/* Bottom bar with ETA */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-transparent p-3 pt-8">
                    <div className="bg-[#0d0d0d] rounded-xl p-3 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-white text-xs font-semibold">Chegada em 8 min</div>
                        <div className="text-gray-500 text-[10px]">Rua Augusta, 500 → Av. Paulista, 1000</div>
                      </div>
                      <div className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-lg">
                        R$ 24,90
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pop66 logo centered on the tablet screen */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30 border-2 border-white/20">
                  <Image
                    src="/logo.jpeg"
                    alt="Pop66"
                    width={80}
                    height={80}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="lg:col-span-5 lg:col-start-8 text-center lg:text-left space-y-6">
            <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full border border-primary/20">
              #Pop66NaMão
            </div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-md">
              Do mercado ao escritório, a Pop66 leva você com rapidez e segurança. Seu jeito de ir.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="https://apps.apple.com/br/app/pop66/id1628474136"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-[#040404] px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 font-bold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div>
                  <div className="text-xs text-[#040404]/60">Download na</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=br.com.executivoaracruz.passenger.drivermachine&hl=pt_BR&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white/10 hover:border-primary text-gray-300 hover:text-primary px-6 py-3.5 rounded-xl transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Disponível no</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-2 text-gray-400 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center text-xs font-bold text-gray-300"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span><strong className="text-white">1K+</strong> downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
