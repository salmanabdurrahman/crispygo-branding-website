import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/constants/animation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="section-padding bg-crispy-cream/30">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">FAQ</Badge>
          <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-5xl">
            Pertanyaan yang <span className="gradient-text">Sering Diajukan</span>
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto max-w-3xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Berapa lama waktu pembuatan pesanan?",
                answer:
                  "Waktu pembuatan standar adalah 15-20 menit untuk pesanan reguler. Untuk pesanan dalam jumlah besar, mohon konfirmasi terlebih dahulu.",
              },
              {
                question: "Apakah semua produk CrispyGo halal?",
                answer:
                  "Ya, semua produk CrispyGo 100% halal dan telah tersertifikasi. Kami menggunakan bahan-bahan halal dan proses produksi yang sesuai standar halal.",
              },
              {
                question: "Bagaimana cara memesan CrispyGo?",
                answer:
                  "Anda bisa memesan melalui aplikasi delivery partner kami (GrabFood, GoFood, dll), website resmi, atau datang langsung ke outlet terdekat.",
              },
              {
                question: "Apakah ada layanan catering untuk acara besar?",
                answer:
                  "Ya, kami menyediakan layanan catering untuk berbagai acara. Silakan hubungi customer service kami untuk konsultasi dan pemesanan catering.",
              },
              {
                question: "Bagaimana cara menjaga kerenyahan produk saat delivery?",
                answer:
                  "Kami menggunakan kemasan khusus yang menjaga sirkulasi udara dan mencegah kelembaban, sehingga produk tetap crispy hingga sampai ke tangan Anda.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-crispy-cream/50">
                <AccordionTrigger className="text-crispy-brown hover:text-crispy-orange text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-crispy-brown/70">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
