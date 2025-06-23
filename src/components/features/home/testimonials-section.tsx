import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp } from "@/constants/animation";
import { testimonials } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-crispy-brown">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/20 text-crispy-bright border-crispy-bright/30 mb-4">
            Testimoni Pelanggan
          </Badge>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Apa Kata <span className="text-crispy-bright">Mereka?</span>
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover-lift border-white/20 bg-white/10 text-white">
                <CardHeader>
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-crispy-bright text-crispy-bright h-4 w-4" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-white/80">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="bg-crispy-bright flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
