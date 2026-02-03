import React from "react";
import {
  BarChart3,
  Calculator,
  PieChart,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  Globe,
  Database,
  Cpu,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import projectImage from "./src/assets/dewi_university.jpg";
import { Project, Service, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Penyusunan Laporan Keuangan UMKM",
    category: "Tugas Akhir",
    image: projectImage,
    description:
      "Penyusunan Laporan Keuangan berdasarkan SAK EMKM berbasis Microsoft Excel pada UMKM Tandi's Bakery",
  },
  {
    id: "2",
    title: "Analisis Audit Piutang Dagang",
    category: "Project Akademik",
    image: projectImage,
    description:
      "Analisis Pelaksanaan Audit Atas Piutang Dagang Pada KAP KKSP & Rekan - memahami prosedur audit dan pengendalian internal.",
  },
  {
    id: "3",
    title: "Template Excel Terintegrasi",
    category: "Finance Development",
    image: projectImage,
    description:
      "Mengembangkan template Excel terintegrasi untuk mempercepat proses penyusunan laporan keuangan di CV Leocorn Ristan Jaya.",
  },
  {
    id: "4",
    title: "Audit Prosedur Pajak",
    category: "Audit Internship",
    image: projectImage,
    description:
      "Melakukan prosedur audit Reperformance dan Vouching di Badan Pendapatan Daerah Provinsi DKI Jakarta.",
  },
];

export const SERVICES = [
  {
    id: "1",
    title: "Akuntansi Keuangan",
    description:
      "Penyusunan laporan keuangan lengkap: jurnal umum, buku besar, neraca lajur, laporan posisi keuangan, dan laba rugi.",
    icon: "BarChart3",
  },
  {
    id: "2",
    title: "Audit & Assurance",
    description:
      "Pengalaman prosedur audit (Reperformance & Vouching), pencatatan laporan hasil pemeriksaan, dan monitoring audit.",
    icon: "ShieldCheck",
  },
  {
    id: "3",
    title: "Perpajakan",
    description:
      "Pemahaman perpajakan dalam negeri dan internasional, pemeriksaan wajib pajak, dan pengajuan pengurangan pajak via Coretax.",
    icon: "PieChart",
  },
  {
    id: "4",
    title: "Rekonsiliasi Keuangan",
    description:
      "Mencatat dan merekonsiliasi transaksi keuangan harian (kas masuk & keluar) secara akurat.",
    icon: "TrendingUp",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Finance & Accounting Intern",
    company: "CV Leocorn Ristan Jaya",
    period: "Januari 2025 – Juli 2025",
    description:
      "Mencatat transaksi keuangan, menyusun laporan keuangan lengkap, dan mengembangkan template Excel terintegrasi.",
  },
  {
    id: "2",
    role: "Auditor Intern",
    company: "Badan Pendapatan Daerah Provinsi DKI Jakarta",
    period: "Juli 2024 – Desember 2024",
    description:
      "Melakukan prosedur audit Reperformance & Vouching, membantu pemeriksaan wajib pajak, dan merekapitulasi Daily Payment Report.",
  },
  {
    id: "3",
    role: "Internal Department Staff",
    company: "Himpunan Mahasiswa Akmapesa IPB University",
    period: "2021 - 2023",
    description:
      "Memimpin tim 25 orang dalam acara Upgrading & Leadership Training dengan 152 peserta mahasiswa.",
  },
];

export const TECH_STACK = [
  { name: "Microsoft Excel", icon: <FileSpreadsheet className="w-5 h-5" /> },
  { name: "Accurate", icon: <Calculator className="w-5 h-5" /> },
  { name: "MYOB", icon: <Database className="w-5 h-5" /> },
  { name: "Microsoft Word", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Power Point", icon: <BarChart3 className="w-5 h-5" /> },
];

export const CERTIFICATIONS = [
  { name: "Sertifikasi Teknisi Akuntansi Ahli (BNSP)", year: "2025" },
  { name: "Certified Accurate Professional (CAP)", year: "2023" },
  { name: "Peringkat 2 dari 140 siswa IPS SMAN 2 Brebes", year: "2021" },
];

export const EDUCATION = [
  {
    institution: "Institut Pertanian Bogor (IPB University)",
    degree: "Sarjana Terapan Akuntansi (S.Tr.Ak)",
    period: "2021 - 2025",
    gpa: "3.68 / 4.00 (Cumlaude)",
  },
  {
    institution: "SMA Negeri 2 Brebes",
    degree: "IPS",
    period: "2018 - 2021",
    gpa: "87.97/100",
  },
];
