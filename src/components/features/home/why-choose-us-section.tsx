import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/animation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { whyChooseUs } from "@/constants/data";

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="section-padding bg-crispy-light">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
            Mengapa CrispyGo?
          </Badge>
          <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-5xl">
            Keunggulan yang Membuat Kami <span className="gradient-text">Berbeda</span>
          </h2>
          <p className="text-crispy-brown/70 mx-auto max-w-3xl text-xl">
            Kami berkomitmen memberikan yang terbaik dengan standar kualitas tinggi dan pelayanan prima
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover-lift border-crispy-cream/50 hover:border-crispy-bright/30 h-full transition-all duration-300">
                <CardHeader>
                  <div className="bg-crispy-bright/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <feature.icon className="text-crispy-bright h-6 w-6" />
                  </div>
                  <CardTitle className="text-crispy-brown">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crispy-brown/70">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
