import React from 'react';

const OurPricing = () => {
  const plans = [
    { name: 'Standard', price: '£200', features: ['Single page portfolio site', 'Mobile Responsive', 'SEO Optimisation'] },
    { name: 'Pro', price: '£400', features: ['Everything in standard +', 'Single or multi page business site', 'Google business integration'] },
    { name: 'Ecommerce', price: '£800', features: ['Shopify store design and build', 'Metafield and app integration', 'Google merchant integration'] },
  ];

  const randomPosition = () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#dcffe1] overflow-hidden border-black border-b-4">
      <div id="bubbles" className="absolute inset-0">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              ...randomPosition(),
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-5xl md:text-6xl font-heading text-black text-center">Our Pricing</h2>
      <p className="text-center text-lg font-body mb-4">These are not set in stone, just a general idea.</p>
      <div className="space-y-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white border-2 border-black shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-semibold">{plan.price}</p>
                </div>
                <ul className="mt-4 md:mt-0 space-y-2 md:text-right">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center md:justify-end text-lg">
                      <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .bubble {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurPricing;