import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, XCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import GlassCard from "../ui/GlassCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const EMAILJS_PUBLIC_KEY = "tmmJYdzfdiUn-jQ7p";
  const EMAILJS_SERVICE = "service_8cz5j8k";
  const EMAILJS_TEMPLATE = "template_n1omigy";

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setFormStatus({ type: "", message: "" });

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        form.current
      );
      if (result && (result.status === 200 || result.status === 202 || result.text)) {
        setFormStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        form.current.reset();
      } else {
        throw new Error("Unexpected response status.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setSending(false);
      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <Mail size={14} />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Have a project in mind or looking for a skilled developer to join your team? I'd love to hear from you.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <GlassCard className="p-8 md:p-12 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-6">
              
              {formStatus.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium border ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}
                >
                  {formStatus.type === 'success' ? <CheckCircle2 size={18}/> : <XCircle size={18}/>}
                  {formStatus.message}
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    id="user_name" type="text" name="user_name" placeholder="John Doe" required
                    className="w-full p-4 bg-gray-900/50 border border-white/10 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-white placeholder-gray-600 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    id="user_email" type="email" name="user_email" placeholder="john@example.com" required
                    className="w-full p-4 bg-gray-900/50 border border-white/10 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-white placeholder-gray-600 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  id="message" name="message" rows="5" placeholder="How can I help you?" required
                  className="w-full p-4 bg-gray-900/50 border border-white/10 rounded-xl resize-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-white placeholder-gray-600 text-sm"
                />
              </div>

              <button
                type="submit" disabled={sending}
                className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex justify-center items-center gap-3
                  ${sending 
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5" 
                    : "bg-white text-gray-950 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"}`}
              >
                {sending ? "Sending..." : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
