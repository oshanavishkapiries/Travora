import { motion } from "framer-motion";

const FeatureSections = () => {
  return (
    <div className="bg-white">
      {/* Feature 1 - Auto-drafted replies */}
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
                Draft Response
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Respond faster with auto-drafted replies.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                By learning how you communicate with different people across
                different platforms, Kipso drafts replies matching your voice
                and tone.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Each reply is crafted with the context of your recent
                discussions and meetings.
              </p>
            </motion.div>

            {/* Right - Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Email Header */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          SC
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          Sarah Chen
                        </p>
                        <p className="text-xs text-gray-500">
                          Re: Q4 Marketing Strategy
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Content */}
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Hi Sarah,
                        <br />
                        <br />
                        Thanks for sending over the deck. I've reviewed the
                        proposals and think we should move forward with Option
                        B. The timeline looks realistic and the budget aligns
                        with our Q4 goals.
                        <br />
                        <br />
                        Let me know when you're free to discuss the next steps.
                        <br />
                        <br />
                        Best,
                        <br />
                        Michael
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1.5 rounded-full font-medium">
                        ✨ AI Drafted
                      </span>
                      <span className="text-gray-400 text-xs">
                        Matches your writing style
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2 - Universal Search */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span className="text-gray-500 text-sm">
                      contract we discussed last week...
                    </span>
                  </div>

                  {/* Search Results */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 text-lg">📧</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Gmail: Contract_v2.pdf
                        </p>
                        <p className="text-xs text-gray-500">
                          From Alex Thompson • Dec 10
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 text-lg">💬</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          WhatsApp: "Here's the updated contract"
                        </p>
                        <p className="text-xs text-gray-500">
                          From David Kim • Dec 11
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 text-lg">💼</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Slack: Contract discussion thread
                        </p>
                        <p className="text-xs text-gray-500">
                          #legal-team • Dec 12
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                Universal Search
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Search across all your conversations.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Find anything you've ever sent or received without knowing the
                exact words that were used.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Instead of crawling through multiple emails and messaging
                platforms, just ask Kipso's universal search bar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3 - Contextual Connections */}
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
                Contextual Assistant
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                See conversations that connect themselves.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Kipso connects what belongs together. Contract sent on WhatsApp?
                Kipso will surface the email requesting it.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Meeting details scattered across Slack and email? Now they're in
                one place, before you even ask for it.
              </p>
            </motion.div>

            {/* Right - Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-4">
                  <div className="flex items-center gap-2 text-purple-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      Related Context
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                      <span className="text-lg">📧</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Email: Meeting Request
                        </p>
                        <p className="text-xs text-gray-500">
                          Dec 10 - "Can we schedule a call to discuss?"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-xl border-l-4 border-pink-500">
                      <span className="text-lg">💬</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Slack: #product-team
                        </p>
                        <p className="text-xs text-gray-500">
                          Dec 11 - "Sending the specs over now"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                      <span className="text-lg">📱</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          WhatsApp: Alex
                        </p>
                        <p className="text-xs text-gray-500">
                          Dec 12 - "Got it, reviewing today!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSections;
