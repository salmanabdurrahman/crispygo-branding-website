import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-effect fixed top-0 z-50 w-full"
    >
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="bg-crispy-bright flex h-8 w-8 items-center justify-center rounded-lg">
              <ChefHat className="h-5 w-5 text-white" />
            </div>
            <span className="gradient-text text-xl font-bold">CrispyGo</span>
          </motion.div>
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="#about" className="text-crispy-brown hover:text-crispy-orange transition-colors">
              Tentang
            </Link>
            <Link href="#menu" className="text-crispy-brown hover:text-crispy-orange transition-colors">
              Menu
            </Link>
            <Link href="#process" className="text-crispy-brown hover:text-crispy-orange transition-colors">
              Proses
            </Link>
            <Link href="#contact" className="text-crispy-brown hover:text-crispy-orange transition-colors">
              Kontak
            </Link>
          </div>
          <Button className="bg-crispy-bright hover:bg-crispy-orange text-white">Pesan Sekarang</Button>
        </div>
      </nav>
    </motion.nav>
  );
}
