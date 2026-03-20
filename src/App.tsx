import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Container, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Layers,
  Activity,
  Server
} from 'lucide-react';
import { motion } from 'motion/react';

const RESUME_DATA = {
  name: "Wasimahamad Mulla",
  title: "Cloud & DevOps Engineer",
  location: "Pune, Maharashtra",
  phone: "8007370003",
  email: "wasimahamad.mulla@gmail.com",
  linkedin: "linkedin.com/in/wasimahamad",
  summary: "Results-driven DevOps Engineer with 4+ years of experience designing, building, and operating cloud-native platforms on AWS and Azure. Expertise in Kubernetes, Terraform (IaC), CI/CD automation, DevSecOps, and observability.",
  skills: [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP"], icon: Cloud },
    { category: "Containers & Orchestration", items: ["Docker", "Kubernetes", "EKS", "AKS", "Helm"], icon: Container },
    { category: "Infrastructure as Code", items: ["Terraform", "ARM Templates"], icon: Server },
    { category: "CI/CD & Version Control", items: ["Jenkins", "Azure DevOps", "GitHub Actions", "Argo CD"], icon: Activity },
    { category: "Security & Monitoring", items: ["IAM", "SonarQube", "CloudWatch", "Prometheus", "Grafana"], icon: ShieldCheck },
    { category: "Programming", items: ["Python", "Shell Scripting"], icon: Terminal },
    { category: "AI/ML", items: ["SageMaker", "Bedrock", "MLOps"], icon: Cpu }
  ],
  experience: [
    {
      company: "Enhanced Software Solutions Pvt. Ltd.",
      role: "DevOps Engineer",
      period: "June 2023 – September 2025",
      location: "Thane, India",
      highlights: [
        "Engineered and managed AWS/Azure infrastructure using Terraform, improving production reliability and scalability.",
        "Led migration of on-prem workloads to Kubernetes (EKS/AKS) and standardized deployments with Docker and Helm.",
        "Implemented Azure DevOps CI/CD pipelines and proactive monitoring with CloudWatch and Azure Monitor.",
        "Accelerated release cycles by 70% and reduced cloud total cost of ownership by 60%."
      ]
    },
    {
      company: "Vinayak IT Solutions Kolhapur",
      role: "Junior Software Engineer",
      period: "July 2020 – June 2022",
      location: "Kolhapur, India",
      highlights: [
        "Developed a cloud-based POS platform on AWS supporting 10+ restaurant locations and 2K+ daily transactions.",
        "Built serverless event workflows with Lambda, SNS, and SQS for real-time order processing and notifications.",
        "Improved platform scalability and performance, achieving 99.99% uptime and 40% lower peak-time latency."
      ]
    }
  ],
  projects: [
    {
      title: "DevSecOps & IAM Governance Automation",
      tech: ["Azure DevOps", "Okta", "Terraform", "SonarQube"],
      details: [
        "Built an enterprise-grade DevSecOps pipeline in Azure DevOps to automate identity lifecycle and access governance using Okta Identity Governance.",
        "Implemented IaC (Terraform) for HIPAA-aligned change management and auditable deployments.",
        "Integrated SonarQube static analysis into CI pipelines to identify security vulnerabilities early in the SDLC.",
        "Established Git-based workflows with mandatory peer reviews for reliable audit trails.",
        "Impact: 40% improvement in code quality and enhanced security posture for sensitive data."
      ]
    },
    {
      title: "Cloud-Native ETL Platform on AWS",
      tech: ["AWS Glue", "EMR", "Step Functions", "Lambda", "S3"],
      details: [
        "Architected a hybrid ETL platform using AWS Glue and Amazon EMR (Spark) for large-scale data processing.",
        "Orchestrated workloads with AWS Step Functions, dynamically provisioning EMR clusters based on complexity.",
        "Built a scalable ingestion layer using S3 and Lambda with a medallion architecture (raw, processed zones).",
        "Implemented CloudWatch alarms and SNS for real-time failure notifications and high availability.",
        "Impact: 40% cost reduction through serverless-first architecture and improved pipeline stability."
      ]
    },
    {
      title: "Cloud Platform Modernization",
      client: "Abbott India Ltd.",
      tech: ["AWS EKS", "Terraform", "Docker", "CI/CD"],
      details: [
        "Modernized 10+ mission-critical on-prem applications into microservices on Amazon EKS.",
        "Built a secure AWS landing zone using Terraform.",
        "Enhanced CI/CD pipelines for Docker-based builds and automated Kubernetes rollouts."
      ]
    },
    {
      title: "Automated Azure Infrastructure",
      tech: ["Azure", "Terraform", "AKS", "Azure DevOps"],
      details: [
        "Provisioned Azure infrastructure using modular Terraform with secure remote state.",
        "Built Azure DevOps pipelines for Terraform plan/apply and microservices releases.",
        "Deployed Dockerized services to AKS via ACR and Helm with autoscaling."
      ]
    }
  ],
  education: [
    { degree: "PG-DAC", school: "Postgraduate Diploma in Advanced Computing", period: "2022 – 2023" },
    { degree: "Bachelor of Engineering", school: "Shivaji University", period: "2015 – 2019" }
  ],
  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Tools aligned: AWS SageMaker, MLOps, K8sGPT, LangChain"
  ]
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 shadow-sm">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <h2 className="text-3xl font-black text-zinc-900 tracking-tight">{children}</h2>
    <div className="h-px flex-1 bg-zinc-100 ml-6"></div>
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen tech-grid selection:bg-emerald-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center font-bold text-white">W</div>
            <span className="font-mono text-sm font-medium text-zinc-900 hidden sm:block">wasimahamad.mulla</span>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-zinc-500">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hero-gradient -z-10 pointer-events-none"></div>

        {/* Hero Section */}
        <section id="about" className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-zinc-900 mb-8 tracking-tight leading-[0.9]">
              {RESUME_DATA.name}
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-600 font-mono mb-10 font-bold">
              {RESUME_DATA.title}
            </p>
            <p className="max-w-2xl text-xl text-zinc-500 leading-relaxed mb-12 font-medium">
              {RESUME_DATA.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-zinc-900/20 hover:shadow-emerald-600/20"
              >
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
              <div className="flex gap-3">
                <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" rel="noreferrer" className="p-4 bg-white border border-zinc-200 rounded-xl hover:border-emerald-500 transition-all text-zinc-400 hover:text-emerald-600 shadow-sm">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 bg-white border border-zinc-200 rounded-xl hover:border-emerald-500 transition-all text-zinc-400 hover:text-emerald-600 shadow-sm">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-40">
          <SectionHeading icon={Layers}>Technical Expertise</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESUME_DATA.skills.map((skill, idx) => (
              <motion.div 
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-50 text-zinc-600 text-xs font-bold font-mono rounded-lg border border-zinc-100 group-hover:border-emerald-200 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="mb-40">
          <SectionHeading icon={Briefcase}>Professional Journey</SectionHeading>
          <div className="space-y-16">
            {RESUME_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-10 border-l-2 border-zinc-100"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-emerald-500 shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-zinc-900">{exp.role}</h3>
                    <p className="text-emerald-600 font-bold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-zinc-500 bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                      {exp.period}
                    </span>
                    <p className="text-xs font-bold text-zinc-400 mt-3 flex items-center justify-end gap-1 uppercase tracking-widest">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-500 leading-relaxed font-medium">
                      <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-40">
          <SectionHeading icon={Code2}>Key Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card flex flex-col h-full group"
              >
                <div className="p-10 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black text-zinc-900 group-hover:text-emerald-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-zinc-50 group-hover:bg-emerald-50 transition-colors">
                      <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600" />
                    </div>
                  </div>
                  {project.client && (
                    <p className="text-xs font-bold text-emerald-600 mb-6 font-mono uppercase tracking-widest">Client: {project.client}</p>
                  )}
                  <ul className="space-y-4 mb-10">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-zinc-500 text-sm leading-relaxed flex gap-3 font-medium">
                        <span className="text-emerald-500 font-bold">/</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-zinc-50/50 border-t border-zinc-100 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-white text-zinc-500 text-[10px] uppercase tracking-widest font-black rounded-lg border border-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
          <section>
            <SectionHeading icon={GraduationCap}>Education</SectionHeading>
            <div className="space-y-8">
              {RESUME_DATA.education.map(edu => (
                <div key={edu.degree} className="glass-card p-8">
                  <h3 className="text-xl font-black text-zinc-900 mb-2">{edu.degree}</h3>
                  <p className="text-zinc-500 font-medium mb-4">{edu.school}</p>
                  <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <SectionHeading icon={Award}>Certifications</SectionHeading>
            <div className="space-y-4">
              {RESUME_DATA.certifications.map(cert => (
                <div key={cert} className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:border-emerald-200 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Award className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                  </div>
                  <p className="text-zinc-700 font-bold">{cert}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer / Contact */}
        <footer className="pt-32 border-t border-zinc-100 text-center">
          <h2 className="text-5xl font-black text-zinc-900 mb-6 tracking-tight">Let's build something scalable.</h2>
          <p className="text-zinc-400 mb-12 max-w-lg mx-auto text-lg font-medium">
            Currently open to DevOps and Cloud Engineering roles. Feel free to reach out for collaborations or just a tech chat.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            <a href={`mailto:${RESUME_DATA.email}`} className="text-zinc-400 hover:text-emerald-600 transition-all flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-zinc-50 group-hover:bg-emerald-50 transition-all">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold font-mono uppercase tracking-widest">Email</span>
            </a>
            <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-600 transition-all flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-zinc-50 group-hover:bg-emerald-50 transition-all">
                <Linkedin className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold font-mono uppercase tracking-widest">LinkedIn</span>
            </a>
            <div className="text-zinc-400 flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-zinc-50">
                <Phone className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold font-mono uppercase tracking-widest">{RESUME_DATA.phone}</span>
            </div>
          </div>
          <p className="text-zinc-300 text-xs font-bold font-mono uppercase tracking-[0.3em] pb-10">
            &copy; {new Date().getFullYear()} Wasimahamad Mulla
          </p>
        </footer>
      </main>
    </div>
  );
}
