import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const InvitationVideo = () => {
  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Video Container - Left Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Amazing decorative frame */}
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/40 via-peach/30 to-rose-gold/40 rounded-3xl transform rotate-2" />
            <div className="absolute -inset-6 bg-gradient-to-tl from-gold/20 via-cream/50 to-gold/20 rounded-3xl transform -rotate-1" />
            <div className="absolute -inset-3 border-2 border-gold/30 rounded-2xl" />
            
            {/* Video wrapper */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gold/20 bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/16] md:aspect-[9/16] max-h-[70vh] object-cover"
              >
                <source src="/Invitation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 text-gold animate-pulse">✦</div>
              <div className="absolute top-2 right-2 text-gold animate-pulse">✦</div>
              <div className="absolute bottom-2 left-2 text-gold animate-pulse">✦</div>
              <div className="absolute bottom-2 right-2 text-gold animate-pulse">✦</div>
            </div>
            
            {/* Floating decoration */}
            <motion.div
              className="absolute -bottom-5 -right-5"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-peach flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-gold-dark" />
              <span className="font-script text-2xl text-gold-dark">Watch Our Love Story</span>
              <Sparkles className="w-5 h-5 text-gold-dark" />
            </motion.div>
            
            <motion.h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              This Is Our Wedding Video
            </motion.h2>
            
            <motion.div
              className="w-24 h-px bg-gold/50 mx-auto md:mx-0 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            />
            
            <motion.p
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              "Two hearts, one love, and a beautiful beginning. 
              Watch as we embark on this magical journey together, 
              filled with joy, laughter, and endless moments of love."
            </motion.p>
            
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-gold-dark">
                <Heart className="w-4 h-4 fill-current" />
                <span className="font-body text-sm">A Beautiful Beginning</span>
              </div>
            </motion.div>

            {/* Decorative hearts */}
            <motion.div
              className="flex justify-center md:justify-start gap-2 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">💕</span>
              <span className="text-2xl">💗</span>
              <span className="text-2xl">💖</span>
              <span className="text-2xl">💝</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationVideo;
