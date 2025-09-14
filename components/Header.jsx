export default function Header() {
    return (
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-gray-900">ReviewInsight</span>
              {/* <img className="h-8 w-auto" src="https://placehold.co/150x30" alt="ReviewInsight" /> */}
            </a>
          </div>
  
          {/* Navigation (optional for future) */}
          {/* <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">How It Works</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
          </div> */}
  
          {/* CTA Button */}
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#pricing"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
    );
  }