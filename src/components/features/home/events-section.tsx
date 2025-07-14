import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/constants/animation";
import { events } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EventsSection() {
  const handleOrderNowClick = () => {
    window.open("https://wa.me/628995226617", "_blank");
  };

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
              {events.map((item, index) => (
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
            <Button
              className="bg-crispy-bright hover:bg-crispy-orange mt-8 px-8 text-white"
              onClick={handleOrderNowClick}
            >
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
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Event 1"
                    width={200}
                    height={150}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
                <div className="h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Event 2"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Event 3"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
                <div className="h-32 overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Event 4"
                    width={200}
                    height={150}
                    className="h-full w-full object-cover"
                    unoptimized={true}
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
