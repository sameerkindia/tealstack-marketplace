// import Navbar from "@/components/Navbar";

import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar user />
      <main className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Scale your workflow <br /> <span className="text-blue-600">without the complexity.</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Stop wasting hours on manual processes. Velocity provides the enterprise-grade infrastructure your team needs to move faster, ship better, and stay focused.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">Start Your Free Trial</button>
          <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 font-bold rounded-xl">Book a Demo</button>
        </div>
      </main>
    </>
  );
}