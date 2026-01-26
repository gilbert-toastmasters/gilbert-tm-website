export default function MeetingInfo() {
  return (
    <section id="meetings" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#772432' }}>
            Join Us Every Thursday
          </h2>
          <p className="text-lg text-gray-600">
            All are welcome! Come as a guest and see what Toastmasters is all about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#c4a44a' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">When</h3>
                <p className="text-gray-700 text-lg">Every Thursday</p>
                <p className="text-2xl font-bold" style={{ color: '#772432' }}>7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#c4a44a' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Where</h3>
                <p className="text-gray-700 text-lg">Greenfield Jr High</p>
                <p className="text-gray-600">Library</p>
              </div>
            </div>
          </div>
        </div>

        <div id="join" className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Questions? Contact us:</p>
          <a
            href="tel:+16023451008"
            className="text-xl font-semibold hover:underline"
            style={{ color: '#772432' }}
          >
            (602) 345-1008
          </a>
        </div>
      </div>
    </section>
  )
}
