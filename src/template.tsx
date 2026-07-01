import {
	Activity,
	Award,
	BadgeCheck,
	BookOpen,
	Briefcase,
	Bug,
	Building2,
	Calendar,
	ChevronDown,
	Clock,
	Crosshair,
	FolderGit,
	GraduationCap,
	Mail,
	MapPin,
	Menu,
	Phone,
	Shield,
	Terminal,
	X,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ============================================================================
 * TYPES
 * ========================================================================== */

export type DeveloperDarkProfile = {
	name: string;
	title: string;
	summary: string;
	email: string;
	phone: string;
	location: string;
};

export type DeveloperDarkExperience = {
	company: string;
	role: string;
	duration: string;
	responsibilities: string[];
};

export type DeveloperDarkEducation = {
	degree: string;
	institution: string;
	year: string;
	highlights: string[];
};

export type DeveloperDarkProject = {
	title: string;
	description: string;
	techStack: string[];
	icon: string;
};

export type DeveloperDarkSkillCategory = {
	name: string;
	skills: string[];
};

export type DeveloperDarkCertification = {
	name: string;
	issuer: string;
	date: string;
	credentialId?: string;
};

export type DeveloperDarkPortfolioData = {
	profile: DeveloperDarkProfile;
	experience: DeveloperDarkExperience[];
	education: DeveloperDarkEducation[];
	projects: DeveloperDarkProject[];
	skills: DeveloperDarkSkillCategory[];
	certifications: DeveloperDarkCertification[];
};

/* ============================================================================
 * DEFAULT (DUMMY) DATA — browse screen uses this, do not remove
 * ========================================================================== */

export const DEFAULT_DATA: DeveloperDarkPortfolioData = {
	profile: {
		name: "Arjun Mehta",
		title: "SOC Analyst · Ethical Hacker · Security Engineer",
		summary:
			"Cybersecurity professional with 5+ years of experience in threat detection, incident response, and vulnerability management. Specialized in SIEM operations, penetration testing, and security architecture design.",
		email: "arjun.mehta@protonmail.com",
		phone: "+91 98765 43210",
		location: "Bengaluru, Karnataka",
	},
	experience: [
		{
			company: "CyberShield Inc.",
			role: "Senior SOC Analyst",
			duration: "2023 — Present",
			responsibilities: [
				"Led Tier-2/3 incident response for multi-cloud enterprise environments",
				"Deployed SIEM correlation rules in Splunk, boosting detection coverage 60%",
				"Ran quarterly vulnerability assessments and penetration tests on 200+ endpoints",
				"Mentored junior analysts in threat hunting and EDR investigations",
				"Authored IR playbooks for ransomware, APT, and insider threats",
			],
		},
		{
			company: "NetDefend Solutions",
			role: "SOC Analyst II",
			duration: "2021 — 2023",
			responsibilities: [
				"Monitored 24/7 SIEM operations using QRadar and Elasticsearch",
				"Performed deep packet analysis with Wireshark for incident investigations",
				"Managed Nessus and OpenVAS scanning campaigns across hybrid infra",
				"Built Python automation scripts to triage alerts, cutting false positives 35%",
				"Collaborated with blue team during purple team exercises",
			],
		},
		{
			company: "SecureBase Consulting",
			role: "Junior Security Analyst",
			duration: "2019 — 2021",
			responsibilities: [
				"Conducted Tier-1 alert triage and incident classification",
				"Performed Nmap scans and vulnerability assessments for clients",
				"Assisted with security awareness training and phishing simulations",
				"Documented security policies aligned with NIST CSF and ISO 27001",
			],
		},
	],
	education: [
		{
			degree: "M.Tech Cybersecurity",
			institution: "IIT Madras",
			year: "2019",
			highlights: [
				"Network Defense",
				"Cryptography",
				"Threat Intelligence",
				"Security Architecture",
			],
		},
		{
			degree: "B.Tech Computer Science",
			institution: "BITS Pilani",
			year: "2017",
			highlights: [
				"OS Security",
				"Data Structures",
				"Computer Networks",
				"Database Security",
			],
		},
	],
	projects: [
		{
			title: "Intrusion Detection System",
			description:
				"ML-based IDS trained on CIC-IDS2017 dataset with 99.2% accuracy for DDoS, brute force, and port scan detection.",
			techStack: ["Python", "Scikit-learn", "Scapy", "Linux", "Docker"],
			icon: "🛡️",
		},
		{
			title: "Automated Vulnerability Scanner",
			description:
				"Multi-threaded scanner with authenticated enterprise scans, CVE references, and PDF remediation reports.",
			techStack: ["Python", "Nmap", "Nessus API", "ReportLab", "Bash"],
			icon: "🔍",
		},
		{
			title: "SIEM Dashboard — Threat Intel Feed",
			description:
				"Splunk dashboard integrating MISP threat feeds, correlating IOCs with internal telemetry for proactive hunting.",
			techStack: ["Splunk", "MISP", "Python", "REST APIs", "Grafana"],
			icon: "📊",
		},
		{
			title: "Phishing Simulation Platform",
			description:
				"Internal platform for security awareness training with campaign management, click tracking, and reporting.",
			techStack: ["React", "Node.js", "MongoDB", "SendGrid", "Tailwind"],
			icon: "📧",
		},
		{
			title: "Network Traffic Analyzer",
			description:
				"Real-time packet capture, decryption, and visualization with protocol analysis and payload flagging.",
			techStack: ["Python", "Wireshark", "DPKT", "Matplotlib", "Flask"],
			icon: "🌐",
		},
		{
			title: "Endpoint Detection & Response Tool",
			description:
				"Lightweight Linux EDR agent monitoring process execution, file integrity, and suspicious network connections.",
			techStack: ["Go", "Linux", "gRPC", "Elasticsearch", "Docker"],
			icon: "⚙️",
		},
	],
	skills: [
		{
			name: "Security Tools",
			skills: [
				"Wireshark",
				"Nmap",
				"Metasploit",
				"Burp Suite",
				"Splunk",
				"Nessus",
				"Snort",
				"Ghidra",
			],
		},
		{
			name: "Programming",
			skills: ["Python", "Bash", "C", "JavaScript", "Go", "PowerShell"],
		},
		{
			name: "Systems",
			skills: [
				"Linux (Kali/Parrot)",
				"Windows Security",
				"Docker",
				"Kubernetes",
				"Active Directory",
			],
		},
		{
			name: "Networking",
			skills: [
				"TCP/IP",
				"Firewalls (Palo Alto, F5)",
				"VPNs",
				"DNS/DHCP",
				"BGP/OSPF",
				"802.1X/NAC",
			],
		},
	],
	certifications: [
		{
			name: "Certified Ethical Hacker (CEH)",
			issuer: "EC-Council",
			date: "2023",
			credentialId: "CEH-2023-XXXX",
		},
		{
			name: "CompTIA Security+",
			issuer: "CompTIA",
			date: "2021",
			credentialId: "COMPTIA-2021-XXXX",
		},
		{
			name: "GIAC Security Essentials (GSEC)",
			issuer: "SANS / GIAC",
			date: "2022",
			credentialId: "GIAC-2022-XXXX",
		},
		{
			name: "Cisco Certified CyberOps Associate",
			issuer: "Cisco",
			date: "2022",
			credentialId: "CISCO-2022-XXXX",
		},
		{
			name: "OSCP — Offensive Security Certified Professional",
			issuer: "Offensive Security",
			date: "2024",
			credentialId: "OSCP-2024-XXXX",
		},
		{
			name: "AWS Certified Security – Specialty",
			issuer: "Amazon Web Services",
			date: "2023",
			credentialId: "AWS-2023-XXXX",
		},
	],
};

/* ============================================================================
 * THEME COLORS — injected as CSS vars, no tailwind config needed
 * ========================================================================== */

const CYBER_STYLES = `
  .cyber-wrap { background-color: #0a0e1a; color: #8892b0; }
  .cyber-wrap * { box-sizing: border-box; }

  /* backgrounds */
  .bg-cyber-dark   { background-color: #0a0e1a; }
  .bg-cyber-navy   { background-color: #0d1117; }
  .bg-cyber-panel  { background-color: #161b2e; }
  .bg-cyber-dark\\/80  { background-color: rgba(10,14,26,0.80); }
  .bg-cyber-dark\\/50  { background-color: rgba(10,14,26,0.50); }
  .bg-cyber-navy\\/50  { background-color: rgba(13,17,23,0.50); }
  .bg-cyber-navy\\/60  { background-color: rgba(13,17,23,0.60); }
  .bg-cyber-navy\\/30  { background-color: rgba(13,17,23,0.30); }
  .bg-cyber-dark\\/90  { background-color: rgba(10,14,26,0.90); }
  .bg-cyber-dark\\/95  { background-color: rgba(10,14,26,0.95); }

  /* text */
  .text-cyber-white    { color: #e8eaf6; }
  .text-cyber-green    { color: #00ff41; }
  .text-cyber-cyan     { color: #00d4ff; }
  .text-cyber-text     { color: #8892b0; }
  .text-cyber-text-muted { color: #6a7590; }
  .text-cyber-text-dim { color: #3d4f6e; }

  /* borders */
  .border-cyber-border  { border-color: #1e2d3d; }
  .border-cyber-green\\/20 { border-color: rgba(0,255,65,0.20); }
  .border-cyber-green\\/30 { border-color: rgba(0,255,65,0.30); }
  .border-cyber-green\\/40 { border-color: rgba(0,255,65,0.40); }
  .border-cyber-green\\/60 { border-color: rgba(0,255,65,0.60); }
  .border-cyber-green\\/15 { border-color: rgba(0,255,65,0.15); }
  .border-cyber-green\\/25 { border-color: rgba(0,255,65,0.25); }
  .border-cyber-cyan\\/30  { border-color: rgba(0,212,255,0.30); }
  .border-cyber-cyan\\/15  { border-color: rgba(0,212,255,0.15); }

  /* accent fills */
  .bg-cyber-green      { background-color: #00ff41; }
  .bg-cyber-cyan       { background-color: #00d4ff; }
  .bg-cyber-red        { background-color: #ff4444; }
  .bg-cyber-amber      { background-color: #ffaa00; }
  .bg-cyber-green\\/5  { background-color: rgba(0,255,65,0.05); }
  .bg-cyber-green\\/10 { background-color: rgba(0,255,65,0.10); }
  .bg-cyber-green\\/15 { background-color: rgba(0,255,65,0.15); }
  .bg-cyber-green\\/20 { background-color: rgba(0,255,65,0.20); }
  .bg-cyber-cyan\\/5   { background-color: rgba(0,212,255,0.05); }
  .bg-cyber-cyan\\/10  { background-color: rgba(0,212,255,0.10); }
  .bg-cyber-cyan\\/15  { background-color: rgba(0,212,255,0.15); }
  .bg-cyber-red\\/60   { background-color: rgba(255,68,68,0.60); }
  .bg-cyber-amber\\/60 { background-color: rgba(255,170,0,0.60); }
  .bg-cyber-green\\/60 { background-color: rgba(0,255,65,0.60); }

  /* glow */
  .glow-green { box-shadow: 0 0 20px rgba(0,255,65,0.15); }
  .text-glow-green { text-shadow: 0 0 10px rgba(0,255,65,0.5); }

  /* hover overrides */
  .hover\\:text-cyber-green:hover  { color: #00ff41; }
  .hover\\:text-cyber-cyan:hover   { color: #00d4ff; }
  .hover\\:text-cyber-white:hover  { color: #e8eaf6; }
  .hover\\:bg-cyber-panel:hover    { background-color: #161b2e; }
  .hover\\:bg-cyber-navy:hover     { background-color: #0d1117; }
  .hover\\:bg-cyber-green\\/10:hover { background-color: rgba(0,255,65,0.10); }
  .hover\\:bg-cyber-green\\/15:hover { background-color: rgba(0,255,65,0.15); }
  .hover\\:bg-cyber-green\\/20:hover { background-color: rgba(0,255,65,0.20); }
  .hover\\:bg-cyber-cyan\\/15:hover  { background-color: rgba(0,212,255,0.15); }
  .hover\\:border-cyber-green\\/20:hover { border-color: rgba(0,255,65,0.20); }
  .hover\\:border-cyber-green\\/30:hover { border-color: rgba(0,255,65,0.30); }
  .hover\\:border-cyber-green\\/60:hover { border-color: rgba(0,255,65,0.60); }
  .hover\\:border-cyber-cyan\\/30:hover  { border-color: rgba(0,212,255,0.30); }
  .hover\\:border-cyber-green\\/25:hover { border-color: rgba(0,255,65,0.25); }
  .group:hover .group-hover\\:text-cyber-green { color: #00ff41; }
  .group:hover .group-hover\\:bg-cyber-green\\/15 { background-color: rgba(0,255,65,0.15); }
  .group:hover .group-hover\\:bg-cyber-cyan\\/15  { background-color: rgba(0,212,255,0.15); }
  .group:hover .group-hover\\:opacity-100 { opacity: 1; }

  /* gradient */
  .from-cyber-green\\/60 { --tw-gradient-from: rgba(0,255,65,0.60); }
  .via-cyber-cyan\\/30   { --tw-gradient-via: rgba(0,212,255,0.30); }

  /* active nav */
  .text-cyber-green.bg-cyber-green\\/10 { background-color: rgba(0,255,65,0.10); }

  /* scanline effect */
  .scanline {
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
    pointer-events: none;
  }
`;

/* ============================================================================
 * CONSTANTS
 * ========================================================================== */

const NAV_ITEMS = [
	{ label: "Profile", href: "#hero", icon: Shield },
	{ label: "Experience", href: "#experience", icon: Briefcase },
	{ label: "Education", href: "#education", icon: GraduationCap },
	{ label: "Projects", href: "#projects", icon: FolderGit },
	{ label: "Skills", href: "#skills", icon: Terminal },
	{ label: "Certs", href: "#certifications", icon: Award },
	{ label: "Contact", href: "#contact", icon: Mail },
];

const RESP_ICONS = [Shield, Crosshair, Bug, Activity, Clock];

const BOOT_LINES = [
	"Initializing security profile...",
	"Loading threat intelligence...",
	"Scanning for vulnerabilities...",
	"Connection established.",
];

/* ============================================================================
 * INTERNAL COMPONENTS
 * ========================================================================== */

function Navbar({ activeSection }: { activeSection: string }) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const h = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", h);
		return () => window.removeEventListener("scroll", h);
	}, []);

	const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		document
			.getElementById(href.replace("#", ""))
			?.scrollIntoView({ behavior: "smooth" });
		setMobileOpen(false);
	};

	return (
		<nav
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				transition: "all 0.3s",
				backgroundColor: scrolled ? "rgba(10,14,26,0.90)" : "transparent",
				borderBottom: scrolled ? "1px solid #1e2d3d" : "1px solid transparent",
				backdropFilter: scrolled ? "blur(12px)" : "none",
			}}
		>
			<div
				style={{
					maxWidth: 1280,
					margin: "0 auto",
					padding: "0 1.5rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: 64,
				}}
			>
				<a
					href="#hero"
					onClick={(e) => go(e, "#hero")}
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						color: "#00ff41",
						fontFamily: "monospace",
						fontSize: 14,
						fontWeight: 700,
						letterSpacing: "0.1em",
						textDecoration: "none",
					}}
				>
					<span style={{ fontSize: 18 }}>{"</>"}</span>
					<span>SEC.PORTFOLIO</span>
				</a>

				<div
					style={{ display: "flex", alignItems: "center", gap: 4 }}
					className="hidden md:flex"
				>
					{NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						const active = activeSection === item.href.replace("#", "");
						return (
							<a
								key={item.label}
								href={item.href}
								onClick={(e) => go(e, item.href)}
								style={{
									display: "flex",
									alignItems: "center",
									gap: 6,
									padding: "8px 12px",
									borderRadius: 6,
									fontSize: 12,
									fontFamily: "monospace",
									textDecoration: "none",
									transition: "all 0.2s",
									color: active ? "#00ff41" : "#6a7590",
									backgroundColor: active
										? "rgba(0,255,65,0.10)"
										: "transparent",
								}}
							>
								<Icon size={14} />
								<span>{item.label}</span>
							</a>
						);
					})}
				</div>

				<button
					type="button"
					onClick={() => setMobileOpen(!mobileOpen)}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: 36,
						height: 36,
						borderRadius: 6,
						border: "none",
						background: "transparent",
						color: "#6a7590",
						cursor: "pointer",
					}}
					className="md:hidden"
				>
					{mobileOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{mobileOpen && (
				<div
					style={{
						backgroundColor: "rgba(10,14,26,0.95)",
						borderTop: "1px solid #1e2d3d",
						padding: "12px 24px",
						backdropFilter: "blur(12px)",
					}}
					className="md:hidden"
				>
					{NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						const active = activeSection === item.href.replace("#", "");
						return (
							<a
								key={item.label}
								href={item.href}
								onClick={(e) => go(e, item.href)}
								style={{
									display: "flex",
									alignItems: "center",
									gap: 12,
									padding: "10px 12px",
									borderRadius: 6,
									fontSize: 14,
									fontFamily: "monospace",
									textDecoration: "none",
									color: active ? "#00ff41" : "#6a7590",
									backgroundColor: active
										? "rgba(0,255,65,0.10)"
										: "transparent",
									marginBottom: 4,
								}}
							>
								<Icon size={16} />
								<span>{item.label}</span>
							</a>
						);
					})}
				</div>
			)}
		</nav>
	);
}

function HeroSection({ profile }: { profile: DeveloperDarkProfile }) {
	const [line, setLine] = useState(0);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const id = setInterval(() => {
			setLine((p) => {
				if (p < BOOT_LINES.length) return p + 1;
				clearInterval(id);
				setTimeout(() => setShow(true), 400);
				return p;
			});
		}, 300);
		return () => clearInterval(id);
	}, []);

	return (
		<section
			id="hero"
			style={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					opacity: 0.03,
					backgroundImage:
						"linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)",
					backgroundSize: "50px 50px",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "25%",
					left: "25%",
					width: 384,
					height: 384,
					background: "rgba(0,255,65,0.05)",
					borderRadius: "50%",
					filter: "blur(60px)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "25%",
					right: "25%",
					width: 384,
					height: 384,
					background: "rgba(0,212,255,0.05)",
					borderRadius: "50%",
					filter: "blur(60px)",
				}}
			/>

			<div
				style={{
					position: "relative",
					zIndex: 10,
					maxWidth: 896,
					margin: "0 auto",
					padding: "0 1.5rem",
					textAlign: "center",
				}}
			>
				{/* Terminal boot */}
				<div
					style={{
						marginBottom: 32,
						maxWidth: 448,
						margin: "0 auto 32px",
						transition: "all 0.7s",
						opacity: show ? 0 : 1,
						transform: show
							? "scale(0.95) translateY(-16px)"
							: "scale(1) translateY(0)",
					}}
				>
					<div
						style={{
							backgroundColor: "#0d1117",
							borderRadius: 8,
							border: "1px solid #1e2d3d",
							overflow: "hidden",
							fontFamily: "monospace",
							fontSize: 12,
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
								padding: "8px 16px",
								backgroundColor: "#161b2e",
								borderBottom: "1px solid #1e2d3d",
							}}
						>
							<div style={{ display: "flex", gap: 6 }}>
								<div
									style={{
										width: 12,
										height: 12,
										borderRadius: "50%",
										backgroundColor: "#ff4444",
									}}
								/>
								<div
									style={{
										width: 12,
										height: 12,
										borderRadius: "50%",
										backgroundColor: "#ffaa00",
									}}
								/>
								<div
									style={{
										width: 12,
										height: 12,
										borderRadius: "50%",
										backgroundColor: "#00ff41",
									}}
								/>
							</div>
							<span style={{ color: "#3d4f6e", marginLeft: 8 }}>
								security-profile — bash
							</span>
						</div>
						<div style={{ padding: 16, textAlign: "left" }}>
							{BOOT_LINES.slice(0, line).map((l, i) => (
								<div key={i} style={{ color: "#00ff41", marginBottom: 4 }}>
									<span style={{ color: "#3d4f6e" }}>{"» "}</span>
									{l}
								</div>
							))}
							{line < BOOT_LINES.length && (
								<div style={{ color: "#00ff41" }}>
									<span style={{ color: "#3d4f6e" }}>{"» "}</span>
									<span style={{ animation: "pulse 1s infinite" }}>▊</span>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Profile */}
				<div
					style={{
						transition: "all 0.7s",
						opacity: show ? 1 : 0,
						transform: show ? "translateY(0)" : "translateY(32px)",
					}}
				>
					<div
						style={{
							marginBottom: 24,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div style={{ position: "relative" }}>
							<div
								style={{
									width: 112,
									height: 112,
									borderRadius: "50%",
									border: "2px solid rgba(0,255,65,0.40)",
									boxShadow: "0 0 20px rgba(0,255,65,0.15)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: "#0d1117",
								}}
							>
								<Terminal size={52} style={{ color: "rgba(0,255,65,0.6)" }} />
							</div>
							<div
								style={{
									position: "absolute",
									bottom: 4,
									right: 4,
									width: 20,
									height: 20,
									borderRadius: "50%",
									backgroundColor: "#00ff41",
									border: "2px solid #0a0e1a",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<div
									style={{
										width: 8,
										height: 8,
										borderRadius: "50%",
										backgroundColor: "#00ff41",
										animation: "pulse 1s infinite",
									}}
								/>
							</div>
						</div>
					</div>

					<h1
						style={{
							fontSize: "clamp(28px, 5vw, 48px)",
							fontWeight: 700,
							color: "#e8eaf6",
							marginBottom: 12,
							letterSpacing: "-0.02em",
						}}
					>
						{profile.name}
					</h1>
					<p
						style={{
							color: "#00ff41",
							fontFamily: "monospace",
							fontSize: 14,
							marginBottom: 16,
							letterSpacing: "0.05em",
							textShadow: "0 0 10px rgba(0,255,65,0.5)",
						}}
					>
						{profile.title}
					</p>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 24,
							color: "#6a7590",
							fontSize: 14,
							fontFamily: "monospace",
							marginBottom: 24,
						}}
					>
						<span style={{ display: "flex", alignItems: "center", gap: 6 }}>
							<MapPin size={14} />
							{profile.location}
						</span>
						<span style={{ display: "flex", alignItems: "center", gap: 6 }}>
							<Mail size={14} />
							{profile.email}
						</span>
					</div>

					<p
						style={{
							color: "#8892b0",
							fontSize: 16,
							maxWidth: 640,
							margin: "0 auto 32px",
							lineHeight: 1.7,
						}}
					>
						{profile.summary}
					</p>

					<button
						type="button"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							padding: "12px 32px",
							backgroundColor: "rgba(0,255,65,0.10)",
							border: "1px solid rgba(0,255,65,0.40)",
							color: "#00ff41",
							fontFamily: "monospace",
							fontSize: 14,
							borderRadius: 8,
							cursor: "pointer",
							transition: "all 0.3s",
							boxShadow: "0 0 20px rgba(0,255,65,0.15)",
						}}
					>
						<Mail size={16} /> Contact Me
					</button>
				</div>

				<div
					style={{
						position: "absolute",
						bottom: 32,
						left: "50%",
						transform: "translateX(-50%)",
						animation: "bounce 1s infinite",
					}}
				>
					<ChevronDown size={24} style={{ color: "#3d4f6e" }} />
				</div>
			</div>
		</section>
	);
}

function ExperienceSection({
	experience,
}: {
	experience: DeveloperDarkExperience[];
}) {
	return (
		<section
			id="experience"
			style={{ position: "relative", padding: "80px 0" }}
		>
			<div style={{ maxWidth: 896, margin: "0 auto", padding: "0 1.5rem" }}>
				<div style={{ marginBottom: 56 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 12,
						}}
					>
						<div
							style={{
								width: 4,
								height: 24,
								backgroundColor: "#00ff41",
								borderRadius: 2,
							}}
						/>
						<span
							style={{
								color: "#00ff41",
								fontFamily: "monospace",
								fontSize: 12,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							02. Career History
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(22px,4vw,30px)",
							fontWeight: 700,
							color: "#e8eaf6",
						}}
					>
						Professional Experience
					</h2>
				</div>

				<div style={{ position: "relative" }}>
					<div
						style={{
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							width: 1,
							background:
								"linear-gradient(to bottom, rgba(0,255,65,0.6), rgba(0,212,255,0.3), transparent)",
						}}
					/>
					<div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
						{experience.map((item, idx) => (
							<div key={idx} style={{ position: "relative", paddingLeft: 32 }}>
								<div
									style={{
										position: "absolute",
										left: -5,
										top: 8,
										width: 10,
										height: 10,
										borderRadius: "50%",
										border: "2px solid",
										backgroundColor: idx === 0 ? "#00ff41" : "#0a0e1a",
										borderColor: idx === 0 ? "rgba(0,255,65,0.5)" : "#1e2d3d",
										boxShadow:
											idx === 0 ? "0 0 8px rgba(0,255,65,0.4)" : "none",
									}}
								/>
								<div
									style={{
										backgroundColor: "rgba(13,17,23,0.50)",
										border: "1px solid #1e2d3d",
										borderRadius: 12,
										padding: "20px 24px",
										transition: "border-color 0.3s",
									}}
								>
									<div
										style={{
											display: "flex",
											flexWrap: "wrap",
											justifyContent: "space-between",
											gap: 8,
											marginBottom: 16,
										}}
									>
										<div>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: 8,
													marginBottom: 4,
												}}
											>
												<Building2 size={16} style={{ color: "#00d4ff" }} />
												<span
													style={{
														color: "#e8eaf6",
														fontWeight: 600,
														fontSize: 16,
													}}
												>
													{item.company}
												</span>
											</div>
											<div
												style={{
													color: "#00ff41",
													fontFamily: "monospace",
													fontSize: 13,
												}}
											>
												{item.role}
											</div>
										</div>
										<span
											style={{
												color: "#6a7590",
												fontFamily: "monospace",
												fontSize: 12,
											}}
										>
											{item.duration}
										</span>
									</div>
									<ul
										style={{
											listStyle: "none",
											padding: 0,
											margin: 0,
											display: "flex",
											flexDirection: "column",
											gap: 6,
										}}
									>
										{item.responsibilities.map((r, i) => {
											const I = RESP_ICONS[i % RESP_ICONS.length];
											return (
												<li
													key={i}
													style={{
														display: "flex",
														alignItems: "flex-start",
														gap: 10,
														fontSize: 14,
														color: "#8892b0",
													}}
												>
													<I
														size={13}
														style={{
															flexShrink: 0,
															marginTop: 2,
															color:
																idx === 0 ? "rgba(0,255,65,0.5)" : "#3d4f6e",
														}}
													/>
													<span>{r}</span>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function EducationSection({
	education,
}: {
	education: DeveloperDarkEducation[];
}) {
	return (
		<section
			id="education"
			style={{
				position: "relative",
				padding: "80px 0",
				backgroundColor: "rgba(13,17,23,0.30)",
			}}
		>
			<div style={{ maxWidth: 896, margin: "0 auto", padding: "0 1.5rem" }}>
				<div style={{ marginBottom: 56 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 12,
						}}
					>
						<div
							style={{
								width: 4,
								height: 24,
								backgroundColor: "#00d4ff",
								borderRadius: 2,
							}}
						/>
						<span
							style={{
								color: "#00d4ff",
								fontFamily: "monospace",
								fontSize: 12,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							03. Education
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(22px,4vw,30px)",
							fontWeight: 700,
							color: "#e8eaf6",
						}}
					>
						Academic Background
					</h2>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: 24,
					}}
				>
					{education.map((edu, i) => (
						<div
							key={i}
							style={{
								backgroundColor: "rgba(10,14,26,0.80)",
								border: "1px solid #1e2d3d",
								borderRadius: 12,
								padding: 24,
								transition: "border-color 0.3s",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									gap: 12,
									marginBottom: 16,
								}}
							>
								<div
									style={{
										padding: 10,
										backgroundColor: "rgba(0,212,255,0.10)",
										borderRadius: 8,
									}}
								>
									<GraduationCap size={20} style={{ color: "#00d4ff" }} />
								</div>
								<div>
									<h3
										style={{
											color: "#e8eaf6",
											fontWeight: 600,
											fontSize: 16,
											marginBottom: 4,
										}}
									>
										{edu.degree}
									</h3>
									<p style={{ color: "#6a7590", fontSize: 14 }}>
										{edu.institution}
									</p>
								</div>
							</div>
							<div
								style={{
									display: "inline-flex",
									alignItems: "center",
									padding: "4px 12px",
									backgroundColor: "#161b2e",
									border: "1px solid #1e2d3d",
									borderRadius: 20,
									marginBottom: 16,
								}}
							>
								<span
									style={{
										color: "#3d4f6e",
										fontFamily: "monospace",
										fontSize: 12,
									}}
								>
									{edu.year}
								</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 6,
									color: "#3d4f6e",
									fontFamily: "monospace",
									fontSize: 12,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									marginBottom: 12,
								}}
							>
								<BookOpen size={12} />
								Key Coursework
							</div>
							<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
								{edu.highlights.map((c, j) => (
									<span
										key={j}
										style={{
											padding: "4px 10px",
											backgroundColor: "rgba(0,212,255,0.05)",
											border: "1px solid rgba(0,212,255,0.15)",
											color: "#00d4ff",
											fontSize: 12,
											fontFamily: "monospace",
											borderRadius: 6,
										}}
									>
										{c}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectsSection({ projects }: { projects: DeveloperDarkProject[] }) {
	return (
		<section id="projects" style={{ position: "relative", padding: "80px 0" }}>
			<div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem" }}>
				<div style={{ marginBottom: 56 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 12,
						}}
					>
						<div
							style={{
								width: 4,
								height: 24,
								backgroundColor: "#00ff41",
								borderRadius: 2,
							}}
						/>
						<span
							style={{
								color: "#00ff41",
								fontFamily: "monospace",
								fontSize: 12,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							04. Security Projects
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(22px,4vw,30px)",
							fontWeight: 700,
							color: "#e8eaf6",
						}}
					>
						Cybersecurity Projects
					</h2>
					<p style={{ color: "#6a7590", marginTop: 8, fontSize: 14 }}>
						Hands-on security tools, frameworks, and platforms.
					</p>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: 20,
					}}
				>
					{projects.map((p, i) => (
						<div
							key={i}
							style={{
								backgroundColor: "rgba(13,17,23,0.60)",
								border: "1px solid #1e2d3d",
								borderRadius: 12,
								padding: 20,
								display: "flex",
								flexDirection: "column",
								transition: "border-color 0.3s",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 12,
									marginBottom: 12,
								}}
							>
								<span style={{ fontSize: 24 }}>{p.icon}</span>
								<h3 style={{ color: "#e8eaf6", fontWeight: 600, fontSize: 15 }}>
									{p.title}
								</h3>
							</div>
							<p
								style={{
									color: "#8892b0",
									fontSize: 14,
									lineHeight: 1.6,
									marginBottom: 16,
									flex: 1,
								}}
							>
								{p.description}
							</p>
							<div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
								{p.techStack.map((t, j) => (
									<span
										key={j}
										style={{
											padding: "2px 8px",
											backgroundColor: "rgba(0,255,65,0.05)",
											border: "1px solid rgba(0,255,65,0.15)",
											color: "#00ff41",
											fontSize: 12,
											fontFamily: "monospace",
											borderRadius: 4,
										}}
									>
										{t}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function SkillsSection({ skills }: { skills: DeveloperDarkSkillCategory[] }) {
	return (
		<section id="skills" style={{ position: "relative", padding: "80px 0" }}>
			<div style={{ maxWidth: 896, margin: "0 auto", padding: "0 1.5rem" }}>
				<div style={{ marginBottom: 56 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 12,
						}}
					>
						<div
							style={{
								width: 4,
								height: 24,
								backgroundColor: "#00ff41",
								borderRadius: 2,
							}}
						/>
						<span
							style={{
								color: "#00ff41",
								fontFamily: "monospace",
								fontSize: 12,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							05. Technical Arsenal
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(22px,4vw,30px)",
							fontWeight: 700,
							color: "#e8eaf6",
						}}
					>
						Skills &amp; Expertise
					</h2>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: 20,
					}}
				>
					{skills.map((cat, i) => (
						<div
							key={i}
							style={{
								backgroundColor: "rgba(13,17,23,0.50)",
								border: "1px solid #1e2d3d",
								borderRadius: 12,
								overflow: "hidden",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									padding: "10px 16px",
									backgroundColor: "#161b2e",
									borderBottom: "1px solid #1e2d3d",
								}}
							>
								<Terminal size={14} style={{ color: "#00ff41" }} />
								<span
									style={{
										color: "#00ff41",
										fontFamily: "monospace",
										fontSize: 12,
										letterSpacing: "0.05em",
									}}
								>
									{cat.name.toUpperCase()}
								</span>
								<div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
									<div
										style={{
											width: 8,
											height: 8,
											borderRadius: "50%",
											backgroundColor: "rgba(255,68,68,0.6)",
										}}
									/>
									<div
										style={{
											width: 8,
											height: 8,
											borderRadius: "50%",
											backgroundColor: "rgba(255,170,0,0.6)",
										}}
									/>
									<div
										style={{
											width: 8,
											height: 8,
											borderRadius: "50%",
											backgroundColor: "rgba(0,255,65,0.6)",
										}}
									/>
								</div>
							</div>
							<div
								style={{
									padding: 16,
									display: "flex",
									flexWrap: "wrap",
									gap: 8,
								}}
							>
								{cat.skills.map((s, j) => (
									<span
										key={j}
										style={{
											padding: "4px 10px",
											backgroundColor: "rgba(0,255,65,0.05)",
											border: "1px solid rgba(0,255,65,0.15)",
											color: "#00ff41",
											fontSize: 12,
											fontFamily: "monospace",
											borderRadius: 6,
											cursor: "default",
										}}
									>
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function CertificationsSection({
	certifications,
}: {
	certifications: DeveloperDarkCertification[];
}) {
	return (
		<section
			id="certifications"
			style={{
				position: "relative",
				padding: "80px 0",
				backgroundColor: "rgba(13,17,23,0.30)",
			}}
		>
			<div style={{ maxWidth: 896, margin: "0 auto", padding: "0 1.5rem" }}>
				<div style={{ marginBottom: 56 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 12,
						}}
					>
						<div
							style={{
								width: 4,
								height: 24,
								backgroundColor: "#f59e0b",
								borderRadius: 2,
							}}
						/>
						<span
							style={{
								color: "#f59e0b",
								fontFamily: "monospace",
								fontSize: 12,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							06. Certifications
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(22px,4vw,30px)",
							fontWeight: 700,
							color: "#e8eaf6",
						}}
					>
						Security Certifications
					</h2>
					<p style={{ color: "#6a7590", marginTop: 8, fontSize: 14 }}>
						Industry-recognized certifications validating cybersecurity
						expertise.
					</p>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gap: 16,
					}}
				>
					{certifications.map((c, i) => (
						<div
							key={i}
							style={{
								backgroundColor: "rgba(10,14,26,0.80)",
								border: "1px solid #1e2d3d",
								borderRadius: 12,
								padding: 20,
								transition: "all 0.3s",
							}}
						>
							<div
								style={{
									width: 40,
									height: 40,
									borderRadius: 8,
									backgroundColor: "rgba(245,158,11,0.10)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: 16,
								}}
							>
								<Award size={20} style={{ color: "#f59e0b" }} />
							</div>
							<h3
								style={{
									color: "#e8eaf6",
									fontWeight: 600,
									fontSize: 14,
									marginBottom: 12,
									lineHeight: 1.4,
								}}
							>
								{c.name}
							</h3>
							<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: 8,
										fontSize: 12,
										color: "#6a7590",
									}}
								>
									<Building2 size={12} />
									<span>{c.issuer}</span>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: 8,
										fontSize: 12,
										color: "#6a7590",
									}}
								>
									<Calendar size={12} />
									<span>{c.date}</span>
								</div>
								{c.credentialId && (
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: 8,
											fontSize: 12,
											color: "#3d4f6e",
											fontFamily: "monospace",
										}}
									>
										<BadgeCheck size={12} />
										<span
											style={{
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap",
											}}
										>
											{c.credentialId}
										</span>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ContactSection({ profile }: { profile: DeveloperDarkProfile }) {
	return (
		<section
			id="contact"
			style={{
				position: "relative",
				padding: "80px 0",
				backgroundColor: "rgba(13,17,23,0.30)",
			}}
		>
			<div style={{ maxWidth: 672, margin: "0 auto", padding: "0 1.5rem" }}>
				<div style={{ marginBottom: 56 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 12,
						}}
					>
						<div
							style={{
								width: 4,
								height: 24,
								backgroundColor: "#00d4ff",
								borderRadius: 2,
							}}
						/>
						<span
							style={{
								color: "#00d4ff",
								fontFamily: "monospace",
								fontSize: 12,
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							07. Contact
						</span>
					</div>
					<h2
						style={{
							fontSize: "clamp(22px,4vw,30px)",
							fontWeight: 700,
							color: "#e8eaf6",
						}}
					>
						Get In Touch
					</h2>
					<p style={{ color: "#6a7590", marginTop: 8, fontSize: 14 }}>
						Open to security engineering, SOC, and consulting opportunities.
					</p>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
						gap: 16,
					}}
				>
					<a
						href={`mailto:${profile.email}`}
						style={{
							display: "flex",
							alignItems: "center",
							gap: 16,
							backgroundColor: "rgba(10,14,26,0.80)",
							border: "1px solid #1e2d3d",
							borderRadius: 12,
							padding: 20,
							textDecoration: "none",
							transition: "border-color 0.3s",
						}}
					>
						<div
							style={{
								padding: 10,
								backgroundColor: "rgba(0,255,65,0.10)",
								borderRadius: 8,
							}}
						>
							<Mail size={20} style={{ color: "#00ff41" }} />
						</div>
						<div>
							<p
								style={{
									color: "#3d4f6e",
									fontFamily: "monospace",
									fontSize: 11,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									marginBottom: 4,
								}}
							>
								Email
							</p>
							<p
								style={{
									color: "#e8eaf6",
									fontFamily: "monospace",
									fontSize: 14,
								}}
							>
								{profile.email}
							</p>
						</div>
					</a>
					<a
						href={`tel:${profile.phone.replace(/\s/g, "")}`}
						style={{
							display: "flex",
							alignItems: "center",
							gap: 16,
							backgroundColor: "rgba(10,14,26,0.80)",
							border: "1px solid #1e2d3d",
							borderRadius: 12,
							padding: 20,
							textDecoration: "none",
							transition: "border-color 0.3s",
						}}
					>
						<div
							style={{
								padding: 10,
								backgroundColor: "rgba(0,212,255,0.10)",
								borderRadius: 8,
							}}
						>
							<Phone size={20} style={{ color: "#00d4ff" }} />
						</div>
						<div>
							<p
								style={{
									color: "#3d4f6e",
									fontFamily: "monospace",
									fontSize: 11,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									marginBottom: 4,
								}}
							>
								Phone
							</p>
							<p
								style={{
									color: "#e8eaf6",
									fontFamily: "monospace",
									fontSize: 14,
								}}
							>
								{profile.phone}
							</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

function FooterSection({ name }: { name: string }) {
	return (
		<footer
			style={{
				position: "relative",
				borderTop: "1px solid #1e2d3d",
				backgroundColor: "rgba(10,14,26,0.50)",
				padding: "40px 0",
			}}
		>
			<div
				style={{
					maxWidth: 1152,
					margin: "0 auto",
					padding: "0 1.5rem",
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 16,
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						color: "#00ff41",
						fontFamily: "monospace",
						fontSize: 14,
					}}
				>
					<Terminal size={16} />
					<span>SEC.PORTFOLIO</span>
				</div>
				<p style={{ color: "#3d4f6e", fontSize: 14, fontFamily: "monospace" }}>
					© {new Date().getFullYear()} {name} — Built with security in mind
				</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						color: "#3d4f6e",
						fontSize: 12,
						fontFamily: "monospace",
					}}
				>
					<Shield size={14} />
					<span>All systems operational</span>
					<span
						style={{
							width: 8,
							height: 8,
							borderRadius: "50%",
							backgroundColor: "#00ff41",
							display: "inline-block",
							animation: "pulse 1s infinite",
						}}
					/>
				</div>
			</div>
		</footer>
	);
}

/* ============================================================================
 * MAIN EXPORT
 * ========================================================================== */

export default function DeveloperDarkTemplate({
	portfolioData,
}: {
	portfolioData?: DeveloperDarkPortfolioData;
}) {
	const d = portfolioData ?? DEFAULT_DATA;
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const h = () => {
			const ids = NAV_ITEMS.map((n) => n.href.replace("#", ""));
			for (let i = ids.length - 1; i >= 0; i--) {
				const top = document
					.getElementById(ids[i])
					?.getBoundingClientRect().top;
				if (top !== undefined && top <= 150) {
					setActiveSection(ids[i]);
					break;
				}
			}
		};
		window.addEventListener("scroll", h);
		return () => window.removeEventListener("scroll", h);
	}, []);

	return (
		<div
			style={{
				backgroundColor: "#0a0e1a",
				color: "#8892b0",
				minHeight: "100vh",
				position: "relative",
			}}
		>
			<style>{CYBER_STYLES}</style>
			<div
				style={{
					position: "fixed",
					inset: 0,
					zIndex: 9999,
					pointerEvents: "none",
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
				}}
			/>
			<div style={{ position: "relative", zIndex: 10 }}>
				<Navbar activeSection={activeSection} />
				<main>
					<HeroSection profile={d.profile} />
					<ExperienceSection experience={d.experience} />
					<EducationSection education={d.education} />
					<ProjectsSection projects={d.projects} />
					<SkillsSection skills={d.skills} />
					<CertificationsSection certifications={d.certifications} />
					<ContactSection profile={d.profile} />
				</main>
				<FooterSection name={d.profile.name} />
			</div>
		</div>
	);
}
