import Navbar from "@/components/Navbar";

export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '$0', desc: 'For individuals testing the waters.', features: ['1 Project', 'Basic Support', 'Community Access'] },
    { name: 'Pro', price: '$49', desc: 'For teams that need more speed.', features: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics', 'API Access'], highlight: true },
    { name: 'Enterprise', price: 'Custom', desc: 'For organizations at scale.', features: ['SSO & Security', 'Dedicated Manager', 'Custom Integrations'] }
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-500">Pick the plan that grows with you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-3xl border ${plan.highlight ? 'border-blue-500 shadow-2xl scale-105' : 'border-gray-200 dark:border-gray-800'}`}>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-5xl font-black my-6">{plan.price}<span className="text-sm text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{plan.desc}</p>
              <ul className="mb-8 space-y-3">
                {plan.features.map(f => <li key={f} className="text-sm">✓ {f}</li>)}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}