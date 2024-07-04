import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/sampleSlice';

const Index = () => {
  const value = useSelector((state) => state.sample.value);
  const dispatch = useDispatch();

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
      <section className="flex flex-col items-center gap-8 p-8">
        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center">
            <img src="/process1.jpg" alt="Process 1" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Step 1: Sign Up</h3>
            <p className="text-lg">Create your account and start your investment journey.</p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src="/process2.jpg" alt="Process 2" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Step 2: Choose Plan</h3>
            <p className="text-lg">Select the plan that best suits your needs and goals.</p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src="/process3.jpg" alt="Process 3" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Step 3: Invest</h3>
            <p className="text-lg">Start investing and watch your savings grow.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 p-8">
        <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center">
            <img src="/blog1.jpg" alt="Blog 1" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Blog Title 1</h3>
            <p className="text-lg">A brief description of the blog content.</p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src="/blog2.jpg" alt="Blog 2" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Blog Title 2</h3>
            <p className="text-lg">A brief description of the blog content.</p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src="/blog3.jpg" alt="Blog 3" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Blog Title 3</h3>
            <p className="text-lg">A brief description of the blog content.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 p-8">
        <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center">
            <img src="/testimonial1.jpg" alt="Testimonial 1" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Customer Name 1</h3>
            <p className="text-lg">"NPS Investment has been a game-changer for my retirement planning."</p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src="/testimonial2.jpg" alt="Testimonial 2" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Customer Name 2</h3>
            <p className="text-lg">"The expert guidance and flexible plans have made investing easy."</p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src="/testimonial3.jpg" alt="Testimonial 3" className="w-full h-auto rounded" />
            <h3 className="text-xl font-bold mt-4">Customer Name 3</h3>
            <p className="text-lg">"I highly recommend NPS Investment for anyone looking to secure their future."</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white p-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/blogs" className="hover:underline">Blogs</a></li>
              <li><a href="/calculators" className="hover:underline">Calculators</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Company Info</h3>
            <p className="text-lg">NPS Investment is dedicated to helping you secure your future with our National Pension Scheme. Our team of experts is here to provide personalized advice and support.</p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <p className="text-lg">Email: support@npsinvestment.com</p>
            <p className="text-lg">Phone: +1 234 567 890</p>
            <p className="text-lg">Address: 123 Investment St, Finance City, USA</p>
          </div>
        </div>
      </footer>
      <div className="flex flex-col items-center gap-4 p-8">
        <h2 className="text-3xl font-bold mb-4">Redux Counter Example</h2>
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="text-2xl">{value}</span>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;