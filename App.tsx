
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUpRight,
  Calculator, 
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Plus,
  Briefcase,
  Sun,
  Moon,
  GraduationCap,
  Award,
  Phone,
  MapPin
} from 'lucide-react';
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import profileImage from './src/assets/profile_dewi.jpg';
import { PROJECTS, SERVICES, EXPERIENCES, TECH_STACK, CERTIFICATIONS, EDUCATION } from './constants';

// --- Theme Context / State ---
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  return { theme, toggleTheme };
};



// --- Layout ---

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-2 md:px-6">
        <div className={`flex justify-between items-center glass p-2 md:p-3 rounded-full border-black/5 dark:border-white/10 px-3 md:px-8 ${scrolled ? 'shadow-2xl' : ''}`}>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs md:text-lg">D</span>
            </div>
            <span className="text-sm md:text-xl font-black tracking-tighter uppercase whitespace-nowrap">Dewi<span className="opacity-40">Hasanah</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#about" className="hover:text-[#6366F1] dark:hover:text-indigo-400 transition-colors">Profil</a>
            <a href="#education" className="hover:text-[#6366F1] dark:hover:text-indigo-400 transition-colors">Pendidikan</a>
            <a href="#experience" className="hover:text-[#6366F1] dark:hover:text-indigo-400 transition-colors">Pengalaman</a>
            <a href="#projects" className="hover:text-[#6366F1] dark:hover:text-indigo-400 transition-colors">Portfolio</a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <a href="#contact" className="hidden sm:flex bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
              Hubungi
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass p-6 rounded-3xl space-y-4">
            <a href="#about" onClick={closeMenu} className="block text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">Profil</a>
            <a href="#education" onClick={closeMenu} className="block text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">Pendidikan</a>
            <a href="#experience" onClick={closeMenu} className="block text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">Pengalaman</a>
            <a href="#projects" onClick={closeMenu} className="block text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">Portfolio</a>
            <a href="#contact" onClick={closeMenu} className="block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest text-center hover:scale-105 transition-all">
              Hubungi
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const parallax = (factor: number) => ({
    transform: `translateY(${scrollY * factor}px)`,
    transition: 'transform 0.1s linear'
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-40 pb-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 animate-fade-up opacity-0">
              <span className="w-8 h-[2px] bg-[#6366F1]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6366F1]">Fresh Graduate • IPB University</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-gradient animate-fade-up delay-100 opacity-0">
              Dewi<br />
              Hasanah<br />

            </h1>
            <p className="text-base md:text-lg lg:text-xl opacity-60 max-w-lg leading-relaxed font-medium animate-fade-up delay-200 opacity-0">
              Lulusan Cumlaude Akuntansi IPB University dengan 2 pengalaman magang di bidang Finance & Audit. Terampil dalam penyusunan laporan keuangan, rekonsiliasi transaksi, dan prosedur audit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-up delay-300 opacity-0">
            <a href="#experience" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 md:gap-4 hover:shadow-2xl transition-all hover:-translate-y-1">
              Lihat Pengalaman <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="#contact" className="glass dark:bg-white/5 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-xs md:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 md:gap-4 hover:bg-[#6366F1] hover:text-white transition-all">
              Hubungi Saya <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/5 dark:border-white/5 animate-fade-up delay-400 opacity-0">
            <div>
              <h4 className="text-3xl font-black text-[#6366F1]">3.68</h4>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">IPK Cumlaude</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-[#6366F1]">2</h4>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Pengalaman Magang</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-[#6366F1]">2</h4>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Sertifikasi</p>
            </div>
          </div>
        </div>

        <div className="relative" style={parallax(0.1)}>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#6366F1]/20 blur-[120px] rounded-full"></div>
          <div className="glass dark:bg-white/5 p-3 md:p-4 rounded-[2rem] md:rounded-[3rem] relative z-10 shadow-2xl">
            <img 
              src={profileImage} 
              alt="Dewi Hasanah" 
              className="w-full aspect-[4/5] object-cover rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-1000 shadow-inner"
            />
            <div className="absolute -left-4 md:-left-10 bottom-10 md:bottom-20 bg-white dark:bg-black border border-black/5 dark:border-white/10 p-4 md:p-8 rounded-xl md:rounded-[2rem] shadow-2xl space-y-2 md:space-y-4" style={parallax(-0.05)}>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-green-600 w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">IPB University</p>
                  <h5 className="text-sm md:text-xl font-black">Cumlaude</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="antialiased selection:bg-[#6366F1] selection:text-white transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      
      {/* Skills/Services */}
      <section id="services" className="py-16 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366F1]">Keahlian</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">Kompetensi.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((s, idx) => (
              <div key={s.id} className="glass dark:bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border-black/5 dark:border-white/10 transition-all hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-4">{s.title}</h3>
                <p className="opacity-60 text-sm md:text-base lg:text-lg">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-32 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366F1]">Latar Belakang</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">Pendidikan.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass dark:bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border-black/5 dark:border-white/10">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-[#6366F1]/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-[#6366F1] w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tighter">{edu.institution}</h3>
                    <p className="text-[#6366F1] font-bold text-sm md:text-base">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 md:pt-6 border-t border-black/5 dark:border-white/5">
                  <span className="text-xs md:text-sm opacity-60">{edu.period}</span>
                  <span className="bg-[#6366F1]/10 text-[#6366F1] px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-xs md:text-sm w-fit">{edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366F1]">Perjalanan Karir</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">Pengalaman.</h2>
          </div>
          <div className="space-y-6 md:space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="glass dark:bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border-black/5 dark:border-white/10 transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                  <div className="flex-1">
                    <span className="text-[#6366F1] font-bold text-xs md:text-sm">{exp.period}</span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter mt-2">{exp.role}</h3>
                    <p className="text-base md:text-lg font-bold opacity-60 mt-1">{exp.company}</p>
                    <p className="opacity-50 mt-3 md:mt-4 max-w-2xl text-sm md:text-base">{exp.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-start md:self-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#6366F1]/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Briefcase className="text-[#6366F1] w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-32 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366F1]">Pengakuan</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">Sertifikasi.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="glass dark:bg-white/5 p-6 md:p-8 rounded-xl md:rounded-[2rem] border-black/5 dark:border-white/10 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-[#6366F1]/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <Award className="text-[#6366F1] w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="font-black text-sm md:text-base lg:text-lg mb-2">{cert.name}</h4>
                <span className="text-[#6366F1] font-bold">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Portfolio */}
      <section id="projects" className="py-16 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12 md:mb-20">
            <div className="space-y-2 md:space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366F1]">Karya</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">Portfolio.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {PROJECTS.map(p => (
              <div key={p.id} className="group cursor-pointer glass dark:bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border-black/5 dark:border-white/10 hover:-translate-y-1 transition-all">
                <div className="flex justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black text-[#6366F1] uppercase tracking-widest">{p.category}</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mt-2">{p.title}</h3>
                    <p className="opacity-50 mt-2 text-xs md:text-sm max-w-md">{p.description}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-20 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 md:py-20 border-t border-b border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-16">
            {TECH_STACK.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 transition-opacity">
                {tech.icon}
                <span className="font-black uppercase tracking-widest text-xs md:text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 md:py-32 border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 text-center space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter text-gradient">Mari Terhubung.</h2>
          <p className="text-base md:text-xl opacity-60 max-w-2xl mx-auto">
            Saya terbuka untuk peluang karir di bidang Accounting, Finance, dan Audit. Mari berdiskusi!
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10">
            <a href="mailto:dewihasanah948@gmail.com" className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">
              <Mail className="w-4 h-4 md:w-5 md:h-5" /> Email
            </a>
            <a href="https://www.linkedin.com/in/dewihasanah" target="_blank" className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" /> LinkedIn
            </a>
            <a href="tel:087873034637" className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors">
              <Phone className="w-4 h-4 md:w-5 md:h-5" /> 087873034637
            </a>
          </div>
          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-30 mt-12 md:mt-20">© 2026 Dewi Hasanah • Fresh Graduate Akuntansi IPB University</p>
        </div>
      </footer>

    </div>
  );
}
