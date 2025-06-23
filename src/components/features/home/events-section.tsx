import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Users, Heart, Sparkles, ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/constants/animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EventsSection() {
  return (
    <section className="section-padding bg-crispy-cream/30">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
            <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
              Cocok Untuk Berbagai Acara
            </Badge>
            <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-4xl">
              Hadirkan Kelezatan di <span className="gradient-text">Setiap Momen</span>
            </h2>
            <p className="text-crispy-brown/70 mb-8 text-lg">
              CrispyGo siap menemani berbagai acara spesial Anda dengan cita rasa yang tak terlupakan
            </p>
            <div className="space-y-4">
              {[
                { icon: Calendar, text: "Acara Keluarga & Gathering" },
                { icon: Users, text: "Meeting & Corporate Event" },
                { icon: Heart, text: "Celebration & Party" },
                { icon: Sparkles, text: "Special Occasion" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-crispy-bright/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <item.icon className="text-crispy-bright h-5 w-5" />
                  </div>
                  <span className="text-crispy-brown font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <Button className="bg-crispy-bright hover:bg-crispy-orange mt-8 px-8 text-white">
              Konsultasi Catering
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/event-catering-1.jpg"
                    alt="Event 1"
                    width={200}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/event-catering-2.jpg"
                    alt="Event 2"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/event-catering-3.jpg"
                    alt="Event 3"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-32 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/event-catering-4.jpg"
                    alt="Event 4"
                    width={200}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
