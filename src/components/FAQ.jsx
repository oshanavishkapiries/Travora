import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How is Kipso different from a normal inbox?",
    answer:
      "Regular inboxes show you messages ordered by your latest notifications, on a singular platform. Kipso combines multiple inboxes, learns what matters to you and automatically ranks messages according to their priority.",
  },
  {
    question: "How do Auto-Drafted Replies work?",
    answer:
      "Kipso automatically drafts replies that sound like you. It learns your tone, language, and context across platforms, then writes responses based on your past conversations and priorities. When a new message arrives, you'll see a ready-to-send reply that you can edit, approve, or ignore. It's the fastest way to stay personal without wasting time typing.",
  },
  {
    question: "Can you still message outside of Kipso on connected accounts?",
    answer:
      "Yes. Any messages sent on Kipso are received natively by your contacts on the platforms you're communicating with them on. You can send a message on Kipso to a contact on WhatsApp, and continue that conversation on WhatsApp, and vice versa. Your message chain will be linked so the messaging experience of all your recipients remains unchanged.",
  },
  {
    question: "How does Kipso learn my goals and priorities?",
    answer:
      "When you connect your accounts, Kipso analyses message patterns and relationships to understand who and what matters most. You can adjust priorities anytime. Kipso keeps learning from your activity so its ranking stays accurate.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes. Your data never leaves your account without encryption. Kipso uses secure, enterprise-grade protocols and does not sell or share your information. AI models only process context to serve your messages, not to train external systems.",
  },
  {
    question: "What happens when I join the waitlist?",
    answer:
      "You'll get early access when your invite is ready. We're onboarding in stages to maintain performance and collect feedback from power users, including founders, operators, and teams who depend on communication speed.",
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
            Everything you need to know about using Kipso, from setup to
            security. Still curious? Drop us a message and we'll get right back
            to you.
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
