import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-crispy-light flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="gradient-text mb-4 text-8xl font-bold">404</h1>
      <h2 className="text-crispy-brown mb-4 text-3xl font-bold">Halaman Tidak Ditemukan</h2>
      <p className="text-crispy-brown/80 mb-8 max-w-md">
        Waduh, sepertinya kamu tersesat di dapur kami. Halaman yang kamu cari mungkin sudah dipindahkan atau tidak
        pernah ada.
      </p>
      <Button asChild className="bg-crispy-bright hover:bg-crispy-orange hover-lift text-white">
        <Link href="/">Kembali ke Halaman Utama</Link>
      </Button>
    </div>
  );
}
