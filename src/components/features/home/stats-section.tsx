import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/animation";
import { homeStats } from "@/constants/data";

export default function StatsSection() {
  return (
    <section className="section-padding bg-crispy-brown">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {homeStats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center text-white">
              <div className="bg-crispy-bright hover-lift mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="mb-2 text-3xl font-bold md:text-4xl">{stat.number}</div>
              <div className="text-crispy-cream/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
