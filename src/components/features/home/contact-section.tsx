import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/constants/animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-crispy-light">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">Hubungi Kami</Badge>
          <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-5xl">
            Mari <span className="gradient-text">Terhubung</span>
          </h2>
          <p className="text-crispy-brown/70 mx-auto max-w-2xl text-xl">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami
          </p>
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Telepon",
                  content: "+62 812-3456-7890",
                  description: "Senin - Minggu, 08:00 - 22:00",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@crispygo.com",
                  description: "Respon dalam 24 jam",
                },
                {
                  icon: MapPin,
                  title: "Alamat",
                  content: "Jl. Raya Crispy No. 123",
                  description: "Jakarta Selatan, Indonesia",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-crispy-bright/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <contact.icon className="text-crispy-bright h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-crispy-brown mb-1 font-bold">{contact.title}</h4>
                    <p className="text-crispy-brown mb-1 font-medium">{contact.content}</p>
                    <p className="text-crispy-brown/60 text-sm">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Card className="bg-crispy-brown p-6 text-white">
              <h3 className="mb-4 text-xl font-bold">Jam Operasional</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span>09:00 - 23:00</span>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInRight}>
            <Card className="p-8">
              <h3 className="text-crispy-brown mb-6 text-2xl font-bold">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-crispy-brown mb-2 block text-sm font-medium">Nama Lengkap</label>
                    <Input placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="text-crispy-brown mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" placeholder="nama@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-crispy-brown mb-2 block text-sm font-medium">Subjek</label>
                  <Input placeholder="Subjek pesan" />
                </div>
                <div>
                  <label className="text-crispy-brown mb-2 block text-sm font-medium">Pesan</label>
                  <Textarea placeholder="Tulis pesan Anda di sini..." className="min-h-[120px]" />
                </div>
                <Button className="bg-crispy-bright hover:bg-crispy-orange w-full text-white">
                  Kirim Pesan
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
