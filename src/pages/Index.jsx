import React from "react";

const Index = () => {
  return (
    <div>
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-5xl font-bold mb-4">Welcome to NPS Investment</h1>
          <p className="text-2xl">Secure your future with our National Pension Scheme</p>
        </div>
      </section>
      <section className="flex flex-col gap-8 p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/segment1.jpg" alt="Segment 1" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Why Choose NPS?</h2>
            <p className="text-lg">NPS offers a range of benefits including tax savings, flexible investment options, and a secure retirement plan.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img src="/segment2.jpg" alt="Segment 2" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">How to Get Started?</h2>
            <p className="text-lg">Sign up today and start investing in your future. Our easy-to-use platform makes it simple to manage your investments.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/segment3.jpg" alt="Segment 3" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Expert Guidance</h2>
            <p className="text-lg">Our team of experts is here to help you every step of the way. Get personalized advice and support to make the most of your investment.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img src="/segment4.jpg" alt="Segment 4" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Flexible Plans</h2>
            <p className="text-lg">Choose from a variety of plans that suit your needs and goals. Whether you're just starting out or looking to maximize your returns, we have a plan for you.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/segment5.jpg" alt="Segment 5" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
            <p className="text-lg">Take the first step towards a secure future. Join NPS Investment today and start building your retirement savings.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;