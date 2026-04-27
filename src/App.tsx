/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, MapPin, Sparkles, HelpCircle, MessageSquare } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone relative flex flex-col items-center px-4 py-8 md:py-12">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Header Section - Minimal */}
        <header className="mb-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-italic-serif text-ink tracking-tight">
              Calendario de la Dra. Caty
            </h1>
          </motion.div>
        </header>

        {/* Calendar Area - Full Width within container */}
        <main className="w-full relative z-10">
          <motion.section 
            className="bg-white rounded-[2rem] md:rounded-organic border border-black/[0.03] shadow-2xl flex flex-col overflow-hidden w-full h-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-grow relative bg-white overflow-hidden">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/ZqpsXdOleXU8XLKrXHyl" 
                style={{ width: '100%', border: 'none', height: '100%' }}
                scrolling="yes" 
                id="ZqpsXdOleXU8XLKrXHyl_1777255834561"
                title="Calendario Dra. Caty"
                className="w-full h-full"
              />
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
