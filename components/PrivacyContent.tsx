"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl mt-8 font-black text-[#131118] dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#6b608a] dark:text-[#a097bd] text-lg font-normal leading-normal mb-6">
          Transparent information on how we handle your data and protect your
          privacy in our ecosystem.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            Last Updated: June 2026
          </span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            className="text-primary font-medium hover:underline flex items-center gap-1"
            href="mailto:Appnayatecnologoes@gmail.com"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Appnayatecnologoes@gmail.com
          </a>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/10"
      >
        <p className="text-[#6b608a] dark:text-[#a097bd] text-base leading-relaxed">
          We respect your privacy and committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard information when you use our application and related services.
        </p>
        <p className="mt-3 text-primary dark:text-primary font-semibold text-base leading-relaxed">
          By using Auto Paste App, you agree to the practices described in this Privacy Policy.
        </p>
      </motion.div>

      <div className="space-y-12">
        {[
          {
            id: "introduction",
            title: "1. Introduction",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Auto Paste App is a productivity application that allows users to save, organize, and quickly access content such as text, notes, links, images, phone numbers, and email addresses across supported devices.
              </p>
            ),
          },
          {
            id: "information-we-collect",
            title: "2. Information We Collect",
            content: (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">account_circle</span>
                    Account Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    When you create an account or sign in, we may collect:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Full Name</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Email Address</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Authentication identifiers provided by our authentication services</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    User Content
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    Depending on how you use the app, we may store:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Text snippets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Notes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>URLs and links</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Phone numbers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Email addresses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Images</span>
                    </li>
                    <li className="flex-1 sm:col-span-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Other content that you choose to save within the app</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">settings_suggest</span>
                    Technical Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    We may automatically collect limited technical information, including:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 pl-4 mb-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Device type</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Operating system version</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>App version</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Authentication status</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Diagnostic and crash information</span>
                    </li>
                  </ul>
                  <p className="text-sm italic text-[#6b608a] dark:text-[#a097bd] bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                    This information is used solely to improve app functionality, security, and reliability.
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: "how-we-use-information",
            title: "3. How We Use Your Information",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Create and manage your account",
                    "Authenticate users securely",
                    "Sync saved content across devices",
                    "Enable search, organization, and categorization features",
                    "Maintain and improve app functionality",
                    "Provide customer support",
                    "Detect fraud, abuse, or unauthorized access",
                    "Comply with legal obligations",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]"
                    >
                      <p className="text-sm font-medium text-[#131118] dark:text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: "authentication-cloud-services",
            title: "4. Authentication and Cloud Services",
            content: (
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Auto Paste App uses trusted third-party service providers, including:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      vpn_key
                    </span>
                    <div>
                      <h4 className="font-bold text-[#131118] dark:text-white text-base">
                        Firebase Authentication
                      </h4>
                      <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                        Used for secure account creation and user authentication.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      cloud
                    </span>
                    <div>
                      <h4 className="font-bold text-[#131118] dark:text-white text-base">
                        Google Cloud / Firebase Services
                      </h4>
                      <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                        Used for secure storage, synchronization, and infrastructure services required to operate the app.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-[#6b608a] dark:text-[#a097bd] italic pt-3 border-t border-gray-100 dark:border-white/10">
                  These providers process data on our behalf and are contractually obligated to protect user information.
                </p>
              </div>
            ),
          },
          {
            id: "data-security",
            title: "5. Data Security",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We implement reasonable administrative, technical, and organizational safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Where applicable, data may be encrypted during transmission and storage using industry-standard security practices.
                </p>
              </div>
            ),
          },
          {
            id: "data-retention",
            title: "6. Data Retention",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We retain account information and saved content for as long as your account remains active or as necessary to provide our services.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                  You may:
                </p>
                <div className="space-y-3">
                  {[
                    "Delete individual saved items at any time",
                    "Clear your saved content",
                    "Request deletion of your account and associated data",
                  ].map((actionText, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer"
                    >
                      <span className="font-medium text-[#131118] dark:text-white">
                        {actionText}
                      </span>
                      <span className="material-symbols-outlined text-[#6b608a]">
                        chevron_right
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Following account deletion, data may be removed from active systems within a reasonable period, subject to backup and legal requirements.
                </p>
              </div>
            ),
          },
          {
            id: "international-transfers",
            title: "7. International Data Transfers",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your information may be processed and stored on servers located in countries other than your own. We take reasonable steps to ensure that such transfers are protected through appropriate safeguards and security measures.
              </p>
            ),
          },
          {
            id: "your-rights",
            title: "8. Your Rights",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <div className="space-y-3">
                  {[
                    "Access your personal information",
                    "Correct inaccurate information",
                    "Request deletion of your personal information",
                    "Withdraw consent where applicable",
                    "Request account closure",
                  ].map((right, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer"
                    >
                      <span className="font-medium text-[#131118] dark:text-white">
                        {right}
                      </span>
                      <span className="material-symbols-outlined text-[#6b608a]">
                        chevron_right
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To exercise these rights, please contact us using the details below.
                </p>
              </div>
            ),
          },
          {
            id: "childrens-privacy",
            title: "9. Children's Privacy",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Auto Paste App is not intended for children under the age of 13.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will take reasonable steps to delete it.
                </p>
              </div>
            ),
          },
          {
            id: "cookies-technologies",
            title: "10. Cookies and Similar Technologies",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Auto Paste App may use essential technologies required for:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 pl-4">
                  {[
                    "User authentication",
                    "Account management",
                    "Security",
                    "Device synchronization",
                    "Service performance",
                  ].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  These technologies are necessary for the operation of the app.
                </p>
              </div>
            ),
          },
          {
            id: "third-party-links",
            title: "11. Third-Party Links",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The app may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. Users should review the privacy policies of any third-party services they access.
              </p>
            ),
          },
          {
            id: "changes-policy",
            title: "12. Changes to This Privacy Policy",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will become effective upon posting the updated version within the app or on our website. Continued use of the service after updates constitutes acceptance of the revised Privacy Policy.
              </p>
            ),
          },
          {
            id: "contact-us",
            title: "13. Contact Us",
            content: (
              <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">
                  Questions or Data Requests?
                </h4>
                <p className="text-[#6b608a] dark:text-[#a097bd] mb-6 font-normal leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
                </p>
                <a
                  href="mailto:Appnayatecnologoes@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Appnayatecnologoes@gmail.com
                </a>
              </div>
            ),
          },
        ].map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#131118] dark:text-white">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              {section.title}
            </h2>
            {section.content}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
