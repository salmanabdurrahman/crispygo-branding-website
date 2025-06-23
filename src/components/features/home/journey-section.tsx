import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/animation";
import { milestones } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function JourneySection() {
  return (
    <section className="section-padding bg-crispy-light">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
            Perjalanan CrispyGo
          </Badge>
          <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-5xl">
            Dari Mimpi Menjadi <span className="gradient-text">Kenyataan</span>
          </h2>
        </motion.div>
        <div className="mx-auto max-w-4xl">
          <div className="timeline-line relative space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="hover-lift p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="bg-crispy-bright flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <h3 className="text-crispy-brown text-xl font-bold">{milestone.title}</h3>
                        <p className="text-crispy-bright font-semibold">{milestone.year}</p>
                      </div>
                    </div>
                    <p className="text-crispy-brown/70">{milestone.description}</p>
                  </Card>
                </div>
                <div className="bg-crispy-bright h-4 w-4 flex-shrink-0 rounded-full" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
