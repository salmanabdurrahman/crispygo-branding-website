import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/animation";
import { Badge } from "@/components/ui/badge";

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-crispy-cream/30">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">
            Proses Pembuatan
          </Badge>
          <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-5xl">
            Dari Dapur ke <span className="gradient-text">Meja Anda</span>
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Pemilihan Bahan",
              description: "Ayam dan tahu segar dipilih dengan standar kualitas tinggi",
              image: "/images/fresh-ingredients.jpg",
            },
            {
              step: "02",
              title: "Marinasi Khusus",
              description: "Direndam dengan bumbu rahasia selama minimal 4 jam",
              image: "/images/cooking-process-1.jpg",
            },
            {
              step: "03",
              title: "Coating Premium",
              description: "Dibalut dengan tepung khusus untuk hasil yang extra crispy",
              image: "/images/cooking-process-2.jpg",
            },
            {
              step: "04",
              title: "Perfect Frying",
              description: "Digoreng dengan suhu dan waktu yang tepat untuk hasil optimal",
              image: "/images/hero-crispy-chicken.jpg",
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="bg-crispy-bright mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold text-white">
                  {process.step}
                </div>
                {index < 3 && (
                  <div className="bg-crispy-bright/30 absolute top-10 left-full hidden h-0.5 w-full -translate-x-1/2 md:block" />
                )}
              </div>
              <div className="mb-4 h-32 w-full overflow-hidden rounded-xl">
                <Image
                  src={process.image || "/placeholder.svg"}
                  alt={process.title}
                  width={300}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-crispy-brown mb-3 text-xl font-bold">{process.title}</h3>
              <p className="text-crispy-brown/70">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
