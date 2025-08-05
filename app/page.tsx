import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect New York City Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Expert guidance through NYC's most desirable neighborhoods
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Start Your Search
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 15 years of experience in New York City real estate, I've helped hundreds of families find their perfect home. My deep knowledge of the city's neighborhoods, market trends, and negotiation strategies ensures you get the best value for your investment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a first-time buyer, looking to upgrade, or investing in NYC real estate, I provide personalized service and expert guidance every step of the way.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$2B+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">Professional Headshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Neighborhoods
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the unique character and opportunities in NYC's most sought-after areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Manhattan Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Manhattan</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">The Heart of NYC</h4>
                <p className="text-gray-600 mb-4">
                  From luxury penthouses to charming brownstones, Manhattan offers the ultimate NYC lifestyle with world-class amenities and iconic views.
                </p>
                <div className="text-sm text-gray-500">
                  <div className="mb-1">• Luxury apartments & penthouses</div>
                  <div className="mb-1">• Historic brownstones</div>
                  <div className="mb-1">• Central Park views</div>
                  <div>• World-class dining & shopping</div>
                </div>
              </div>
            </div>

            {/* Brooklyn Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Brooklyn</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Creative & Vibrant</h4>
                <p className="text-gray-600 mb-4">
                  Experience the perfect blend of artistic culture, trendy neighborhoods, and family-friendly communities with stunning skyline views.
                </p>
                <div className="text-sm text-gray-500">
                  <div className="mb-1">• Trendy lofts & townhouses</div>
                  <div className="mb-1">• Family-friendly communities</div>
                  <div className="mb-1">• Brooklyn Bridge views</div>
                  <div>• Art galleries & craft breweries</div>
                </div>
              </div>
            </div>

            {/* Queens Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Queens</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Diverse & Affordable</h4>
                <p className="text-gray-600 mb-4">
                  Discover incredible value in Queens' diverse neighborhoods, offering excellent schools, parks, and easy access to Manhattan.
                </p>
                <div className="text-sm text-gray-500">
                  <div className="mb-1">• Single-family homes</div>
                  <div className="mb-1">• Co-ops & condos</div>
                  <div className="mb-1">• Excellent schools</div>
                  <div>• Cultural diversity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your real estate goals and start your journey to finding the perfect NYC home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
              View Listings
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
