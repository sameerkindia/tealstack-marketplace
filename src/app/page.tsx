import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#00FFC2] selection:text-black flex flex-col items-center font-sans">
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 pt-32 pb-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#00FFC2]/30 bg-[#00FFC2]/10 text-[#00FFC2] text-sm font-semibold tracking-wide uppercase">
          Marketplace Infrastructure v2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-100">
          Monetize Your Mind, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC2] to-[#06b6d4] drop-shadow-[0_0_15px_rgba(0,255,194,0.3)]">
            Globally & Securely.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          The ultimate platform for digital creators. We handle the complex global tax compliance, seamless cross-border payouts, and robust anti-piracy file delivery. You just keep building.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dashboard">
            <button className="w-full sm:w-auto bg-[#00FFC2] hover:bg-[#00e6af] text-[#111111] font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(0,255,194,0.4)] transition-all text-lg">
              Launch Your Store
            </button>
          </Link>
          <Link href="#features">
            <button className="w-full sm:w-auto bg-transparent hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold py-4 px-8 rounded-lg transition-all text-lg">
              Explore Architecture
            </button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="w-full max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-slate-800 hover:border-[#00FFC2]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,194,0.1)]">
            <div className="w-14 h-14 bg- rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-[#00FFC2]/50 transition-colors">
              <svg className="w-6 h-6 text-[#00FFC2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">Merchant of Record</h3>
            <p className="text-slate-400 leading-relaxed">
              Total abstraction of global VAT, GST, and international sales tax. We assume the legal liability so you can sell anywhere instantly without the paperwork.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-slate-800 hover:border-[#d946ef]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
            <div className="w-14 h-14 bg- rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-[#d946ef]/50 transition-colors">
              <svg className="w-6 h-6 text-[#d946ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">Military-Grade DRM</h3>
            <p className="text-slate-400 leading-relaxed">
              Dynamic PDF stamping, secure backend streaming, and automated software license key generation to protect your intellectual property from piracy.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-slate-800 hover:border-[#06b6d4]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <div className="w-14 h-14 bg- rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-[#06b6d4]/50 transition-colors">
              <svg className="w-6 h-6 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">Frictionless Payouts</h3>
            <p className="text-slate-400 leading-relaxed">
              Keep more of your profits with low flat fees. Experience rapid settlements routed directly to your local bank account via secure API integrations.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}