import Link from "next/link";
import React from "react";
import { ChefHat } from "lucide-react";
import { socialMediaIcons } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="bg-crispy-brown py-12 text-white">
      <div className="container-custom">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="bg-crispy-bright flex h-8 w-8 items-center justify-center rounded-lg">
                <ChefHat className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CrispyGo</span>
            </div>
            <p className="mb-4 text-white/70">Menghadirkan kelezatan crispy terbaik untuk setiap momen spesial Anda.</p>
            <div className="flex space-x-4">
              {socialMediaIcons.map((social, index) => (
                <Link href={social.url} target="_blank" rel="noopener noreferrer" key={index}>
                  <div className="hover:bg-crispy-bright flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white/10 transition-colors">
                    <social.icon className="h-4 w-4 text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Menu</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Ayam Crispy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Tahu Crispy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Paket Combo
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Family Pack
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Layanan</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Pre-Order
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Franchise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Perusahaan</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-white/70">© 2024 CrispyGo. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link href="#" className="text-white/70 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/70 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
