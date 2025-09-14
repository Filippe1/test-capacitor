const steps = [
    {
      name: 'Connect',
      description: 'Securely link your Google Business Profile in just a few clicks. We use official APIs for safe and read-only access.',
      icon: '🔒', // In a real app, use an SVG icon
    },
    {
      name: 'Analyze',
      description: 'Our AI engine gets to work, processing every review to measure sentiment, extract keywords, and track rating trends over time.',
      icon: '📊',
    },
    {
      name: 'Act',
      description: 'Get clear, visual reports and actionable recommendations to improve your service, respond to feedback, and boost your rating.',
      icon: '🚀',
    },
  ];
  
  export default function HowItWorks() {
    return (
      <div id="how-it-works" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">How it works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Actionable insights in three simple steps
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stop guessing what your customers want. Our analyzer does the heavy lifting, so you can focus on what matters most: growing your business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {steps.map((step) => (
                <div key={step.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-2xl">
                      {step.icon}
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }