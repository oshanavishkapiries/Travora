import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is this app about?",
    answer:
      "This app is a social platform designed for travelers to discover destinations, share real experiences, and connect with people from around the world. Whether you're planning your next trip or looking back on past adventures, it helps you explore, get inspired, and tell your story through travel.",
  },
  {
    question: "Who is this app for?",
    answer:
      "The app is for anyone who loves travel, regardless of how often or how far they go. From solo travelers and digital nomads to weekend explorers and travel creators, it's built for people who enjoy discovering new places and sharing meaningful experiences.",
  },
  {
    question: "What kind of content can I share?",
    answer:
      "You can share photos, videos, travel stories, tips, reviews, and recommendations from your journeys. Location-based posts and itineraries help others discover places through your eyes. We encourage authentic, helpful, and respectful content.",
  },
  {
    question: "Can I discover new places on the app?",
    answer:
      "Yes. You can explore destinations through posts from other travelers, trending locations, and personalized recommendations. Whether you're searching for trip inspiration or uncovering hidden gems, the app makes discovering new places easy and engaging.",
  },
  {
    question: "How do I connect with other travelers?",
    answer:
      "You can follow other users, like and comment on posts, and send direct messages. These features make it easy to start conversations, exchange tips, and connect with travelers who share similar interests or destinations.",
  },
  {
    question: "Is my data and location safe?",
    answer:
      "Your privacy is important to us. You have full control over what you share, including whether or not to tag locations. You can choose to keep your account private, and we do not sell personal data. All privacy settings can be managed directly from your profile.",
  },
  {
    question: "Can I use the app offline?",
    answer:
      "Some features, such as viewing saved posts or itineraries, may be available offline. However, browsing new content, interacting with others, and uploading posts require an internet connection.",
  },
  {
    question: "What content is not allowed?",
    answer:
      "Content that includes hate speech, harassment, spam, misleading information, explicit material, or copyright infringement is not allowed. Posts or accounts that violate our community guidelines may be removed or suspended.",
  },
  {
    question: "How can I grow my profile?",
    answer:
      "Growing your profile comes naturally by sharing quality content, posting consistently, engaging with other travelers, and adding relevant location tags. Authentic stories and useful tips tend to resonate most with the community.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "The app is currently available on mobile devices for both iOS and Android. At this time, the app is not supported on web or tablets, but web support is planned for the future.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "The app is completely free to download and use. All features, including social interactions and discovery tools, are available at no cost, so you can enjoy the full experience without any subscriptions or hidden fees.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team by emailing info@kipso.life. We're always happy to help.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-white text-lg font-medium pr-8">
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
            isOpen ? "bg-purple-600" : "bg-gray-800"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-white" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="py-32 bg-[#0a0a0a] bg-grid-dark">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our travel community, from sharing
            content to staying connected. Still curious? Reach out and we'll be
            happy to help.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
