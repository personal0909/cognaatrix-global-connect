import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              Cognatrix
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Delivering intelligent IT solutions that bridge talent, technology, and automation for forward-thinking organisations.
            </p>
            <div className="mt-6 flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@cognaatrix.com</span>
            </div>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-primary mb-6">
              Our Offices
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p className="font-display font-medium">Hong Kong</p>
                  <p className="text-muted-foreground text-sm">Asia-Pacific Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p className="font-display font-medium">United Kingdom</p>
                  <p className="text-muted-foreground text-sm">EMEA Hub</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Cognatrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
