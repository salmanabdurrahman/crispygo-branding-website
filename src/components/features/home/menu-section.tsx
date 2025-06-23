import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/animation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-crispy-light">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="bg-crispy-bright/10 text-crispy-orange border-crispy-bright/20 mb-4">Menu Favorit</Badge>
          <h2 className="text-crispy-brown mb-6 text-3xl font-bold md:text-5xl">
            Pilihan <span className="gradient-text">Terlezat</span> Kami
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Ayam Crispy Original",
              price: "Rp 25.000",
              description: "Ayam crispy dengan bumbu rahasia yang gurih dan renyah",
              popular: true,
              image: "/images/crispy-chicken-original.jpg",
            },
            {
              name: "Tahu Crispy Pedas",
              price: "Rp 15.000",
              description: "Tahu crispy dengan balutan bumbu pedas yang menggigit",
              image: "/images/crispy-tofu.jpg",
            },
            {
              name: "Paket Combo Hemat",
              price: "Rp 35.000",
              description: "Ayam + Tahu crispy dengan nasi dan minuman",
              popular: true,
              image: "/images/combo-meal.jpg",
            },
            {
              name: "Ayam Crispy Spicy",
              price: "Rp 28.000",
              description: "Varian pedas dari ayam crispy original yang menantang",
              image: "/images/spicy-chicken.jpg",
            },
            {
              name: "Tahu Crispy Cheese",
              price: "Rp 18.000",
              description: "Tahu crispy dengan topping keju leleh yang creamy",
              image: "/images/cheese-tofu.jpg",
            },
            {
              name: "Family Pack",
              price: "Rp 85.000",
              description: "Paket keluarga untuk 4-5 orang dengan berbagai varian",
              image: "/images/family-pack.jpg",
            },
          ].map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover-lift border-crispy-cream/50 hover:border-crispy-bright/30 relative h-full overflow-hidden transition-all duration-300">
                {menu.popular && (
                  <Badge className="bg-crispy-bright absolute top-4 right-4 z-10 text-white">Populer</Badge>
                )}
                <div className="relative h-48">
                  <Image src={menu.image || "/placeholder.svg"} alt={menu.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-crispy-brown">{menu.name}</CardTitle>
                    <span className="text-crispy-bright text-xl font-bold">{menu.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crispy-brown/70 mb-4">{menu.description}</CardDescription>
                  <Button className="bg-crispy-bright hover:bg-crispy-orange w-full text-white">Pesan Sekarang</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
