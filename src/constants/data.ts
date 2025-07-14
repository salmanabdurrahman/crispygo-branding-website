import {
  Award,
  Calendar,
  ChefHat,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  Trophy,
  Twitter,
  Users,
  Youtube,
  Zap,
} from "lucide-react";

export const googleAnalytics = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "";

export const navigations = [
  {
    id: 1,
    href: "#",
    label: "Beranda",
  },
  {
    id: 2,
    href: "#about",
    label: "Tentang",
  },
  {
    id: 3,
    href: "#menu",
    label: "Menu",
  },
  {
    id: 4,
    href: "#process",
    label: "Proses",
  },
  {
    id: 5,
    href: "#contact",
    label: "Kontak",
  },
];

export const homeStats = [
  { number: "1000+", label: "Pelanggan Puas", icon: Users },
  { number: "20+", label: "Menu Varian", icon: ChefHat },
  { number: "5", label: "Tahun Pengalaman", icon: Award },
  { number: "24/7", label: "Layanan Online", icon: Clock },
];

export const whyChooseUs = [
  {
    icon: Shield,
    title: "100% Halal & Higienis",
    description: "Semua produk kami dijamin halal dan dibuat dengan standar kebersihan tinggi",
  },
  {
    icon: Zap,
    title: "Proses Cepat",
    description: "Pesanan Anda siap dalam 15 menit dengan kualitas yang tetap terjaga",
  },
  {
    icon: Heart,
    title: "Bahan Premium",
    description: "Menggunakan ayam dan tahu pilihan dengan bumbu rahasia yang khas",
  },
  {
    icon: Target,
    title: "Rasa Konsisten",
    description: "Setiap gigitan memberikan kelezatan yang sama, kapan pun Anda pesan",
  },
  {
    icon: Sparkles,
    title: "Inovasi Berkelanjutan",
    description: "Terus mengembangkan menu dan cita rasa sesuai selera pelanggan",
  },
  {
    icon: ThumbsUp,
    title: "Kepuasan Terjamin",
    description: "Garansi 100% puas atau uang kembali untuk setiap pembelian",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Pemilihan Bahan",
    description: "Ayam dan tahu segar dipilih dengan standar kualitas tinggi",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
  {
    step: "02",
    title: "Marinasi Khusus",
    description: "Direndam dengan bumbu rahasia selama minimal 4 jam",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    step: "03",
    title: "Coating Premium",
    description: "Dibalut dengan tepung khusus untuk hasil yang extra crispy",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80",
  },
  {
    step: "04",
    title: "Perfect Frying",
    description: "Digoreng dengan suhu dan waktu yang tepat untuk hasil optimal",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

export const menuItems = [
  {
    name: "Ayam Crispy Original",
    price: "Rp 25.000",
    description: "Ayam crispy dengan bumbu rahasia yang gurih dan renyah",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  },
  {
    name: "Tahu Crispy Pedas",
    price: "Rp 15.000",
    description: "Tahu crispy dengan balutan bumbu pedas yang menggigit",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Paket Combo Hemat",
    price: "Rp 35.000",
    description: "Ayam + Tahu crispy dengan nasi dan minuman",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
  },
  {
    name: "Ayam Crispy Spicy",
    price: "Rp 28.000",
    description: "Varian pedas dari ayam crispy original yang menantang",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Tahu Crispy Cheese",
    price: "Rp 18.000",
    description: "Tahu crispy dengan topping keju leleh yang creamy",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    name: "Family Pack",
    price: "Rp 85.000",
    description: "Paket keluarga untuk 4-5 orang dengan berbagai varian",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
  },
];

export const events = [
  { icon: Calendar, text: "Acara Keluarga & Gathering" },
  { icon: Users, text: "Meeting & Corporate Event" },
  { icon: Heart, text: "Celebration & Party" },
  { icon: Sparkles, text: "Special Occasion" },
];

export const milestones = [
  {
    year: "2019",
    title: "Awal Mula",
    description: "Dimulai dari dapur rumah dengan resep rahasia keluarga",
  },
  {
    year: "2020",
    title: "Ekspansi Pertama",
    description: "Membuka outlet pertama dan mulai melayani delivery",
  },
  {
    year: "2022",
    title: "Inovasi Menu",
    description: "Mengembangkan berbagai varian rasa sesuai selera lokal",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Launching platform online dan sistem pemesanan modern",
  },
];

export const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Food Blogger",
    content:
      "CrispyGo benar-benar mengubah ekspektasi saya tentang ayam crispy. Renyahnya tahan lama dan bumbunya meresap sempurna!",
    rating: 5,
  },
  {
    name: "Ahmad Rizki",
    role: "Pengusaha",
    content:
      "Sudah langganan CrispyGo untuk acara kantor. Kualitas konsisten dan pelayanan yang memuaskan. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maya Sari",
    role: "Ibu Rumah Tangga",
    content: "Anak-anak saya sangat suka dengan tahu crispy CrispyGo. Sehat, halal, dan rasanya enak banget!",
    rating: 5,
  },
];

export const awards = [
  {
    icon: Trophy,
    title: "Best Crispy Food 2023",
    description: "Penghargaan dari Asosiasi Kuliner Indonesia",
  },
  {
    icon: Award,
    title: "Top Brand Award",
    description: "Merek terpercaya kategori makanan crispy",
  },
  {
    icon: Star,
    title: "Customer Choice Award",
    description: "Pilihan pelanggan terbaik 3 tahun berturut-turut",
  },
];

export const faqs = [
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
];

export const contacts = [
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
];

export const socialMediaIcons = [
  {
    icon: Facebook,
    url: "https://www.facebook.com",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/crispygoofficial",
  },
  {
    icon: Twitter,
    url: "https://www.twitter.com",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com",
  },
];
