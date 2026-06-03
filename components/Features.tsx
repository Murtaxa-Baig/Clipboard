"use client";

import { motion } from "framer-motion";

export default function Features() {
    return (
        <section id="features" className="bg-white dark:bg-gray-900 py-20 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-4">
                        Limitless Clipboard Features
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to copy, paste, sync, and organize your clippings effortlessly.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Clipboard Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="brand-gradient text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                content_paste
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Instant Clipping History</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Save everything you copy automatically—text, code snippets, web links, URLs, and color codes. Keep track of all essential details in one place and search or copy them back with a single click.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Formatted Text & Code Snippets</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Web URLs & Rich Metadata</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Export & Download as Text File</li>
                        </ul>
                    </motion.div>

                    {/* Media Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="identity-gradient text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                image
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Advanced Media & Files</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Never lose copied images, screenshots, files, and rich attachments. Preview media assets in high fidelity directly from the history list, and reuse them whenever you need.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Screenshots & Image Assets</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> File Attachments & Archives</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> PDF Documents & Assets</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
