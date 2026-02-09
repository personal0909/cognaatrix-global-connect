import { motion } from "framer-motion";
import { Users, Bot, Cpu } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Workforce Staffing",
    description:
      "Access top-tier IT talent on demand. We source, vet, and place skilled professionals to seamlessly integrate with your teams and accelerate delivery.",
  },
  {
    icon: Bot,
    title: "Virtual Assistants",
    description:
      "Deploy intelligent virtual assistants to handle routine operations, customer interactions, and administrative tasks — freeing your people for high-value work.",
  },
  {
    icon: Cpu,
    title: "AI Agentic Platforms",
    description:
      "We design, build, and implement autonomous AI agent platforms that automate complex workflows, decision-making, and cross-system orchestration at scale.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.25em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
