/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, Sparkles, Check, Gift, AlertTriangle, ArrowDown } from "lucide-react";

export default function App() {
  const calendarRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper
  const scrollToCalendar = () => {
    calendarRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone relative selection:bg-lavender/30 flex flex-col items-center px-4 py-8 md:py-16 overflow-x-hidden">
      
      {/* Background Watermark/Texture */}
      <div className="fixed -top-12 -right-12 pointer-events-none opacity-[0.02] z-0">
        <Sparkles size={450} strokeWidth={0.5} className="text-ink" />
      </div>
      <div className="fixed -bottom-16 -left-16 pointer-events-none opacity-[0.02] z-0">
        <Clock size={450} strokeWidth={0.5} className="text-ink" />
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center relative z-10">
        
        {/* Header Title Section */}
        <header className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-semibold text-lavender mb-3 block bg-lavender/10 px-4 py-1.5 rounded-full inline-block">
              SMILE GLOW UP EXPERIENCE
            </span>
            
            <h1 className="text-3xl md:text-5xl font-italic-serif text-ink tracking-tight !leading-[1.2] max-w-3xl mt-2 font-medium">
              Agenda tu sesión de Smile Glow Up Experience para una sonrisa impecable en solo 3 pasos simples.
            </h1>
            
            <p className="text-xs md:text-sm text-ink/60 max-w-2xl mt-4 leading-relaxed font-light">
              Elige tu fecha, reserva tu cupo y recibe atención personalizada paso a paso. Este es el último paso para confirmar tu atención.
            </p>
          </motion.div>
        </header>

        {/* Benefits & Special Promotion Card */}
        <section className="w-full mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-[2rem] md:rounded-organic border border-black/[0.03] p-6 md:p-10 shadow-sm flex flex-col gap-8"
          >
            {/* Elegant Checkmarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sin dolor, sin molestia, tratamiento premium totalmente personalizado",
                "Resultados visibles desde la primera sesión",
                "Solo 3 cupos por día",
                "Mejora luminosidad, estética dental y confianza"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3.5 pt-2">
                  <div className="p-1.5 rounded-full bg-lavender/10 border border-lavender/20 text-lavender shrink-0">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <p className="text-xs md:text-sm text-ink/80 font-light leading-snug">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Bono por Agendar Online Container */}
            <div className="bg-[#FAF8FC] border border-lavender/30 rounded-2xl md:rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lavender/5 rounded-full -mr-10 -mt-10 pointer-events-none" />
              <div className="p-4 rounded-xl bg-lavender/10 text-lavender text-4xl shrink-0">
                <Gift className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold tracking-wider text-ink flex items-center justify-center md:justify-start gap-2.5">
                  BONO POR AGENDAR ONLINE
                </h3>
                <p className="text-xs text-ink/70 mt-1.5 font-light leading-relaxed">
                  Recibe diagnóstico integral con escaneo o valoración dental premium sin costo adicional al confirmar tu tratamiento.
                </p>
              </div>
            </div>

            {/* Selection Anchor Hook */}
            <button
              onClick={scrollToCalendar}
              className="w-full bg-ink text-white py-4 px-6 rounded-xl md:rounded-[2rem] text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <ArrowDown size={14} className="animate-bounce" />
              Selecciona tu fecha disponible abajo
            </button>
          </motion.div>
        </section>

        {/* Informative Step Bar Banner */}
        <section className="w-full mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-ink text-[#FAF8FC] rounded-2xl md:rounded-[2rem] p-4 md:p-8 border border-white/[0.05] shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.1]">
              <div className="flex items-center gap-4 py-2 md:py-0 md:px-4">
                <span className="text-3xl text-lavender font-italic-serif font-light">01</span>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold">Paso 1</h4>
                  <p className="text-[11px] text-white/70 font-light mt-0.5">Elige tu fecha disponible abajo</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3 md:py-0 md:px-6">
                <span className="text-3xl text-lavender font-italic-serif font-light">02</span>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold">Paso 2</h4>
                  <p className="text-[11px] text-white/70 font-light mt-0.5">Asegura tu cupo con un abono</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2 md:py-0 md:px-6">
                <span className="text-3xl text-lavender font-italic-serif font-light">03</span>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold">Paso 3</h4>
                  <p className="text-[11px] text-white/70 font-light mt-0.5">Recibe confirmación y prepárate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Embedded Calendar / Google LeadConnector Schedule Form */}
        <main ref={calendarRef} className="w-full relative z-10 mb-12 scroll-mt-6">
          <motion.section 
            className="bg-white rounded-[2rem] md:rounded-organic border border-black/[0.03] shadow-2xl flex flex-col overflow-hidden w-full h-[850px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Active Header inside Frame wrapper */}
            <div className="p-4 md:p-6 border-b border-stone flex justify-between items-center bg-[#FAF8FC] shrink-0">
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-lavender" />
                ))}
              </div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#9477A0] font-bold">
                Calendario Oficial de la Dra. Caty
              </span>
            </div>

            {/* Seamless Embed Frame Container */}
            <div className="flex-grow relative bg-white overflow-hidden">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/ZqpsXdOleXU8XLKrXHyl" 
                style={{ width: '100%', border: 'none', height: '100%' }}
                scrolling="yes" 
                id="ZqpsXdOleXU8XLKrXHyl_1777255834561"
                title="Calendario Dra. Caty - Smile Glow Up Experience"
                className="w-full h-full"
              />
            </div>
          </motion.section>
        </main>

        {/* Limited Slots & Booking Deposit Explanation Area */}
        <section className="w-full mt-2 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Warning Slots box */}
            <div className="bg-amber-500/5 rounded-2xl md:rounded-[2rem] p-5 border border-amber-600/20 flex gap-4 items-center">
              <AlertTriangle className="text-amber-600 w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <p className="text-xs md:text-sm text-ink/80 font-medium leading-relaxed">
                <span className="font-bold text-amber-950">Cupos Limitados</span> — Solo 3 cupos por día para asegurar atención de máxima exclusividad y personalización.
              </p>
            </div>

            {/* Question explanation Card */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-black/[0.03] shadow-sm text-center md:text-left flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-italic-serif text-ink italic font-medium">
                ¿Por qué solicitamos un abono?
              </h3>
              <p className="text-xs md:text-sm text-ink/70 leading-relaxed font-light">
                Garantiza tu espacio exclusivo con la Dra. Caty, una especialista con más de 20 años de experiencia perfeccionando el diseño de sonrisa y más de 300 transformaciones logradas con éxito. El abono de confirmación asegura tu atención de máxima personalización y se tomará totalmente a cuenta del valor total de tu procedimiento.
              </p>
              
              <button
                onClick={scrollToCalendar}
                className="mt-4 self-center md:self-start bg-ink text-white py-4 px-10 rounded-full md:rounded-organic text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-md"
              >
                👉 Agenda tu sesión
              </button>
            </div>
          </motion.div>
        </section>

        {/* Small Elegant Footer */}
        <footer className="text-[9px] md:text-[10px] opacity-35 text-ink/80 text-center uppercase tracking-[0.15em] pt-8 border-t border-black/[0.03] w-full">
          &copy; Dra. Caty — Diseño Minimalista Orgánico • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

