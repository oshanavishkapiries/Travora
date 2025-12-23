import { useState } from "react";
import { motion } from "framer-motion";

const FeatureImage = ({ src, alt, rotate = "right" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={`relative rounded-2xl overflow-hidden max-w-xs shadow-xl transition-all duration-500 hover:scale-105 ${
          rotate === "right"
            ? "rotate-3 hover:rotate-0"
            : "-rotate-3 hover:rotate-0"
        }`}
      >
        {/* Skeleton loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

const FeatureImageGray = ({ src, alt, rotate = "left" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={`relative rounded-2xl overflow-hidden max-w-xs shadow-xl transition-all duration-500 hover:scale-105 ${
          rotate === "right"
            ? "rotate-3 hover:rotate-0"
            : "-rotate-3 hover:rotate-0"
        }`}
      >
        {/* Skeleton loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

const FeatureSections = () => {
  return (
    <div id="features" className="bg-white">
      {/* Feature 1 - News Feed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                News Feed
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Travel updates that actually matter
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                See tips, questions, meetups, and experiences shared by
                travelers in the same destination as you.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your feed stays relevant, focused, and free from noise — built
                around where you are and where you're going next.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <FeatureImage
                src="/features/Travel updates that actually matter.PNG"
                alt="News Feed Feature"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2 - Communities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <FeatureImageGray
                src="/features/Find your people, wherever you travel.PNG"
                alt="Communities Feature"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Communities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Find your people, wherever you travel
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join destination-based and interest-based communities to connect
                with travelers who share your route, style, and mindset.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ask questions, exchange local insights, and build meaningful
                connections before and during your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3 - Trip Planning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Trip Planning
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Plan your journey, together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Create simple, flexible trip plans and share them with the
                community.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get recommendations, refine your itinerary, and explore trips
                created by other travelers for inspiration.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureImage
                src="/features/Plan your journey, together.PNG"
                alt="Trip Planning Feature"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 4 - Messaging */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <FeatureImageGray
                src="/features/Connect before you meet.PNG"
                alt="Messaging Feature"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Messaging
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Connect before you meet
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chat with travelers you connect with to plan meetups, exchange
                tips, or just get to know each other.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Conversations on Kipso are designed to feel safe, intentional,
                and travel-focused.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 5 - User Passport */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                User Passport
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                A profile built on trust
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your Kipso Passport highlights who you are as a traveler — your
                home country, languages, travel style, and journey history.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Verified profiles and thoughtful design help you connect with
                confidence, wherever you go.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureImage
                src="/features/A profile built on trust.PNG"
                alt="User Passport Feature"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSections;
