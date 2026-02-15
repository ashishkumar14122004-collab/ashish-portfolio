import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  Cpu,
  Database,
  Code,
  Briefcase,
  ExternalLink,
  Trophy,
  Award,
  GraduationCap,
} from "lucide-react";
import profile from "./assets/profile.jpg";

/* ================= BACKGROUND ================= */
const Background = () => (
  <div className="fixed inset-0 -z-50 bg-black overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(0,180,255,0.18), transparent 40%)," +
          "radial-gradient(circle at 80% 30%, rgba(120,0,255,0.12), transparent 45%)," +
          "radial-gradient(circle at 50% 80%, rgba(0,255,200,0.12), transparent 40%)",
      }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 18, repeat: Infinity }}
    />
  </div>
);

/* ================= 3D CARD ================= */
const Card3D = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-80, 80], [8, -8]);
  const ry = useTransform(x, [-80, 80], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry }}
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl bg-black/60 border border-white/10
                 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.9)]
                 hover:shadow-[0_40px_160px_rgba(0,180,255,0.25)]
                 transition"
    >
      {children}
    </motion.div>
  );
};

/* ================= SECTION TITLE ================= */
const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-semibold tracking-widest">{title}</h2>
    <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
  </div>
);

/* ================= MAIN ================= */
export default function App() {
  return (
    <div className="relative text-white font-sans">
      <Background />

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-7xl font-semibold leading-none">
              ASHISH <br />
              <span className="text-gray-300">KUMAR</span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-2xl">
              DATA SCIENCE & MACHINE LEARNING FOCUSED COMPUTER SCIENCE UNDERGRADUATE
              WITH PRACTICAL EXPERIENCE IN DATA ANALYSIS, MODEL BUILDING, AND
              REAL-WORLD AI SYSTEM DEVELOPMENT.
            </p>

            <div className="flex gap-6 mt-8 text-gray-400">
              <Mail />
              <Github />
              <Linkedin />
            </div>
          </div>

          <motion.img
            src={profile}
            alt="Ashish Kumar"
            className="w-72 h-72 rounded-full border border-white/20
                       shadow-[0_0_140px_rgba(0,180,255,0.6)]"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20">
        <SectionTitle title="EXPERIENCE" />
        <div className="max-w-6xl mx-auto px-10">
          <Card3D>
            <div className="p-8 space-y-3">
              <div className="flex items-center gap-3">
                <Briefcase className="text-cyan-300" />
                <h3 className="text-xl">MACHINE LEARNING INTERN (ACADEMIC PROJECTS)</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Worked on multiple end-to-end machine learning projects involving
                real-world datasets. Responsibilities included data cleaning,
                exploratory data analysis, feature engineering, model training,
                evaluation, and performance optimization.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Implemented regression & classification algorithms</li>
                <li>• Tuned hyperparameters to improve accuracy & F1-score</li>
                <li>• Collaborated on project documentation & results analysis</li>
              </ul>
            </div>
          </Card3D>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <SectionTitle title="SKILLS" />
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-10">
          <Skill icon={<Code />} title="PROGRAMMING" text="Python, SQL, Java, Data Structures, Problem Solving" />
          <Skill icon={<Brain />} title="DATA SCIENCE" text="EDA, Feature Engineering, Statistics, Data Visualization" />
          <Skill icon={<Cpu />} title="MACHINE LEARNING" text="Regression, Classification, Clustering, Model Evaluation" />
          <Skill icon={<Database />} title="DEEP LEARNING" text="CNN Architectures, TensorFlow, PyTorch, OpenCV" />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20">
        <SectionTitle title="ACHIEVEMENTS" />
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-10">
          <Achievement icon={<Trophy />} title="3751" desc="TCS CODEVITA GLOBAL RANK AMONG THOUSANDS OF PARTICIPANTS" />
          <Achievement icon={<Award />} title="IBM CERTIFIED" desc="DATA SCIENCE PROFESSIONAL CERTIFICATION" />
          <Achievement icon={<Award />} title="UDEMY BOOTCAMP" desc="FULL APP DEVELOPMENT TRAINING PROGRAM" />
          <Achievement icon={<GraduationCap />} title="8.19 CGPA" desc="B.TECH IN COMPUTER SCIENCE & ENGINEERING" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20">
        <SectionTitle title="PROJECTS" />
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12">
          <Project
            title="AI-BASED POLLUTION ROUTE OPTIMIZATION"
            github="https://github.com/your-repo"
            text="Designed a machine learning solution that analyzes environmental pollution data
                  to recommend optimal travel routes with reduced pollution exposure.
                  Included data preprocessing, feature selection, and predictive modeling."
          />
          <Project
            title="RETINAL DISEASE DETECTION (DEEP LEARNING)"
            github="https://github.com/your-repo"
            text="Developed a CNN-based deep learning model for automated retinal disease
                  classification using medical images, data augmentation, and performance tuning."
          />
          <Project
            title="BUS DRIVEN AI – SMART TRANSPORT SYSTEM"
            github="https://github.com/your-repo"
            text="Built predictive models to estimate crowd density and bus delays using
                  historical transport data, improving route planning and scheduling."
          />
          <Project
            title="ELDERLY ASSISTANCE DATA PLATFORM"
            github="https://github.com/your-repo"
            text="Created a data-driven application to monitor elderly user activity,
                  detect anomalies, and trigger emergency alerts using analytics workflows."
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="min-h-screen flex items-center justify-center text-center px-10">
        <div>
          <h2 className="text-4xl tracking-widest mb-4">CONTACT</h2>
          <p className="text-gray-400 mb-8">
            OPEN FOR INTERNSHIPS, RESEARCH ROLES, AND COLLABORATIVE AI PROJECTS.
          </p>

          <form
            action="https://formspree.io/f/mreaqppa"
            method="POST"
            className="max-w-lg mx-auto space-y-4"
          >
            <input className="w-full p-4 bg-black/60 border border-white/10 rounded-xl" name="name" placeholder="NAME" />
            <input className="w-full p-4 bg-black/60 border border-white/10 rounded-xl" name="email" placeholder="EMAIL" />
            <textarea className="w-full p-4 bg-black/60 border border-white/10 rounded-xl" rows="4" name="message" placeholder="MESSAGE" />
            <button className="px-10 py-4 bg-white text-black rounded-xl">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */
const Skill = ({ icon, title, text }) => (
  <Card3D>
    <div className="p-8 text-center">
      <div className="text-cyan-300 mb-3">{icon}</div>
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  </Card3D>
);

const Achievement = ({ icon, title, desc }) => (
  <Card3D>
    <div className="p-8 text-center">
      <div className="text-cyan-300 mb-3">{icon}</div>
      <h3 className="text-2xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </Card3D>
);

const Project = ({ title, text, github }) => (
  <Card3D>
    <div className="p-8 relative group space-y-3">
      <h3 className="text-xl">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-cyan-300 opacity-0
                   group-hover:opacity-100 transition"
      >
        <ExternalLink size={16} /> GITHUB
      </a>
    </div>
  </Card3D>
);