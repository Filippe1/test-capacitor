const tiers = [
    {
      name: 'Starter',
      id: 'tier-starter',
      href: '#',
      priceMonthly: '$29',
      description: 'Perfect for small businesses just starting to manage their online reputation.',
      features: [
        '1 Business Profile',
        'Basic sentiment analysis',
        'Monthly report exports',
        'Email support',
      ],
      mostPopular: false,
    },
    {
      name: 'Professional',
      id: 'tier-professional',
      href: '#',
      priceMonthly: '$79',
      description: 'For growing businesses that need deeper insights and more frequent reporting.',
      features: [
        'Up to 3 Business Profiles',
        'Advanced sentiment & keyword analysis',
        'Weekly reports & trend tracking',
        'Priority email & chat support',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      priceMonthly: 'Custom',
      description: 'For agencies and large businesses with complex needs and multiple locations.',
      features: [
        'Unlimited Business Profiles',
        'Custom analysis & API access',
        'Real-time dashboards & alerts',
        'Dedicated account manager',
      ],
      mostPopular: false,
    },
  ];
  
  export default function Pricing() {
    return (
      <div id="pricing" className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose the plan that best fits your business needs. Start for free, no credit card required.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`
                  flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 xl:p-10
                  ${tier.mostPopular ? 'ring-2 ring-indigo-600' : ''}
                `}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">{tier.priceMonthly !== 'Custom' ? '/month' : ''}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <span className="text-indigo-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`
                    mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                    ${tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                  }
                  `}
                >
                  {tier.priceMonthly === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }