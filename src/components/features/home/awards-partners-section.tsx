import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/constants/animation";
import { awards } from "@/constants/data";

export default function AwardsPartnersSection() {
  return (
    <section className="section-padding bg-crispy-light">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Awards */}
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
            <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
              Penghargaan Kami
            </Badge>
            <h3 className="text-crispy-brown mb-8 text-2xl font-bold md:text-3xl">
              Prestasi yang <span className="gradient-text">Membanggakan</span>
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-crispy-bright/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <award.icon className="text-crispy-bright h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-crispy-brown mb-1 font-bold">{award.title}</h4>
                    <p className="text-crispy-brown/70">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Partners */}
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInRight}>
            <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
              Partner Bisnis
            </Badge>
            <h3 className="text-crispy-brown mb-8 text-2xl font-bold md:text-3xl">
              Dipercaya Oleh <span className="gradient-text">Partner Terbaik</span>
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {["GrabFood", "GoFood", "ShopeeFood", "Foodpanda", "Tokopedia", "Blibli", "Bukalapak", "Lazada"].map(
                (partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover-lift border-crispy-cream/50 p-6 text-center">
                      <div className="bg-crispy-cream mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl">
                        <Handshake className="text-crispy-bright h-8 w-8" />
                      </div>
                      <h4 className="text-crispy-brown font-semibold">{partner}</h4>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
