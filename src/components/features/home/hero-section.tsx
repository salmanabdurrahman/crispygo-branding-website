import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Heart, Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/constants/animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="section-padding from-crispy-light via-crispy-cream to-crispy-light bg-gradient-to-br pt-32">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
                🔥 Crispy & Delicious
              </Badge>
              <h1 className="text-crispy-brown text-4xl leading-tight font-bold md:text-6xl">
                Kelezatan <span className="gradient-text">Crispy</span> yang Tak Terlupakan
              </h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-crispy-brown/80 text-xl leading-relaxed">
              CrispyGo menghadirkan ayam dan tahu crispy berkualitas premium dengan cita rasa yang memanjakan lidah.
              Dibuat dengan resep rahasia dan bahan-bahan pilihan terbaik.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-crispy-bright hover:bg-crispy-orange hover-lift px-8 py-6 text-lg text-white"
              >
                Pesan Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-crispy-orange text-crispy-orange hover:bg-crispy-orange px-8 py-6 text-lg hover:text-white"
              >
                Lihat Menu
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-crispy-cream h-8 w-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <span className="text-crispy-brown/70">1000+ Pelanggan Puas</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="fill-crispy-bright text-crispy-bright h-4 w-4" />
                ))}
                <span className="text-crispy-brown/70 ml-2">4.9/5</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="animate-pulse-glow relative h-[500px] w-full overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="CrispyGo Ayam Crispy"
                fill
                className="object-cover"
              />
              <div className="from-crispy-brown/20 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
            {/* Floating Cards */}
            <motion.div
              className="absolute -top-4 -left-4 rounded-2xl bg-white p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2">
                <Clock className="text-crispy-bright h-5 w-5" />
                <span className="text-crispy-brown text-sm font-semibold">15 Menit</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-4 -bottom-4 rounded-2xl bg-white p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-crispy-brown text-sm font-semibold">100% Halal</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
