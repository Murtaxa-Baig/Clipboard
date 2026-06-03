"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ClipboardDemo() {
  const [text, setText] = useState("");
  const [filename, setFilename] = useState("my-clipboard-export");
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (!text.trim()) return;
    setIsDownloading(true);

    // Create element with file content
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${filename || "clipping"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  const handleCopy = () => {
    if (!text.trim()) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <section id="demo" className="py-20 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-4">
            Try Clipboard Online
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Experience our text saver. Paste your text, organize it, and export/download it instantly as a clean text file!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col gap-6 relative overflow-hidden"
        >
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="material-symbols-outlined text-primary text-2xl">
                edit_document
              </span>
              <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ""))}
                placeholder="filename"
                className="bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-sm text-[#131118] dark:text-white outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-60 font-semibold"
              />
              <span className="text-gray-400 text-sm font-medium">.txt</span>
            </div>

            <div className="flex gap-3 w-full sm:w-auto justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopy}
                disabled={!text.trim()}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
              >
                <span className="material-symbols-outlined text-lg">
                  {isCopied ? "check" : "content_copy"}
                </span>
                <span>{isCopied ? "Copied!" : "Copy Raw"}</span>
              </motion.button>
            </div>
          </div>

          {/* Text Area */}
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your notes, snippets, URLs, or articles here..."
              rows={8}
              className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800/80 rounded-2xl p-5 text-[#131118] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all text-base leading-relaxed resize-y"
            ></textarea>

            {/* Character Count Overlay */}
            <div className="absolute bottom-4 right-4 flex gap-4 text-xs font-semibold text-gray-400 dark:text-gray-500 bg-white/80 dark:bg-gray-900/80 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm">
              <span>{wordCount} words</span>
              <span>•</span>
              <span>{charCount} chars</span>
            </div>
          </div>

          {/* Action Trigger */}
          <motion.button
            whileHover={{ scale: text.trim() ? 1.01 : 1 }}
            whileTap={{ scale: text.trim() ? 0.99 : 1 }}
            onClick={handleDownload}
            disabled={!text.trim() || isDownloading}
            className="w-full brand-gradient text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span className="material-symbols-outlined">
              {isDownloading ? "hourglass_empty" : "download"}
            </span>
            <span>{isDownloading ? "Generating File..." : "Download as Text File"}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
