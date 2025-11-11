import {
  Code2,
  Braces,
  Palette,
  Database,
  Layers,
  Smartphone,
  PenTool,
  FileSpreadsheet,
  FileText,
  TerminalSquare,
} from "lucide-react";

const frontendSkills = [
  { name: "HTML", Icon: Code2, color: "from-orange-500 to-orange-600" },
  { name: "CSS", Icon: Palette, color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", Icon: Braces, color: "from-yellow-400 to-yellow-500" },
  { name: "React", Icon: Layers, color: "from-cyan-400 to-cyan-500" },
  { name: "Tailwind CSS", Icon: Palette, color: "from-sky-400 to-sky-500" },
];

const mobileSkills = [
  { name: "Flutter", Icon: Smartphone, color: "from-sky-500 to-blue-600" },
  { name: "Dart", Icon: Braces, color: "from-blue-400 to-blue-500" },
  { name: "Figma", Icon: Palette, color: "from-purple-400 to-purple-500" },
  { name: "Canva", Icon: Palette, color: "from-pink-500 to-pink-600" },
];

const backendSkills = [
  { name: "PHP", Icon: Layers, color: "from-indigo-400 to-indigo-500" },
  { name: "Laravel", Icon: PenTool, color: "from-red-500 to-red-600" },
  { name: "MySQL", Icon: Database, color: "from-green-500 to-green-600" },
  { name: "API Integration", Icon: TerminalSquare, color: "from-cyan-500 to-teal-500" },
];

const toolSkills = [
  { name: "Excel", Icon: FileSpreadsheet, color: "from-green-600 to-green-700" },
  { name: "Word", Icon: FileText, color: "from-blue-600 to-blue-700" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-7xl mx-auto">
          {/* Judul Section */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Front End Web Developer
          </h2>

          <p
            className="text-cyan-300/70 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Keterampilan lengkap untuk membangun aplikasi web dan mobile modern
          </p>

          {/* FRONTEND SKILLS */}
          <SkillSection
            title="Front End Development"
            skills={frontendSkills}
            gradient="from-cyan-500/20 to-blue-500/20"
            border="border-cyan-500/20 hover:border-cyan-400/40"
            shadow="hover:shadow-cyan-500/20"
          />

          {/* MOBILE DEVELOPMENT */}
          <SkillSection
            title="Mobile Development"
            skills={mobileSkills}
            gradient="from-teal-500/20 to-green-500/20"
            border="border-teal-500/20 hover:border-teal-400/40"
            shadow="hover:shadow-teal-500/20"
          />

          {/* BACKEND DEVELOPMENT */}
          <SkillSection
            title="Back End Development"
            skills={backendSkills}
            gradient="from-purple-500/20 to-pink-500/20"
            border="border-purple-500/20 hover:border-purple-400/40"
            shadow="hover:shadow-purple-500/20"
          />

          {/* TOOLS */}
          <SkillSection
            title="Tools & Productivity"
            skills={toolSkills}
            gradient="from-purple-500/20 to-pink-500/20"
            border="border-purple-500/20 hover:border-purple-400/40"
            shadow="hover:shadow-purple-500/20"
          />
        </div>
      </div>
    </section>
  );
};

/* Reusable SkillSection Component */
const SkillSection = ({ title, skills, gradient, border, shadow }) => (
  <div className="mb-12 sm:mb-16">
    <h3
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-8 sm:mb-12"
      data-aos="fade-up"
    >
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative"
          data-aos="zoom-in"
          data-aos-delay={index * 50}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}
          />
          <div
            className={`relative bg-black/40 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border ${border} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${shadow}`}
          >
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg text-center">
                {skill.name}
              </h3>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
