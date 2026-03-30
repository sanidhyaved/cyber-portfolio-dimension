import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Analyst",
    company: "AXA GBS",
    period: "August 2025 - Present",
    type: "Full-time",
    points: [
      "Performed Vulnerability Assessment and Penetration Testing (VAPT) for web, mobile (Android/iOS), and thick client applications.",
      "Conducted Active Directory penetration testing including privilege escalation, lateral movement, and misconfiguration discovery.",
      "Performed configuration security assessments of firewalls, routers, and switches based on industry security standards.",
      "Executed internal and external network penetration testing to identify exploitable vulnerabilities.",
      "Conducted Security Assessment Framework (SAF) reviews and documented security findings with remediation recommendations.",
      "Used tools including Burp Suite, Nmap, Metasploit, Nessus, and BloodHound during security assessments."
    ],
  },
  {
    title: "Security Analyst",
    company: "Codewits Solutions Pvt. Ltd.",
    period: "July 2022 - November 2024",
    type: "Full-time",
    points: [
      "R&D on the cutting-edge technological product - SaaS Security Posture Management (SSPM).",
      "Extracted and processed security-related data from SaaS applications for analysis within the core system.",
      "Performed Market Intelligence, Data Analysis, and Data Visualization using Excel.",
      "Worked with frameworks including NIST-RMF (800-53), PCI-DSS (v3.2.1 and v4.0), SOC 2, CIS Controls (v8), HIPAA, CIS Google Workspace Foundations Benchmark, and NIST-CSF.",
      "Tools used: Google Workspace, Microsoft 365, Bitbucket, GitHub, Confluence, Jira, Okta, Linux OS, and open-source security tools."
    ],
  },
  {
    title: "Web Application Penetration Tester",
    company: "Freelancing",
    period: "May 2022 - Present",
    type: "Freelance",
    points: [
      "Performed manual web application penetration testing and vulnerability assessments across multiple client environments.",
      "Identified vulnerabilities including XSS, SQL Injection, IDOR, SSRF, and authentication bypass issues.",
      "Prepared detailed vulnerability reports with proof-of-concept and remediation guidance.",
      "Collaborated with developers to validate fixes and mitigate identified vulnerabilities."
    ],
  },
];

const Experience = () => {
  return (
    <section className="section-padding relative" id="experience">
      <div className="gradient-blob w-[400px] h-[400px] bg-accent/10 top-[10%] left-[-150px] animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Where I've
            <br />
            <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-2 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-card glow-border rounded-2xl p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
