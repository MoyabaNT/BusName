import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import Hero from '../assets/Hero.png';
import Footer from '../Components/Footer';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise-1',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$59',
    description: 'Ideal for growing businesses with advanced needs.',
    features: [
      '50 products',
      'Up to 50,000 subscribers',
      'Advanced analytics',
      '12-hour support response time',
      'Basic integrations',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Home = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % tiers.length);
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col'>
      <NavBar />
      <div className='flex items-center justify-center mt-4 px-4'>
        <div className='text-center bg-gradient-to-tl from-amber-100 to-zinc-900 w-full max-w-4xl rounded-lg'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
            <h1 className='hidden lg:block text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:mt-0'>
              Need a website? Visit our products and choose your best
            </h1>
                        <img
              src={Hero}
              className='rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md'
              alt='Hero image'
            />

          </div>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='inline-block p-4 text-3xl text-zinc-900 border-b-2 border-slate-600 font-bold'>
          Products
        </h1>
      </div>
      <div className='relative isolate  px-6 py-16 sm:py-24 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <div className='grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3'>
            {tiers.map((tier, index) => (
              <div
                key={tier.id}
                onClick={() => handleCardClick(index)}
                className={classNames(
                  index === activeCardIndex ? 'relative z-10 scale-105' : 'scale-100',
                  tier.featured && index === activeCardIndex ? 'bg-gradient-to-t from-amber-100 to-zinc-900 shadow-2xl' : 'bg-white/60',
                  'rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8 cursor-pointer transition-transform duration-300',
                  index === activeCardIndex ? 'lg:order-none' : index < activeCardIndex ? 'lg:order-first' : 'lg:order-last',
                  index === activeCardIndex ? 'block' : 'hidden lg:block'
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? 'text-pink-400' : 'text-pink-600',
                    'text-base font-semibold'
                  )}
                >
                  {tier.name}
                </h3>
                <p className='mt-4 flex items-baseline gap-x-2'>
                  <span
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-900',
                      'text-4xl font-semibold tracking-tight'
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}
                  >
                    /month
                  </span>
                </p>
                <p
                  className={classNames(
                    tier.featured ? 'text-gray-200' : 'text-gray-600',
                    'mt-6 text-sm'
                  )}
                >
                  {tier.description}
                </p>
                <ul
                  role='list'
                  className={classNames(
                    tier.featured ? 'text-gray-200' : 'text-gray-600',
                    'mt-6 space-y-3 text-sm'
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        aria-hidden='true'
                        className={classNames(
                          tier.featured ? 'text-pink-400' : 'text-indigo-600',
                          'h-5 w-5 flex-none'
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'bg-slate-900 text-white shadow-xs hover:bg-slate-400 focus-visible:outline-indigo-500'
                      : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  Get started today
                </a>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-6 lg:hidden'>
            <button
              onClick={handleNextCard}
              className='bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              aria-label='Next pricing tier'
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;