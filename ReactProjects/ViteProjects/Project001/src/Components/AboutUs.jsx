import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-4xl bg-white p-10 rounded-3xl shadow-2xl text-gray-800"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">About Us</h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          At <strong>Our Company</strong>, we blend innovation with excellence to craft high-quality products that cater to your needs. 
          We are passionate about delivering the best shopping experience through premium designs and superior comfort.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide the highest quality products with an emphasis on innovation, customer satisfaction, and sustainability.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h2>
            <p className="text-gray-600">
              We aim to be a globally recognized brand known for exceptional craftsmanship, ethical business practices, and unwavering dedication to quality.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 text-center">Our Core Values</h2>
        <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-700">
          <li><strong>Integrity:</strong> Upholding transparency and honesty in everything we do.</li>
          <li><strong>Innovation:</strong> Constantly pushing the boundaries to deliver the best solutions.</li>
          <li><strong>Customer Focus:</strong> Ensuring top-tier satisfaction by putting our customers first.</li>
          <li><strong>Sustainability:</strong> Committed to eco-friendly practices for a better future.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutUs;