const treeData = {
    "name": "Ciberseguridad",
    "nameEn": "Cybersecurity",
    "image": "/static/assets/images/ramas/ciberseguridad.png",
    "description": "Protección de sistemas, redes y programas de ataques digitales.",
    "descriptionEn": "Protection of systems, networks, and programs from digital attacks.",
    "youtube": "https://youtu.be/QP9PV8Kymzo",
    "youtube_label": "ciberseguridad",
    "youtube_labelEn": "cybersecurity",
    "children": [
        {
            "name": "Ofensiva",
            "nameEn": "Offensive",
            "youtube": "https://youtu.be/gMObBie2xkU",
            "youtube_label": "Herramientas de Pentesting",
            "youtube_labelEn": "Pentesting Tools",
            "minLevel": 0,
            "image": "/static/assets/images/ramas/ofensiva.png",
            "description": "La seguridad ofensiva se enfoca en identificar y explotar debilidades en sistemas y redes para mejorar la defensa global. A través de simulaciones de ataques reales y técnicas de hacking ético, esta rama permite a las organizaciones comprender su superficie de riesgo, validar la efectividad de sus controles de seguridad y anticiparse a las tácticas utilizadas por ciberdelincuentes reales.",
            "descriptionEn": "Offensive security focuses on identifying and exploiting weaknesses in systems and networks to improve overall defense. Through simulations of real attacks and ethical hacking techniques, this branch allows organizations to understand their risk surface, validate the effectiveness of their security controls, and anticipate the tactics used by real cybercriminals.",
            "children": [
                {
                    "name": "Pentesting Web",
                    "nameEn": "Web Pentesting",
                    "description": "Dominio especializado en la evaluación de la seguridad de aplicaciones web y servicios en la nube. Se centra en descubrir vulnerabilidades como inyecciones, fallos en la autenticación, exposición de datos sensibles y errores de configuración que puedan comprometer la integridad o privacidad de los usuarios. Es fundamental para garantizar que las aplicaciones expuestas a internet sean resilientes y seguras.",
                    "descriptionEn": "Specialized domain in the security assessment of web applications and cloud services. It focuses on discovering vulnerabilities such as injections, authentication flaws, sensitive data exposure, and configuration errors that could compromise the integrity or privacy of users. It is essential to ensure that internet-exposed applications are resilient and secure.",
                    "children": [
                        {
                            "name": "Burp Suite",
                            "image": "/static/assets/images/aplicaciones/burp_suite.png",
                            "description": "Burp Suite es la plataforma líder para realizar auditorías de seguridad web, proporcionando un conjunto exhaustivo de herramientas para pruebas de penetración tanto manuales como automatizadas. Su núcleo es un proxy interactivo que permite analizar y modificar el tráfico HTTP en tiempo real, facilitando la identificación de vulnerabilidades críticas. Incluye un potente escáner de seguridad, herramientas de mapeo y un ecosistema de extensiones para personalizar el análisis según las necesidades del auditor.",
                            "descriptionEn": "Burp Suite is the leading platform for performing web security audits, providing an exhaustive set of tools for both manual and automated penetration testing. Its core is an interactive proxy that allows for the analysis and modification of HTTP traffic in real-time, facilitating the identification of critical vulnerabilities. It includes a powerful security scanner, mapping tools, and an ecosystem of extensions to customize the analysis according to the auditor's needs.",
                            "url": "https://portswigger.net/burp",
                            "tutorialUrl": "https://portswigger.net/burp/documentation/desktop/getting-started",
                            "reddit": "https://www.reddit.com/r/burpsuite/",
                            "youtube": "https://youtu.be/jEngUxa_jSo",
                            "youtube_label": "Burp Suite",
                            "youtube_labelEn": "Burp Suite",
                            "tutorial_content": "<h4>¿Qué es Burp Suite?</h4><p>Un proxy inyector que se sitúa entre tu navegador y la web que visitas. Te permite interceptar, modificar y repetir peticiones HTTP.</p><h4>Uso Clave</h4><p>Encontrar vulnerabilidades lógicas o de inyección en webs.</p><code>Proxy -> Intercept is on -> Forward</code>",
                            "install_content": "<h4>Instalación Fácil</h4><p>Descarga el instalador (Community Edition) desde la web de PortSwigger. Es un 'Siguiente, Siguiente, Instalar' en Windows, Mac y Linux.</p>",
                            "tutorial_contentEn": "<h4>What is Burp Suite?</h4><p>An intercepting proxy that sits between your browser and the web you visit. It allowed you to intercept, modify, and repeat HTTP requests.</p><h4>Key Usage</h4><p>Find logic vulnerabilities or injections in websites.</p><code>Proxy -> Intercept is on -> Forward</code>"
                        },
                        {
                            "name": "Caido",
                            "image": "/static/assets/images/aplicaciones/caido.png",
                            "description": "Caido es un proxy de seguridad web moderno y ligero, desarrollado en Rust para ofrecer un rendimiento excepcional y una baja huella de memoria. Está diseñado como una alternativa eficiente a herramientas tradicionales, centrándose en la velocidad y en flujos de trabajo optimizados para el auditor profesional. Permite interceptar tráfico, realizar consultas avanzadas mediante lenguajes específicos y automatizar tareas comunes de seguridad de forma ágil y fluida.",
                            "descriptionEn": "Caido is a modern and lightweight web security proxy, developed in Rust to offer exceptional performance and a low memory footprint. It is designed as an efficient alternative to traditional tools, focusing on speed and optimized workflows for the professional auditor. It allows for intercepting traffic, performing advanced queries through specific languages, and automating common security tasks in an agile and smooth manner.",
                            "url": "https://caido.io/",
                            "youtube": "https://youtu.be/RFu4U-BNjUE",
                            "youtube_label": "Caido",
                            "youtube_labelEn": "Caido",
                            "tutorial_content": "<h4>¿Qué es Caido?</h4><p>Un proxy inyector que se sitúa entre tu navegador y la web que visitas. Te permite interceptar, modificar y repetir peticiones HTTP.</p><h4>Uso Clave</h4><p>Encontrar vulnerabilidades lógicas o de inyección en webs.</p><code>Proxy -> Intercept is on -> Forward</code>",
                            "install_content": "<h4>Instalación Fácil</h4><p>Descarga el instalador (Community Edition) desde la web de PortSwigger. Es un 'Siguiente, Siguiente, Instalar' en Windows, Mac y Linux.</p>",
                            "tutorial_contentEn": "<h4>What is Caido?</h4><p>An intercepting proxy that sits between your browser and the web you visit. It allowed you to intercept, modify, and repeat HTTP requests.</p><h4>Key Usage</h4><p>Find logic vulnerabilities or injections in websites.</p><code>Proxy -> Intercept is on -> Forward</code>"
                        },
                        {
                            "name": "OWASP ZAP",
                            "description": "El Zed Attack Proxy (ZAP) es una herramienta gratuita y de código abierto para encontrar vulnerabilidades en aplicaciones web durante el desarrollo y las pruebas. Es uno de los proyectos insignia de OWASP, mantenido por una red global de voluntarios y diseñado para ser fácil de usar tanto para desarrolladores como para expertos en seguridad. Destaca por su capacidad de automatización, su API completa y su capacidad para integrarse directamente en procesos de desarrollo ágil.",
                            "descriptionEn": "The Zed Attack Proxy (ZAP) is a free and open-source tool for finding vulnerabilities in web applications during development and testing. It is one of OWASP's flagship projects, maintained by a global network of volunteers and designed to be easy to use for both developers and security experts. It stands out for its automation capabilities, its comprehensive API, and its ability to integrate directly into agile development processes.",
                            "url": "https://www.zaproxy.org/",
                            "github": "https://github.com/zaproxy/zaproxy",
                            "youtube": "https://youtu.be/5qgUqClqTb0",
                            "youtube_label": "OWASP ZAP",
                            "youtube_labelEn": "OWASP ZAP",
                            "tutorialUrl": "https://www.zaproxy.org/getting-started/",
                            "tutorial_content": "<h4>¿Qué es ZAP?</h4><p>La alternativa Open Source a Burp Suite. Ideal para automatizar escaneos de seguridad en pipelines CI/CD.</p><h4>Característica Clave</h4><p>Su 'HUD' te permite ver alertas de seguridad directamente sobre la página web que estás navegando.</p>",
                            "install_content": "<h4>Multiplataforma</h4><p>Necesitas tener Java instalado. Descarga el instalador desde su web oficial. En Linux también puedes usar: <code>sudo apt install zaproxy</code></p>",
                            "tutorial_contentEn": "<h4>What is ZAP?</h4><p>The Open Source alternative to Burp Suite. Ideal for automating security scans in CI/CD pipelines.</p><h4>Key Feature</h4><p>Its 'HUD' allows you to see security alerts directly on the webpage you are browsing.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Nikto",
                            "description": "Nikto es un escáner de servidor web de código abierto que realiza pruebas exhaustivas contra servidores para detectar múltiples elementos peligrosos. Identifica más de 6700 archivos y programas potencialmente dañinos, versiones obsoletas de servidores y problemas de configuración específicos que podrían comprometer la seguridad. Es una herramienta clásica y esencial en la fase de reconocimiento para detectar rápidamente fallos comunes en una amplia variedad de infraestructuras web.",
                            "descriptionEn": "Nikto is an open-source web server scanner that performs exhaustive tests against servers to detect multiple dangerous elements. It identifies over 6,700 potentially harmful files and programs, outdated server versions, and specific configuration issues that could compromise security. It is a classic and essential tool in the reconnaissance phase for quickly detecting common flaws in a wide variety of web infrastructures.",
                            "url": "https://cirt.net/Nikto2",
                            "github": "https://github.com/sullo/nikto",
                            "youtube": "https://youtu.be/6Kgp6oCKryI",
                            "youtube_label": "Nikto",
                            "youtube_labelEn": "Nikto",
                            "tutorial_content": "<h4>¿Qué es Nikto?</h4><p>Un escáner legendario (y ruidoso) que busca archivos peligrosos, versiones desactualizadas y problemas de configuración en servidores web.</p><h4>Comando Básico</h4><code>nikto -h http://ejemplo.com</code>",
                            "tutorial_contentEn": "<h4>What is Nikto?</h4><p>A legendary (and noisy) scanner that looks for dangerous files, outdated versions, and configuration issues on web servers.</p><h4>Basic Command</h4><code>nikto -h http://example.com</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "SQLMap",
                            "description": "sqlmap es una herramienta de código abierto que automatiza el proceso de detección y explotación de fallos de inyección SQL en aplicaciones web. Cuenta con un motor de detección potente y admite una gran variedad de sistemas de bases de datos, permitiendo realizar desde la enumeración de usuarios hasta el acceso completo al sistema de archivos. Es fundamental para evaluar la seguridad de las capas de persistencia y prevenir la fuga de información sensible almacenada en bases de datos.",
                            "descriptionEn": "sqlmap is an open-source tool that automates the process of detecting and exploiting SQL injection flaws in web applications. It features a powerful detection engine and supports a large variety of database systems, allowing for everything from user enumeration to full access to the file system. It is fundamental for evaluating the security of persistence layers and preventing the leakage of sensitive information stored in databases.",
                            "url": "https://sqlmap.org/",
                            "github": "https://github.com/sqlmapproject/sqlmap",
                            "youtube": "https://youtu.be/XYTOKB6UGCw",
                            "youtube_label": "SQLMap",
                            "youtube_labelEn": "SQLMap",
                            "tutorial_content": "<h4>Inyección SQL Automática</h4><p>Detecta y explota fallos de inyección SQL. Puede volcar bases de datos enteras.</p><h4>Comando</h4><code>sqlmap -u http://sitio.com/vuln.php?id=1 --dbs</code>",
                            "tutorial_contentEn": "<h4>Automatic SQL Injection</h4><p>Detects and exploits SQL injection flaws. It can dump entire databases.</p><h4>Command</h4><code>sqlmap -u http://site.com/vuln.php?id=1 --dbs</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/pentesting_web.png"
                },
                {
                    "name": "Pentesting Red",
                    "nameEn": "Network Pentesting",
                    "description": "Rama dedicada a la evaluación de la seguridad de las infraestructuras de red y protocolos de comunicación. Se enfoca en el descubrimiento de activos, la identificación de servicios expuestos y la explotación de configuraciones incorrectas para prevenir accesos no autorizados y movimientos laterales dentro de una organización. Es crucial para asegurar que el perímetro y la red interna sean resistentes ante intrusiones.",
                    "descriptionEn": "Branch dedicated to the security assessment of network infrastructures and communication protocols. It focuses on asset discovery, identification of exposed services, and exploitation of incorrect configurations to prevent unauthorized access and lateral movements within an organization. It is crucial for ensuring that the perimeter and internal network are resilient against intrusions.",
                    "children": [
                        {
                            "name": "Nmap",
                            "image": "/static/assets/images/aplicaciones/nmap.png",
                            "description": "Nmap (Network Mapper) es la herramienta estándar para el descubrimiento de redes y la auditoría de seguridad. Utiliza paquetes IP en bruto para determinar qué hosts están disponibles en la red, qué servicios ofrecen y qué sistemas operativos están ejecutando. Es indispensable para inventariar redes, gestionar programas de actualización de servicios y monitorizar la seguridad de hosts o tiempos de inactividad de servicios.",
                            "descriptionEn": "Nmap (Network Mapper) is the standard tool for network discovery and security auditing. It uses raw IP packets to determine which hosts are available on the network, what services they offer, and what operating systems they are running. It is indispensable for network inventory, managing service update programs, and monitoring host security or service downtime.",
                            "url": "https://nmap.org/",
                            "tutorialUrl": "https://nmap.org/book/man.html",
                            "github": "https://github.com/nmap/nmap",
                            "reddit": "https://www.reddit.com/r/nmap/",
                            "youtube": "https://youtu.be/2BeVjfv2Ybw",
                            "youtube_label": "Nmap",
                            "youtube_labelEn": "Nmap",
                            "tutorial_content": "<h4>¿Qué es Nmap?</h4><p>El estándar de facto para mapeo de redes. Descubre hosts activos, puertos abiertos y servicios corriendo.</p><h4>Comandos Esenciales</h4><p><code>nmap -sV -sC <IP></code>: Escaneo de servicios y scripts por defecto.</p>",
                            "install_content": "<h4>Windows</h4><p>Descarga el ejecutable (.exe) oficial. Incluye 'Zenmap' (interfaz gráfica).</p><h4>Linux</h4><p>Generalmente preinstalado. Si no: <code>sudo apt install nmap</code></p>",
                            "tutorial_contentEn": "<h4>What is Nmap?</h4><p>The de facto standard for network mapping. Discovers active hosts, open ports, and running services.</p><h4>Essential Commands</h4><p><code>nmap -sV -sC <IP></code>: Service scan and default scripts.</p>"
                        },
                        {
                            "name": "Metasploit",
                            "image": "/static/assets/images/aplicaciones/metasploit.png",
                            "description": "Metasploit Framework es la plataforma de pruebas de penetración más utilizada en el mundo, proporcionando recursos críticos para la investigación de vulnerabilidades. Permite a los profesionales de seguridad desarrollar, probar y ejecutar exploits contra una amplia variedad de objetivos remotos. Su arquitectura modular basada en Ruby facilita la integración de nuevos módulos y el uso de técnicas de post-explotación para evaluar el impacto real de un fallo de seguridad.",
                            "descriptionEn": "Metasploit Framework is the most widely used penetration testing platform in the world, providing critical resources for vulnerability research. It allows security professionals to develop, test, and execute exploits against a wide variety of remote targets. Its Ruby-based modular architecture facilitates the integration of new modules and the use of post-exploitation techniques to assess the real impact of a security flaw.",
                            "url": "https://www.metasploit.com/",
                            "tutorialUrl": "https://docs.metasploit.com/docs/using-metasploit/getting-started/get-started-with-metasploit.html",
                            "github": "https://github.com/rapid7/metasploit-framework",
                            "reddit": "https://www.reddit.com/r/metasploit/",
                            "youtube": "https://youtu.be/-5i0Ac52j34",
                            "youtube_label": "Metasploit",
                            "youtube_labelEn": "Metasploit",
                            "tutorial_content": "<h4>¿Qué es Metasploit?</h4><p>Una base de datos de exploits lista para usar. Permite lanzar ataques, escalar privilegios y controlar máquinas.</p><h4>Flujo Básico</h4><code>use exploit/windows/smb/ms17_010_eternalblue<br>set RHOSTS <target_ip><br>run</code>",
                            "install_content": "<h4>Kali Linux / Parrot</h4><p>Viene preinstalado. Actualiza con <code>sudo apt update && sudo apt install metasploit-framework</code>.</p><h4>Windows</h4><p>Usa el instalador MSI oficial de Rapid7. Desactiva el antivirus temporalmente.</p>",
                            "tutorial_contentEn": "<h4>What is Metasploit?</h4><p>A ready-to-use exploit database. Allows launching attacks, escalating privileges, and controlling machines.</p><h4>Basic Flow</h4><code>use exploit/windows/smb/ms17_010_eternalblue<br>set RHOSTS <target_ip><br>run</code>"
                        },
                        {
                            "name": "CrackMapExec",
                            "description": "CrackMapExec es una herramienta de post-explotación multifuncional diseñada para realizar pruebas de penetración en entornos de Microsoft Active Directory. Aprovecha protocolos como SMB, WinRM y MSSQL para automatizar la evaluación de grandes redes corporativas. Es excepcionalmente eficaz para el movimiento lateral, el volcado de credenciales y la ejecución remota de comandos, facilitando enormemente la navegación por dominios complejos durante una auditoría.",
                            "descriptionEn": "CrackMapExec is a multi-functional post-exploitation tool designed for performing penetration tests in Microsoft Active Directory environments. It leverages protocols such as SMB, WinRM, and MSSQL to automate the assessment of large corporate networks. It is exceptionally effective for lateral movement, credential dumping, and remote command execution, greatly facilitating navigation through complex domains during an audit.",
                            "url": "https://github.com/NeffIsBack/CrackMapExec",
                            "github": "https://github.com/NeffIsBack/CrackMapExec",
                            "tutorial_content": "<h4>La navaja suiza de AD</h4><p>Permite ejecutar comandos, enumerar usuarios y robar credenciales masivamente en una red Windows.</p><h4>Ejemplo 'Password Spraying'</h4><code>cme smb 192.168.1.0/24 -u user.txt -p pass.txt</code>",
                            "tutorial_contentEn": "<h4>The Swiss Army Knife of AD</h4><p>Allows executing commands, enumerating users, and stealing credentials massively on a Windows network.</p><h4>Password Spraying Example</h4><code>cme smb 192.168.1.0/24 -u user.txt -p pass.txt</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Nessus",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Nessus es uno de los escáneres de vulnerabilidades más confiables y populares del mercado, utilizado para identificar fallos de seguridad en una amplia gama de activos. Proporciona una detección profunda de vulnerabilidades, configuraciones incorrectas y malware, ayudando a las organizaciones a cumplir con estándares de cumplimiento y a mejorar su postura de seguridad mediante informes detallados y recomendaciones de remediación accionables.",
                            "descriptionEn": "Nessus is one of the most reliable and popular vulnerability scanners on the market, used to identify security flaws across a wide range of assets. It provides deep detection of vulnerabilities, misconfigurations, and malware, helping organizations meet compliance standards and improve their security posture through detailed reporting and actionable remediation recommendations.",
                            "url": "https://www.tenable.com/products/nessus",
                            "youtube": "https://youtu.be/_R35Cnr0Sc0",
                            "youtube_label": "Que es Nessus",
                            "youtube_labelEn": "What is Nessus",
                            "tutorial_content": "<h4>Escaneo de Vulnerabilidades</h4><p>Nessus escanea servidores y redes buscando fallos de seguridad conocidos (CVEs). Es fundamental para parchear antes de que te ataquen.</p>",
                            "install_content": "<h4>Requiere Registro</h4><p>1. Regístrate en la web de Tenable para 'Nessus Essentials' (Gratis).<br>2. Recibirás un código de activación.<br>3. Descarga e instala el paquete.<br>4. Accede a <code>https://localhost:8834</code> para configurar.</p>",
                            "tutorial_contentEn": "<h4>Vulnerability Scanning</h4><p>Nessus scans servers and networks looking for known security flaws (CVEs). It is essential for patching before you are attacked.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/pentesting_red.png"
                },
                {
                    "name": "Red Team",
                    "nameEn": "Red Team",
                    "description": "Dominio enfocado en la simulación de adversarios reales con el fin de evaluar las capacidades de detección y respuesta de una organización. A diferencia del pentesting tradicional, el Red Teaming utiliza tácticas, técnicas y procedimientos (TTPs) avanzados para infiltrarse sin ser detectado, moviéndose lateralmente y comprometiendo activos críticos para demostrar el impacto real de un ataque dirigido.",
                    "descriptionEn": "Domain focused on the simulation of real adversaries in order to evaluate an organization's detection and response capabilities. Unlike traditional pentesting, Red Teaming uses advanced tactics, techniques, and procedures (TTPs) to infiltrate without being detected, moving laterally and compromising critical assets to demonstrate the real impact of a targeted attack.",
                    "children": [
                        {
                            "name": "Cobalt Strike",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Cobalt Strike es una plataforma de emulación de adversarios líder en la industria, diseñada específicamente para operaciones de Red Team y evaluaciones de seguridad avanzadas. Permite simular un actor de amenazas persistente en una red, proporcionando herramientas sofisticadas para el comando y control (C2), la post-explotación y la manipulación de balizas (beacons) altamente personalizables para evadir soluciones de seguridad modernas.",
                            "descriptionEn": "Cobalt Strike is an industry-leading adversary emulation platform, specifically designed for Red Team operations and advanced security assessments. It allows for the simulation of a persistent threat actor in a network, providing sophisticated tools for command and control (C2), post-exploitation, and the manipulation of highly customizable beacons to evade modern security solutions.",
                            "url": "https://www.cobaltstrike.com/",
                            "tutorialUrl": "https://www.cobaltstrike.com/training",
                            "reddit": "https://www.reddit.com/r/CobaltStrike/",
                            "tutorial_content": "<h4>El Rey del C2</h4><p>Simula un actor de amenazas avanzado. Famoso por sus 'Beacons' (agentes) difíciles de detectar.</p><h4>Uso</h4><p>Se usa en operaciones de Red Team para mantener acceso persistente y moverse lateralmente sin ser vistos.</p>",
                            "tutorial_contentEn": "<h4>The King of C2</h4><p>Simulates an advanced threat actor. Famous for its hard-to-detect 'Beacons' (agents).</p><h4>Usage</h4><p>Used in Red Team operations to maintain persistent access and move laterally without being seen.</p>"
                        },
                        {
                            "name": "BloodHound",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "BloodHound es una herramienta de análisis de relaciones que utiliza la teoría de grafos para revelar relaciones ocultas y caminos de ataque complejos dentro de entornos de Microsoft Active Directory y Azure. Permite a los atacantes y defensores identificar rápidamente vulnerabilidades en las configuraciones de permisos y privilegios, visualizando cómo un usuario comprometido podría escalar hasta convertirse en Administrador de Dominio.",
                            "descriptionEn": "BloodHound is a relationship analysis tool that uses graph theory to reveal hidden relationships and complex attack paths within Microsoft Active Directory and Azure environments. It allows attackers and defenders to quickly identify vulnerabilities in permission and privilege configurations, visualizing how a compromised user could escalate to become a Domain Administrator.",
                            "url": "https://github.com/BloodHoundAD/BloodHound",
                            "github": "https://github.com/BloodHoundAD/BloodHound",
                            "tutorial_content": "<h4>Mapeo de AD</h4><p>Usa teoría de grafos para revelar relaciones ocultas y caminos de ataque en un Directorio Activo.</p>",
                            "tutorial_contentEn": "<h4>AD Mapping</h4><p>Uses graph theory to reveal hidden relationships and attack paths in an Active Directory.</p>"
                        },
                        {
                            "name": "Mimikatz",
                            "description": "Mimikatz es una herramienta de código abierto excepcionalmente potente que permite interactuar con el subsistema de seguridad de Windows para extraer credenciales almacenadas en memoria. Es famosa por su capacidad para recuperar contraseñas en texto claro, hashes NTLM, tickets Kerberos y otros secretos del proceso LSASS, lo que la convierte en un componente fundamental para el movimiento lateral y la escalada de privilegios.",
                            "descriptionEn": "Mimikatz is an exceptionally powerful open-source tool that allows interaction with the Windows security subsystem to extract credentials stored in memory. It is famous for its ability to recover cleartext passwords, NTLM hashes, Kerberos tickets, and other secrets from the LSASS process, making it a fundamental component for lateral movement and privilege escalation.",
                            "url": "https://github.com/gentilkiwi/mimikatz",
                            "github": "https://github.com/gentilkiwi/mimikatz",
                            "tutorial_content": "<h4>Robo de Credenciales</h4><p>Extrae contraseñas en texto plano, hashes y tickets Kerberos de la memoria.</p><h4>Comando Famoso</h4><code>privilege::debug -> sekurlsa::logonpasswords</code>",
                            "tutorial_contentEn": "<h4>Credential Theft</h4><p>Extracts cleartext passwords, hashes, and Kerberos tickets from memory.</p><h4>Famous Command</h4><code>privilege::debug -> sekurlsa::logonpasswords</code>",
                            "youtube": "https://youtu.be/Yyc9mcJd8BE",
                            "youtube_label": "Que es Mimikatz",
                            "youtube_labelEn": "What is Mimikatz",
                            "image": "/static/assets/images/aplicaciones/mimikatz.png"
                        },
                        {
                            "name": "Sliver",
                            "description": "Sliver es un framework de comando y control (C2) de código abierto, multiplataforma y altamente extensible, escrito en Go. Está diseñado para ser una alternativa moderna y potente a otras herramientas de post-explotación, ofreciendo soporte para múltiples protocolos de comunicación como mTLS, HTTP(S) y DNS para evadir la detección en red mientras se mantienen agentes (implantes) en sistemas comprometidos.",
                            "descriptionEn": "Sliver is a highly extensible, multi-platform, open-source command and control (C2) framework written in Go. It is designed to be a modern and powerful alternative to other post-exploitation tools, offering support for multiple communication protocols such as mTLS, HTTP(S), and DNS to evade network detection while maintaining agents (implants) on compromised systems.",
                            "url": "https://sliver.sh/",
                            "github": "https://github.com/BishopFox/sliver",
                            "tutorial_content": "<h4>La Alternativa Open Source</h4><p>Un C2 moderno escrito en Go. Soporta múltiples protocolos (DNS, HTTP, MTLS) para evadir defensas.</p><h4>Comando Clave</h4><code>generate --mtls <server_ip> --os windows</code>",
                            "tutorial_contentEn": "<h4>The Open Source Alternative</h4><p>A modern C2 written in Go. Supports multiple protocols (DNS, HTTP, MTLS) to evade defenses.</p><h4>Key Command</h4><code>generate --mtls <server_ip> --os windows</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/red_team.png"
                },
                {
                    "name": "Ingeniería Inversa",
                    "nameEn": "Reverse Engineering",
                    "description": "Rama de la ciberseguridad que se encarga del análisis de software compilado para comprender su funcionamiento interno, lógica y estructura. Es una disciplina crítica para el análisis de malware, la auditoría de seguridad de sistemas cerrados y el descubrimiento de vulnerabilidades complejas en aplicaciones donde el código fuente no está disponible, permitiendo reconstruir el comportamiento del programa a nivel de instrucciones de CPU.",
                    "descriptionEn": "Cybersecurity branch responsible for analyzing compiled software to understand its internal workings, logic, and structure. It is a critical discipline for malware analysis, security auditing of closed systems, and discovering complex vulnerabilities in applications where the source code is not available, allowing for the reconstruction of program behavior at the CPU instruction level.",
                    "children": [
                        {
                            "name": "Ghidra",
                            "description": "Ghidra es una suite de herramientas de ingeniería inversa desarrollada por la National Security Agency (NSA) de EE. UU. Proporciona capacidades de vanguardia para el desensamblado, descompilación y análisis de código binario en una amplia gama de arquitecturas. Es altamente extensible a través de scripts y plugins, y destaca por su descompilador de alto nivel que ayuda enormemente a los analistas a comprender la lógica compleja del software.",
                            "descriptionEn": "Ghidra is a reverse engineering tool suite developed by the U.S. National Security Agency (NSA). It provides state-of-the-art capabilities for disassembly, decompilation, and binary code analysis across a wide range of architectures. It is highly extensible through scripts and plugins, and stands out for its high-level decompiler that greatly helps analysts understand complex software logic.",
                            "url": "https://ghidra-sre.org/",
                            "github": "https://github.com/NationalSecurityAgency/ghidra",
                            "youtube": "https://youtu.be/4Ep2tT0pUzo",
                            "youtube_label": "Ghidra",
                            "youtube_labelEn": "Ghidra",
                            "tutorial_content": "<h4>¿Para qué sirve?</h4><p>Desensambla y descompila binarios (EXE, ELF) para ver su código fuente aproximado en C.</p><h4>Highlight</h4><p>Incluye un descompilador muy potente que reconstruye la lógica de alto nivel.</p>",
                            "install_content": "<h4>Requisito Java</h4><p>Necesitas JDK 11 o superior instalado.</p><h4>Setup</h4><p>Es 'Portable'. Descarga el ZIP, descomprímelo y ejecuta <code>ghidraRun.bat</code> (Windows) o <code>./ghidraRun</code> (Linux).</p>",
                            "tutorial_contentEn": "<h4>What is it for?</h4><p>Disassembles and decompiles binaries (EXE, ELF) to see their approximate C source code.</p><h4>Highlight</h4><p>Includes a very powerful decompiler that reconstructs high-level logic.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "IDA",
                            "description": "IDA (Interactive Disassembler) es ampliamente considerada la herramienta estándar de la industria para la ingeniería inversa y el análisis de malware profesional. Ofrece una vista interactiva y gráfica del flujo de control de un programa, lo que facilita enormemente el seguimiento de la ejecución y la identificación de funciones críticas. Su motor de análisis es extremadamente preciso y admite una vasta cantidad de arquitecturas y formatos de archivo.",
                            "descriptionEn": "IDA (Interactive Disassembler) is widely considered the industry standard tool for reverse engineering and professional malware analysis. It offers an interactive and graphical view of a program's control flow, greatly facilitating execution tracking and the identification of critical functions. Its analysis engine is extremely accurate and supports a vast number of architectures and file formats.",
                            "url": "https://hex-rays.com/ida-pro/",
                            "tutorial_content": "<h4>El Estándar de la Industria</h4><p>La herramienta más avanzada (y costosa) para análisis de malware y reverse engineering.</p><h4>Graph View</h4><p>Su vista de gráfico de flujo es legendaria para entender la lógica de un programa visualmente.</p>",
                            "tutorial_contentEn": "<h4>The Industry Standard</h4><p>The most advanced (and expensive) tool for malware analysis and reverse engineering.</p><h4>Graph View</h4><p>Its flow graph view is legendary for visually understanding program logic.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Radare2",
                            "description": "Radare2 es un framework de ingeniería inversa y análisis de binarios de código abierto extremadamente potente y versátil, diseñado con una filosofía tipo Unix. Ofrece una amplia gama de herramientas para el desensamblado, depuración y manipulación de datos a bajo nivel, todo controlado a través de una interfaz de línea de comandos rica en comandos y altamente automatizable. Es ideal para analistas que prefieren flujos de trabajo ágiles y basados en terminal.",
                            "descriptionEn": "Radare2 is an extremely powerful and versatile open-source reverse engineering and binary analysis framework, designed with a Unix-like philosophy. It offers a wide range of tools for low-level disassembly, debugging, and data manipulation, all controlled through a command-line interface rich in commands and highly automatable. It is ideal for analysts who prefer agile and terminal-based workflows.",
                            "url": "https://rada.re/",
                            "github": "https://github.com/radareorg/radare2",
                            "tutorial_content": "<h4>Poder en la Terminal</h4><p>Si te gusta Vim y la línea de comandos, Radare2 es para ti. Extremadamente scriptable y ligero.</p><h4>Comando Visual</h4><code>r2 -A <binary> -> VV (Visual Mode)</code>",
                            "tutorial_contentEn": "<h4>Power in the Terminal</h4><p>If you like Vim and the command line, Radare2 is for you. Extremely scriptable and lightweight.</p><h4>Visual Command</h4><code>r2 -A <binary> -> VV (Visual Mode)</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/ingenieria_inversa.png"
                },
                {
                    "name": "Bug Bounty",
                    "nameEn": "Bug Bounty",
                    "description": "Rama de la ciberseguridad que involucra programas de recompensas donde investigadores éticos descubren y reportan vulnerabilidades a organizaciones a cambio de reconocimiento o compensación económica. Es un modelo colaborativo que permite a las empresas aprovechar el talento global para identificar fallos antes de que sean explotados, mejorando significativamente su postura de seguridad a través de la transparencia y el hacking responsable.",
                    "descriptionEn": "Cybersecurity branch involving reward programs where ethical researchers discover and report vulnerabilities to organizations in exchange for recognition or financial compensation. It is a collaborative model that allows companies to leverage global talent to identify flaws before they are exploited, significantly improving their security posture through transparency and responsible hacking.",
                    "children": [
                        {
                            "name": "Burp",
                            "description": "Versión orientada a Bug Bounty de la suite de Burp Suite, enfocada en las funcionalidades esenciales para el descubrimiento y reporte de vulnerabilidades web. Permite a los investigadores interceptar y manipular el tráfico para explorar la lógica de negocio de las aplicaciones y encontrar fallos complejos que los escáneres automáticos suelen pasar por alto, siendo la herramienta estándar para cualquier 'hunter' profesional.",
                            "descriptionEn": "Bug Bounty-oriented version of the Burp Suite, focused on the essential functionalities for discovering and reporting web vulnerabilities. It allows researchers to intercept and manipulate traffic to explore the business logic of applications and find complex flaws that automatic scanners often overlook, being the standard tool for any professional 'hunter'.",
                            "url": "https://portswigger.net/burp",
                            "tutorial_content": "<h4>Indispensable</h4><p>La versión Community es suficiente para empezar a cazar bugs. Aprende a usar el 'Repeater' para modificar peticiones manualmente.</p>",
                            "tutorial_contentEn": "<h4>Indispensable</h4><p>The Community version is enough to start hunting bugs. Learn to use the 'Repeater' to manually modify requests.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "ffuf",
                            "description": "ffuf (Fuzz Faster U Fool) es un fuzzer web extremadamente rápido escrito en Go, diseñado para descubrir archivos, directorios y parámetros ocultos a través del envío masivo de peticiones. Su velocidad y eficiencia lo convierten en una herramienta favorita para los cazadores de recompensas y probadores de penetración que necesitan realizar tareas de descubrimiento de contenido de forma exhaustiva y en poco tiempo.",
                            "descriptionEn": "ffuf (Fuzz Faster U Fool) is an extremely fast web fuzzer written in Go, designed to discover hidden files, directories, and parameters through mass request submission. Its speed and efficiency make it a favorite tool for bounty hunters and penetration testers who need to perform content discovery tasks exhaustively and in a short time.",
                            "url": "https://github.com/ffuf/ffuf",
                            "github": "https://github.com/ffuf/ffuf",
                            "tutorial_content": "<h4>Fuzzing a la Velocidad de la Luz</h4><p>Descubre directorios y archivos ocultos en segundos.</p><h4>Comando Típico</h4><code>ffuf -w wordlist.txt -u http://site.com/FUZZ</code>",
                            "tutorial_contentEn": "<h4>Fuzzing at the Speed of Light</h4><p>Discover hidden directories and files in seconds.</p><h4>Typical Command</h4><code>ffuf -w wordlist.txt -u http://site.com/FUZZ</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Nuclei",
                            "description": "Nuclei es un escáner de vulnerabilidades basado en plantillas que permite enviar peticiones a través de múltiples protocolos de forma rápida y altamente personalizada. Utiliza plantillas YAML creadas por la comunidad que describen firmas de vulnerabilidades conocidas, permitiendo a los investigadores realizar escaneos específicos y a gran escala para detectar fallos de seguridad modernos de manera eficiente y reproducible.",
                            "descriptionEn": "Nuclei is a template-based vulnerability scanner that allows for sending requests across multiple protocols in a fast and highly customized manner. It uses community-created YAML templates that describe known vulnerability signatures, allowing researchers to perform specific, large-scale scans to detect modern security flaws efficiently and reproducibly.",
                            "url": "https://projectdiscovery.io/tools/nuclei",
                            "github": "https://github.com/projectdiscovery/nuclei",
                            "tutorial_content": "<h4>Escaneo Comunitario</h4><p>Usa miles de plantillas YAML creadas por la comunidad para detectar nuevas vulnerabilidades (CVEs) en minutos.</p><code>nuclei -u <target></code>",
                            "tutorial_contentEn": "<h4>Community Scanning</h4><p>Uses thousands of community-created YAML templates to detect new vulnerabilities (CVEs) in minutes.</p><code>nuclei -u <target></code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/bug_bounty.png"
                },
                {
                    "name": "Cracking",
                    "nameEn": "Cracking",
                    "description": "Disciplina que se enfoca en la recuperación de contraseñas y el descifrado de hashes mediante técnicas de fuerza bruta, ataques de diccionario y el uso de tablas precomputadas. El objetivo es evaluar la robustez de las políticas de contraseñas y los algoritmos de hashing utilizados en una organización, demostrando cómo una protección débil puede ser vulnerada por atacantes con suficiente potencia de cómputo.",
                    "descriptionEn": "Discipline that focuses on password recovery and hash decryption through brute force techniques, dictionary attacks, and the use of precomputed tables. The goal is to evaluate the robustness of password policies and hashing algorithms used in an organization, demonstrating how weak protection can be compromised by attackers with sufficient computing power.",
                    "children": [
                        {
                            "name": "Hashcat",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Hashcat es ampliamente reconocida como la herramienta de recuperación de contraseñas más rápida del mundo, capaz de aprovechar la potencia de procesamiento de las CPUs y GPUs modernas para romper una vasta cantidad de algoritmos de hashing. Admite múltiples tipos de ataque y es fundamental para que los profesionales de seguridad evalúen la resistencia de las credenciales ante intentos de descifrado a alta velocidad.",
                            "descriptionEn": "Hashcat is widely recognized as the world's fastest password recovery tool, capable of leveraging the processing power of modern CPUs and GPUs to break a vast amount of hashing algorithms. It supports multiple attack types and is fundamental for security professionals to evaluate the resistance of credentials against high-speed decryption attempts.",
                            "url": "https://hashcat.net/hashcat/",
                            "github": "https://github.com/hashcat/hashcat",
                            "youtube": "https://youtu.be/Qu9uw-NL-GE",
                            "youtube_label": "Hashcat",
                            "youtube_labelEn": "Hashcat",
                            "tutorial_content": "<h4>Cracking GPU</h4><p>Usa la potencia de tu tarjeta gráfica para romper hashes de contraseñas a velocidades increíbles.</p><h4>Uso</h4><code>hashcat -m 0 -a 0 hash.txt rockyou.txt</code>",
                            "tutorial_contentEn": "<h4>GPU Cracking</h4><p>Uses the power of your graphics card to crack password hashes at incredible speeds.</p><h4>Usage</h4><code>hashcat -m 0 -a 0 hash.txt rockyou.txt</code>"
                        },
                        {
                            "name": "John the Ripper",
                            "description": "John the Ripper es un cracker de contraseñas versátil y de código abierto que admite cientos de tipos de hashes y cifrados. Es famoso por su capacidad para detectar automáticamente el tipo de hash y aplicar estrategias de ataque inteligentes, lo que lo hace ideal para auditar la seguridad de contraseñas en diversos sistemas operativos, archivos comprimidos y bases de datos de forma eficiente.",
                            "descriptionEn": "John the Ripper is a versatile, open-source password cracker that supports hundreds of types of hashes and encryptions. It is famous for its ability to automatically detect the hash type and apply intelligent attack strategies, making it ideal for auditing password security across various operating systems, compressed files, and databases efficiently.",
                            "url": "https://www.openwall.com/john/",
                            "github": "https://github.com/openwall/john",
                            "youtube": "https://youtu.be/znf7WYZlSRE",
                            "youtube_label": "John the Ripper",
                            "youtube_labelEn": "John the Ripper",
                            "tutorial_content": "<h4>El Clásico</h4><p>Detecta automáticamente el tipo de hash. Ideal para romper archivos zip, pdf o ssh privados cifrados.</p>",
                            "tutorial_contentEn": "<h4>The Classic</h4><p>Automatically detects hash type. Ideal for cracking password-protected zip, pdf, or private ssh files.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/cracking.png"
                },
            ]
        },
        {
            "name": "Defensiva",
            "nameEn": "Defensive",
            "youtube": "https://youtu.be/GRPYVgQEltk",
            "youtube_label": "SOC",
            "youtube_labelEn": "SOC",
            "minLevel": 0,
            "image": "/static/assets/images/ramas/defensiva.png",
            "description": "Rama centrada en la protección proactiva y reactiva de los activos digitales de una organización. Abarca desde la monitorización constante de eventos de seguridad y el análisis de amenazas hasta la implementación de controles de acceso y la inspección profunda del tráfico de red. Su objetivo principal es garantizar la confidencialidad, integridad y disponibilidad de la información frente a posibles incidentes.",
            "descriptionEn": "Branch focused on the proactive and reactive protection of an organization's digital assets. It ranges from constant monitoring of security events and threat analysis to the implementation of access controls and deep inspection of network traffic. Its main objective is to guarantee the confidentiality, integrity, and availability of information against potential incidents.",
            "children": [
                {
                    "name": "SOC",
                    "nameEn": "SOC",
                    "description": "El Centro de Operaciones de Seguridad (SOC) es el corazón de la defensa cibernética de una organización. Se encarga de centralizar la recepción de alertas, correlacionar eventos de múltiples fuentes y coordinar la respuesta ante incidentes detectados. Utiliza herramientas avanzadas de SIEM para obtener una visibilidad completa de la infraestructura y detectar comportamientos anómalos que puedan indicar una intrusión.",
                    "descriptionEn": "The Security Operations Center (SOC) is the heart of an organization's cyber defense. It is responsible for centralizing alert reception, correlating events from multiple sources, and coordinating the response to detected incidents. It uses advanced SIEM tools to gain full visibility of the infrastructure and detect anomalous behaviors that may indicate an intrusion.",
                    "youtube": "https://youtu.be/Gxpcl-qUc0I",
                    "youtube_label": "SOC",
                    "youtube_labelEn": "SOC",
                    "children": [
                        {
                            "name": "Splunk",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Splunk es una plataforma de análisis de datos masivos diseñada para buscar, monitorizar y analizar datos generados por máquinas en tiempo real. En ciberseguridad, se utiliza principalmente como un SIEM potente que permite centralizar logs de toda la infraestructura, realizar búsquedas complejas mediante su lenguaje SPL y crear visualizaciones enriquecidas para identificar patrones de ataque y brechas de seguridad.",
                            "descriptionEn": "Splunk is a big data analysis platform designed to search, monitor, and analyze machine-generated data in real-time. In cybersecurity, it is primarily used as a powerful SIEM that allows for centralizing logs from the entire infrastructure, performing complex searches through its SPL language, and creating enriched visualizations to identify attack patterns and security breaches.",
                            "url": "https://www.splunk.com/",
                            "tutorialUrl": "https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial",
                            "reddit": "https://www.reddit.com/r/splunk/",
                            "tutorial_content": "<h4>El Google de los Logs</h4><p>Centraliza logs de toda tu infraestructura. Su lenguaje de búsqueda (SPL) es muy potente.</p><code>index=main error | stats count by source</code>",
                            "install_content": "<h4>Splunk Free</h4><p>Descarga la versión 'Enterprise Trial'. Pasados 60 días, se convierte automáticamente en la versión Free (con límite de 500MB/día).</p>",
                            "tutorial_contentEn": "<h4>The Google of Logs</h4><p>Centralizes logs from your entire infrastructure. Its search language (SPL) is very powerful.</p><code>index=main error | stats count by source</code>"
                        },
                        {
                            "name": "Sentinel",
                            "description": "Microsoft Sentinel es una solución de SIEM y SOAR nativa de la nube que proporciona análisis de seguridad inteligente e inteligencia frente a amenazas en toda la empresa. Utiliza inteligencia artificial avanzada para ayudar a detectar, investigar y responder a amenazas rápidamente, eliminando la necesidad de infraestructura local y escalando automáticamente para satisfacer las necesidades de seguridad dinámicas de las organizaciones modernas.",
                            "descriptionEn": "Microsoft Sentinel is a cloud-native SIEM and SOAR solution that provides intelligent security analysis and threat intelligence across the entire enterprise. It uses advanced artificial intelligence to help detect, investigate, and respond to threats quickly, eliminating the need for on-premises infrastructure and automatically scaling to meet the dynamic security needs of modern organizations.",
                            "url": "https://www.microsoft.com/en-us/security/business/siem/microsoft-sentinel",
                            "tutorial_content": "<h4>Seguridad en Azure</h4><p>Analiza alertas de seguridad de Office 365, Azure AD y servidores on-premise con IA integrada.</p><h4>KQL</h4><p>Usa Kusto Query Language, similar a SQL pero optimizado para logs.</p>",
                            "tutorial_contentEn": "<h4>Azure Security</h4><p>Analyzes security alerts from Office 365, Azure AD, and on-premise servers with built-in AI.</p><h4>KQL</h4><p>Uses Kusto Query Language, similar to SQL but optimized for logs.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "QRadar",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "IBM QRadar es una solución SIEM integral que ayuda a los equipos de seguridad a detectar, priorizar y responder a las amenazas en toda la empresa. Destaca por su capacidad para consolidar registros de eventos y datos de flujo de red de miles de dispositivos y aplicaciones en una sola consola, utilizando análisis correlacionados para identificar incidentes críticos y reducir el volumen de alertas irrelevantes para los analistas.",
                            "descriptionEn": "IBM QRadar is a comprehensive SIEM solution that helps security teams detect, prioritize, and respond to threats across the entire enterprise. It stands out for its ability to consolidate event logs and network flow data from thousands of devices and applications into a single console, using correlated analysis to identify critical incidents and reduce the volume of irrelevant alerts for analysts.",
                            "url": "https://www.ibm.com/cn-zh/qradar",
                            "tutorialUrl": "https://www.ibm.com/docs/en/qsip/7.5?topic=get-started-qradar",
                            "reddit": "https://www.reddit.com/r/QRadar/",
                            "tutorial_content": "<h4>Inteligencia IBM</h4><p>Destaca por su correlación de eventos y agrupación de incidentes en 'Oflensas' para reducir el ruido de alertas.</p>",
                            "tutorial_contentEn": "<h4>IBM Intelligence</h4><p>Stands out for its event correlation and grouping of incidents into 'Offenses' to reduce alert noise.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/soc.png"
                },
                {
                    "name": "Threat Hunting",
                    "nameEn": "Threat Hunting",
                    "description": "Disciplina proactiva de ciberseguridad que consiste en la búsqueda iterativa en redes y sistemas para detectar amenazas que han evadido las soluciones de seguridad automatizadas tradicionales. Se basa en una mentalidad de 'asunción de compromiso', utilizando analítica avanzada e inteligencia de amenazas para identificar indicadores de compromiso (IoCs) y patrones de comportamiento malicioso antes de que causen daños significativos.",
                    "descriptionEn": "Proactive cybersecurity discipline consisting of iterative searching across networks and systems to detect threats that have bypassed traditional automated security solutions. It is based on an 'assumption of compromise' mindset, using advanced analytics and threat intelligence to identify indicators of compromise (IoCs) and malicious behavior patterns before they cause significant damage.",
                    "children": [
                        {
                            "name": "Elastic",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "El Elastic Stack (Elasticsearch, Logstash y Kibana) es un conjunto de herramientas de código abierto ampliamente utilizado para la búsqueda, el análisis y la visualización de datos en tiempo real. En el ámbito de la defensa, permite centralizar y analizar volúmenes masivos de logs de seguridad, facilitando la detección de anomalías y la creación de cuadros de mando interactivos que proporcionan una visibilidad crítica sobre el estado de seguridad de la infraestructura.",
                            "descriptionEn": "The Elastic Stack (Elasticsearch, Logstash, and Kibana) is a widely used set of open-source tools for real-time data search, analysis, and visualization. In the defense field, it allows for centralizing and analyzing massive volumes of security logs, facilitating anomaly detection and the creation of interactive dashboards that provide critical visibility into the infrastructure's security state.",
                            "url": "https://www.elastic.co/elastic-stack",
                            "tutorialUrl": "https://www.elastic.co/guide/index.html",
                            "github": "https://github.com/elastic",
                            "reddit": "https://www.reddit.com/r/elastic/",
                            "tutorial_content": "<h4>ELK Stack</h4><p>Elasticsearch (Búsqueda) + Logstash (Ingesta) + Kibana (Visualización). Gratuito y muy escalable.</p><h4>Kibana</h4><p>Crea dashboards visuales impresionantes de ataques en tiempo real.</p>",
                            "tutorial_contentEn": "<h4>ELK Stack</h4><p>Elasticsearch (Search) + Logstash (Ingestion) + Kibana (Visualization). Free and highly scalable.</p><h4>Kibana</h4><p>Creates impressive visual dashboards of real-time attacks.</p>"
                        },
                        {
                            "name": "Velociraptor",
                            "description": "Velociraptor es una herramienta avanzada de monitorización de endpoints, forense digital y respuesta a incidentes (DFIR) que permite obtener visibilidad quirúrgica de miles de sistemas de forma simultánea. Utiliza un potente lenguaje de consulta (VQL) para recopilar evidencias, auditar configuraciones y detectar actividad maliciosa en tiempo real a gran escala, siendo una pieza clave para la caza de amenazas y la investigación de brechas.",
                            "descriptionEn": "Velociraptor is an advanced endpoint monitoring, digital forensics, and incident response (DFIR) tool that provides surgical visibility into thousands of systems simultaneously. It uses a powerful query language (VQL) to collect evidence, audit configurations, and detect malicious activity in real-time at scale, being a key piece for threat hunting and breach investigation.",
                            "url": "https://velociraptor.app/",
                            "github": "https://github.com/Velocidex/velociraptor",
                            "tutorial_content": "<h4>Caza Quirúrgica</h4><p>Permite lanzar consultas (VQL) a miles de endpoints simultáneamente para buscar un archivo específico o proceso malicioso.</p>",
                            "tutorial_contentEn": "<h4>Surgical Hunting</h4><p>Allows launching queries (VQL) to thousands of endpoints simultaneously to search for a specific file or malicious process.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/threat_hunting.png"
                },
                {
                    "name": "Detección",
                    "nameEn": "Detection",
                    "description": "Sub-rama dedicada a la identificación y alerta de actividades potencialmente maliciosas dentro de una red o sistema. Se centra en el despliegue de tecnologías que monitorizan el comportamiento, analizan firmas de ataques conocidos y detectan anomalías en tiempo real, permitiendo a los equipos de seguridad reaccionar con rapidez ante intentos de intrusión, compromiso de cuentas o exfiltración de datos.",
                    "descriptionEn": "Sub-branch dedicated to the identification and alerting of potentially malicious activities within a network or system. It focuses on the deployment of technologies that monitor behavior, analyze known attack signatures, and detect anomalies in real-time, allowing security teams to react quickly to intrusion attempts, account compromises, or data exfiltration.",
                    "children": [
                        {
                            "name": "Wazuh",
                            "description": "Wazuh es una plataforma de seguridad de código abierto que unifica capacidades de XDR y SIEM para la protección de endpoints y cargas de trabajo en la nube. Proporciona visibilidad en tiempo real a través del análisis de logs, la detección de intrusiones, el monitoreo de integridad de archivos y la evaluación de configuraciones, ayudando a las organizaciones a cumplir con estándares de cumplimiento y a responder de forma automatizada ante amenazas detectadas.",
                            "descriptionEn": "Wazuh is an open-source security platform that unifies XDR and SIEM capabilities for endpoint and cloud workload protection. It provides real-time visibility through log analysis, intrusion detection, file integrity monitoring, and configuration assessment, helping organizations meet compliance standards and automate response to detected threats.",
                            "url": "https://wazuh.com/",
                            "github": "https://github.com/wazuh/wazuh",
                            "tutorial_content": "<h4>SIEM Open Source</h4><p>Combina capacidades de XDR y SIEM. Muy fácil de desplegar (agente ligero).</p><h4>Módulos</h4><p>Incluye detección de rootkits, monitoreo de integridad de archivos y cumplimiento normativo (PCI, GDPR).</p>",
                            "tutorial_contentEn": "<h4>Open Source SIEM</h4><p>Combines XDR and SIEM capabilities. Very easy to deploy (lightweight agent).</p><h4>Modules</h4><p>Includes rootkit detection, file integrity monitoring, and regulatory compliance (PCI, GDPR).</p>",
                            "youtube": "https://youtu.be/9WUbXsv5Z4U",
                            "youtube_label": "Wazuh",
                            "youtube_labelEn": "Wazuh",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Suricata",
                            "description": "Suricata es un motor de detección de amenazas de red de alto rendimiento que combina capacidades de IDS (Detección de Intrusiones), IPS (Prevención de Intrusiones) y monitorización de seguridad de red (NSM). Su arquitectura multihilo le permite procesar grandes volúmenes de tráfico de red sin pérdida de paquetes, utilizando firmas complejas y análisis de protocolos para identificar y detener ataques sofisticados en tiempo real.",
                            "descriptionEn": "Suricata is a high-performance network threat detection engine that combines IDS (Intrusion Detection), IPS (Intrusion Prevention), and network security monitoring (NSM) capabilities. Its multi-threaded architecture allows it to process large volumes of network traffic without packet loss, using complex signatures and protocol analysis to identify and stop sophisticated attacks in real-time.",
                            "url": "https://suricata.io/",
                            "github": "https://github.com/OISF/suricata",
                            "tutorial_content": "<h4>IDS/IPS Moderno</h4><p>Analiza tráfico de red en tiempo real. Puede bloquear ataques activamente (IPS) o solo alertar (IDS).</p><h4>Multithreading</h4><p>A diferencia de Snort clásico, usa múltiples hilos para manejar redes de alta velocidad.</p>",
                            "tutorial_contentEn": "<h4>Modern IDS/IPS</h4><p>Analyzes network traffic in real-time. Can actively block attacks (IPS) or just alert (IDS).</p><h4>Multithreading</h4><p>Unlike classic Snort, uses multiple threads to handle high-speed networks.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/detection.png"
                },
                {
                    "name": "Análisis de Tráfico",
                    "nameEn": "Traffic Analysis",
                    "description": "Dominio especializado en la captura e inspección profunda de paquetes (DPI) para comprender el flujo de información en una red. Permite identificar protocolos ineficientes, detectar intentos de exfiltración de datos, analizar el comportamiento de malware que se comunica con servidores C2 y solucionar problemas complejos de conectividad, proporcionando una visión granular de cada bit que transita por la infraestructura.",
                    "descriptionEn": "Specialized domain in packet capture and deep packet inspection (DPI) to understand the flow of information in a network. It allows for identifying inefficient protocols, detecting data exfiltration attempts, analyzing the behavior of malware communicating with C2 servers, and troubleshooting complex connectivity issues, providing a granular view of every bit transitioning through the infrastructure.",
                    "children": [
                        {
                            "name": "Wireshark",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Wireshark es el analizador de protocolos de red más utilizado y reconocido del mundo, permitiendo examinar el tráfico de una red a un nivel microscópico. Es una herramienta esencial para administradores de red y profesionales de seguridad, ya que permite capturar datos en tiempo real, filtrar protocolos específicos y reconstruir sesiones TCP/HTTP para analizar en detalle el contenido de las comunicaciones y detectar posibles anomalías.",
                            "descriptionEn": "Wireshark is the most widely used and recognized network protocol analyzer in the world, allowing for the examination of network traffic at a microscopic level. It is an essential tool for network administrators and security professionals, as it allows for real-time data capture, specific protocol filtering, and reconstruction of TCP/HTTP sessions to analyze communication content in detail and detect potential anomalies.",
                            "url": "https://www.wireshark.org/",
                            "github": "https://github.com/wireshark/wireshark",
                            "youtube": "https://youtu.be/b1M4ZvlBTmw",
                            "youtube_label": "Wireshark",
                            "youtube_labelEn": "Wireshark",
                            "tutorial_content": "<h4>Microscopio de Red</h4><p>Captura y examina lo que pasa por el cable. Permite ver hasta el último bit de cada paquete TCP/IP. Fundamental para entender CÓMO funciona un ataque.</p><h4>Filtrado</h4><code>ip.addr == 192.168.1.5 && http</code>",
                            "install_content": "<h4>Windows</h4><p>Descarga el instalador. Acepta instalar <strong>Npcap</strong> cuando te lo pida (necesario para capturar tráfico).</p><h4>Linux</h4><p><code>sudo apt install wireshark</code>. Luego añade tu usuario al grupo wireshark para no ejecutarlo como root.</p>",
                            "tutorial_contentEn": "<h4>Network Microscope</h4><p>Captures and examines what passes through the wire. Allows seeing every bit of every TCP/IP packet. Fundamental for understanding HOW an attack works.</p><h4>Filtering</h4><code>ip.addr == 192.168.1.5 && http</code>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/analisis_trafico.png"
                },
                {
                    "name": "Zero Trust",
                    "nameEn": "Zero Trust",
                    "description": "Modelo de seguridad moderno fundamentado en el principio de 'nunca confiar, siempre verificar'. A diferencia de los modelos perimetrales tradicionales, el Zero Trust asume que las amenazas pueden estar tanto fuera como dentro de la red, por lo que requiere autenticación constante, autorización estricta y microsegmentación para cada solicitud de acceso a recursos, minimizando drásticamente la superficie de ataque.",
                    "descriptionEn": "Modern security model based on the principle of 'never trust, always verify'. Unlike traditional perimeter models, Zero Trust assumes that threats can be both outside and inside the network, thus requiring constant authentication, strict authorization, and micro-segmentation for every resource access request, drastically minimizing the attack surface.",
                    "children": [
                        {
                            "name": "Zscaler",
                            "description": "Zscaler es una plataforma de seguridad integral basada en la nube que implementa los principios de Zero Trust para proteger el acceso de los usuarios a las aplicaciones e Internet. Al actuar como una puerta de enlace segura en la nube, elimina la necesidad de VPNs tradicionales y protege contra amenazas avanzadas y pérdida de datos, garantizando que el acceso se base en la identidad y el contexto del usuario, no en su ubicación de red.",
                            "descriptionEn": "Zscaler is a comprehensive cloud-based security platform that implements Zero Trust principles to protect user access to applications and the Internet. By acting as a secure cloud gateway, it eliminates the need for traditional VPNs and protects against advanced threats and data loss, ensuring that access is based on user identity and context, not network location.",
                            "url": "https://www.zscaler.com/",
                            "tutorial_content": "<h4>Adiós VPN</h4><p>Conecta usuarios directamente a aplicaciones, no a la red corporativa. Reduce la superficie de ataque drásticamente.</p>",
                            "tutorial_contentEn": "<h4>Goodbye VPN</h4><p>Connects users directly to applications, not the corporate network. Drastically reduces the attack surface.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Cloudflare ZTNA",
                            "description": "Cloudflare Zero Trust (anteriormente Access) es una solución de acceso a la red de confianza cero que reemplaza las VPNs obsoletas con una capa de seguridad rápida y global. Permite a las organizaciones proteger aplicaciones internas y recursos en la nube mediante la verificación de la identidad, el estado del dispositivo y la ubicación de cada solicitud, integrándose fácilmente con proveedores de identidad existentes para ofrecer una experiencia de usuario fluida y segura.",
                            "descriptionEn": "Cloudflare Zero Trust (formerly Access) is a zero-trust network access solution that replaces obsolete VPNs with a fast, global security layer. It allows organizations to protect internal applications and cloud resources by verifying the identity, device health, and location of every request, easily integrating with existing identity providers to offer a seamless and secure user experience.",
                            "url": "https://www.cloudflare.com/products/zero-trust/",
                            "tutorial_content": "<h4>Acceso Seguro</h4><p>Autentica cada solicitud antes de permitir el acceso a aplicaciones internas. Se integra con tu proveedor de identidad (Okta, Google).</p>",
                            "tutorial_contentEn": "<h4>Secure Access</h4><p>Authenticates every request before allowing access to internal applications. Integrates with your identity provider (Okta, Google).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/zero_trust.png"
                }
            ]
        },
        {
            "name": "Forense",
            "nameEn": "Forensics",
            "youtube": "https://youtu.be/xY-YSVMJWuk",
            "youtube_label": "Que es Ciberseguridad Forense?",
            "youtube_labelEn": "What is Forense Cibersecurity?",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/forense.png",
            "description": "Disciplina dedicada a la recolección, preservación y análisis de evidencia digital para investigar incidentes de seguridad o delitos cibernéticos. El objetivo es reconstruir eventos pasados, identificar a los autores y asegurar que la evidencia sea admisible en procesos legales. Combina técnicas de análisis de discos, memoria, red y dispositivos móviles para obtener una visión completa de cualquier compromiso.",
            "descriptionEn": "Discipline dedicated to the collection, preservation, and analysis of digital evidence to investigate security incidents or cybercrimes. The goal is to reconstruct past events, identify perpetrators, and ensure evidence is admissible in legal proceedings. It combines disk, memory, network, and mobile device analysis techniques to obtain a complete view of any compromise.",
            "children": [
                {
                    "name": "Forense de Discos",
                    "nameEn": "Disk Forensics",
                    "description": "Sub-rama centrada en la adquisición y el examen de datos procedentes de medios de almacenamiento físicos como discos duros o unidades USB. Se enfoca en la recuperación de archivos borrados, el análisis de sistemas de archivos y la búsqueda de rastros de actividad maliciosa o evidencia incriminatoria, garantizando en todo momento la integridad de la prueba original mediante el uso de bloqueadores de escritura y copias forenses.",
                    "descriptionEn": "Sub-branch focused on the acquisition and examination of data from physical storage media such as hard drives or USB units. It focuses on recovering deleted files, analyzing file systems, and searching for traces of malicious activity or incriminatory evidence, ensuring the integrity of original evidence at all times through the use of write blockers and forensic copies.",
                    "children": [
                        {
                            "name": "Autopsy",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Autopsy es una interfaz gráfica intuitiva y potente para The Sleuth Kit y otras herramientas de análisis digital, ampliamente utilizada por investigadores de todo el mundo. Facilita la exploración exhaustiva de imágenes de disco, permitiendo indexar archivos, recuperar datos eliminados, analizar historiales de navegación y correos electrónicos de forma organizada, lo que la convierte en la plataforma ideal tanto para principiantes como para expertos en forense digital.",
                            "descriptionEn": "Autopsy is an intuitive and powerful graphical interface for The Sleuth Kit and other digital analysis tools, widely used by investigators around the world. It facilitates the exhaustive exploration of disk images, allowing for file indexing, recovery of deleted data, and analysis of browsing histories and emails in an organized manner, making it an ideal platform for both beginners and experts in digital forensics.",
                            "url": "https://www.autopsy.com/",
                            "tutorialUrl": "https://www.autopsy.com/support/training/",
                            "github": "https://github.com/sleuthkit/autopsy",
                            "youtube": "https://youtu.be/qqpPjLYVX7c",
                            "youtube_label": "Que es Forense Autopsy?",
                            "youtube_labelEn": "What is Forense Autopsy?",
                            "tutorial_content": "<h4>Forense 'User Friendly'</h4><p>La mejor herramienta gratuita para iniciarse. Analiza imágenes de disco y recupera archivos borrados, historiales web y correos.</p><h4>Flujo</h4><p>Create Case -> Add Data Source (Image) -> Run Ingest Modules</p>",
                            "install_content": "<h4>Windows</h4><p>Descarga el instalador MSI desde su web. Es la plataforma recomendada.</p><h4>Linux</h4><p>Es complejo de instalar manualmente. Se recomienda usar la versión que viene en Kali Linux (<code>sudo apt install autopsy</code>).</p>",
                            "tutorial_contentEn": "<h4>'User Friendly' Forensics</h4><p>The best free tool for beginners. Analyzes disk images and recovers deleted files, web histories, and emails.</p><h4>Workflow</h4><p>Create Case -> Add Data Source (Image) -> Run Ingest Modules</p>"
                        },
                        {
                            "name": "Photorec",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "PhotoRec es una herramienta de recuperación de datos de código abierto extremadamente eficaz, diseñada para recuperar archivos perdidos, incluyendo videos, documentos y archivos de memoria, tarjetas de cámaras y discos duros. Se centra en el 'file carving', una técnica que ignora el sistema de archivos subyacente y busca firmas de archivos directamente en el disco, lo que la hace excepcionalmente útil incluso cuando el sistema de archivos está severamente dañado.",
                            "descriptionEn": "PhotoRec is an extremely effective open-source data recovery tool designed to recover lost files, including videos, documents, and archives from memory, camera cards, and hard drives. It focuses on 'file carving', a technique that ignores the underlying file system and searches for file signatures directly on the disk, making it exceptionally useful even when the file system is severely damaged.",
                            "url": "https://www.cgsecurity.org/wiki/PhotoRec_ES",
                            "youtube": "https://youtu.be/wjGunmuk8iA",
                            "youtube_label": "Que es Forense Photorec?",
                            "youtube_labelEn": "What is Forense Photorec?",
                            "tutorial_content": "<h4>Forense 'User Friendly'</h4><p>La mejor herramienta gratuita para iniciarse. Analiza imágenes de disco y recupera archivos borrados, historiales web y correos.</p><h4>Flujo</h4><p>Create Case -> Add Data Source (Image) -> Run Ingest Modules</p>",
                            "install_content": "<h4>Windows</h4><p>Descarga el instalador MSI desde su web. Es la plataforma recomendada.</p><h4>Linux</h4><p>Es complejo de instalar manualmente. Se recomienda usar la versión que viene en Kali Linux (<code>sudo apt install autopsy</code>).</p>",
                            "tutorial_contentEn": "<h4>'User Friendly' Forensics</h4><p>The best free tool for beginners. Analyzes disk images and recovers deleted files, web histories, and emails.</p><h4>Workflow</h4><p>Create Case -> Add Data Source (Image) -> Run Ingest Modules</p>"
                        },
                        {
                            "name": "FTK",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "FTK Imager es una herramienta gratuita y profesional utilizada para la adquisición rápida de evidencia digital sin alterar la fuente original. Permite crear imágenes forenses bit a bit de discos duros o particiones, montar imágenes de disco para su revisión y previsualizar archivos y carpetas de forma segura. Es un estándar en la industria para garantizar que la evidencia sea recolectada de manera que preserve su cadena de custodia.",
                            "descriptionEn": "FTK Imager is a free and professional tool used for rapid digital evidence acquisition without altering the original source. It allows for creating bit-by-bit forensic images of hard drives or partitions, mounting disk images for review, and safely previewing files and folders. It is an industry standard for ensuring that evidence is collected in a way that preserves its chain of custody.",
                            "url": "https://www.exterro.com/ftk-imager",
                            "tutorial_content": "<h4>Adquisición de Evidencia</h4><p>Estándar para crear 'imágenes forenses' (copias bit a bit) de discos duros y memorias USB sin alterar la evidencia original.</p>",
                            "tutorial_contentEn": "<h4>Evidence Acquisition</h4><p>Standard for creating 'forensic images' (bit-by-bit copies) of hard drives and USB sticks without altering original evidence.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/forense_discos.png"
                },
                {
                    "name": "Forense de Memoria",
                    "nameEn": "Memory Forensics",
                    "description": "Sub-rama dedicada al análisis del contenido de la memoria volátil (RAM) de un sistema para identificar artefactos que no persisten en el almacenamiento secundario. Es fundamental para detectar malware que reside únicamente en memoria, reconstruir la actividad reciente de un usuario, encontrar contraseñas en texto claro y visualizar el estado actual de los procesos y conexiones de red en el momento de la captura.",
                    "descriptionEn": "Sub-branch dedicated to the analysis of a system's volatile memory (RAM) content to identify artifacts that do not persist in secondary storage. It is fundamental for detecting memory-resident malware, reconstructing recent user activity, finding cleartext passwords, and visualizing the current state of processes and network connections at the time of capture.",
                    "children": [
                        {
                            "name": "Volatility",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Volatility Framework es la herramienta de código abierto más avanzada y potente para el análisis forense de memoria. Permite a los investigadores extraer información valiosa de volcados de memoria RAM de múltiples sistemas operativos, facilitando la identificación de inyecciones de código, el análisis de rootkits y la recuperación de información crítica sobre el estado del sistema que de otro modo sería inaccesible.",
                            "descriptionEn": "Volatility Framework is the most advanced and powerful open-source tool for memory forensic analysis. It allows investigators to extract valuable information from RAM memory dumps across multiple operating systems, facilitating the identification of code injections, rootkit analysis, and the recovery of critical system state information that would otherwise be inaccessible.",
                            "url": "https://www.volatilityfoundation.org/",
                            "tutorialUrl": "https://github.com/volatilityfoundation/volatility/wiki",
                            "github": "https://github.com/volatilityfoundation/volatility",
                            "tutorial_content": "<h4>Forense RAM</h4><p>Analiza volcados de memoria RAM para encontrar contraseñas en texto plano, procesos ocultos y conexiones de red que no dejaron rastro en el disco.</p><h4>Comando</h4><code>vol.py -f dump.mem imageinfo</code>",
                            "youtube": "https://youtu.be/hxNhPyHnyQk",
                            "youtube_label": "Que es Forense Volatility?",
                            "youtube_labelEn": "What is Forense Volatility?",
                            "install_content": "<h4>Python Tool</h4><p>Volatility 3 está escrito en Python 3. Descarga el código de GitHub y ejecuta <code>pip3 install -r requirements.txt</code>. Luego úsalo con <code>python3 vol.py</code>.</p>",
                            "tutorial_contentEn": "<h4>RAM Forensics</h4><p>Analyzes RAM memory dumps to find cleartext passwords, hidden processes, and network connections that left no trace on the disk.</p><h4>Command</h4><code>vol.py -f dump.mem imageinfo</code>"
                        },
                        {
                            "name": "Rekall",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Rekall es un framework forense avanzado, desarrollado originalmente como un fork de Volatility por Google, que se centra en el análisis de memoria y la recolección de incidentes tanto en volcados como en sistemas en vivo. Su arquitectura modular y su capacidad para interactuar con el sistema operativo de forma no invasiva lo convierten en una herramienta excepcional para el triaje rápido y el análisis profundo de amenazas persistentes.",
                            "descriptionEn": "Rekall is an advanced forensic framework, originally developed as a fork of Volatility by Google, focusing on memory analysis and incident collection in both dumps and live systems. Its modular architecture and ability to interact with the operating system in a non-invasive way make it an exceptional tool for rapid triage and deep analysis of persistent threats.",
                            "url": "https://github.com/google/rekall",
                            "github": "https://github.com/google/rekall",
                            "tutorial_content": "<h4>Análisis de Memoria en Vivo</h4><p>Un fork de Volatility creado por Google. Permite analizar la memoria de un sistema en vivo sin necesidad de volcarla primero.</p>",
                            "tutorial_contentEn": "<h4>Live Memory Analysis</h4><p>A fork of Volatility created by Google. Allows analyzing a live system's memory without needing to dump it first.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/forense_memoria.png"
                },
                {
                    "name": "Artefactos",
                    "nameEn": "Artifacts",
                    "description": "Sub-rama dedicada al estudio y extracción de los diversos rastros digitales que deja el uso de un sistema operativo, conocidos como artefactos. Incluye el análisis del registro de Windows, archivos prefetch, registros de eventos, papelera de reciclaje y otros elementos que permiten reconstruir cronológicamente las acciones de un usuario, la ejecución de programas y la persistencia de posibles amenazas ocultas.",
                    "descriptionEn": "Sub-branch dedicated to the study and extraction of various digital traces left by the use of an operating system, known as artifacts. It includes analyzing the Windows registry, prefetch files, event logs, recycle bin, and other elements that allow for a chronological reconstruction of user actions, program execution, and the persistence of potential hidden threats.",
                    "children": [
                        {
                            "name": "KAPE",
                            "description": "KAPE (Kroll Artifact Parser and Extractor) es una herramienta de triaje forense diseñada para recopilar y procesar artefactos críticos del sistema en cuestión de minutos. En lugar de realizar una imagen completa del disco, KAPE localiza y copia selectivamente archivos específicos que contienen la evidencia más valiosa, permitiendo a los investigadores comenzar el análisis casi de inmediato y reducir drásticamente los tiempos de respuesta ante incidentes.",
                            "descriptionEn": "KAPE (Kroll Artifact Parser and Extractor) is a forensic triage tool designed to collect and process critical system artifacts in minutes. Instead of performing a full disk image, KAPE selectively locates and copies specific files containing the most valuable evidence, allowing investigators to begin analysis almost immediately and drastically reduce incident response times.",
                            "url": "https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape",
                            "tutorial_content": "<h4>Recolección Forense Rápida</h4><p>En lugar de copiar todo el disco (lento), KAPE copia solo los archivos clave (registro, prefetch, eventos) en minutos para un triaje rápido.</p>",
                            "tutorial_contentEn": "<h4>Fast Forensic Collection</h4><p>Instead of copying the entire disk (slow), KAPE copies only key files (registry, prefetch, events) in minutes for rapid triage.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/forense_artefactos.png"
                },
                {
                    "name": "Forense Móvil",
                    "nameEn": "Mobile Forensics",
                    "youtube": "https://youtu.be/3pN3JxELua0",
                    "youtube_label": "Que es Forense Móvil?",
                    "youtube_labelEn": "What is Mobile Forensics?",
                    "description": "Dominio especializado en la recuperación y análisis de datos procedentes de smartphones, tablets y otros dispositivos móviles. Se enfrenta a desafíos únicos como el cifrado de hardware, el bloque de pantalla y la diversidad de sistemas operativos y aplicaciones, requiriendo herramientas específicas para realizar extracciones físicas, lógicas o en la nube que permitan obtener mensajes, fotos y coordenadas GPS críticas para una investigación.",
                    "descriptionEn": "Specialized domain in the recovery and analysis of data from smartphones, tablets, and other mobile devices. It faces unique challenges such as hardware encryption, screen lock, and the diversity of operating systems and applications, requiring specific tools to perform physical, logical, or cloud extractions that allow for obtaining messages, photos, and critical GPS coordinates for an investigation.",
                    "children": [
                        {
                            "name": "Cellebrite",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Cellebrite es el estándar mundial en tecnología forense móvil, proporcionando soluciones de hardware y software para la extracción y análisis de datos digitales de dispositivos móviles. Es ampliamente utilizada por fuerzas del orden y agencias gubernamentales debido a su capacidad inigualable para eludir bloqueos, descifrar datos y presentar la evidencia de forma estructurada y admisible en procesos judiciales complejos.",
                            "descriptionEn": "Cellebrite is the global standard in mobile forensic technology, providing hardware and software solutions for the extraction and analysis of digital data from mobile devices. It is widely used by law enforcement and government agencies due to its unparalleled ability to bypass locks, decrypt data, and present evidence in a structured and admissible manner in complex judicial processes.",
                            "url": "https://cellebrite.com/",
                            "tutorialUrl": "https://cellebrite.com/en/training/",
                            "youtube": "https://youtu.be/dtaXoWHCKB0",
                            "youtube_label": "Que es Cellebrite?",
                            "youtube_labelEn": "What is Cellebrite?",
                            "tutorial_content": "<h4>Desbloqueo Móvil</h4><p>Famosa por su capacidad (hardware y software) para extraer datos de smartphones bloqueados, incluso cifrados, utilizada por fuerzas del orden.</p>",
                            "tutorial_contentEn": "<h4>Mobile Unlocking</h4><p>Famous for its capability (hardware and software) to extract data from locked, even encrypted, smartphones, used by law enforcement.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/forense_movil.png"
                },
                {
                    "name": "Forense Cloud",
                    "nameEn": "Cloud Forensics",
                    "description": "Sub-rama que se encarga de la investigación de incidentes de seguridad y la recolección de evidencias en infraestructuras de nube públicas, privadas o híbridas. Se centra en el análisis de logs de auditoría, telemetría de red y estados de recursos en plataformas como AWS, Azure o GCP, permitiendo reconstruir la actividad de usuarios y servicios en entornos virtualizados donde el acceso físico al hardware es imposible.",
                    "descriptionEn": "Sub-branch responsible for the investigation of security incidents and the collection of evidence in public, private, or hybrid cloud infrastructures. It focuses on analyzing audit logs, network telemetry, and resource states on platforms such as AWS, Azure or GCP, allowing for the reconstruction of user and service activity in virtualized environments where physical access to hardware is impossible.",
                    "children": [
                        {
                            "name": "AWS CloudTrail",
                            "description": "AWS CloudTrail es un servicio fundamental de Amazon Web Services que permite realizar auditorías, monitorizar el estado de seguridad y asegurar el cumplimiento normativo mediante el registro de la actividad de las cuentas. Registra cada acción realizada por un usuario, rol o servicio de AWS, proporcionando un historial detallado de las llamadas a la API que es indispensable para el análisis forense y la investigación de brechas en la nube.",
                            "descriptionEn": "AWS CloudTrail is a fundamental Amazon Web Services service that allows for auditing, security state monitoring, and regulatory compliance through account activity logging. It logs every action performed by an AWS user, role, or service, providing a detailed history of API calls that is indispensable for forensic analysis and cloud breach investigation.",
                            "url": "https://aws.amazon.com/cloudtrail/",
                            "tutorial_content": "<h4>¿Quién hizo qué?</h4><p>Registra todas las acciones realizadas en tu cuenta de AWS. Es la primera parada en una investigación forense en la nube.</p>",
                            "tutorial_contentEn": "<h4>Who did what?</h4><p>Logs all actions performed on your AWS account. It's the first stop in a cloud forensic investigation.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Azure Monitor",
                            "description": "Azure Monitor es una solución integral de Microsoft para la recolección, análisis y actuación sobre los datos de telemetría de entornos locales y en la nube. Permite a los investigadores obtener una visión detallada de la salud y el rendimiento de las aplicaciones y recursos de Azure, facilitando la identificación de comportamientos anomalos y la investigación de eventos de seguridad a través de registros detallados y alertas inteligentes.",
                            "descriptionEn": "Azure Monitor is a comprehensive Microsoft solution for collecting, analyzing, and acting on telemetry data from local and cloud environments. It allows investigators to obtain a detailed view of the health and performance of Azure applications and resources, facilitating the identification of anomalous behaviors and the investigation of security events through detailed logs and intelligent alerts.",
                            "url": "https://azure.microsoft.com/en-us/products/monitor/",
                            "tutorial_content": "<h4>Visibilidad Total</h4><p>Recopila datos de telemetría de tus recursos de Azure. Clave para detectar picos de actividad sospechosos.</p>",
                            "tutorial_contentEn": "<h4>Total Visibility</h4><p>Collects telemetry data from your Azure resources. Key for detecting suspicious activity spikes.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/forense_cloud.png"
                }
            ]
        },
        {
            "name": "Ciber inteligencia",
            "nameEn": "Cyber Intelligence",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/ciberinteligencia.png",
            "description": "Rama de la ciberseguridad dedicada a la identificación y el análisis de las amenazas cibernéticas para ayudar a las organizaciones a comprender los riesgos de los ataques externos. Permite tomar decisiones informadas y proactivas basadas en datos sobre las capacidades, motivaciones y tácticas de los posibles atacantes, transformando información bruta en inteligencia procesable para fortalecer las posturas de defensa.",
            "descriptionEn": "Branch of cybersecurity dedicated to identifying and analyzing cyber threats to help organizations understand the risks of external attacks. It allows for making informed and proactive decisions based on data regarding the capabilities, motivations, and tactics of potential attackers, transforming raw information into actionable intelligence to strengthen defense postures.",
            "children": [
                {
                    "name": "OSINT",
                    "nameEn": "OSINT",
                    "youtube": "https://youtu.be/8wEiO4RMseE",
                    "youtube_label": "OSINT",
                    "youtube_labelEn": "OSINT",
                    "description": "La Inteligencia de Fuentes Abiertas (OSINT) consiste en la recolección y el análisis de información proveniente de fuentes públicas y abiertas para su uso en un contexto de inteligencia. Abarca desde la búsqueda en redes sociales y registros públicos hasta el análisis de datos técnicos en internet, permitiendo obtener una visión detallada de un objetivo sin interactuar directamente con él.",
                    "descriptionEn": "Open-Source Intelligence (OSINT) consists of collecting and analyzing information from public and open sources for use in an intelligence context. It ranges from searching social media and public records to analyzing technical data on the internet, allowing for a detailed view of a target without directly interacting with it.",
                    "children": [
                        {
                            "name": "Maltego",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Maltego es una herramienta de visualización de enlaces e inteligencia de fuentes abiertas que permite descubrir relaciones entre personas, grupos, sitios web, dominios, redes y otros tipos de entidades. Ayuda a los analistas a conectar puntos aparentemente no relacionados a través de una interfaz gráfica basada en grafos, facilitando enormemente la investigación de infraestructuras maliciosas y la huella digital de organizaciones.",
                            "descriptionEn": "Maltego is an open-source link visualization and intelligence tool that allows for discovering relationships between people, groups, websites, domains, networks, and other types of entities. It helps analysts connect seemingly unrelated dots through a graph-based graphical interface, greatly facilitating the investigation of malicious infrastructures and organization digital footprints.",
                            "url": "https://www.maltego.com/",
                            "tutorialUrl": "https://docs.maltego.com/",
                            "reddit": "https://www.reddit.com/r/Maltego/",
                            "youtube": "https://youtu.be/wMEYwWoPU4o",
                            "youtube_label": "Maltego",
                            "youtube_labelEn": "Maltego",
                            "tutorial_content": "<h4>Conecta los Puntos</h4><p>Visualiza relaciones entre personas, correos, empresas y dominios. Transforma datos dispersos en un grafo comprensible.</p>",
                            "tutorial_contentEn": "<h4>Connect the Dots</h4><p>Visualizes relationships between people, emails, companies, and domains. Transforms scattered data into a comprehensible graph.</p>"
                        },
                        {
                            "name": "Shodan",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Shodan es un motor de búsqueda especializado que permite a los usuarios encontrar dispositivos específicos conectados a internet. A diferencia de los buscadores tradicionales, Shodan indexa todo lo demás: servidores, routers, webcams e incluso sistemas de control industrial (ICS), proporcionando información técnica crítica sobre estandares de banners y vulnerabilidades expuestas que es vital para la evaluación de riesgos global.",
                            "descriptionEn": "Shodan is a specialized search engine that allows users to find specific devices connected to the internet. Unlike traditional search engines, Shodan indexes everything else: servers, routers, webcams, and even industrial control systems (ICS), providing critical technical information about banner standards and exposed vulnerabilities that is vital for global risk assessment.",
                            "url": "https://www.shodan.io/",
                            "reddit": "https://www.reddit.com/r/shodan/",
                            "tutorial_content": "<h4>Google para Hackers</h4><p>Encuentra webcams, servidores industriales, routers y servidores vulnerables expuestos a internet.</p><h4>Búsqueda</h4><code>port:3389 country:ES</code>",
                            "tutorial_contentEn": "<h4>Google for Hackers</h4><p>Finds webcams, industrial servers, routers, and vulnerable servers exposed to the internet.</p><h4>Search</h4><code>port:3389 country:ES</code>",
                            "youtube": "https://youtu.be/KPZgs5NGAtI",
                            "youtube_label": "Shodan",
                            "youtube_labelEn": "Shodan"
                        },
                        {
                            "name": "theHarvester",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "theHarvester es una herramienta extremadamente sencilla pero potente diseñada para la recolección pasiva de información en las fases iniciales de un pentesting o investigación. Permite obtener correos electrónicos, nombres de subdominios, nombres de host e incluso nombres de empleados de diversas fuentes públicas como buscadores y redes sociales, ayudando a definir el perímetro de ataque de una organización.",
                            "descriptionEn": "theHarvester is an extremely simple yet powerful tool designed for passive information gathering in the early stages of pentesting or investigation. It allows for obtaining emails, subdomain names, hostnames, and even employee names from various public sources such as search engines and social media, helping to define an organization's attack perimeter.",
                            "url": "https://github.com/laramies/theHarvester",
                            "github": "https://github.com/laramies/theHarvester",
                            "tutorial_content": "<h4>Recolección Pasiva</h4><p>Busca en Google, LinkedIn, Bing y PGP servers para encontrar emails de empleados de una empresa objetivo sin tocarlos.</p>",
                            "tutorial_contentEn": "<h4>Passive Collection</h4><p>Searches Google, LinkedIn, Bing, and PGP servers to find emails of employees of a target company without touching them.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/osint.png"
                },
                {
                    "name": "Threat Intel",
                    "nameEn": "Threat Intel",
                    "description": "Dominio especializado en la recolección, procesamiento y análisis de datos sobre amenazas para generar inteligencia que permita prevenir y mitigar ataques. Se basa en el intercambio de indicadores de compromiso (IoCs) y el estudio de los actores de amenazas (adversarios), permitiendo a las organizaciones anticiparse a las nuevas tendencias delictivas y automatizar la respuesta defensiva mediante plataformas de compartición.",
                    "descriptionEn": "Specialized domain in collecting, processing, and analyzing threat data to generate intelligence that allows for preventing and mitigating attacks. It is based on the exchange of indicators of compromise (IoCs) and the study of threat actors (adversaries), allowing organizations to anticipate new criminal trends and automate defensive response through sharing platforms.",
                    "children": [
                        {
                            "name": "MISP",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "MISP (Malware Information Sharing Platform) es una plataforma de código abierto diseñada para recopilar, almacenar, distribuir y compartir indicadores de compromiso de ataques dirigidos y amenazas cibernéticas. Facilita la colaboración entre comunidades y organizaciones, permitiendo que la inteligencia detectada por una entidad sea utilizada por otras para protegerse automáticamente, creando una red de defensa colectiva contra el malware y el espionaje.",
                            "descriptionEn": "MISP (Malware Information Sharing Platform) is an open-source platform designed to collect, store, distribute, and share indicators of compromise of targeted attacks and cyber threats. It facilitates collaboration between communities and organizations, allowing intelligence detected by one entity to be used by others to automatically protect themselves, creating a collective defense network against malware and espionage.",
                            "url": "https://www.misp-project.org/",
                            "github": "https://github.com/MISP/MISP",
                            "tutorial_content": "<h4>Inteligencia Compartida</h4><p>Si una empresa ve un ataque, sube el hash del malware a MISP. Otras empresas conectadas se protegen automáticamente.</p>",
                            "tutorial_contentEn": "<h4>Shared Intelligence</h4><p>If a company sees an attack, it uploads the malware hash to MISP. Other connected companies are automatically protected.</p>"
                        },
                        {
                            "name": "OpenCTI",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "OpenCTI (Open Cyber Threat Intelligence) es una plataforma modular diseñada para estructurar, organizar y visualizar el conocimiento técnico y no técnico sobre ciberamenazas. Permite a los analistas gestionar relaciones complejas entre entidades, como grupos de intrusión, malware, víctimas y vectores de ataque, integrándose con diversas fuentes de datos para proporcionar una visión estratégica y operativa del panorama de amenazas global.",
                            "descriptionEn": "OpenCTI (Open Cyber Threat Intelligence) is a modular platform designed to structure, organize, and visualize technical and non-technical knowledge about cyber threats. It allows analysts to manage complex relationships between entities, such as intrusion groups, malware, victims, and attack vectors, integrating with various data sources to provide a strategic and operational view of the global threat landscape.",
                            "url": "https://www.opencti.io/",
                            "github": "https://github.com/OpenCTI-Platform/opencti",
                            "tutorial_content": "<h4>Gestión de Conocimiento</h4><p>Ayuda a los analistas a entender las tácticas, técnicas y procedimientos (TTPs) de los grupos de atacantes.</p>",
                            "tutorial_contentEn": "<h4>Knowledge Management</h4><p>Helps analysts understand the tactics, techniques, and procedures (TTPs) of attacker groups.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/threat_intel.png"
                },
                {
                    "name": "Dark Web",
                    "nameEn": "Dark Web",
                    "youtube": "https://youtu.be/1G9aoC1X90A",
                    "youtube_label": "Que es la Dark Web?",
                    "youtube_labelEn": "What is the Dark Web?",
                    "description": "Sub-rama dedicada a la investigación y monitorización de las porciones de la web que no están indexadas por los motores de búsqueda convencionales y requieren software específico para su acceso. Se enfoca en la identificación de mercados ilícitos, foros de hacking y filtraciones de datos, siendo crucial para la detección temprana de credenciales robadas y la inteligencia sobre las actividades de grupos cibercriminales.",
                    "descriptionEn": "Sub-branch dedicated to the investigation and monitoring of portions of the web that are not indexed by conventional search engines and require specific software for access. It focuses on identifying illicit markets, hacking forums, and data leaks, being crucial for the early detection of stolen credentials and intelligence on the activities of cybercriminal groups.",
                    "children": [
                        {
                            "name": "Tor",
                            "description": "Tor (The Onion Router) es una red de comunicación de código abierto que permite el anonimato en línea mediante el enrutamiento cebolla. Al dirigir el tráfico de internet a través de una red mundial de voluntarios compuesta por miles de nodos, oculta la ubicación y el uso del usuario a cualquier persona que realice una vigilancia de red o un análisis de tráfico, siendo una herramienta fundamental tanto para la privacidad como para la investigación en la Dark Web.",
                            "descriptionEn": "Tor (The Onion Router) is an open-source communication network that enables online anonymity through onion routing. By directing internet traffic through a global volunteer network composed of thousands of nodes, it masks the user's location and usage from anyone performing network surveillance or traffic analysis, making it a fundamental tool for both privacy and Dark Web investigation.",
                            "url": "https://www.torproject.org/",
                            "tutorial_content": "<h4>La Cebolla</h4><p>Enruta tu tráfico a través de tres nodos aleatorios en el mundo, cifrando el mensaje en cada paso para ocultar tu origen.</p>",
                            "tutorial_contentEn": "<h4>The Onion</h4><p>Routes your traffic through three random nodes in the world, encrypting the message at each step to hide your origin.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Ahmia",
                            "description": "Motor de búsqueda para servicios ocultos de Tor.",
                            "descriptionEn": "Search engine for Tor hidden services.",
                            "url": "https://ahmia.fi/",
                            "tutorial_content": "<h4>Buscador de la Darknet</h4><p>A diferencia de Google, indexa sitios .onion. Filtra contenido ilegal dañino, haciéndolo más seguro para investigadores.</p>",
                            "tutorial_contentEn": "<h4>Darknet Search Engine</h4><p>Unlike Google, it indexes .onion sites. Filters harmful illegal content, making it safer for researchers.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/dark_web.png"
                }
            ]
        },
        {
            "name": "Respuesta a Incidentes",
            "nameEn": "Incident Response",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/respuestaincidentes.png",
            "description": "Conjunto de procesos y herramientas diseñadas para identificar, contener y erradicar amenazas cibernéticas una vez que se ha detectado un incidente. Su objetivo es minimizar el impacto de una brecha de seguridad, restaurar los servicios críticos de la empresa lo antes posible y analizar las causas raíz para prevenir futuras intrusiones, garantizando la continuidad del negocio.",
            "descriptionEn": "Set of processes and tools designed to identify, contain, and eradicate cyber threats once an incident has been detected. Its objective is to minimize the impact of a security breach, restore the company's critical services as soon as possible, and analyze root causes to prevent future intrusions, ensuring business continuity.",
            "children": [
                {
                    "name": "Gestión de Incidentes",
                    "nameEn": "Incident Management",
                    "description": "La gestión de incidentes es el proceso crítico que organiza cómo una empresa detecta, analiza y responde a eventos de seguridad para restaurar la normalidad. Involucra la creación de un equipo de respuesta (CSIRT), la documentación rigurosa de cada paso y la coordinación entre departamentos para asegurar que el impacto legal y operativo sea el mínimo posible durante una crisis ciber-física.",
                    "descriptionEn": "Incident management is the critical process that organizes how a company detects, analyzes, and responds to security events to restore normality. It involves creating a response team (CSIRT), rigorous documentation of each step, and coordination between departments to ensure that the legal and operational impact is as low as possible during a cyber-physical crisis.",
                    "children": [
                        {
                            "name": "TheHive",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "TheHive es una plataforma de orquestación de respuesta a incidentes de seguridad (SIRP) de código abierto y escalable, diseñada para facilitar el trabajo de los analistas de SOC. Permite la colaboración en tiempo real sobre casos de incidentes, la gestión de observables y la integración con motores de análisis, transformando la respuesta ante incidentes en un proceso estructurado, documentado y altamente eficiente.",
                            "descriptionEn": "TheHive is a scalable, open-source security incident response orchestration platform (SIRP) designed to facilitate the work of SOC analysts. It allows for real-time collaboration on incident cases, observable management, and integration with analysis engines, transforming incident response into a structured, documented, and highly efficient process.",
                            "url": "https://thehive-project.org/",
                            "github": "https://github.com/TheHive-Project/TheHive",
                            "tutorial_content": "<h4>Gestión de Casos</h4><p>Colabora con tu equipo de SOC. Un analista crea un 'Caso', añade 'Observables' (IPs, dominios) y asigna tareas.</p>",
                            "tutorial_contentEn": "<h4>Case Management</h4><p>Collaborates with your SOC team. An analyst creates a 'Case', adds 'Observables' (IPs, domains), and assigns tasks.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/gestion_incidentes.png"
                },
                {
                    "name": "Automatización",
                    "nameEn": "Automation",
                    "description": "La automatización en la respuesta a incidentes permite ejecutar acciones defensivas a velocidad de máquina, reduciendo drásticamente el tiempo de exposición ante un ataque. Mediante el uso de SOAR y playbooks predefinidos, las organizaciones pueden neutralizar amenazas conocidas, como el bloqueo de IPs maliciosas o el aislamiento de hosts, sin intervención humana inmediata, liberando a los analistas para tareas más complejas.",
                    "descriptionEn": "Automation in incident response allows for executing defensive actions at machine speed, drastically reducing the exposure time during an attack. By using SOAR and predefined playbooks, organizations can neutralize known threats, such as blocking malicious IPs or isolating hosts, without immediate human intervention, freeing analysts for more complex tasks.",
                    "children": [
                        {
                            "name": "Cortex",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Cortex es un potente motor de análisis diseñado para automatizar el enriquecimiento de los indicadores de compromiso (IoCs) mediante la consulta de múltiples fuentes de inteligencia externas. Se integra perfectamente con TheHive, permitiendo a los analistas analizar cientos de observables de forma simultánea y obtener reportes detallados en segundos, lo que acelera drásticamente la fase de investigación de un incidente.",
                            "descriptionEn": "Cortex is a powerful analysis engine designed to automate the enrichment of indicators of compromise (IoCs) by querying multiple external intelligence sources. It integrates perfectly with TheHive, allowing analysts to analyze hundreds of observables simultaneously and obtain detailed reports in seconds, drastically accelerating the investigation phase of an incident.",
                            "url": "https://github.com/TheHive-Project/Cortex",
                            "github": "https://github.com/TheHive-Project/Cortex",
                            "tutorial_content": "<h4>El Cerebro</h4><p>Recibe observables de TheHive (ej. una IP) y la consulta automáticamente en 50 servicios (VirusTotal, Shodan) devolviendo un reporte.</p>",
                            "tutorial_contentEn": "<h4>The Brain</h4><p>Receives observables from TheHive (e.g., an IP) and automatically queries them in 50 services (VirusTotal, Shodan), returning a report.</p>"
                        },
                        {
                            "name": "SOAR",
                            "nameEn": "SOAR",
                            "description": "SOAR (Security Orchestration, Automation, and Response) es un enfoque tecnológico que permite a las organizaciones automatizar tareas de seguridad repetitivas y orquestar respuestas coordinadas entre diferentes herramientas. Al crear flujos de trabajo automatizados (playbooks), el SOAR reduce el tiempo promedio de respuesta (MTTR) y libera a los analistas de tareas manuales, permitiéndoles centrarse en amenazas más complejas y estratégicas.",
                            "descriptionEn": "SOAR (Security Orchestration, Automation, and Response) is a technological approach that allows organizations to automate repetitive security tasks and orchestrate coordinated responses across different tools. By creating automated workflows (playbooks), SOAR reduces the mean time to respond (MTTR) and frees analysts from manual tasks, allowing them to focus on more complex and strategic threats.",
                            "tutorial_content": "<h4>Concepto</h4><p>Tecnología que permite automatizar respuestas. Ejemplo: Si TheHive detecta un malware, el SOAR puede ordenar al Firewall bloquear la IP automáticamente.</p>",
                            "tutorial_contentEn": "<h4>Concept</h4><p>Technology that allows automating responses. Example: If TheHive detects malware, the SOAR can command the Firewall to automatically block the IP.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/automatizacion.png"
                },
                {
                    "name": "Contención",
                    "nameEn": "Containment",
                    "description": "La contención es la fase vital de la respuesta donde el objetivo principal es detener el avance del atacante y limitar el daño dentro de la infraestructura. Esta etapa requiere decisiones rápidas como desconectar sistemas infectados, revocar credenciales comprometidas o aplicar parches de emergencia, asegurando que el incidente no se propague a otras áreas críticas mientras se prepara la fase de erradicación.",
                    "descriptionEn": "Containment is the vital response phase where the primary goal is to stop the attacker's progress and limit damage within the infrastructure. This stage requires quick decisions such as disconnecting infected systems, revoking compromised credentials, or applying emergency patches, ensuring the incident does not spread to other critical areas while preparing for the eradication phase.",
                    "children": [
                        {
                            "name": "EDR",
                            "nameEn": "EDR",
                            "description": "EDR (Endpoint Detection and Response) es una solución de seguridad avanzada que monitoriza y recopila continuamente datos de los endpoints para detectar comportamientos sospechosos que eluden los antivirus tradicionales. Proporciona visibilidad profunda sobre los procesos, conexiones de red y modificaciones de archivos, permitiendo a los equipos de seguridad investigar incidentes en tiempo real y responder mediante la contención remota de los dispositivos comprometidos.",
                            "descriptionEn": "EDR (Endpoint Detection and Response) is an advanced security solution that continuously monitors and collects data from endpoints to detect suspicious behaviors that bypass traditional antivirus. It provides deep visibility into processes, network connections, and file modifications, allowing security teams to investigate incidents in real-time and respond through remote containment of compromised devices.",
                            "tutorial_content": "<h4>Concepto</h4><p>Antivirus con esteroides. No solo busca firmas de virus, sino comportamientos sospechosos (ej. PowerShell ejecutando comandos ofuscados).</p>",
                            "tutorial_contentEn": "<h4>Concept</h4><p>Antivirus on steroids. Not only looks for virus signatures, but also suspicious behaviors (e.g., PowerShell executing obfuscated commands).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "XDR",
                            "nameEn": "XDR",
                            "description": "XDR (Extended Detection and Response) es una evolución del EDR que rompe los silos de seguridad al integrar datos no solo de los endpoints, sino también de la red, los correos electrónicos, los servidores y las aplicaciones en la nube. Esta visión holística permite correlacionar alertas dispersas para identificar ataques sofisticados y multietapa, proporcionando una capacidad de detección y respuesta mucho más robusta y unificada en toda la infraestructura.",
                            "descriptionEn": "XDR (Extended Detection and Response) is an evolution of EDR that breaks security silos by integrating data not only from endpoints, but also from the network, emails, servers, and cloud applications. This holistic view allows for correlating scattered alerts to identify sophisticated, multi-stage attacks, providing a much more robust and unified detection and response capability across the entire infrastructure.",
                            "tutorial_content": "<h4>Concepto</h4><p>Evolución del EDR. Correlaciona datos no solo del endpoint, sino también del email, red y servidores para una visión holística.</p>",
                            "tutorial_contentEn": "<h4>Concept</h4><p>Evolution of EDR. Correlates data not only from the endpoint, but also from email, network, and servers for a holistic view.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/contencion.png"
                }
            ]
        },
        {
            "name": "Seguridad Nube",
            "nameEn": "Cloud Security",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/seguridad_nube.png",
            "description": "Disciplina centrada en la implementación de controles, políticas y tecnologías para proteger los datos, las aplicaciones y la infraestructura que reside en entornos de nube pública o híbrida. Se ocupa de mitigar riesgos específicos como las configuraciones incorrectas, el acceso no autorizado y la falta de visibilidad, garantizando que el modelo de responsabilidad compartida se cumpla de forma segura y eficiente.",
            "descriptionEn": "Discipline focused on implementing controls, policies, and technologies to protect data, applications, and infrastructure residing in public or hybrid cloud environments. It deals with mitigating specific risks such as misconfigurations, unauthorized access, and lack of visibility, ensuring that the shared responsibility model is met safely and efficiently.",
            "children": [
                {
                    "name": "CSPM",
                    "nameEn": "CSPM",
                    "description": "CSPM (Cloud Security Posture Management) se refiere a las herramientas y procesos diseñados para monitorizar continuamente la configuración de los servicios en la nube y detectar desviaciones de las mejores prácticas de seguridad. Permite a las organizaciones identificar proactivamente configuraciones inseguras, garantizar el cumplimiento de normativas y reducir la superficie de ataque mediante el análisis automatizado de la infraestructura cloud.",
                    "descriptionEn": "CSPM (Cloud Security Posture Management) refers to tools and processes designed to continuously monitor cloud service configurations and detect deviations from security best practices. It allows organizations to proactively identify insecure configurations, ensure regulatory compliance, and reduce the attack surface through automated cloud infrastructure analysis.",
                    "children": [
                        {
                            "name": "Wiz",
                            "description": "Wiz es una plataforma de seguridad en la nube nativa que proporciona una visibilidad completa y sin agentes de toda la infraestructura cloud para identificar rutas de ataque críticas. Utiliza un grafo de seguridad para correlacionar vulnerabilidades, malas configuraciones e identidades con privilegios excesivos, permitiendo a los equipos de seguridad priorizar y solucionar los riesgos más significativos con una velocidad y precisión inigualables.",
                            "descriptionEn": "Wiz is a native cloud security platform that provides full, agentless visibility of the entire cloud infrastructure to identify critical attack paths. It uses a security graph to correlate vulnerabilities, misconfigurations, and over-privileged identities, allowing security teams to prioritize and resolve the most significant risks with unmatched speed and accuracy.",
                            "url": "https://wiz.io/",
                            "tutorial_content": "<h4>Visibilidad sin Agentes</h4><p>Wiz se conecta a la API de tu nube (AWS, Azure) y escanea todo sin instalar nada. Encuentra caminos tóxicos 'internet -> vulnerabilidad -> datos sensibles'.</p>",
                            "tutorial_contentEn": "<h4>Agentless Visibility</h4><p>Wiz connects to your cloud's API (AWS, Azure) and scans everything without installing anything. Finds toxic paths 'internet -> vulnerability -> sensitive data'.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Prisma Cloud",
                            "description": "Prisma Cloud, de Palo Alto Networks, es una plataforma integral de protección nativa de la nube (CNAPP) que asegura todo el ciclo de vida del software, desde el código hasta el despliegue. Ofrece capacidades de CSPM, CWPP y seguridad de red en un único panel, permitiendo a las grandes empresas proteger cargas de trabajo complejas en contenedores, servidores sin servidor y entornos multicloud de manera unificada.",
                            "descriptionEn": "Prisma Cloud, by Palo Alto Networks, is a comprehensive cloud-native protection platform (CNAPP) that secures the entire software lifecycle, from code to deployment. It offers CSPM, CWPP, and network security capabilities in a single pane, allowing large enterprises to protect complex workloads in containers, serverless environments, and multi-cloud domains in a unified way.",
                            "url": "https://www.paloaltonetworks.com/prisma/cloud",
                            "tutorial_content": "<h4>Seguridad Full Stack</h4><p>Protege desde el código (IaC) hasta el tiempo de ejecución en la nube. Muy popular en grandes empresas.</p>",
                            "tutorial_contentEn": "<h4>Full Stack Security</h4><p>Protects from code (IaC) to cloud runtime. Very popular in large companies.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/cspm.png"
                },
                {
                    "name": "Contenedores",
                    "nameEn": "Containers",
                    "description": "La seguridad de contenedores se enfoca en proteger las aplicaciones empaquetadas y sus entornos de ejecución, asegurando que las imágenes sean íntegras y no contengan vulnerabilidades. Implica escanear las dependencias en busca de paquetes obsoletos, endurecer el runtime para prevenir escapes de contenedores y aplicar políticas de privilegios mínimos para evitar que un contenedor comprometido afecte al resto del host.",
                    "descriptionEn": "Container security focuses on protecting packaged applications and their runtime environments, ensuring that images are intact and do not contain vulnerabilities. It involves scanning dependencies for obsolete packages, hardening the runtime to prevent container escapes, and applying least privilege policies to prevent a compromised container from affecting the rest of the host.",
                    "children": [
                        {
                            "name": "Trivy",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Trivy es un escáner de seguridad masivo, extremadamente rápido y fácil de usar, diseñado para encontrar vulnerabilidades en imágenes de contenedores, sistemas de archivos y repositorios git. Es una herramienta esencial en los flujos de CI/CD, ya que permite detectar paquetes obsoletos, errores de configuración de infraestructura como código (IaC) y secretos expuestos antes de que lleguen a entornos de producción.",
                            "descriptionEn": "Trivy is a massive, extremely fast, and easy-to-use security scanner designed to find vulnerabilities in container images, file systems, and git repositories. It is an essential tool in CI/CD flows, as it allows for detecting obsolete packages, infrastructure-as-code (IaC) configuration errors, and exposed secrets before they reach production environments.",
                            "url": "https://aquasecurity.github.io/trivy/",
                            "github": "https://github.com/aquasecurity/trivy",
                            "tutorial_content": "<h4>Escáner Universal</h4><p>Escanea imágenes de contenedores, sistemas de archivos y repositorios git. Rápido y fácil de usar en CI.</p>",
                            "tutorial_contentEn": "<h4>Universal Scanner</h4><p>Scans container images, file systems, and git repositories. Fast and easy to use in CI.</p>"
                        },
                        {
                            "name": "Aqua",
                            "description": "Aqua Security es una plataforma líder que proporciona seguridad end-to-end para aplicaciones nativas de la nube, automatizando la protección desde el desarrollo hasta la ejecución. Permite a las organizaciones escanear imágenes en busca de vulnerabilidades, imponer políticas de seguridad estrictas en los orquestadores y monitorizar el comportamiento de los contenedores en tiempo real para bloquear actividades maliciosas desconocidas.",
                            "descriptionEn": "Aqua Security is a leading platform that provides end-to-end security for cloud-native applications, automating protection from development to execution. It allows organizations to scan images for vulnerabilities, enforce strict security policies on orchestrators, and monitor container behavior in real-time to block unknown malicious activities.",
                            "url": "https://www.aquasec.com/",
                            "tutorial_content": "<h4>Protección de Contenedores</h4><p>Asegura que tus imágenes de Docker no tengan vulnerabilidades antes de desplegarse y vigila que no hagan nada raro en ejecución.</p>",
                            "tutorial_contentEn": "<h4>Container Protection</h4><p>Ensures your Docker images don't have vulnerabilities before deployment and monitors for unusual live behavior.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/contenedores.png"
                },
                {
                    "name": "Kubernetes",
                    "nameEn": "Kubernetes",
                    "description": "La seguridad en Kubernetes (K8s) aborda la protección de los clusters de orquestación, centrándose en el control de acceso, la segmentación de red y la seguridad de los nodos. Debido a su complejidad, requiere configurar correctamente el RBAC (Control de Acceso Basado en Roles), implementar Network Policies para aislar el tráfico entre pods y utilizar herramientas de auditoría para detectar configuraciones erróneas que podrían exponer el plano de control.",
                    "descriptionEn": "Kubernetes (K8s) security addresses the protection of orchestration clusters, focusing on access control, network segmentation, and node security. Due to its complexity, it requires correctly configuring RBAC (Role-Based Access Control), implementing Network Policies to isolate traffic between pods, and using auditing tools to detect misconfigurations that could expose the control plane.",
                    "children": [
                        {
                            "name": "Falco",
                            "description": "Falco es el estándar defacto de código abierto para la seguridad en tiempo de ejecución en la nube y sistemas Linux, diseñado para detectar comportamientos inesperados en aplicaciones. Utiliza un potente motor de reglas para vigilar llamadas al sistema y flujos de red, alertando instantáneamente sobre actividades como la apertura de shells en contenedores, modificaciones de archivos críticos o intentos de escalada de privilegios.",
                            "descriptionEn": "Falco is the de facto open-source standard for cloud and Linux system runtime security, designed to detect unexpected application behaviors. It uses a powerful rules engine to monitor system calls and network flows, instantly alerting on activities such as opening shells in containers, modifying critical files, or privilege escalation attempts.",
                            "url": "https://falco.org/",
                            "github": "https://github.com/falcosecurity/falco",
                            "tutorial_content": "<h4>Cámara de Seguridad para Linux</h4><p>Detecta comportamientos anómalos en tiempo real mediante reglas. Ej: 'Un shell se abrió dentro de un contenedor en producción'.</p>",
                            "tutorial_contentEn": "<h4>Linux Security Camera</h4><p>Detects anomalous behaviors in real-time via rules. E.g., 'A shell was opened inside a production container'.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Kubernetes",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Kubernetes es la plataforma de orquestación de contenedores más extendida, pero su flexibilidad requiere una arquitectura de seguridad robusta basada en múltiples capas defensivas. El enfoque de seguridad de Kubernetes abarca desde el endurecimiento del cluster y las políticas de red (Network Policies) hasta el control de acceso basado en roles (RBAC) y el uso de estándares de seguridad para pods (PSS) para minimizar riesgos.",
                            "descriptionEn": "Kubernetes is the most widespread container orchestration platform, but its flexibility requires a robust security architecture based on multiple defensive layers. The Kubernetes security approach spans from cluster hardening and network policies to role-based access control (RBAC) and the use of pod security standards (PSS) to minimize risks.",
                            "url": "https://kubernetes.io/docs/concepts/security/overview/",
                            "github": "https://github.com/kubernetes/kubernetes",
                            "reddit": "https://www.reddit.com/r/kubernetes/",
                            "tutorial_content": "<h4>El Estándar de Orquestación</h4><p>Gestiona clusters de contenedores. Su seguridad es compleja: RBAC, Network Policies y Pod Security Standards son clave.</p>",
                            "tutorial_contentEn": "<h4>The Orchestration Standard</h4><p>Manages container clusters. Its security is complex: RBAC, Network Policies, and Pod Security Standards are key.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/kubernetes.png"
                },
                {
                    "name": "SaaS",
                    "nameEn": "SaaS",
                    "description": "La seguridad SaaS (Software as a Service) se centra en proteger los datos y las identidades que residen en aplicaciones gestionadas por terceros, como Office 365 o Salesforce. Como la infraestructura es gestionada por el proveedor, la responsabilidad del cliente recae en la configuración correcta del acceso, la prevención de fugas de datos (DLP) y la visibilidad sobre qué aplicaciones 'Shadow IT' están utilizando los empleados sin autorización.",
                    "descriptionEn": "SaaS (Software as a Service) security focuses on protecting data and identities residing in third-party managed applications, such as Office 365 or Salesforce. Since the infrastructure is managed by the provider, the customer's responsibility lies in correctly configuring access, data loss prevention (DLP), and visibility into which 'Shadow IT' applications employees are using without authorization.",
                    "children": [
                        {
                            "name": "Defender for Cloud Apps",
                            "description": "CASB de Microsoft para seguridad SaaS.",
                            "descriptionEn": "Microsoft CASB for SaaS security.",
                            "url": "https://www.microsoft.com/en-us/security/business/cloud-security/microsoft-defender-for-cloud-apps",
                            "tutorial_content": "<h4>Seguridad en la Nube de MS</h4><p>Descubre 'Shadow IT' (apps que usan tus empleados sin permiso) y protege datos en aplicacione SaaS como Office 365.</p>",
                            "tutorial_contentEn": "<h4>MS Cloud Security</h4><p>Discovers 'Shadow IT' (apps your employees use without permission) and protects data in SaaS applications like Office 365.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/saas.png"
                }
            ]
        },
        {
            "name": "Criptografía",
            "nameEn": "Cryptography",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/cryptografia.png",
            "description": "La criptografía es el pilar fundamental de la seguridad de la información, centrada en el diseño de protocolos para proteger la comunicación contra adversarios maliciosos. Se basa en complejos modelos matemáticos para garantizar la confidencialidad, integridad, autenticidad y no repudio de los datos, permitiendo que la información sensible viaje de forma segura por redes inseguras como internet.",
            "descriptionEn": "Cryptography is the fundamental pillar of information security, focused on designing protocols to protect communication from malicious adversaries. It is based on complex mathematical models to guarantee data confidentiality, integrity, authenticity, and non-repudiation, allowing sensitive information to travel securely over insecure networks such as the internet.",
            "children": [
                {
                    "name": "PKI",
                    "nameEn": "PKI",
                    "description": "La Infraestructura de Clave Pública (PKI) es el sistema de hardware, software, personas y políticas necesarias para crear, gestionar, distribuir y revocar certificados digitales. Sirve para establecer la identidad de personas y dispositivos, permitiendo el cifrado de datos y las firmas digitales a gran escala mediante el uso de pares de claves públicas y privadas firmadas por autoridades de certificación confiables.",
                    "descriptionEn": "Public Key Infrastructure (PKI) is the system of hardware, software, people, and policies required to create, manage, distribute, and revoke digital certificates. It serves to establish the identity of people and devices, allowing for data encryption and digital signatures on a large scale through the use of public and private key pairs signed by trusted certificate authorities.",
                    "children": [
                        {
                            "name": "OpenSSL",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "OpenSSL es una biblioteca de software comercial de código abierto que proporciona una implementación robusta e industrial de los protocolos SSL y TLS, fundamentales para la navegación web segura (HTTPS). Incluye herramientas para generar certificados, gestionar claves RSA/ECC y realizar pruebas de conexión, siendo el motor criptográfico que impulsa la mayoría de los servidores web y aplicaciones seguras en el mundo Linux y Unix.",
                            "descriptionEn": "OpenSSL is a robust and industrial open-source software library that provides a reliable implementation of the SSL and TLS protocols, fundamental for secure web browsing (HTTPS). It includes tools for generating certificates, managing RSA/ECC keys, and performing connection tests, being the cryptographic engine that powers most web servers and secure applications in the Linux and Unix world.",
                            "url": "https://www.openssl.org/",
                            "github": "https://github.com/openssl/openssl",
                            "tutorial_content": "<h4>La Navaja Suiza Crypto</h4><p>Crea certificados, claves privadas y verifica conexiones SSL/TLS. Básico para cualquier admin.</p><code>openssl req -new -newkey rsa:2048 -nodes -keyout key.pem -out csr.pem</code>",
                            "tutorial_contentEn": "<h4>The Crypto Swiss Army Knife</h4><p>Creates certificates, private keys, and verifies SSL/TLS connections. Basic for any admin.</p><code>openssl req -new -newkey rsa:2048 -nodes -keyout key.pem -out csr.pem</code>"
                        },
                        {
                            "name": "CFSSL",
                            "nameEn": "CFSSL",
                            "description": "CFSSL (Cloudflare’s PKI/TLS Toolkit) es una herramienta y servicio de Cloudflare diseñado para facilitar la gestión de infraestructuras de clave pública de forma moderna e integrada. Permite actuar como una autoridad de certificación (CA) interna de alto rendimiento, facilitando la firma automática de certificados TLS y el bundling de certificados para garantizar la compatibilidad entre navegadores y sistemas.",
                            "descriptionEn": "CFSSL (Cloudflare’s PKI/TLS Toolkit) is a Cloudflare tool and service designed to facilitate modern and integrated public key infrastructure management. It allows for acting as a high-performance internal certificate authority (CA), facilitating automatic TLS certificate signing and certificate bundling to ensure compatibility between browsers and systems.",
                            "url": "https://github.com/cloudflare/cfssl",
                            "github": "https://github.com/cloudflare/cfssl",
                            "tutorial_content": "<h4>PKI Moderna</h4><p>Herramienta de Cloudflare para construir una Autoridad de Certificación (CA) interna de forma más sencilla que con OpenSSL.</p>",
                            "tutorial_contentEn": "<h4>Modern PKI</h4><p>Cloudflare tool for building an internal Certificate Authority (CA) more simply than with OpenSSL.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "GPG",
                            "description": "GNU Privacy Guard (GPG) es una herramienta de cifrado de código abierto que permite asegurar las comunicaciones y los datos mediante el estándar OpenPGP. Utiliza criptografía de clave pública para garantizar que solo el destinatario previsto pueda leer un mensaje o archivo, y permite firmar digitalmente documentos para verificar su origen e integridad, siendo esencial para la privacidad en el correo electrónico y la distribución segura de software.",
                            "descriptionEn": "GNU Privacy Guard (GPG) is an open-source encryption tool that allows for securing communications and data using the OpenPGP standard. It uses public-key cryptography to ensure that only the intended recipient can read a message or file, and allows for digitally signing documents to verify their origin and integrity, being essential for email privacy and secure software distribution.",
                            "url": "https://gnupg.org/",
                            "tutorial_content": "<h4>Privacidad PGP</h4><p>Estándar para firmar correos y cifrar archivos usando criptografía asimétrica (Clave Pública/Privada).</p>",
                            "tutorial_contentEn": "<h4>PGP Privacy</h4><p>Standard for signing emails and encrypting files using asymmetric cryptography (Public/Private Key).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "CyberChef",
                            "description": "CyberChef es una aplicación web interactiva y altamente intuitiva, apodada la 'navaja suiza cibernética', utilizada para realizar una vasta gama de operaciones de manipulación de datos. Permite a los analistas decodificar, cifrar, analizar y transformar información de forma visual a través de 'recetas' que encadenan múltiples procesos, facilitando enormemente tareas como la decodificación de Base64, el análisis de hashes o la conversión de formatos.",
                            "descriptionEn": "CyberChef is an interactive and highly intuitive web application, nicknamed the 'Cyber Swiss Army Knife', used to perform a vast range of data manipulation operations. It allows analysts to decode, encrypt, analyze, and transform information visually through 'recipes' that chain multiple processes, greatly facilitating tasks such as Base64 decoding, hash analysis, or format conversion.",
                            "url": "https://gchq.github.io/CyberChef/",
                            "tutorial_content": "<h4>Decodificador Visual</h4><p>Convierte Base64, Hex, ROT13 y descifra datos en una interfaz web fácil de usar.</p>",
                            "tutorial_contentEn": "<h4>Visual Decoder</h4><p>Converts Base64, Hex, ROT13 and decrypts data in an easy-to-use web interface.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/pki.png"
                },
                {
                    "name": "Gestión de Claves",
                    "nameEn": "Key Management",
                    "description": "La gestión de claves (Key Management) es el conjunto de procesos encargados del ciclo de vida de las claves criptográficas, desde su generación y almacenamiento seguro hasta su rotación y revocación. Sin una gestión robusta, incluso el cifrado más fuerte es inútil, ya que la pérdida o el robo de una clave maestra puede comprometer toda la información de una organización, siendo fundamental el uso de HSMs o bóvedas digitales.",
                    "descriptionEn": "Key Management is the set of processes responsible for the lifecycle of cryptographic keys, from their generation and secure storage to their rotation and revocation. Without robust management, even the strongest encryption is useless, since the loss or theft of a master key can compromise all an organization's information, making the use of HSMs or digital vaults fundamental.",
                    "children": [
                        {
                            "name": "HashiCorp Vault",
                            "description": "HashiCorp Vault es el estándar de la industria para la gestión de secretos y la protección de datos sensibles en infraestructuras modernas y dinámicas. Permite centralizar el almacenamiento de tokens, contraseñas y certificados, proporcionando acceso bajo demanda basado en la identidad y cifrando los datos en reposo y en tránsito, lo que elimina la necesidad de tener credenciales grabadas en código fuente o archivos de configuración.",
                            "descriptionEn": "HashiCorp Vault is the industry standard for secret management and sensitive data protection in modern and dynamic infrastructures. It allows for centralizing the storage of tokens, passwords, and certificates, providing on-demand access based on identity and encrypting data at rest and in transit, which eliminates the need for hardcoded credentials in source code or configuration files.",
                            "url": "https://www.vaultproject.io/",
                            "github": "https://github.com/hashicorp/vault",
                            "tutorial_content": "<h4>Gestión de Secretos</h4><p>Centraliza claves API y passwords. Las aplicaciones piden acceso a Vault en lugar de tener credenciales hardcodeadas.</p>",
                            "tutorial_contentEn": "<h4>Secret Management</h4><p>Centralizes API keys and passwords. Applications request access to Vault instead of having hardcoded credentials.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "AWS KMS",
                            "description": "AWS Key Management Service (KMS) es un servicio administrado de Amazon Web Services que facilita la creación y el control de las claves criptográficas utilizadas para cifrar los datos en la nube de AWS. Se integra nativamente con la mayoría de los servicios de Amazon (como S3, EBS y RDS), garantizando que las claves nunca salgan de módulos de seguridad de hardware (HSM) validados por FIPS 140-2.",
                            "descriptionEn": "AWS Key Management Service (KMS) is a managed Amazon Web Services service that facilitates the creation and control of cryptographic keys used to encrypt data in the AWS cloud. It integrates natively with most Amazon services (such as S3, EBS, and RDS), ensuring that keys never leave FIPS 140-2 validated hardware security modules (HSMs).",
                            "url": "https://aws.amazon.com/kms/",
                            "tutorial_content": "<h4>Key Management Service</h4><p>Crea y controla las claves de cifrado que se usan para cifrar tus datos en servicios de AWS como S3 o EBS.</p>",
                            "tutorial_contentEn": "<h4>Key Management Service</h4><p>Creates and controls the encryption keys used to encrypt your data in AWS services like S3 or EBS.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/gestion_de_claves.png"
                },
                {
                    "name": "Post-Cuántica",
                    "nameEn": "Post-Quantum",
                    "description": "La criptografía post-cuántica (PQC) investiga y desarrolla algoritmos criptográficos que se consideran seguros contra ataques realizados por ordenadores cuánticos de gran escala. Ante el futuro riesgo de que los sistemas cuánticos rompan los algoritmos de clave pública actuales (como RSA), la PQC busca implementar nuevos modelos basados en redes, códigos o funciones hash que garanticen la confidencialidad de la información en las décadas venideras.",
                    "descriptionEn": "Post-quantum cryptography (PQC) researches and develops cryptographic algorithms considered secure against attacks by large-scale quantum computers. Given the future risk of quantum systems breaking current public key algorithms (such as RSA), PQC seeks to implement new models based on lattices, codes, or hash functions that guarantee information confidentiality in the decades to come.",
                    "children": [
                        {
                            "name": "LibOQS",
                            "description": "LibOQS (Library for Open Quantum Safe) es una biblioteca de software de código abierto desarrollada en C que implementa algoritmos criptográficos resistentes a ataques cuánticos. Es el núcleo del proyecto Open Quantum Safe y sirve como plataforma de prueba y referencia para la transición de la industria hacia estándares post-cuánticos, permitiendo a los desarrolladores integrar cifrado resistente al futuro en sus aplicaciones actuales.",
                            "descriptionEn": "LibOQS (Library for Open Quantum Safe) is an open-source software library developed in C that implements quantum-resistant cryptographic algorithms. It is the core of the Open Quantum Safe project and serves as a testing and reference platform for the industry's transition to post-quantum standards, allowing developers to integrate future-resistant encryption into their current applications.",
                            "url": "https://openquantumsafe.org/",
                            "github": "https://github.com/open-quantum-safe/liboqs",
                            "tutorial_content": "<h4>Preparándose para el futuro</h4><p>Una librería en C que implementa algoritmos de cifrado resistentes a ataques de ordenadores cuánticos (Post-Quantum).</p>",
                            "tutorial_contentEn": "<h4>Preparing for the future</h4><p>A C library that implements encryption algorithms resistant to quantum computer attacks (Post-Quantum).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/post_cuantica.png"
                }
            ]
        },
        {
            "name": "DevSecOps",
            "nameEn": "DevSecOps",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/devsecops.png",
            "description": "Cultura y práctica de ciberseguridad que promueve la integración de controles de seguridad en todas las etapas del ciclo de vida de desarrollo de software (SDLC). Al 'desplazar la seguridad a la izquierda' (Shift Left), DevSecOps permite detectar vulnerabilidades de forma temprana y automatizada, transformando la seguridad en una responsabilidad compartida entre equipos de desarrollo, operaciones y seguridad.",
            "descriptionEn": "Cybersecurity culture and practice that promotes the integration of security controls in all stages of the software development lifecycle (SDLC). By shifting security to the left, DevSecOps allows for early and automated vulnerability detection, transforming security into a shared responsibility between development, operations, and security teams.",
            "children": [
                {
                    "name": "CI/CD",
                    "nameEn": "CI/CD",
                    "description": "La seguridad en los pipelines de CI/CD (Integración Continua y Despliegue Continuo) es el motor que permite entregar software de forma rápida y segura mediante la automatización de pruebas defensivas. Al integrar escaneos de código (SAST), análisis de dependencias (SCA) y pruebas dinámicas (DAST) en el flujo de trabajo, se garantiza que cada cambio introducido sea verificado automáticamente antes de llegar a los usuarios finales.",
                    "descriptionEn": "Security in CI/CD (Continuous Integration and Continuous Deployment) pipelines is the engine that allows for fast and secure software delivery by automating defensive tests. By integrating code scans (SAST), dependency analysis (SCA), and dynamic testing (DAST) into the workflow, it ensures that every change introduced is automatically verified before reaching end users.",
                    "children": [
                        {
                            "name": "GitHub Actions",
                            "description": "GitHub Actions es una plataforma de automatización potente que permite crear pipelines de CI/CD directamente en los repositorios de GitHub. Facilita enormemente el enfoque DevSecOps al permitir ejecutar escaneos de seguridad automáticos (como SAST, SCA y detección de secretos) en cada Pull Request, asegurando que solo el código que cumple con los estándares de seguridad sea integrado en la rama principal.",
                            "descriptionEn": "GitHub Actions is a powerful automation platform that allows for creating CI/CD pipelines directly in GitHub repositories. It greatly facilitates the DevSecOps approach by allowing automatic security scans (such as SAST, SCA, and secret detection) to run on every Pull Request, ensuring that only code meeting security standards is integrated into the main branch.",
                            "url": "https://github.com/features/actions",
                            "tutorial_content": "<h4>CI/CD Nativo</h4><p>Ejecuta flujos de trabajo directamente en tu repo de GitHub. Ideal para correr tests de seguridad (SAST/SCA) en cada Pull Request.</p>",
                            "tutorial_contentEn": "<h4>Native CI/CD</h4><p>Runs workflows directly in your GitHub repo. Ideal for running security tests (SAST/SCA) on every Pull Request.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "GitLab CI",
                            "description": "GitLab CI/CD es una herramienta integral integrada en GitLab que permite gestionar todo el ciclo de vida del desarrollo de software desde un único lugar. Destaca por su capacidad para automatizar pruebas de seguridad estáticas y dinámicas out-of-the-box, permitiendo a los desarrolladores visualizar y corregir vulnerabilidades en el momento de la creación del código, optimizando así la entrega continua y segura de aplicaciones.",
                            "descriptionEn": "GitLab CI/CD is a comprehensive tool integrated into GitLab that allows for managing the entire software development lifecycle from a single place. It stands out for its ability to automate static and dynamic security tests out-of-the-box, allowing developers to visualize and correct vulnerabilities at the time of code creation, thus optimizing continuous and secure application delivery.",
                            "url": "https://docs.gitlab.com/ee/ci/",
                            "tutorial_content": "<h4>Todo en Uno</h4><p>Repositorio de código + CI/CD. Facilita enormemente integrar seguridad con una simple configuración en el YAML.</p>",
                            "tutorial_contentEn": "<h4>All in One</h4><p>Code repository + CI/CD. Makes it enormously easy to integrate security with a simple YAML configuration.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Jenkins",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Jenkins es el servidor de automatización de código abierto más popular del mundo, ampliamente utilizado para construir pipelines de CI/CD altamente personalizados y complejos. Gracias a su vasto ecosistema de plugins, Jenkins permite integrar multitud de herramientas de escaneo de seguridad de terceros, convirtiéndose en el motor central de muchas implementaciones enterprise de DevSecOps que requieren orquestar flujos de trabajo diversos.",
                            "descriptionEn": "Jenkins is the world's most popular open-source automation server, widely used to build highly customized and complex CI/CD pipelines. Thanks to its vast plugin ecosystem, Jenkins allows for integrating a multitude of third-party security scanning tools, becoming the central engine of many enterprise DevSecOps implementations that require orchestrating diverse workflows.",
                            "url": "https://www.jenkins.io/",
                            "github": "https://github.com/jenkinsci/jenkins",
                            "tutorial_content": "<h4>El Abuelo del CI/CD</h4><p>Automatiza la construcción, pruebas y despliegue de software. En DevSecOps, le añadimos pasos de escaneo de seguridad.</p>",
                            "tutorial_contentEn": "<h4>The Grandfather of CI/CD</h4><p>Automates software construction, testing, and deployment. In DevSecOps, we add security scanning steps.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/ci_cd.png"
                },
                {
                    "name": "SAST",
                    "nameEn": "SAST",
                    "description": "SAST (Static Application Security Testing) es una metodología de análisis de seguridad que examina el código fuente, los binarios o el bytecode de una aplicación en busca de vulnerabilidades sin ejecutar el programa. Al analizar la estructura interna de la aplicación, el SAST identifica fallos lógicos como inyecciones SQL, desbordamientos de búfer y malas prácticas de codificación en las fases más tempranas del desarrollo.",
                    "descriptionEn": "SAST (Static Application Security Testing) is a security analysis methodology that examines an application's source code, binaries, or bytecode for vulnerabilities without executing the program. By analyzing the application's internal structure, SAST identifies logical flaws such as SQL injections, buffer overflows, and bad coding practices in the earliest stages of development.",
                    "children": [
                        {
                            "name": "Checkmarx",
                            "description": "Checkmarx One es una plataforma enterprise de seguridad de aplicaciones nativa de la nube diseñada para integrarse en el SDLC moderno y asegurar el código en múltiples lenguajes. Proporciona motores de SAST de alta precisión que escanean el código fuente en busca de brechas críticas, ofreciendo recomendaciones de remediación detalladas para que los desarrolladores puedan solucionar los problemas de seguridad de manera autónoma y eficiente.",
                            "descriptionEn": "Checkmarx One is a cloud-native enterprise application security platform designed to integrate into the modern SDLC and secure code across multiple languages. It provides high-precision SAST engines that scan source code for critical breaches, offering detailed remediation recommendations so developers can fix security issues autonomously and efficiently.",
                            "url": "https://checkmarx.com/",
                            "tutorial_content": "<h4>Análisis Estático</h4><p>Checkmarx escanea tu código fuente (sin ejecutarlo) buscando vulnerabilidades como inyecciones SQL o XSS.</p><h4>Integración</h4><p>Se integra en el pipeline de CI/CD para bloquear deploys si se encuentran vulnerabilidades críticas.</p>",
                            "tutorial_contentEn": "<h4>Static Analysis</h4><p>Checkmarx scans your source code (without executing it) for vulnerabilities like SQL injection or XSS.</p><h4>Integration</h4><p>Integrates into the CI/CD pipeline to block deploys if critical vulnerabilities are found.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "SonarQube",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "SonarQube es la plataforma líder para la inspección continua de la calidad y la seguridad del código, permitiendo detectar 'bugs', vulnerabilidades y 'code smells' de forma automática. Se integra en el flujo de trabajo de desarrollo para proporcionar retroalimentación inmediata, obligando a los equipos a mantener un alto estándar de código limpio y seguro (Clean Code) antes de que las aplicaciones se desplieguen a producción.",
                            "descriptionEn": "SonarQube is the leading platform for continuous code quality and security inspection, allowing for the automatic detection of bugs, vulnerabilities, and code smells. It integrates into the development workflow to provide immediate feedback, forcing teams to maintain a high standard of clean and secure code before applications are deployed to production.",
                            "url": "https://www.sonarqube.org/",
                            "github": "https://github.com/SonarSource/sonarqube",
                            "tutorial_content": "<h4>Calidad y Seguridad</h4><p>El estándar para limpieza de código. Analiza 'Code Smells', Bugs y Vulnerabilidades en 20+ lenguajes. Se integra en cualquier CI/CD.</p>",
                            "tutorial_contentEn": "<h4>Quality and Security</h4><p>The standard for code cleaning. Analyzes 'Code Smells', Bugs, and Vulnerabilities in 20+ languages. Integrates into any CI/CD.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/sast.png"
                },
                {
                    "name": "DAST",
                    "nameEn": "DAST",
                    "description": "DAST (Dynamic Application Security Testing) es una técnica de análisis de seguridad de 'caja negra' que prueba las aplicaciones en su estado de ejecución para encontrar vulnerabilidades que solo son visibles en tiempo de ejecución. Al simular ataques externos contra las interfaces expuestas, el DAST identifica fallos como problemas de configuración del servidor, vulnerabilidades de autenticación y riesgos en las sesiones de usuario.",
                    "descriptionEn": "DAST (Dynamic Application Security Testing) is a black-box security analysis technique that tests applications in their running state to find vulnerabilities visible only at runtime. By simulating external attacks against exposed interfaces, DAST identifies flaws such as server configuration issues, authentication vulnerabilities, and risks in user sessions.",
                    "children": [
                        {
                            "name": "OWASP ZAP",
                            "description": "OWASP ZAP (Zaproxy) es una de las herramientas de seguridad web más populares y activas del mundo, diseñada para ser utilizada tanto por desarrolladores como por pentesters profesionales. Su capacidad de automatización la hace ideal para integrarse en pipelines de CI/CD como un motor de DAST, permitiendo realizar escaneos pasivos y activos contra aplicaciones web para detectar automáticamente vulnerabilidades comunes una vez desplegadas.",
                            "descriptionEn": "OWASP ZAP (Zaproxy) is one of the world's most popular and active web security tools, designed for use by both developers and professional pentesters. Its automation capability makes it ideal for integrating into CI/CD pipelines as a DAST engine, allowing for passive and active scans against web applications to automatically detect common vulnerabilities once deployed.",
                            "url": "https://www.zaproxy.org/",
                            "tutorial_content": "<h4>DAST Automatizado</h4><p>ZAP tiene un modo 'Baseline Scan' diseñado para correr rápido en pipelines y encontrar cabeceras faltantes o fallos obvios.</p>",
                            "tutorial_contentEn": "<h4>Automated DAST</h4><p>ZAP has a 'Baseline Scan' mode designed to run fast in pipelines and find missing headers or obvious flaws.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/dast.png"
                },
                {
                    "name": "SCA",
                    "nameEn": "SCA",
                    "description": "SCA (Software Composition Analysis) es una disciplina de seguridad que se centra en identificar y analizar los componentes de código abierto y las dependencias de terceros utilizadas en una aplicación. Dado que la mayoría del software moderno utiliza librerías externas, el SCA es vital para detectar vulnerabilidades conocidas (CVEs) en esas dependencias y asegurar el cumplimiento de las licencias de software utilizadas.",
                    "descriptionEn": "SCA (Software Composition Analysis) is a security discipline focused on identifying and analyzing open-source components and third-party dependencies used in an application. Since most modern software uses external libraries, SCA is vital for detecting known vulnerabilities (CVEs) in those dependencies and ensuring compliance with software licenses used.",
                    "children": [
                        {
                            "name": "Snyk",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Snyk es una plataforma de seguridad líder diseñada específicamente para desarrolladores, que permite encontrar y corregir automáticamente vulnerabilidades en código, dependencias, contenedores e infraestructura como código. Se integra directamente en los entornos habituales de desarrollo y CI/CD, proporcionando parches prácticos y recomendaciones de actualización para mitigar riesgos de forma proactiva sin interrumpir la velocidad del desarrollo.",
                            "descriptionEn": "Snyk is a leading security platform specifically designed for developers, allowing for automatically finding and fixing vulnerabilities in code, dependencies, containers, and infrastructure as code. It integrates directly into standard development and CI/CD environments, providing actionable patches and update recommendations to proactively mitigate risks without disrupting development speed.",
                            "url": "https://snyk.io/",
                            "github": "https://github.com/snyk/snyk",
                            "tutorial_content": "<h4>Seguridad de Dependencias</h4><p>Escanea tus librerías (npm, pip, maven) y te avisa si estás usando una versión con vulnerabilidades conocidas.</p>",
                            "tutorial_contentEn": "<h4>Dependency Security</h4><p>Scans your libraries (npm, pip, maven) and warns you if you're using a version with known vulnerabilities.</p>"
                        },
                        {
                            "name": "Dependabot",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Dependabot es una herramienta nativa de GitHub que automatiza la gestión de dependencias seguras mediante la apertura automática de Pull Requests cuando se detecta una vulnerabilidad conocida en una librería del proyecto. Ayuda a mantener las aplicaciones actualizadas al mínimo esfuerzo, asegurando que los parches de seguridad críticos se appliquen rápidamente y reduciendo la exposición a ataques basados en versiones obsoletas de software.",
                            "descriptionEn": "Dependabot is a native GitHub tool that automates secure dependency management by automatically opening Pull Requests when a known vulnerability is detected in a project library. It helps keep applications updated with minimal effort, ensuring that critical security patches are applied quickly and reducing exposure to attacks based on outdated software versions.",
                            "url": "https://github.com/dependabot",
                            "github": "https://github.com/dependabot",
                            "tutorial_content": "<h4>Actualizaciones Automáticas</h4><p>Bot nativo de GitHub que abre Pull Requests automáticamente cuando una librería que usas necesita un parche de seguridad.</p>",
                            "tutorial_contentEn": "<h4>Automatic Updates</h4><p>Native GitHub bot that automatically opens Pull Requests when a library you use needs a security patch.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/sca.png"
                },
                {
                    "name": "IaC",
                    "nameEn": "IaC",
                    "description": "La Infraestructura como Código (IaC) es la práctica de gestionar y aprovisionar infraestructuras mediante archivos de definición legibles por máquina, en lugar de configuraciones físicas manuales. Permite aplicar los principios del desarrollo de software, como el control de versiones y el despliegue continuo, a la gestión de servidores y redes, lo que facilita la creación de entornos idénticos, escalables y seguros de forma automatizada.",
                    "descriptionEn": "Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than manual physical configurations. It allows for applying software development principles, such as version control and continuous deployment, to server and network management, facilitating the creation of identical, scalable, and secure environments automatically.",
                    "children": [
                        {
                            "name": "Checkov",
                            "description": "Checkov es una herramienta de análisis de código estático (SAST) diseñada específicamente para infraestructuras como código (IaC). Escanea archivos de configuración de plataformas como Terraform, CloudFormation y Kubernetes para detectar errores de configuración de seguridad y cumplimiento normativo antes de que se desplieguen, ayudando a prevenir vulnerabilidades como buckets S3 públicos o grupos de seguridad con permisos excesivos.",
                            "descriptionEn": "Checkov is a static code analysis (SAST) tool designed specifically for infrastructure as code (IaC). It scans configuration files from platforms such as Terraform, CloudFormation, and Kubernetes to detect security and compliance misconfigurations before they are deployed, helping to prevent vulnerabilities such as public S3 buckets or security groups with over-privileged permissions.",
                            "url": "https://www.checkov.io/",
                            "github": "https://github.com/bridgecrewio/checkov",
                            "tutorial_content": "<h4>Linter de Seguridad</h4><p>Analiza tus archivos Terraform o Kubernetes buscando errores de configuración (ej. un bucket S3 público) antes de desplegar.</p>",
                            "tutorial_contentEn": "<h4>Security Linter</h4><p>Analyzes your Terraform or Kubernetes files looking for configuration errors (e.g., a public S3 bucket) before deploying.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "tfsec",
                            "description": "tfsec es un escáner estático de seguridad diseñado exclusivamente para detectar configuraciones inseguras en plantillas de Terraform. Se integra fácilmente en los flujos de trabajo de los desarrolladores para proporcionar una validación rápida y local de la infraestructura, permitiendo identificar riesgos como redes abiertas al mundo o falta de cifrado en discos antes de que los recursos sean creados en el proveedor de nube.",
                            "descriptionEn": "tfsec is a static security scanner designed exclusively to detect insecure configurations in Terraform templates. It easily integrates into developer workflows to provide rapid, local infrastructure validation, allowing for identifying risks such as world-open networks or lack of disk encryption before resources are created in the cloud provider.",
                            "url": "https://github.com/aquasecurity/tfsec",
                            "github": "https://github.com/aquasecurity/tfsec",
                            "tutorial_content": "<h4>Seguridad Terraform</h4><p>Específico para Terraform. Detecta configuraciones inseguras y sugiere correcciones rápidas.</p>",
                            "tutorial_contentEn": "<h4>Terraform Security</h4><p>Specific for Terraform. Detects insecure configurations and suggests quick fixes.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/iac.png"
                }
            ]
        },
        {
            "name": "GRC",
            "nameEn": "GRC",
            "youtube": "https://youtu.be/dPfmeWs5wHw",
            "youtube_label": "Gestion de Riesgos",
            "youtube_labelEn": "GRC",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/crg.png",
            "description": "El Gobierno, Riesgo y Cumplimiento (GRC) es un enfoque integrado para alinear la tecnología de la información con los objetivos de negocio, gestionando los riesgos y cumpliendo con las regulaciones industriales y gubernamentales. Se centra en la creación de marcos de trabajo que garanticen la integridad operativa, la transparencia en la toma de decisiones y la protección de los activos críticos mediante el cumplimiento de estándares internacionales.",
            "descriptionEn": "Governance, Risk, and Compliance (GRC) is an integrated approach to aligning information technology with business objectives, managing risks, and complying with industrial and governmental regulations. It focuses on creating frameworks that ensure operational integrity, transparency in decision-making, and protection of critical assets through compliance with international standards.",
            "children": [
                {
                    "name": "Normativas",
                    "nameEn": "Compliance",
                    "description": "Las normativas y marcos de cumplimiento establecen los estándares y leyes que las organizaciones deben seguir para garantizar un nivel mínimo de seguridad y proteger los derechos de los usuarios. El cumplimiento de estándares como ISO 27001 o NIST no solo reduce el riesgo de sanciones legales, sino que también mejora la reputación de la empresa y proporciona una estructura clara para gestionar la ciberseguridad de forma profesional y auditable.",
                    "descriptionEn": "Compliance regulations and frameworks establish the standards and laws that organizations must follow to guarantee a minimum level of security and protect user rights. Compliance with standards such as ISO 27001 or NIST not only reduces the risk of legal sanctions but also improves the company's reputation and provides a clear structure for managing cybersecurity professionally and auditably.",
                    "youtube": "https://youtu.be/Mf39aO7O2jg",
                    "youtube_label": "Normativas",
                    "youtube_labelEn": "Compliance",
                    "children": [

                        {
                            "name": "NIST",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "El Marco de Ciberseguridad del NIST (NIST CSF) proporciona un conjunto de directrices, estándares y mejores prácticas para ayudar a las organizaciones a gestionar y reducir los riesgos de ciberseguridad. Se organiza en torno a cinco funciones principales —Identificar, Proteger, Detectar, Responder y Recuperar—, ofreciendo un lenguaje común y una estructura flexible para mejorar la resiliencia de las infraestructuras críticas y los sistemas empresariales.",
                            "descriptionEn": "The NIST Cybersecurity Framework (NIST CSF) provides a set of guidelines, standards, and best practices to help organizations manage and reduce cybersecurity risks. It is organized around five core functions—Identify, Protect, Detect, Respond, and Recover—offering a common language and a flexible structure to improve the resilience of critical infrastructure and business systems.",
                            "url": "https://www.nist.gov/cyberframework",
                            "tutorial_content": "<h4>Identify, Protect, Detect, Respond, Recover</h4><p>Los 5 pilares del NIST CSF. Es el framework más usado para 'hablar de seguridad' en Estados Unidos.</p>",
                            "tutorial_contentEn": "<h4>Identify, Protect, Detect, Respond, Recover</h4><p>The 5 pillars of the NIST CSF. It's the most used framework to 'talk about security' in the United States.</p>",
                            "youtube": "https://youtu.be/Mf39aO7O2jg",
                            "youtube_label": "NIST",
                            "youtube_labelEn": "NIST"
                        },
                        {
                            "name": "ENS",
                            "nameEn": "ENS",
                            "description": "El Esquema Nacional de Seguridad (ENS) de España es un conjunto de principios básicos y requisitos mínimos que garantizan la seguridad de los sistemas, datos, comunicaciones y servicios electrónicos en la administración pública. Su objetivo es generar confianza en la relación de los ciudadanos con las instituciones públicas, estableciendo niveles de seguridad (Básico, Medio, Alto) proporcionales a la criticidad de la información gestionada.",
                            "descriptionEn": "The Spanish National Security Framework (ENS) is a set of basic principles and minimum requirements that guarantee the security of systems, data, communications, and electronic services in public administration. Its objective is to generate trust in the relationship between citizens and public institutions, establishing security levels (Basic, Medium, High) proportional to the criticality of the information managed.",
                            "url": "https://www.ccn-cert.cni.es/ens.html",
                            "tutorial_content": "<h4>Ley Española</h4><p>Obligatorio para la administración pública en España. Clasifica los sistemas en Básico, Medio y Alto según la criticidad de los datos.</p>",
                            "tutorial_contentEn": "<h4>Spanish Law</h4><p>Mandatory for the public administration in Spain. Classifies systems into Basic, Medium, and High according to data criticality.</p>",
                            "youtube": "https://youtu.be/yln7rWJT85E",
                            "youtube_label": "ENS",
                            "youtube_labelEn": "ENS",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "CIS Controls",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Los Controles CIS (Center for Internet Security) son un conjunto priorizado de acciones técnicas y organizativas para defenderse de los ciberataques más comunes. Se centran en ser prácticos, medibles y efectivos, organizándose en 18 controles esenciales que cualquier empresa puede implementar.",
                            "descriptionEn": "The CIS Controls (Center for Internet Security) are a prioritized set of technical and organizational actions to defend against the most common cyberattacks. They focus on being practical, measurable, and effective, organized into 18 essential controls that any company can implement.",
                            "url": "https://www.cisecurity.org/controls/v8",
                            "github": "https://github.com/topics/cis-controls",
                            "tutorial_content": "<h4>Técnico y Práctico</h4><p>No es solo teoría; son pasos concretos (ej. 'Inventario de activos', 'Gestión de privilegios') para cerrar las puertas más comunes a los hackers.</p>",
                            "tutorial_contentEn": "<h4>Technical and Practical</h4><p>It's not just theory; they are concrete steps (e.g., 'Asset Inventory', 'Privilege Management') to close the most common doors to hackers.</p>"
                        },
                        {
                            "name": "NIS2",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "NIS2 es la nueva directiva de ciberseguridad de la Unión Europea que busca elevar el nivel de protección en sectores críticos (energía, transporte, salud, etc.). Impone requisitos estrictos de gestión de riesgos e informes de incidentes, con fuertes sanciones por incumplimiento.",
                            "descriptionEn": "NIS2 is the new European Union cybersecurity directive that seeks to raise the level of protection in critical sectors (energy, transportation, health, etc.). It imposes strict risk management and incident reporting requirements, with heavy penalties for non-compliance.",
                            "url": "https://digital-strategy.ec.europa.eu/en/policies/nis2-directive",
                            "tutorial_content": "<h4>Regulación Europea</h4><p>La ley que obliga a las empresas 'esenciales' e 'importantes' de la UE a ser ciberseguras bajo amenaza de multas millonarias.</p>",
                            "tutorial_contentEn": "<h4>EU Regulation</h4><p>The law that forces 'essential' and 'important' EU companies to be cybersecure under threat of multi-million dollar fines.</p>"
                        },
                        {
                            "name": "PCI-DSS",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "PCI-DSS es el estándar mundial obligatorio para cualquier entidad que procese, almacene o transmita datos de tarjetas de pago. Define controles técnicos para proteger la información del titular de la tarjeta y prevenir el fraude en transacciones electrónicas.",
                            "descriptionEn": "PCI-DSS is the mandatory global standard for any entity that processes, stores, or transmits payment card data. It defines technical controls to protect cardholder information and prevent fraud in electronic transactions.",
                            "url": "https://www.pcisecuritystandards.org/",
                            "tutorial_content": "<h4>Pagos Seguros</h4><p>Si tu empresa acepta tarjetas de crédito, debe cumplir con esta norma. Se centra en cifrado de datos, seguridad de red y monitorización constante.</p>",
                            "tutorial_contentEn": "<h4>Secure Payments</h4><p>If your company accepts credit cards, it must comply with this standard. It focuses on data encryption, network security, and constant monitoring.</p>"
                        },
                        {
                            "name": "COBIT",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "COBIT (Control Objectives for Information and Related Technologies) es un marco de trabajo de ISACA para el gobierno y la gestión de las TI en la empresa. Ayuda a alinear los objetivos de negocio con los servicios tecnológicos, asegurando la creación de valor y el control de riesgos.",
                            "descriptionEn": "COBIT (Control Objectives for Information and Related Technologies) is an ISACA framework for the governance and management of enterprise IT. It helps align business objectives with technological services, ensuring value creation and risk control.",
                            "url": "https://www.isaca.org/resources/cobit",
                            "tutorial_content": "<h4>Gobierno TI</h4><p>Menos técnico que CIS, se enfoca en que los jefes y el negocio entiendan y controlen lo que hace el departamento de informática.</p>",
                            "tutorial_contentEn": "<h4>IT Governance</h4><p>Less technical than CIS, it focuses on management and the business understanding and controlling what the IT department does.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/normativas.png"
                },
                {
                    "name": "Riesgos",
                    "nameEn": "Risks",
                    "description": "La gestión de riesgos es el proceso de identificar, evaluar y priorizar las posibles amenazas que podrían afectar a los activos críticos de una organización. Su objetivo es tomar decisiones informadas sobre si mitigar, transferir, aceptar o evitar un riesgo, asegurando que los recursos de seguridad se inviertan de la manera más estratégica posible para proteger la viabilidad del negocio frente a incidentes imprevistos.",
                    "descriptionEn": "Risk management is the process of identifying, evaluating, and prioritizing potential threats that could affect an organization's critical assets. Its goal is to make informed decisions on whether to mitigate, transfer, accept, or avoid a risk, ensuring that security resources are invested as strategically as possible to protect business viability against unforeseen incidents.",
                    "youtube": "https://youtu.be/BWNZdSt6oCk",
                    "youtube_label": "Archer",
                    "youtube_labelEn": "Archer",
                    "children": [
                        {
                            "name": "Archer",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "RSA Archer Suite es una plataforma de software de GRC diseñada para automatizar la gestión de riesgos corporativos y el cumplimiento normativo en organizaciones a gran escala. Permite centralizar la catalogación de riesgos, realizar evaluaciones de impacto en el negocio y gestionar las deficiencias de seguridad, facilitando a los directivos la toma de decisiones informadas basadas en una visión consolidada del panorama de riesgos de la empresa.",
                            "descriptionEn": "RSA Archer Suite is a GRC software platform designed to automate corporate risk management and regulatory compliance in large-scale organizations. It allows for centralizing risk cataloging, conducting business impact assessments, and managing security deficiencies, facilitating managers' informed decision-making based on a consolidated view of the company's risk landscape.",
                            "url": "https://www.rsa.com/products/archer-grc/",
                            "tutorial_content": "<h4>Gestión de Riesgo Corporativo</h4><p>Plataforma para catalogar todos los riesgos de la empresa (ej. 'Caída del Data Center') y seguir su mitigación.</p>",
                            "tutorial_contentEn": "<h4>Corporate Risk Management</h4><p>Platform for cataloging all company risks (e.g., 'Data Center Outage') and tracking their mitigation.</p>"
                        },
                        {
                            "name": "ServiceNow GRC",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ServiceNow GRC es una solución integral que transforma procesos de cumplimiento y riesgo ineficientes en un programa de riesgo unificado e integrado en la plataforma de servicios de IT. Al utilizar datos compartidos de la infraestructura tecnológica, permite monitorizar automáticamente los controles de seguridad y detectar riesgos en tiempo real, mejorando la agilidad organizacional y asegurando que las normativas se cumplan de forma continua.",
                            "descriptionEn": "ServiceNow GRC is a comprehensive solution that transforms inefficient risk and compliance processes into a unified risk program integrated into the IT service platform. By using shared data from the technological infrastructure, it allows for automatic security control monitoring and real-time risk detection, improving organizational agility and ensuring continuous regulatory compliance.",
                            "url": "https://www.servicenow.com/products/governance-risk-and-compliance.html",
                            "tutorial_content": "<h4>GRC Integrado</h4><p>Si ya usas ServiceNow para tickets de IT, usar su módulo de GRC permite ligar incidentes reales con controles de cumplimiento fallidos automáticamente.</p>",
                            "tutorial_contentEn": "<h4>Integrated GRC</h4><p>If you already use ServiceNow for IT tickets, using its GRC module allows linking real incidents with failed compliance controls automatically.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/riesgos.png"
                },
                {
                    "name": "Privacidad",
                    "nameEn": "Privacy",
                    "description": "La privacidad de la información se centra en el manejo ético y legal de los datos personales, garantizando que los individuos mantengan el control sobre su información sensible. Programas de privacidad robustos aseguran el cumplimiento de regulaciones como el GDPR, implementando medidas de protección desde el diseño (Privacy by Design) y asegurando que la recopilación de datos sea transparente, limitada a lo necesario y debidamente autorizada.",
                    "descriptionEn": "Information privacy focuses on the ethical and legal handling of personal data, ensuring that individuals maintain control over their sensitive information. Robust privacy programs ensure compliance with regulations like GDPR, implementing protection measures from design (Privacy by Design) and ensuring that data collection is transparent, limited to what is necessary, and properly authorized.",
                    "children": [
                        {
                            "name": "OneTrust",
                            "description": "OneTrust es una plataforma líder en tecnología de privacidad y confianza diseñada para ayudar a las organizaciones a cumplir con leyes globales como GDPR y CCPA. Proporciona herramientas para la gestión de preferencias de cookies, automatización de la evaluación del impacto en la privacidad (PIA) y atención a los derechos de los interesados, asegurando que el manejo de datos personales sea transparente y esté alineado con los requisitos legales.",
                            "descriptionEn": "OneTrust is a leading privacy and trust technology platform designed to help organizations comply with global laws like GDPR and CCPA. It provides tools for cookie preference management, automation of privacy impact assessments (PIA), and data subject rights handling, ensuring that personal data handling is transparent and aligned with legal requirements.",
                            "url": "https://www.onetrust.com/",
                            "tutorial_content": "<h4>¿Para qué sirve?</h4><p>Ayuda a las empresas a cumplir con leyes como GDPR o CCPA. Gestiona cookies, consentimiento y derechos de los usuarios.</p><h4>Caso de Uso</h4><p>Cuando ves un banner de 'Aceptar Cookies' en un sitio web, probablemente OneTrust está detrás gestionando esa preferencia.</p>",
                            "tutorial_contentEn": "<h4>What is it for?</h4><p>Helps companies comply with laws like GDPR or CCPA. Manages cookies, consent, and user rights.</p><h4>Use Case</h4><p>When you see an 'Accept Cookies' banner on a website, OneTrust is likely behind managing that preference.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/privacidad.png"
                },
                {
                    "name": "Sistemas Industriales y OT",
                    "nameEn": "Industrial and OT Systems",
                    "description": "La ciberseguridad en sistemas industriales y OT (Operational Technology) se centra en proteger los sistemas que controlan y supervisan procesos físicos en entornos industriales, donde un ciberataque puede causar impactos reales y graves. Estos sistemas incluyen SCADA, PLC, DCS, HMI, sensores y redes industriales presentes en sectores como energía, manufactura, agua, transporte o petróleo y gas.En resumen, la ciberseguridad OT protege personas, procesos y activos físicos, no solo información.",
                    "descriptionEn": "Cybersecurity in industrial and OT (Operational Technology) systems focuses on protecting systems that control and monitor physical processes in industrial environments, where a cyberattack can cause real and severe impacts. These systems include SCADA, PLC, DCS, HMI, sensors, and industrial networks present in sectors such as energy, manufacturing, water, transportation, or oil and gas. In summary, OT cybersecurity protects people, processes, and physical assets, not just information.",
                    "children": [
                        {
                            "name": "IEC 62443",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "IEC 62443 es el estándar de referencia para la ciberseguridad industrial (OT). Se centra en proteger los sistemas de control y automatización frente a amenazas, priorizando la disponibilidad y la integridad operativa en infraestructuras críticas.",
                            "descriptionEn": "IEC 62443 is the reference standard for industrial cybersecurity (OT). It focuses on protecting control and automation systems from threats, prioritizing availability and operational integrity in critical infrastructures.",
                            "url": "https://www.iec.ch/blog/understanding-iec-62443",
                            "github": "https://github.com/topics/iec-62443",
                            "tutorial_content": "<h4>Sistemas Industriales</h4><p>Ciberseguridad para fábricas, energía y transporte. Protege PLCs, SCADAs y redes OT que no pueden permitirse parones de servicio.</p>",
                            "tutorial_contentEn": "<h4>Industrial Systems</h4><p>Cybersecurity for factories, energy, and transportation. Protects PLCs, SCADAs, and OT networks that cannot afford service outages.</p>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/privacidad.png"
                },
                {
                    "name": "ISO 27000 Family",
                    "nameEn": "ISO 27000 Family",
                    "description": "Las ISO 27000 son una familia de normas internacionales para la gestión de la seguridad de la información (SGSI), que guían a las organizaciones a proteger sus activos informativos mediante la identificación, gestión y mitigación de riesgos, siendo la ISO 27001 la norma principal y certificable para implementar un SGSI robusto.",
                    "descriptionEn": "The ISO 27000 family comprises international standards for information security management systems (ISMS), guiding organizations in protecting their information assets through risk identification, management, and mitigation. ISO 27001 is the main certifiable standard for implementing a robust ISMS.",
                    "children": [
                        {
                            "name": "ISO 27001",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ISO/IEC 27001 es el estándar internacional más reconocido para la implementación de un Sistema de Gestión de Seguridad de la Información (SGSI). Proporciona un marco de trabajo basado en el riesgo que permite a las organizaciones de cualquier tamaño proteger sus datos de forma estructurada.",
                            "descriptionEn": "ISO/IEC 27001 is the most recognized international standard for implementing an Information Security Management System (ISMS). It provides a risk-based framework that allows organizations of any size to protect their data in a structured manner.",
                            "url": "https://www.iso.org/isoiec-27001-information-security.html",
                            "youtube": "https://youtu.be/vABx2H1L7M0",
                            "youtube_label": "ISO 27001",
                            "youtube_labelEn": "ISO 27001",
                            "tutorial_content": "<h4>SGSI (certificable)</h4><p>Define cómo organizar la seguridad en una empresa (SGSI). No es un software, es una norma de 'buenas prácticas' administrativas para la mejora continua.</p>",
                            "tutorial_contentEn": "<h4>ISMS (certifiable)</h4><p>Defines how to organize security in a company (ISMS). It's not software, it's an administrative 'best practices' standard for continuous improvement.</p>"
                        },
                        {
                            "name": "ISO 27002",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ISO/IEC 27002 proporciona una lista detallada de controles de seguridad que las organizaciones pueden utilizar para implementar un SGSI. Es la guía técnica que desarrolla los controles mencionados en el Anexo A de la ISO 27001.",
                            "descriptionEn": "ISO/IEC 27002 provides a detailed list of security controls that organizations can use to implement an ISMS. It is the technical guide that develops the controls mentioned in Annex A of ISO 27001.",
                            "url": "https://www.iso.org/standard/75652.html",
                            "github": "https://github.com/topics/iso-27002",
                            "tutorial_content": "<h4>Controles de Seguridad</h4><p>Contiene el catálogo de controles técnicos, físicos y organizativos para proteger la información. Imprescindible para implementar medidas reales.</p>",
                            "tutorial_contentEn": "<h4>Security Controls</h4><p>Contains the catalog of technical, physical, and organizational controls to protect information. Essential for implementing real measures.</p>"
                        },
                        {
                            "name": "ISO 27005",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ISO/IEC 27005 ofrece directrices para la gestión de riesgos de seguridad de la información. Proporciona un enfoque sistemático para identificar, evaluar y tratar riesgos, asegurando que la seguridad esté alineada con los objetivos de negocio.",
                            "descriptionEn": "ISO/IEC 27005 offers guidelines for information security risk management. It provides a systematic approach to identifying, evaluating, and treating risks, ensuring that security is aligned with business objectives.",
                            "url": "https://www.iso.org/standard/75281.html",
                            "github": "https://github.com/topics/iso-27005",
                            "tutorial_content": "<h4>Gestión de Riesgos</h4><p>La base de un buen SGSI. Ayuda a decidir dónde invertir el presupuesto de seguridad basándose en el impacto y la probabilidad de las amenazas.</p>",
                            "tutorial_contentEn": "<h4>Risk Management</h4><p>The foundation of a good ISMS. Helps decide where to invest the security budget based on the impact and probability of threats.</p>"
                        },
                        {
                            "name": "ISO 27017",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ISO/IEC 27017 es una extensión de seguridad específica para servicios en la nube. Define controles adicionales y responsabilidades compartidas entre proveedores y clientes para garantizar un entorno cloud seguro.",
                            "descriptionEn": "ISO/IEC 27017 is a security extension specific to cloud services. It defines additional controls and shared responsibilities between providers and customers to ensure a secure cloud environment.",
                            "url": "https://www.iso.org/standard/43757.html",
                            "tutorial_content": "<h4>Seguridad Cloud</h4><p>Ajusta los controles de la 27002 al mundo de la nube. Clarifica quién es responsable de qué en entornos compartidos (SaaS, PaaS, IaaS).</p>",
                            "tutorial_contentEn": "<h4>Cloud Security</h4><p>Adjusts 27002 controls to the cloud world. Clarifies who is responsible for what in shared environments (SaaS, PaaS, IaaS).</p>"
                        },
                        {
                            "name": "ISO 27018",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ISO/IEC 27018 se centra en la protección de datos personales (PII) en nubes públicas. Es fundamental para proveedores que actúan como encargados del tratamiento de datos, asegurando transparencia y control sobre la información personal.",
                            "descriptionEn": "ISO/IEC 27018 focuses on protecting personal data (PII) in public clouds. It is fundamental for providers acting as data processors, ensuring transparency and control over personal information.",
                            "url": "https://www.iso.org/standard/76559.html",
                            "tutorial_content": "<h4>Datos Personales en Cloud</h4><p>Define medidas para que el proveedor no use tus datos sin permiso y garantice la privacidad de los usuarios finales en la nube pública.</p>",
                            "tutorial_contentEn": "<h4>Personal Data in Cloud</h4><p>Defines measures so the provider doesn't use your data without permission and guarantees end-user privacy in the public cloud.</p>"
                        },
                        {
                            "name": "ISO 27701",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "ISO/IEC 27701 es la extensión de privacidad para la ISO 27001. Ayuda a las organizaciones a gestionar la privacidad y demostrar el cumplimiento de normativas globales como el RGPD mediante un Sistema de Gestión de Información de Privacidad (PIMS).",
                            "descriptionEn": "ISO/IEC 27701 is the privacy extension for ISO 27001. It helps organizations manage privacy and demonstrate compliance with global regulations such as GDPR through a Privacy Information Management System (PIMS).",
                            "url": "https://www.iso.org/standard/71670.html",
                            "github": "https://github.com/topics/iso-27701",
                            "tutorial_content": "<h4>Privacidad / RGPD</h4><p>El estándar de referencia para cumplir con el RGPD. Añade la 'Privacidad' a la 'Seguridad' para una gestión integral de los datos personales.</p>",
                            "tutorial_contentEn": "<h4>Privacy / GDPR</h4><p>The reference standard for GDPR compliance. Adds 'Privacy' to 'Security' for comprehensive personal data management.</p>"
                        },

                    ],
                    "image": "/static/assets/images/subramas/tool_placeholder.png"
                }
            ]
        },
        {
            "name": "AppSec",
            "nameEn": "AppSec",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/appsec.png",
            "description": "Disciplina centrada en garantizar que el software sea diseñado, desarrollado y mantenido con la seguridad como una prioridad fundamental en todas sus capas. Se ocupa de identificar y mitigar vulnerabilidades específicas en las aplicaciones antes de que lleguen a producción, utilizando marcos de trabajo como OWASP y herramientas automatizadas para proteger la integridad y privacidad de los datos manipulados por el programa.",
            "descriptionEn": "Discipline focused on ensuring that software is designed, developed, and maintained with security as a fundamental priority across all its layers. It deals with identifying and mitigating specific vulnerabilities in applications before they reach production, using frameworks such as OWASP and automated tools to protect the integrity and privacy of the data handled by the program.",
            "children": [
                {
                    "name": "Web",
                    "nameEn": "Web",
                    "description": "La seguridad web se dedica a proteger las aplicaciones y sitios accesibles por internet contra ataques que intentan explotar fallos en el código o en la configuración del servidor. Utilizando el Top 10 de OWASP como referencia, los expertos buscan prevenir amenazas comunes como la inyección de código, el secuestro de sesiones y los ataques de denegación de servicio, asegurando que la experiencia del usuario sea segura y sus datos permanezcan privados.",
                    "descriptionEn": "Web security is dedicated to protecting applications and sites accessible over the internet against attacks that attempt to exploit flaws in code or server configuration. Using the OWASP Top 10 as a reference, experts seek to prevent common threats such as code injection, session hijacking, and denial-of-service attacks, ensuring that the user experience is safe and their data remains private.",
                    "children": [
                        {
                            "name": "Burp Suite",
                            "description": "Burp Suite Professional es la herramienta de referencia mundial para la realización de auditorías de seguridad en aplicaciones web y manuales. Su potente proxy de intercepción permite a los analistas capturar y modificar el tráfico HTTP/S en tiempo real, mientras que sus capacidades de escaneo automatizado y repetidor facilitan la identificación profunda de vulnerabilidades críticas como inyecciones SQL, XSS e inseguridades lógicas.",
                            "descriptionEn": "Burp Suite Professional is the world reference tool for conducting web and manual application security audits. Its powerful intercepting proxy allows analysts to capture and modify HTTP/S traffic in real-time, while its automated scanning and repeater capabilities facilitate deep identification of critical vulnerabilities such as SQL injection, XSS, and logical insecurities.",
                            "url": "https://portswigger.net/burp",
                            "tutorial_content": "<h4>Interceptor</h4><p>Permite ver y modificar el tráfico entre el navegador y el servidor. Esencial para encontrar vulnerabilidades que no se ven en la interfaz.</p>",
                            "tutorial_contentEn": "<h4>Interceptor</h4><p>Allows viewing and modifying traffic between the browser and the server. Essential for finding vulnerabilities not visible in the interface.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "ZAP",
                            "description": "OWASP ZAP (Zed Attack Proxy) es una herramienta de seguridad de código abierto y gratuita, sumamente versátil, utilizada para encontrar vulnerabilidades en aplicaciones web de forma automatizada y manual. Es ideal para desarrolladores y analistas junior, ya que ofrece una amplia gama de funcionalidades como escaneos pasivos, spiders para mapeo de sitios y ataques de fuzzing, permitiendo integrarse fácilmente en el ciclo de vida del desarrollo seguro.",
                            "descriptionEn": "OWASP ZAP (Zed Attack Proxy) is a highly versatile, free, and open-source security tool used to find vulnerabilities in web applications automatically and manually. It is ideal for developers and junior analysts as it offers a wide range of functionalities such as passive scans, site-mapping spiders, and fuzzing attacks, allowing for easy integration into the secure development lifecycle.",
                            "url": "https://www.zaproxy.org/",
                            "tutorial_content": "<h4>Escáner Web Libre</h4><p>Herramienta perfecta para aprender. Incluye un 'Spider' para mapear toda la web automáticamente.</p>",
                            "tutorial_contentEn": "<h4>Free Web Scanner</h4><p>Perfect tool for learning. Includes a 'Spider' to automatically map the entire web.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/web.png"
                },
                {
                    "name": "API",
                    "nameEn": "API",
                    "description": "La seguridad de APIs (Interfaces de Programación de Aplicaciones) se centra en proteger los canales de comunicación entre diferentes sistemas de software, que a menudo exponen datos críticos de forma masiva. Dado que las APIs suelen carecer de una interfaz visual, requieren controles estrictos de autenticación (OAuth/JWT), limitación de tasa (rate limiting) y una validación de esquemas rigurosa para evitar que atacantes extraigan información mediante peticiones maliciosas.",
                    "descriptionEn": "API (Application Programming Interface) security focuses on protecting communication channels between different software systems, which often expose critical data in bulk. Since APIs often lack a visual interface, they require strict authentication controls (OAuth/JWT), rate limiting, and rigorous schema validation to prevent attackers from extracting information through malicious requests.",
                    "children": [
                        {
                            "name": "Postman",
                            "description": "Postman es una plataforma colaborativa para el desarrollo y prueba de APIs que en el ámbito de la seguridad se utiliza para auditar la robustez de los endpoints REST, SOAP y GraphQL. Permite a los analistas automatizar colecciones de peticiones maliciosas, analizar las respuestas del servidor en busca de filtraciones de datos y verificar que los mecanismos de autenticación y autorización de la API funcionen según lo esperado.",
                            "descriptionEn": "Postman is a collaborative platform for API development and testing that, in the security field, is used to audit the robustness of REST, SOAP, and GraphQL endpoints. It allows analysts to automate collections of malicious requests, analyze server responses for data leaks, and verify that the API authentication and authorization mechanisms function as expected.",
                            "url": "https://www.postman.com/",
                            "tutorial_content": "<h4>Testing de APIs</h4><p>Aunque es herramienta de desarrollo, se usa en seguridad para lanzar peticiones maliciosas a endpoints de API (REST/GraphQL) y ver si responden con datos sensibles.</p>",
                            "tutorial_contentEn": "<h4>API Testing</h4><p>Although it's a development tool, it's used in security to send malicious requests to API endpoints (REST/GraphQL) and see if they respond with sensitive data.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Burp",
                            "description": "La edición profesional de Burp Suite incluye funcionalidades avanzadas diseñadas específicamente para el testeo de APIs y servicios web. Gracias a su capacidad para interpretar diversos formatos de datos como JSON y XML, permite a los investigadores de seguridad realizar ataques dirigidos contra endpoints de API, identificando fallos de seguridad críticos que a menudo pasan desapercibidos en las pruebas de interfaces de usuario tradicionales.",
                            "descriptionEn": "Burp Suite Professional includes advanced functionalities specifically designed for API and web service testing. Thanks to its ability to interpret various data formats such as JSON and XML, it allows security researchers to perform targeted attacks against API endpoints, identifying critical security flaws that often go unnoticed in traditional user interface testing.",
                            "url": "https://portswigger.net/burp",
                            "tutorial_content": "<h4>API Hacking</h4><p>Burp también intercepta tráfico de aplicaciones móviles o clientes de API, no solo navegadores web.</p>",
                            "tutorial_contentEn": "<h4>API Hacking</h4><p>Burp also intercepts traffic from mobile applications or API clients, not just web browsers.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/api.png"
                },
                {
                    "name": "Mobile",
                    "nameEn": "Mobile",
                    "description": "La seguridad móvil protege las aplicaciones que se ejecutan en dispositivos como smartphones y tablets, abordando riesgos únicos como el robo de dispositivos físicos y las redes Wi-Fi inseguras. Se centra en el almacenamiento seguro de datos locales, el endurecimiento del código contra la ingeniería inversa y la implementación de comunicaciones cifradas, garantizando que las apps protejan la privacidad del usuario incluso en entornos potencialmente hostiles.",
                    "descriptionEn": "Mobile security protects applications running on devices such as smartphones and tablets, addressing unique risks like physical device theft and insecure Wi-Fi networks. It focuses on secure local data storage, code hardening against reverse engineering, and implementing encrypted communications, ensuring that apps protect user privacy even in potentially hostile environments.",
                    "children": [
                        {
                            "name": "MobSF",
                            "description": "Mobile Security Framework (MobSF) es una solución inteligente y todo-en-uno que automatiza el análisis estático y dinámico de aplicaciones para las plataformas Android, iOS y Windows Mobile. Es capaz de descompilar binarios para buscar secretos expuestos, bibliotecas vulnerables y permisos inseguros en cuestión de minutos, proporcionando un reporte detallado que es vital para asegurar la privacidad y seguridad de las aplicaciones móviles modernas.",
                            "descriptionEn": "Mobile Security Framework (MobSF) is an intelligent, all-in-one solution that automates static and dynamic analysis of applications for Android, iOS, and Windows Mobile platforms. It is capable of decompiling binaries to search for exposed secrets, vulnerable libraries, and insecure permissions in minutes, providing a detailed report that is vital for ensuring modernization and security of modern mobile applications.",
                            "url": "https://mobsf.github.io/docs/",
                            "github": "https://github.com/MobSF/Mobile-Security-Framework-MobSF",
                            "tutorial_content": "<h4>Análisis de APK/IPA</h4><p>Sube el archivo de instalación de una app (Android/iOS) y MobSF lo descompila, busca secretos hardcodeados y permisos inseguros en minutos.</p>",
                            "tutorial_contentEn": "<h4>APK/IPA Analysis</h4><p>Upload the installation file of an app (Android/iOS) and MobSF decompiles it, searches for hardcoded secrets and insecure permissions in minutes.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/mobile.png"
                },
                {
                    "name": "Threat Modeling",
                    "nameEn": "Threat Modeling",
                    "description": "El modelado de amenazas es un proceso estructurado para identificar, cuantificar y mitigar los riesgos de seguridad desde la fase de diseño de un sistema. Utilizando metodologías como STRIDE, los analistas crean diagramas de flujo de datos para visualizar posibles vectores de ataque, permitiendo que la seguridad se integre de forma proactiva y que se tomen decisiones informadas antes de que se escriba la primera línea de código.",
                    "descriptionEn": "Threat modeling is a structured process for identifying, quantifying, and mitigating security risks from a system's design phase. Using methodologies like STRIDE, analysts create data flow diagrams to visualize possible attack vectors, allowing security to be proactively integrated and informed decisions to be made before the first line of code is written.",
                    "children": [
                        {
                            "name": "Threat Dragon",
                            "description": "OWASP Threat Dragon es una herramienta de modelado de amenazas gratuita y de código abierto que ayuda a los desarrolladores y diseñadores a identificar posibles fallos de seguridad en las fases tempranas del diseño. Permite crear diagramas de flujo de datos detallados y aplicar metodologías como STRIDE para anticipar vectores de ataque, facilitando la creación de productos más seguros mediante la visualización clara de las amenazas potenciales.",
                            "descriptionEn": "OWASP Threat Dragon is a free and open-source threat modeling tool that helps developers and designers identify potential security flaws in the early stages of design. It allows for creating detailed data flow diagrams and applying methodologies such as STRIDE to anticipate attack vectors, facilitating the creation of safer products through clear visualization of potential threats.",
                            "url": "https://owasp.org/www-project-threat-dragon/",
                            "github": "https://github.com/OWASP/threat-dragon",
                            "tutorial_content": "<h4>Diseño Seguro</h4><p>Antes de escribir código, dibuja diagramas de flujo de datos (DFD) para identificar dónde podrían atacar los hackers (STRIDE).</p>",
                            "tutorial_contentEn": "<h4>Secure Design</h4><p>Before writing code, draw data flow diagrams (DFD) to identify where hackers could attack (STRIDE).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/threat_modeling.png"
                }
            ],

        },
        {
            "name": "Redes",
            "nameEn": "Networks",
            "minLevel": 0,
            "image": "/static/assets/images/ramas/redes.png",
            "description": "La seguridad de red es la disciplina encargada de proteger la integridad, confidencialidad y accesibilidad de las infraestructuras de red y los datos que viajan a través de ellas. Combina múltiples capas de defensa, tanto en el perímetro como en el interior de la red, mediante el uso de políticas, hardware y software diseñados para detener el acceso no autorizado, el uso indebido o la modificación malintencionada de los recursos tecnológicos.",
            "descriptionEn": "Network security is the discipline responsible for protecting the integrity, confidentiality, and accessibility of network infrastructures and the data traveling through them. It combines multiple layers of defense, both at the perimeter and inside the network, through the use of policies, hardware, and software designed to stop unauthorized access, misuse, or malicious modification of technological resources.",
            "youtube": "https://youtu.be/QunM9CfwlNs",
            "youtube_label": "Que puertos abrir o cerrar?",
            "youtube_labelEn": "What ports to open or close?",
            "youtube2": "https://youtu.be/14yOl6qpTxE",
            "youtube2_label": "Que es el 5G?",
            "youtube2_labelEn": "What is 5G?",
            "youtube3": "https://youtu.be/x1dxLFDb_y8",
            "youtube3_label": "Entendiendo las IP",
            "youtube3_labelEn": "Understanding IP",
            "children": [
                {
                    "name": "Firewalls",
                    "nameEn": "Firewalls",
                    "description": "Los firewalls son la primera línea de defensa perimetral, encargados de monitorizar y filtrar el tráfico de red entrante y saliente basado en reglas de seguridad predefinidas. Ya sean basados en hardware, software o en la nube, su función principal es establecer una barrera entre redes internas confiables y redes externas no confiables, bloqueando accesos no autorizados y previniendo la exfiltración de datos sensibles.",
                    "descriptionEn": "Firewalls are the first line of perimeter defense, responsible for monitoring and filtering incoming and outgoing network traffic based on predefined security rules. Whether hardware, software, or cloud-based, their primary function is to establish a barrier between trusted internal networks and untrusted external networks, blocking unauthorized access and preventing sensitive data exfiltration.",
                    "youtube": "https://youtu.be/vyD4-ckMYfo",
                    "youtube_label": "Que es un Firewall",
                    "youtube_labelEn": "What is a Firewall?",

                    "children": [
                        {
                            "name": "Palo Alto",
                            "description": "Palo Alto Networks ofrece cortafuegos de próxima generación (NGFW) que proporcionan una visibilidad y un control completos sobre las aplicaciones, los usuarios y el contenido que circula por la red. A diferencia de los firewalls tradicionales, su arquitectura basada en la identificación de aplicaciones (App-ID) permite aplicar políticas de seguridad granulares, integrando prevención de amenazas, filtrado de URL y seguridad DNS en una única plataforma de alto rendimiento.",
                            "descriptionEn": "Palo Alto Networks offers next-generation firewalls (NGFW) that provide complete visibility and control over applications, users, and content flowing through the network. Unlike traditional firewalls, its application-identification-based architecture (App-ID) allows for applying granular security policies, integrating threat prevention, URL filtering, and DNS security in a single high-performance platform.",
                            "url": "https://www.paloaltonetworks.com/network-security/next-generation-firewall",
                            "tutorial_content": "<h4>NGFW</h4><p>No solo filtra por puerto e IP (como un firewall viejo), sino que entiende qué aplicación es (ej. 'Esto es tráfico de Skype') y quién es el usuario.</p>",
                            "tutorial_contentEn": "<h4>NGFW</h4><p>Not only filters by port and IP (like an old firewall), but also understands what application it is (e.g., 'This is Skype traffic') and who the user is.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Fortinet",
                            "description": "Fortinet es un líder global en soluciones de ciberseguridad amplias, integradas y automatizadas, destacando su producto estrella FortiGate. Su enfoque de 'Security Fabric' permite que todos los componentes de la red, desde los firewalls hasta los puntos de acceso y los dispositivos de endpoint, compartan inteligencia de amenazas en tiempo real, proporcionando una defensa coordinada contra ataques avanzados en entornos híbridos y de nube.",
                            "descriptionEn": "Fortinet is a global leader in broad, integrated, and automated cybersecurity solutions, highlighting its flagship product FortiGate. Its 'Security Fabric' approach allows all network components, from firewalls to access points and endpoint devices, to share real-time threat intelligence, providing a coordinated defense against advanced attacks in hybrid and cloud environments.",
                            "url": "https://www.fortinet.com/products/next-generation-firewall",
                            "tutorial_content": "<h4>FortiGate</h4><p>Líderes en rendimiento. Su 'Security Fabric' permite que el firewall hable con el antivirus del endpoint para coordinar defensas.</p>",
                            "tutorial_contentEn": "<h4>FortiGate</h4><p>Performance leaders. Its 'Security Fabric' allows the firewall to talk to the endpoint's antivirus to coordinate defenses.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/firewall.png"
                },
                {
                    "name": "IDS/IPS",
                    "nameEn": "IDS/IPS",
                    "description": "Los sistemas IDS (Detección de Intrusos) e IPS (Prevención de Intrusos) son herramientas de monitorización de red diseñadas para identificar y detener actividades sospechosas o ataques conocidos. Mientras que el IDS alerta sobre posibles brechas de seguridad analizando patrones de tráfico, el IPS actúa activamente bloqueando el tráfico malicioso en tiempo real, sirviendo como una capa crítica de defensa profunda contra exploits y malware.",
                    "descriptionEn": "IDS (Intrusion Detection) and IPS (Intrusion Prevention) systems are network monitoring tools designed to identify and stop suspicious activities or known attacks. While IDS alerts about potential security breaches by analyzing traffic patterns, IPS actively acts by blocking malicious traffic in real-time, serving as a critical layer of deep defense against exploits and malware.",
                    "youtube": "https://youtu.be/o8Sy9Hi_BGQ",
                    "youtube_label": "IDS/IPS",
                    "youtube_labelEn": "IDS/IPS",
                    "children": [
                        {
                            "name": "Suricata",
                            "description": "Suricata es un motor de red de código abierto de nueva generación capaz de realizar tareas de IDS, IPS y monitorización de seguridad de red (NSM) de forma simultánea. Destaca por su alta eficiencia gracias a una arquitectura multihilo que aprovecha al máximo el hardware moderno, permitiendo procesar grandes volúmenes de tráfico de red y detectar amenazas complejas mediante el uso de firmas, análisis de protocolos y extracción de archivos.",
                            "descriptionEn": "Suricata is a next-generation open-source network engine capable of performing IDS, IPS, and network security monitoring (NSM) tasks simultaneously. It stands out for its high efficiency thanks to a multi-threaded architecture that makes the most of modern hardware, allowing for processing large volumes of network traffic and detecting complex threats through the use of signatures, protocol analysis, and file extraction.",
                            "url": "https://suricata.io/",
                            "github": "https://github.com/OISF/suricata",
                            "tutorial_content": "<h4>IDS/IPS Moderno</h4><p>Analiza tráfico de red en tiempo real. Puede bloquear ataques activamente (IPS) o solo alertar (IDS). Multithreading real.</p>",
                            "tutorial_contentEn": "<h4>Modern IDS/IPS</h4><p>Analyzes network traffic in real-time. Can actively block attacks (IPS) or just alert (IDS). True multithreading.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Snort",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "Snort es el sistema de detección de intrusos en red (NIDS) de código abierto más utilizado en el mundo, creado originalmente por Martin Roesch. Funciona mediante un motor de inspección de paquetes basado en reglas comerciales y de la comunidad que permite detectar una gran variedad de ataques y anomalías en el tráfico, convirtiéndose en el estándar de la industria gracias a su flexibilidad y a su amplio ecosistema de soporte.",
                            "descriptionEn": "Snort is the world's most widely used open-source network intrusion detection system (NIDS), originally created by Martin Roesch. It functions via a packet inspection engine based on community and commercial rules that allow for detecting a wide variety of attacks and traffic anomalies, becoming the industry standard thanks to its flexibility and broad support ecosystem.",
                            "url": "https://www.snort.org/",
                            "tutorialUrl": "https://www.snort.org/documents",
                            "github": "https://github.com/snort3/snort3",
                            "youtube": "https://youtu.be/98TI1L9RGK4",
                            "youtube_label": "Snort",
                            "youtube_labelEn": "Snort",
                            "tutorial_content": "<h4>El Clásico</h4><p>El estándar de facto para firmas de ataques de red. Su lenguaje de reglas es usado por casi todos los otros IDS.</p><code>alert tcp any any -> 192.168.1.0/24 80 (msg:'Ataque web'; sid:1000001;)</code>",
                            "tutorial_contentEn": "<h4>The Classic</h4><p>The de facto standard for network attack signatures. Its rule language is used by almost all other IDS.</p><code>alert tcp any any -> 192.168.1.0/24 80 (msg:'Web Attack'; sid:1000001;)</code>"
                        }
                    ],
                    "image": "/static/assets/images/subramas/ids_ips.png"
                },
                {
                    "name": "VPN",
                    "nameEn": "VPN",
                    "description": "Una Red Privada Virtual (VPN) es una tecnología que crea un túnel cifrado y seguro a través de una red pública como internet, permitiendo a los usuarios enviar y recibir datos como si sus dispositivos estuvieran conectados directamente a una red privada. Es fundamental para garantizar la privacidad del usuario, ocultar la dirección IP real y proteger la información sensible contra la interceptación en redes Wi-Fi inseguras o conexiones remotas.",
                    "descriptionEn": "A Virtual Private Network (VPN) is a technology that creates a secure, encrypted tunnel through a public network such as the internet, allowing users to send and receive data as if their devices were directly connected to a private network. It is fundamental to ensuring user privacy, hiding the real IP address, and protecting sensitive information against interception on insecure Wi-Fi networks or remote connections.",
                    "youtube": "https://youtu.be/83umD8XBDCI",
                    "youtube_label": "Que es una VPN?",
                    "youtube_labelEn": "What is a VPN?",
                    "children": [
                        {
                            "name": "OpenVPN",
                            "description": "OpenVPN es una solución de conectividad de código abierto robusta y altamente configurable que utiliza protocolos de seguridad basados en SSL/TLS para crear conexiones punto a punto o de sitio a sitio. Es famosa por su gran compatibilidad con múltiples sistemas operativos y su capacidad para atravesar firewalls y proxies, proporcionando un alto nivel de cifrado que asegura que las comunicaciones remotas se mantengan privadas y protegidas.",
                            "descriptionEn": "OpenVPN is a robust and highly configurable open-source connectivity solution that uses security protocols based on SSL/TLS to create point-to-point or site-to-site connections. It is famous for its broad compatibility with multiple operating systems and its ability to traverse firewalls and proxies, providing a high level of encryption that ensures remote communications remain private and protected.",
                            "url": "https://openvpn.net/",
                            "github": "https://github.com/OpenVPN/openvpn",
                            "tutorial_content": "<h4>El Túnel Seguro</h4><p>Crea una red privada virtual cifrada sobre internet. Usa SSL/TLS para el intercambio de claves.</p>",
                            "tutorial_contentEn": "<h4>The Secure Tunnel</h4><p>Creates an encrypted virtual private network over the internet. Uses SSL/TLS for key exchange.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "WireGuard",
                            "description": "WireGuard es un protocolo de VPN extremadamente simple, rápido y moderno que utiliza criptografía de última generación para ofrecer una seguridad superior con un rendimiento mucho más alto que los protocolos tradicionales. Al operar directamente en el kernel de Linux y tener una base de código muy reducida, es más fácil de auditar y configurar, convirtiéndose rápidamente en la opción preferida para conexiones seguras de baja latencia.",
                            "descriptionEn": "WireGuard is an extremely simple, fast, and modern VPN protocol that uses cutting-edge cryptography to offer superior security with much higher performance than traditional protocols. By operating directly in the Linux kernel and having a very small codebase, it is easier to audit and configure, quickly becoming the preferred choice for secure low-latency connections.",
                            "url": "https://www.wireguard.com/",
                            "tutorial_content": "<h4>VPN de Nueva Generación</h4><p>Mucho más rápido y ligero que OpenVPN. Vive en el kernel de Linux. Su configuración es tan simple como una clave pública SSH.</p>",
                            "tutorial_contentEn": "<h4>Next-Generation VPN</h4><p>Much faster and lighter than OpenVPN. Resides in the Linux kernel. Its configuration is as simple as an SSH public key.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/vpn.png"
                },
                {
                    "name": "WiFi",
                    "nameEn": "WiFi",
                    "description": "La seguridad inalámbrica (WiFi) se centra en proteger las redes de radio contra el acceso no autorizado y la interceptación de datos mediante el uso de protocolos de cifrado como WPA2 y WPA3. Dado que las señales WiFi se propagan fuera de los límites físicos de un edificio, es crítico implementar mecanismos de autenticación fuertes y realizar auditorías periódicas para detectar puntos de acceso no autorizados o vulnerabilidades en la configuración.",
                    "descriptionEn": "Wireless security (WiFi) focuses on protecting radio networks against unauthorized access and data interception through the use of encryption protocols such as WPA2 and WPA3. Since WiFi signals propagate outside a building's physical boundaries, it is critical to implement strong authentication mechanisms and conduct periodic audits to detect unauthorized access points or configuration vulnerabilities.",
                    "youtube": "https://youtu.be/k8xbDQmDuwg",
                    "youtube_label": "Aircrack-ng",
                    "youtube_labelEn": "Aircrack-ng",
                    "children": [
                        {
                            "name": "Aircrack-ng",
                            "description": "Aircrack-ng es una suite completa de herramientas diseñada para auditar la seguridad de las redes inalámbricas 802.11. Permite a los profesionales de seguridad capturar paquetes de red, inyectar tráfico para forzar la generación de claves y realizar ataques de fuerza bruta o de diccionario para recuperar contraseñas WEP, WPA y WPA2, siendo una herramienta esencial para verificar la robustez de las configuraciones WiFi en cualquier entorno.",
                            "descriptionEn": "Aircrack-ng is a complete suite of tools designed to audit 802.11 wireless network security. It allows security professionals to capture network packets, inject traffic to force key generation, and perform brute-force or dictionary attacks to recover WEP, WPA, and WPA2 passwords, being an essential tool for verifying the robustness of WiFi configurations in any environment.",
                            "url": "https://www.aircrack-ng.org/",
                            "github": "https://github.com/aircrack-ng/aircrack-ng",
                            "youtube": "https://youtu.be/k8xbDQmDuwg",
                            "youtube_label": "Aircrack-ng",
                            "youtube_labelEn": "Aircrack-ng",
                            "tutorial_content": "<h4>Auditoría WiFi</h4><p>Suite para capturar paquetes (airodump-ng), inyectar tráfico (aireplay-ng) y crackear contraseñas WEP/WPA (aircrack-ng).</p><h4>Tip</h4><p>Requiere una tarjeta de red en 'Modo Monitor'.</p>",
                            "tutorial_contentEn": "<h4>WiFi Auditing</h4><p>Suite for capturing packets (airodump-ng), injecting traffic (aireplay-ng), and cracking WEP/WPA passwords (aircrack-ng).</p><h4>Tip</h4><p>Requires a network card in 'Monitor Mode'.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/wifi.png"
                }
            ]
        },
        {
            "name": "IAM",
            "nameEn": "IAM",
            "minLevel": 0,
            "image": "/static/assets/images/ramas/iam.png",
            "description": "La Gestión de Identidades y Accesos (IAM) es el marco de políticas y tecnologías que garantiza que las personas adecuadas dentro de una organización tengan el acceso apropiado a los recursos tecnológicos. Se centra en la gestión del ciclo de vida de las identidades digitales, abarcando la autenticación, la autorización y el aprovisionamiento de cuentas para prevenir el acceso no autorizado y asegurar el cumplimiento de las normativas de seguridad.",
            "descriptionEn": "Identity and Access Management (IAM) is the framework of policies and technologies ensuring that the right people within an organization have the appropriate access to technological resources. It focuses on digital identity lifecycle management, covering authentication, authorization, and account provisioning to prevent unauthorized access and ensure compliance with security regulations.",
            "children": [
                {
                    "name": "Autenticación",
                    "nameEn": "Authentication",
                    "description": "La autenticación es el proceso de verificar la identidad de un usuario, dispositivo o sistema que intenta acceder a un recurso controlado. Es la primera línea de defensa en IAM y suele basarse en factores como algo que el usuario sabe (contraseña), algo que tiene (token) o algo que es (biometría), siendo el uso de la Autenticación de Múltiples Factores (MFA) una práctica esencial para mitigar ataques de suplantación de identidad.",
                    "descriptionEn": "Authentication is the process of verifying the identity of a user, device, or system attempting to access a controlled resource. It is the first line of defense in IAM and is typically based on factors such as something the user knows (password), something they have (token), or something they are (biometrics), with Multi-Factor Authentication (MFA) being an essential practice to mitigate identity spoofing attacks.",
                    "youtube": "https://youtu.be/k8xbDQmDuwg",
                    "youtube_label": "Okta",
                    "youtube_labelEn": "Okta",
                    "children": [
                        {
                            "name": "Okta",
                            "description": "Okta es una plataforma de gestión de identidades y accesos basada en la nube que permite a las organizaciones conectar de forma segura a sus empleados y clientes con las aplicaciones que necesitan. Ofrece soluciones avanzadas de inicio de sesión único (SSO), autenticación adaptativa y gestión de usuarios, simplificando la seguridad al centralizar el control de acceso a través de miles de integraciones pre-construidas con servicios SaaS y on-premise.",
                            "descriptionEn": "Okta is a cloud-based identity and access management platform that allows organizations to securely connect their employees and customers to the applications they need. It offers advanced single sign-on (SSO), adaptive authentication, and user management solutions, simplifying security by centralizing access control through thousands of pre-built integrations with SaaS and on-premise services.",
                            "url": "https://www.okta.com/",
                            "tutorial_content": "<h4>Identidad como Servicio</h4><p>Plataforma centralizada para gestionar quién puede entrar a qué aplicaciones en tu empresa. Famosa por su panel de acceso único.</p>",
                            "tutorial_contentEn": "<h4>Identity as a Service</h4><p>Centralized platform for managing who can access which applications in your company. Famous for its single access panel.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Azure AD",
                            "description": "Microsoft Entra ID (anteriormente Azure Active Directory) es el servicio de gestión de identidades y accesos en la nube de Microsoft que ayuda a los empleados a iniciar sesión y acceder a recursos externos e internos. Proporciona capacidades críticas como el Acceso Condicional, que permite aplicar políticas de seguridad inteligentes basadas en el contexto del usuario y el dispositivo, garantizando una protección robusta en entornos de trabajo modernos y distribuidos.",
                            "descriptionEn": "Microsoft Entra ID (formerly Azure Active Directory) is Microsoft's cloud-based identity and access management service that helps employees sign in and access internal and external resources. It provides critical capabilities such as Conditional Access, which allows for applying intelligent security policies based on user and device context, guaranteeing robust protection in modern and distributed work environments.",
                            "url": "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id",
                            "tutorial_content": "<h4>Entra ID</h4><p>El directorio activo en la nube. Gestiona la identidad de casi todas las empresas que usan Office 365.</p>",
                            "tutorial_contentEn": "<h4>Entra ID</h4><p>The cloud active directory. Manages the identity of almost all companies using Office 365.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/autenticacion.png"
                },
                {
                    "name": "PAM",
                    "nameEn": "PAM",
                    "description": "La Gestión de Accesos Privilegiados (PAM) es una disciplina de seguridad centrada en el control y la monitorización de las cuentas con permisos elevados en una red. Estas cuentas, a menudo llamadas 'las llaves del reino', incluyen administradores de sistemas y usuarios con acceso a datos críticos; PAM ayuda a mitigar el riesgo de ataques internos y movimientos laterales al requerir que las contraseñas se almacenen en una bóveda segura y que el acceso sea temporal y auditado.",
                    "descriptionEn": "Privileged Access Management (PAM) is a security discipline focused on controlling and monitoring high-privileged accounts on a network. These accounts, often called 'the keys to the kingdom', include system administrators and users with access to critical data; PAM helps mitigate the risk of insider attacks and lateral movement by requiring passwords to be stored in a secure vault and for access to be temporary and audited.",
                    "children": [
                        {
                            "name": "CyberArk",
                            "description": "CyberArk es la plataforma líder mundial en seguridad de identidades privilegiadas, diseñada para proteger los activos más sensibles de una organización mediante la gestión centralizada de credenciales y sesiones. Su solución permite a las empresas rotar automáticamente contraseñas complejas, grabar sesiones de administrador para auditoría y aplicar el principio de mínimo privilegio, evitando que el robo de una única cuenta resulte en una brecha de seguridad masiva.",
                            "descriptionEn": "CyberArk is the world's leading privileged identity security platform, designed to protect an organization's most sensitive assets through centralized credential and session management. Its solution allows companies to automatically rotate complex passwords, record administrator sessions for auditing, and apply the principle of least privilege, preventing the theft of a single account from resulting in a massive security breach.",
                            "url": "https://www.cyberark.com/",
                            "tutorial_content": "<h4>¿Qué es CyberArk?</h4><p>Es la solución líder en gestión de accesos privilegiados (PAM). Protege las 'llaves del reino': las cuentas de administrador.</p><h4>Uso Clave</h4><p>Evitar que un atacante que comprometa una red se mueva lateralmente usando credenciales robadas.</p><h4>Concepto Básico</h4><p>Las contraseñas no se conocen, se 'checkean' desde una bóveda segura.</p>",
                            "tutorial_contentEn": "<h4>What is CyberArk?</h4><p>It is the leading solution in privileged access management (PAM). It protects the 'keys to the kingdom': administrator accounts.</p><h4>Key Use</h4><p>Prevent an attacker who compromises a network from moving laterally using stolen credentials.</p><h4>Basic Concept</h4><p>Passwords are not known, they are 'checked' from a secure vault.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/pam.png"
                },
                {
                    "name": "SSO",
                    "nameEn": "SSO",
                    "description": "El Inicio de Sesión Único (SSO) es un método de autenticación que permite a un usuario acceder a múltiples aplicaciones y servicios independientes con un único conjunto de credenciales. Al centralizar la autenticación a través de un proveedor de identidad (IdP) de confianza, el SSO mejora la experiencia del usuario al eliminar la fatiga de contraseñas y fortalece la seguridad al permitir que las políticas de acceso se apliquen de forma consistente en todo el ecosistema empresarial.",
                    "descriptionEn": "Single Sign-On (SSO) is an authentication method that allows a user to access multiple independent applications and services with a single set of credentials. By centralizing authentication through a trusted Identity Provider (IdP), SSO improves the user experience by eliminating password fatigue and strengthens security by allowing access policies to be applied consistently across the business ecosystem.",
                    "children": [
                        {
                            "name": "Keycloak",
                            "description": "Keycloak es una solución de gestión de accesos e identidades de código abierto moderna que facilita la implementación de SSO y autenticación centralizada en aplicaciones web y microservicios. Proporciona características avanzadas como federación de usuarios contra directorios LDAP o Active Directory, soporte nativo para protocolos estándar como OpenID Connect y SAML, y una interfaz de administración sencilla para gestionar roles, permisos y flujos de login personalizados.",
                            "descriptionEn": "Keycloak is a modern open-source identity and access management solution that facilitates the implementation of SSO and centralized authentication in web applications and microservices. It provides advanced features such as user federation against LDAP or Active Directory, native support for standard protocols like OpenID Connect and SAML, and a simple management interface to handle roles, permissions, and custom login flows.",
                            "url": "https://www.keycloak.org/",
                            "github": "https://github.com/keycloak/keycloak",
                            "tutorial_content": "<h4>Identity Provider Propio</h4><p>Alternativa open source a Okta/Auth0. Permite añadir login con 'MFA' y redes sociales a tus aplicaciones fácilmente.</p>",
                            "tutorial_contentEn": "<h4>Own Identity Provider</h4><p>Open-source alternative to Okta/Auth0. Allows adding 'MFA' login and social networks to your applications easily.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/sso.png"
                },
                {
                    "name": "MFA",
                    "nameEn": "MFA",
                    "description": "La Autenticación Multifactor (MFA) es un mecanismo de seguridad que requiere que un usuario proporcione dos o más evidencias de su identidad para obtener acceso a una cuenta o sistema. Al combinar factores como algo que el usuario sabe (contraseña), algo que tiene (móvil) o algo que es (biometría), la MFA añade una capa crítica de protección que hace que el robo de credenciales tradicionales sea insuficiente por sí solo para comprometer una cuenta.",
                    "descriptionEn": "Multi-Factor Authentication (MFA) is a security mechanism that requires a user to provide two or more pieces of evidence of their identity to obtain access to an account or system. By combining factors such as something the user knows (password), something they have (mobile), or something they are (biometrics), MFA adds a critical layer of protection that makes traditional credential theft insufficient on its own to compromise an account.",
                    "children": [
                        {
                            "name": "Duo",
                            "description": "Cisco Duo es una plataforma de autenticación multifactor diseñada para ser increíblemente fácil de usar tanto para usuarios finales como para administradores, protegiendo el acceso a aplicaciones en cualquier entorno. Mediante el uso de notificaciones push intuitivas y políticas preventivas de seguridad, Duo verifica la identidad de los usuarios y comprueba el 'estado de salud' de sus dispositivos antes de permitir la entrada, garantizando un acceso seguro y sin fricciones.",
                            "descriptionEn": "Cisco Duo is a multi-factor authentication platform designed to be incredibly easy to use for both end-users and administrators, protecting access to applications in any environment. Through the use of intuitive push notifications and preventive security policies, Duo verifies user identities and checks their devices' 'health status' before allowing entry, guaranteeing secure and frictionless access.",
                            "url": "https://duo.com/",
                            "tutorial_content": "<h4>Push to Verify</h4><p>Líder en autenticación de dos pasos. Famoso por su aplicación móvil donde solo tienes que pulsar 'Aprobar' para entrar.</p>",
                            "tutorial_contentEn": "<h4>Push to Verify</h4><p>Leader in two-step authentication. Famous for its mobile app where you just have to press 'Approve' to enter.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/mfa.png"
                }
            ],

        },
        {
            "name": "Endpoints",
            "nameEn": "Endpoints",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/endpoints.png",
            "description": "La seguridad de endpoints se centra en la protección de los dispositivos finales que se conectan a una red, como portátiles, estaciones de trabajo, servidores y dispositivos móviles, contra amenazas malintencionadas. Dado que estos dispositivos suelen ser el punto de entrada preferido para los atacantes, su seguridad es vital para prevenir infecciones por malware, el robo de datos y el compromiso total de la infraestructura corporativa mediante el uso de agentes de detección avanzada.",
            "descriptionEn": "Endpoint security focuses on protecting the final devices connecting to a network, such as laptops, workstations, servers, and mobile devices, against malicious threats. Since these devices are often the preferred entry point for attackers, their security is vital for preventing malware infections, data theft, and total compromise of the corporate infrastructure through the use of advanced detection agents.",
            "children": [
                {
                    "name": "EDR",
                    "nameEn": "EDR",
                    "description": "EDR (Endpoint Detection and Response) es una categoría de seguridad que proporciona visibilidad contínua y respuesta ante amenazas en tiempo real en los dispositivos finales mediante el análisis del comportamiento del sistema. A diferencia de los antivirus convencionales, el EDR se centra en detectar anomalías sutiles y ataques avanzados sin archivos, permitiendo a los equipos de seguridad investigar incidentes, contener brechas y realizar análisis forenses detallados de forma remota.",
                    "descriptionEn": "EDR (Endpoint Detection and Response) is a security category providing continuous visibility and real-time threat response on end devices through system behavior analysis. Unlike conventional antivirus, EDR focuses on detecting subtle anomalies and advanced fileless attacks, allowing security teams to investigate incidents, contain breaches, and perform detailed remote forensic analysis.",
                    "tutorial_content": "<h4>Concepto</h4><p>Antivirus con esteroides. No solo busca firmas de virus, sino comportamientos sospechosos (ej. PowerShell ejecutando comandos ofuscados).</p>",
                    "tutorial_contentEn": "<h4>Concept</h4><p>Antivirus on steroids. Not only looks for virus signatures, but also suspicious behaviors (e.g., PowerShell executing obfuscated commands).</p>",
                    "children": [
                        {
                            "name": "CrowdStrike",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "CrowdStrike Falcon es una plataforma de protección de endpoints nativa de la nube que combina antivirus de próxima generación (NGAV), EDR y caza de amenazas gestionada de forma unificada. Utiliza un único agente ligero para recopilar trillones de eventos de seguridad al día, aplicando inteligencia artificial y análisis de comportamiento para detener ataques sofisticados en tiempo real mientras proporciona visibilidad total sobre el estado de seguridad de toda la flota de dispositivos.",
                            "descriptionEn": "CrowdStrike Falcon is a cloud-native endpoint protection platform combining next-generation antivirus (NGAV), EDR, and managed threat hunting in a unified manner. It uses a single lightweight agent to collect trillions of security events per day, applying artificial intelligence and behavioral analysis to stop sophisticated attacks in real-time while providing full visibility into the security state of the entire device fleet.",
                            "url": "https://www.crowdstrike.com/",
                            "tutorialUrl": "https://www.crowdstrike.com/resources/reports/",
                            "reddit": "https://www.reddit.com/r/crowdstrike/",
                            "tutorial_content": "<h4>Falcon</h4><p>EDR 100% en la nube. Famoso por su ligereza y capacidad de respuesta casi instantánea. Registra cada evento en el endpoint para análisis forense remoto.</p>",
                            "tutorial_contentEn": "<h4>Falcon</h4><p>100% cloud-based EDR. Famous for its lightness and near-instant response capability. Records every event on the endpoint for remote forensic analysis.</p>"
                        },
                        {
                            "name": "SentinelOne",
                            "description": "SentinelOne Singularity es una solución de seguridad autónoma que utiliza inteligencia artificial distribuida para prevenir, detectar y responder a ataques en endpoints y cargas de trabajo en la nube. Su capacidad de autorreparación (Rollback) permite revertir automáticamente los efectos de un ataque de ransomware infectado en segundos, eliminando la necesidad de restauraciones manuales lentas y garantizando que las estaciones de trabajo se mantengan operativas y protegidas contínuamente.",
                            "descriptionEn": "SentinelOne Singularity is an autonomous security solution that uses distributed artificial intelligence to prevent, detect, and respond to attacks on endpoints and cloud workloads. Its self-healing capability (Rollback) allows it to automatically revert the effects of an infected ransomware attack in seconds, eliminating the need for slow manual restorations and ensuring that workstations remain operational and protected continuously.",
                            "url": "https://www.sentinelone.com/",
                            "tutorial_content": "<h4>¿Qué es SentinelOne?</h4><p>Un EDR/XDR que usa IA para detectar y responder a amenazas en tiempo real sin firmas tradicionales.</p><h4>Característica Estrella</h4><p><strong>Rollback:</strong> Si un ransomware cifra archivos, SentinelOne puede revertir los cambios automáticamente.</p><h4>Tip</h4><div class='tip'>No necesita conectividad constante a la nube para proteger el dispositivo.</div>",
                            "tutorial_contentEn": "<h4>What is SentinelOne?</h4><p>An EDR/XDR that uses AI to detect and respond to threats in real-time without traditional signatures.</p><h4>Star Feature</h4><p><strong>Rollback:</strong> If ransomware encrypts files, SentinelOne can automatically revert changes.</p><h4>Tip</h4><div class='tip'>It doesn't need constant cloud connectivity to protect the device.</div>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/edr.png"
                },
                {
                    "name": "Hardening",
                    "nameEn": "Hardening",
                    "description": "El endurecimiento (Hardening) es el proceso de asegurar un sistema mediante la reducción de su superficie de ataque, eliminando servicios, protocolos y funciones innecesarias. Este proceso incluye la desactivación de cuentas predeterminadas, el cierre de puertos no utilizados y la aplicación estricta de parches de seguridad, garantizando que el sistema operativo o la aplicación funcione con el mínimo riesgo operativo posible y la máxima resistencia ante intrusiones.",
                    "descriptionEn": "Hardening is the process of securing a system by reducing its attack surface, eliminating unnecessary services, protocols, and functions. This process includes disabling default accounts, closing unused ports, and strictly applying security patches, ensuring the operating system or application functions with the minimum possible operational risk and maximum resistance to intrusions.",
                    "children": [
                        {
                            "name": "CIS-CAT",
                            "description": "CIS-CAT Pro es una herramienta de evaluación automatizada desarrollada por el Center for Internet Security (CIS) para verificar si las configuraciones de los sistemas cumplen con los estándares de endurecimiento (Hardening) recomendados por la industria. Permite a las organizaciones escanear rápidamente sus servidores y estaciones de trabajo para identificar desviaciones de seguridad críticas, proporcionando informes detallados y pasos de remediación claros para fortalecer la superficie de ataque.",
                            "descriptionEn": "CIS-CAT Pro is an automated assessment tool developed by the Center for Internet Security (CIS) to verify if system configurations comply with industry-recommended hardening standards. It allows organizations to quickly scan their servers and workstations to identify critical security deviations, providing detailed reports and clear remediation steps to strengthen the attack surface.",
                            "url": "https://www.cisecurity.org/cis-cat-pro",
                            "tutorial_content": "<h4>Hardenizado Automático</h4><p>Compara la configuración de tu sistema (Windows/Linux) contra los Benchmarks de CIS (Center for Internet Security) y te dice qué falta por asegurar.</p>",
                            "tutorial_contentEn": "<h4>Automatic Hardening</h4><p>Compares your system configuration (Windows/Linux) against CIS Benchmarks (Center for Internet Security) and tells you what's left to secure.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/hardening.png"
                },
                {
                    "name": "Patch",
                    "nameEn": "Patch",
                    "description": "La gestión de parches es el proceso sistemático de identificar, probar e instalar actualizaciones de software para corregir vulnerabilidades, errores y mejorar la estabilidad de los sistemas operativos y aplicaciones. Es una de las prácticas más críticas de la ciberseguridad defensiva, ya que una estrategia de parcheo eficiente reduce drásticamente la capacidad de los atacantes para explotar fallos de seguridad conocidos antes de que puedan ser utilizados en ataques reales.",
                    "descriptionEn": "Patch management is the systematic process of identifying, testing, and installing software updates to fix vulnerabilities and bugs and improve the stability of operating systems and applications. It is one of the most critical practices of defensive cybersecurity, as an efficient patching strategy drastically reduces attackers' ability to exploit known security flaws before they can be used in real attacks.",
                    "children": [
                        {
                            "name": "WSUS",
                            "description": "WSUS (Windows Server Update Services) es una herramienta de Microsoft que permite a los administradores de sistemas gestionar la distribución de actualizaciones y parches para productos de Windows de forma centralizada en una red corporativa. Ayuda a optimizar el ancho de banda al descargar las actualizaciones una sola vez para toda la organización y permite probar los parches en grupos de prueba antes de desplegarlos masivamente, garantizando la estabilidad de los servidores y PCs.",
                            "descriptionEn": "WSUS (Windows Server Update Services) is a Microsoft tool that allows system administrators to manage the distribution of updates and patches for Windows products centrally in a corporate network. It helps optimize bandwidth by downloading updates only once for the entire organization and allows testing patches in test groups before deploying them massively, guaranteeing the stability of servers and PCs.",
                            "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus",
                            "tutorial_content": "<h4>Gestión de Parches</h4><p>El estándar para parchear Windows en dominio. Aprueba actualizaciones críticas y despliégalas a miles de servidores desde una consola.</p>",
                            "tutorial_contentEn": "<h4>Patch Management</h4><p>The standard for patching Windows in a domain. Approve critical updates and deploy them to thousands of servers from a console.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/patch.png"
                }
            ]
        },
        {
            "name": "Ingeniería Social",
            "nameEn": "Social Engineering",
            "minLevel": 1,
            "image": "/static/assets/images/ramas/ingenieriasocial.png",
            "description": "La ingeniería social es la manipulación psicológica de las personas para que realicen acciones o divulguen información confidencial, siendo a menudo el vector de ataque más efectivo en ciberseguridad. Se basa en explotar la confianza humana, el miedo o la urgencia para eludir controles técnicos, por lo que la concienciación y la formación de los usuarios son defensas críticas para prevenir ataques como el phishing, el vishing o la suplantación de identidad física.",
            "descriptionEn": "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information, often being the most effective attack vector in cybersecurity. It relies on exploiting human trust, fear, or urgency to bypass technical controls, which is why awareness and user training are critical defenses to prevent attacks such as phishing, vishing, or physical impersonation.",
            "children": [
                {
                    "name": "Phishing",
                    "nameEn": "Phishing",
                    "description": "El phishing es una técnica de ingeniería social que utiliza el engaño (correos, SMS o llamadas) para manipular a los usuarios y lograr que revelen información confidencial o instalen malware. Es uno de los vectores de ataque más efectivos y comunes, ya que explota la confianza humana, lo que hace vital el uso de filtros avanzados de correo y, sobre todo, la educación continua de los empleados para reconocer señales de alerta en comunicaciones sospechosas.",
                    "descriptionEn": "Phishing is a social engineering technique that uses deception (emails, SMS, or calls) to manipulate users into revealing confidential information or installing malware. It is one of the most effective and common attack vectors, as it exploits human trust, making advanced email filters and, above all, continuous employee education vital for recognizing warning signs in suspicious communications.",
                    "children": [
                        {
                            "name": "GoPhish",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png",
                            "description": "GoPhish es un framework de simulación de phishing de código abierto potente y fácil de usar, diseñado para que las organizaciones realicen auditorías de concienciación y evalúen la preparación de sus empleados ante ataques reales. Permite crear campañas de correo electrónico personalizadas, clonar páginas de aterrizaje de forma sencilla y generar reportes detallados que identifican qué usuarios son más vulnerables, facilitando la toma de medidas educativas específicas.",
                            "descriptionEn": "GoPhish is a powerful and easy-to-use open-source phishing simulation framework designed for organizations to conduct awareness audits and evaluate employee readiness for real attacks. It allows for creating custom email campaigns, easily cloning landing pages, and generating detailed reports that identify which users are most vulnerable, facilitating targeted educational measures.",
                            "url": "https://getgophish.com/",
                            "tutorialUrl": "https://getgophish.com/documentation/",
                            "github": "https://github.com/gophish/gophish",
                            "tutorial_content": "<h4>Entrenamiento de Phishing</h4><p>Crea campañas de correo falsas para ver cuántos empleados hacen clic. Es vital para medir la concienciación de seguridad de la empresa.</p>",
                            "tutorial_contentEn": "<h4>Phishing Training</h4><p>Creates fake email campaigns to see how many employees click. It's vital for measuring safety awareness in the company.</p>"
                        },
                        {
                            "name": "Evilginx",
                            "description": "Evilginx2 es un framework de ataque de hombre en el medio (MITM) avanzado utilizado para realizar campañas de phishing que eluden la autenticación de dos factores (2FA). Al actuar como un proxy inverso entre la víctima y el servicio real, Evilginx captura no solo las credenciales del usuario, sino también las 'cookies' de sesión autenticadas, permitiendo al atacante secuestar el acceso a cuentas protegidas sin necesidad de conocer el código dinámico de seguridad.",
                            "descriptionEn": "Evilginx2 is an advanced man-in-the-middle (MITM) attack framework used to conduct phishing campaigns that bypass two-factor authentication (2FA). By acting as a reverse proxy between the victim and the real service, Evilginx captures not only user credentials but also authenticated session cookies, allowing an attacker to hijack access to protected accounts without needing to know the dynamic security code.",
                            "url": "https://github.com/kgretzky/evilginx2",
                            "github": "https://github.com/kgretzky/evilginx2",
                            "tutorial_content": "<h4>Phishing Avanzado</h4><p>No solo copia el login, sino que actúa como proxy. Si la víctima pone su 2FA (código SMS), Evilginx lo captura y roba la sesión real.</p>",
                            "tutorial_contentEn": "<h4>Advanced Phishing</h4><p>Doesn't just copy the login, but acts as a proxy. If the victim enters their 2FA (SMS code), Evilginx captures it and steals the real session.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/phishing.png"
                },
                {
                    "name": "Awareness",
                    "nameEn": "Awareness",
                    "description": "La concienciación (Awareness) en seguridad es la formación continua que busca transformar al factor humano en la defensa más fuerte de la organización. A través de simulacros, talleres y campañas informativas, se enseña a los empleados a manejar datos sensibles con responsabilidad, identificar intentos de ingeniería social y seguir los protocolos de reporte, creando una cultura de ciberseguridad que permea en todos los niveles de la empresa.",
                    "descriptionEn": "Security awareness is the continuous training that seeks to transform the human factor into the organization's strongest defense. Through simulations, workshops, and information campaigns, employees are taught to handle sensitive data responsibly, identify social engineering attempts, and follow reporting protocols, creating a cybersecurity culture that permeates all levels of the company.",
                    "children": [
                        {
                            "name": "KnowBe4",
                            "description": "KnowBe4 es la plataforma líder mundial en simulación de phishing y formación en concienciación de seguridad, ayudando a las empresas a transformar a sus empleados en una barrera de defensa proactiva. Con una de las bibliotecas más extensas de contenido educativo interactivo del mercado, permite a los administradores automatizar programas de entrenamiento personalizados que reducen significativamente el riesgo de caer víctima de estafas de ingeniería social de última generación.",
                            "descriptionEn": "KnowBe4 is the world's leading phishing simulation and security awareness training platform, helping companies transform their employees into a proactive defense barrier. With one of the most extensive libraries of interactive educational content on the market, it allows administrators to automate custom training programs that significantly reduce the risk of falling victim to cutting-edge social engineering scams.",
                            "url": "https://www.knowbe4.com/",
                            "tutorial_content": "<h4>Líder en Awareness</h4><p>Plataforma completa de 'Kevin Mitnick Security Awareness Training'. Sus videos son muy populares para educar a usuarios no técnicos.</p>",
                            "tutorial_contentEn": "<h4>Leader in Awareness</h4><p>Complete platform for 'Kevin Mitnick Security Awareness Training'. Its videos are very popular for educating non-technical users.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Cofense",
                            "description": "Cofense es una solución de defensa colectiva contra el phishing que empodera a los usuarios finales para que detecten y reporten correos electrónicos sospechosos en tiempo real. Al aprovechar la inteligencia generada por una red global de usuarios alerta, Cofense permite a los equipos del SOC acelerar la respuesta ante incidentes, neutralizando las amenazas de phishing que han logrado eludir los filtros de correo electrónicos tradicionales antes de que puedan causar daño.",
                            "descriptionEn": "Cofense is a collective phishing defense solution that empowers end-users to detect and report suspicious emails in real-time. By leveraging intelligence generated by a global network of alert users, Cofense allows SOC teams to accelerate incident response, neutralizing phishing threats that have bypassed traditional email filters before they can cause damage.",
                            "url": "https://cofense.com/",
                            "tutorial_content": "<h4>Defensa Colaborativa</h4><p>Convierte a los empleados en sensores. Un botón en Outlook para que reporten phishing real al SOC.</p>",
                            "tutorial_contentEn": "<h4>Collaborative Defense</h4><p>Turns employees into sensors. A button in Outlook for them to report real phishing to the SOC.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/awareness.png"
                }
            ],

        },
        {
            "name": "OT_IoT",
            "nameEn": "OT_IoT",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/ot_iot.png",
            "description": "La ciberseguridad en OT (Tecnología Operacional) e IoT (Internet de las Cosas) se centra en proteger los sistemas físicos que controlan infraestructuras críticas y dispositivos conectados. A diferencia de la IT tradicional, en OT la prioridad absoluta es la disponibilidad y la seguridad física (safety), ya que un ataque a una planta eléctrica, una red de aguas o un dispositivo médico puede tener consecuencias directas y catastróficas en el mundo real.",
            "descriptionEn": "Cybersecurity in OT (Operational Technology) and IoT (Internet of Things) focuses on protecting physical systems controlling critical infrastructure and connected devices. Unlike traditional IT, the top priority in OT is availability and physical safety, as an attack on a power plant, water network, or medical device can have direct and catastrophic consequences in the real world.",
            "children": [
                {
                    "name": "SCADA",
                    "nameEn": "SCADA",
                    "description": "La seguridad en sistemas SCADA (Supervisión, Control y Adquisición de Datos) se centra en proteger las infraestructuras críticas que controlan procesos industriales a gran escala, como redes eléctricas o plantas de agua. Estos sistemas a menudo utilizan protocolos antiguos y requieren estrategias de segmentación de red extremas y monitorización pasiva para evitar sabotajes que podrían tener consecuencias físicas desastrosas en el mundo real.",
                    "descriptionEn": "Security in SCADA systems (Supervisory Control and Data Acquisition) focuses on protecting critical infrastructures that control large-scale industrial processes, such as power grids or water plants. These systems often use legacy protocols and require extreme network segmentation strategies and passive monitoring to prevent sabotages that could have disastrous physical consequences in the real world.",
                    "children": [
                        {
                            "name": "Nozomi",
                            "description": "Nozomi Networks es un líder en visibilidad y seguridad para OT e IoT, proporcionando detección de amenazas en tiempo real y monitorización de activos en entornos industriales complejos. Sus soluciones analizan el tráfico de red de forma no intrusiva para identificar vulnerabilidades en dispositivos SCADA y PLC, permitiendo a los operadores detectar anomalías de proceso y ataques cibernéticos antes de que afecten a la continuidad operativa.",
                            "descriptionEn": "Nozomi Networks is a leader in visibility and security for OT and IoT, providing real-time threat detection and asset monitoring in complex industrial environments. Its solutions non-intrusively analyze network traffic to identify vulnerabilities in SCADA and PLC devices, allowing operators to detect process anomalies and cyberattacks before they affect operational continuity.",
                            "url": "https://www.nozominetworks.com/",
                            "tutorial_content": "<h4>Seguridad Industrial (OT)</h4><p>Escucha el tráfico de redes industriales (SCADA, PLC) sin interferir. Entiende protocolos raros como Modbus o DNP3 para detectar intrusos en fábricas.</p>",
                            "tutorial_contentEn": "<h4>Industrial Security (OT)</h4><p>Listens to industrial network traffic (SCADA, PLC) without interfering. Understands rare protocols like Modbus or DNP3 to detect intruders in factories.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Claroty",
                            "description": "Claroty ofrece una plataforma de seguridad unificada para proteger los sistemas ciberfísicos (CPS) en entornos industriales, sanitarios y comerciales. Su tecnología permite descubrir todos los activos conectados, gestionar vulnerabilidades y detectar amenazas mediante una inspección profunda de protocolos industriales (DPI), garantizando que las infraestructuras críticas y los sistemas de control automatizados se mantengan seguros y resilientes.",
                            "descriptionEn": "Claroty offers a unified security platform to protect cyber-physical systems (CPS) in industrial, healthcare, and commercial environments. Its technology allows for discovering all connected assets, managing vulnerabilities, and detecting threats through deep packet inspection (DPI) of industrial protocols, ensuring that critical infrastructure and automated control systems remain secure and resilient.",
                            "url": "https://claroty.com/",
                            "tutorial_content": "<h4>Protección Cyber-Física</h4><p>Especializada en asegurar entornos donde un ciberataque puede causar daño físico (hospitales, plantas eléctricas).</p>",
                            "tutorial_contentEn": "<h4>Cyber-Physical Protection</h4><p>Specialized in securing environments where a cyberattack can cause physical damage (hospitals, power plants).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/scada.png"
                },
                {
                    "name": "Firmware",
                    "nameEn": "Firmware",
                    "description": "La seguridad de firmware aborda la protección del software de bajo nivel que controla directamente el hardware de un dispositivo. Dado que el firmware se ejecuta antes que el sistema operativo, un compromiso en este nivel es extremadamente difícil de detectar y puede otorgar al atacante persistencia total. El análisis de vulnerabilidades en binarios de BIOS/UEFI y microcontroladores es vital para asegurar la confianza desde la raíz del arranque.",
                    "descriptionEn": "Firmware security addresses the protection of low-level software that directly controls a device's hardware. Since firmware runs before the operating system, a compromise at this level is extremely difficult to detect and can grant the attacker full persistence. Vulnerability analysis in BIOS/UEFI binaries and microcontrollers is vital for ensuring trust from the root of boot.",
                    "children": [
                        {
                            "name": "Binwalk",
                            "description": "Binwalk es la herramienta estándar de la industria para analizar, realizar ingeniería inversa y extraer sistemas de archivos a partir de imágenes de firmware de dispositivos embebidos. Es capaz de identificar firmas mágicas comunes, descompilar código y automatizar la extracción de componentes como kernels de Linux o sistemas de archivos JFFS2, siendo esencial para investigadores que buscan vulnerabilidades o contraseñas ocultas en dispositivos IoT.",
                            "descriptionEn": "Binwalk is the industry-standard tool for analyzing, reverse engineering, and extracting file systems from firmware images of embedded devices. It is capable of identifying common magic signatures, decompiling code, and automating the extraction of components such as Linux kernels or JFFS2 file systems, making it essential for researchers looking for vulnerabilities or hidden passwords in IoT devices.",
                            "url": "https://github.com/ReFirmLabs/binwalk",
                            "github": "https://github.com/ReFirmLabs/binwalk",
                            "tutorial_content": "<h4>Disección de Firmware</h4><p>Extrae sistemas de archivos de imágenes binarias de routers, cámaras IoT, etc. Básico para buscar hardcoded passwords.</p>",
                            "tutorial_contentEn": "<h4>Firmware Dissection</h4><p>Extracts file systems from binary images of routers, IoT cameras, etc. Basic for searching for hardcoded passwords.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/firmware.png"
                },
                {
                    "name": "IoT",
                    "nameEn": "IoT",
                    "description": "La seguridad IoT (Internet de las Cosas) se ocupa de proteger la vasta red de dispositivos conectados que a menudo carecen de recursos computacionales para implementar medidas defensivas complejas. Se centra en endurecer las comunicaciones, eliminar contraseñas predeterminadas y evitar que estos dispositivos sean reclutados en botnets masivas, garantizando que la interconectividad doméstica e industrial no se convierta en una puerta trasera hacia redes corporativas.",
                    "descriptionEn": "IoT security (Internet of Things) deals with protecting the vast network of connected devices that often lack computational resources to implement complex defensive measures. It focuses on hardening communications, eliminating default passwords, and preventing these devices from being recruited into massive botnets, ensuring that home and industrial interconnectivity does not become a backdoor to corporate networks.",
                    "children": [
                        {
                            "name": "Shodan",
                            "description": "Shodan es un motor de búsqueda especializado que permite encontrar dispositivos específicos conectados a Internet, desde cámaras de seguridad hasta sistemas de control industrial expuestos. A diferencia de Google, Shodan indexa los servicios y banners que responden en puertos abiertos, proporcionando una visión crítica sobre la superficie de ataque global de IoT y permitiendo a los profesionales de seguridad identificar sistemas mal configurados o vulnerables.",
                            "descriptionEn": "Shodan is a specialized search engine that allows for finding specific devices connected to the Internet, from security cameras to exposed industrial control systems. Unlike Google, Shodan indexes the services and banners responding on open ports, providing critical insight into the global IoT attack surface and allowing security professionals to identify misconfigured or vulnerable systems.",
                            "url": "https://www.shodan.io/",
                            "tutorial_content": "<h4>El Buscador IoT</h4><p>Encuentra neveras, acuarios y semáforos conectados a internet. Indexa servicios y banners de dispositivos por todo el IPv4.</p>",
                            "tutorial_contentEn": "<h4>The IoT Search Engine</h4><p>Finds refrigerators, aquariums, and traffic lights connected to the internet. Indexes services and device banners across all IPv4.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/iot.png"
                }
            ],

        },
        {
            "name": "Hardware",
            "nameEn": "Hardware",
            "youtube": "https://youtu.be/f7lIgdSuyXU",
            "youtube_label": "Ques es DHCP?",
            "youtube_labelEn": "What is DHCP?",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/hardware.png",
            "description": "La seguridad de hardware se ocupa de proteger los sistemas computacionales a nivel de componentes físicos y circuitos, estableciendo una raíz de confianza que el software no puede alterar. Incluye mecanismos para asegurar el proceso de arranque, proteger claves criptográficas en chips dedicados y mitigar ataques de canales laterales que intentan extraer información sensible mediante el análisis físico del consumo eléctrico o el ruido electromagnético.",
            "descriptionEn": "Hardware security deals with protecting computer systems at the level of physical components and circuits, establishing a root of trust that software cannot alter. It includes mechanisms to secure the boot process, protect cryptographic keys in dedicated chips, and mitigate side-channel attacks that attempt to extract sensitive information by physically analyzing power consumption or electromagnetic noise.",
            "children": [
                {
                    "name": "Secure Boot",
                    "nameEn": "Secure Boot",
                    "description": "Secure Boot (Arranque Seguro) es un estándar de seguridad que asegura que un dispositivo computacional arranque utilizando únicamente software que sea de confianza para el fabricante del equipo original (OEM). Al verificar las firmas digitales del firmware, el gestor de arranque y el kernel del sistema operativo, el Secure Boot evita que el malware de bajo nivel, como los rootkits o bootkits, se ejecute antes de que el sistema cargue sus propias defensas.",
                    "descriptionEn": "Secure Boot is a security standard ensuring that a computer device boots using only software trusted by the original equipment manufacturer (OEM). By verifying digital signatures of the firmware, bootloader, and operating system kernel, Secure Boot prevents low-level malware such as rootkits or bootkits from executing before the system loads its own defenses.",
                    "url": "https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-secure-boot",
                    "tutorial_content": "<h4>Cadena de Confianza</h4><p>Asegura que tu ordenador solo arranque software firmado por el fabricante (OEM). Evita 'Bootkits' malignos.</p>",
                    "tutorial_contentEn": "<h4>Chain of Trust</h4><p>Ensures that your computer only boots software signed by the manufacturer (OEM). Prevents malicious 'Bootkits'.</p>",
                    "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                },
                {
                    "name": "TPM",
                    "nameEn": "TPM",
                    "description": "El Módulo de Plataforma Segura (TPM) es un chip especializado diseñado para asegurar el hardware mediante el uso de claves criptográficas integradas. Proporciona una base sólida para funciones de seguridad como el cifrado de disco completo (BitLocker), la medición de la integridad de la configuración del sistema durante el arranque y el almacenamiento seguro de certificados digitales, garantizando que los datos sensibles permanezcan protegidos incluso si el disco es robado.",
                    "descriptionEn": "The Trusted Platform Module (TPM) is a specialized chip designed to secure hardware through the use of integrated cryptographic keys. It provides a solid foundation for security functions such as full disk encryption (BitLocker), measuring the integrity of the system configuration during boot, and secure storage of digital certificates, ensuring that sensitive data remains protected even if the disk is stolen.",
                    "url": "https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/trusted-platform-module-overview",
                    "tutorial_content": "<h4>Bóveda de Hardware</h4><p>Chip criptográfico en la placa base. Guarda claves de cifrado de disco (BitLocker) y asegura la integridad del arranque.</p>",
                    "tutorial_contentEn": "<h4>Hardware Vault</h4><p>Cryptographic chip on the motherboard. Stores disk encryption keys (BitLocker) and ensures boot integrity.</p>",
                    "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                },
                {
                    "name": "SideChannel",
                    "nameEn": "SideChannel",
                    "description": "Los ataques de canal lateral (Side-Channel) explotan la información filtrada por la implementación física de un sistema criptográfico, como el consumo de energía, las emisiones electromagnéticas o el tiempo de ejecución. A diferencia de los criptoanálisis teóricos, estos ataques observan 'efectos secundarios' físicos para extraer claves secretas, haciendo necesario el diseño de hardware resistente y algoritmos con ejecución en tiempo constante para mitigarlos exitosamente.",
                    "descriptionEn": "Side-channel attacks exploit information leaked by a cryptographic system's physical implementation, such as power consumption, electromagnetic emissions, or execution time. Unlike theoretical cryptanalysis, these attacks observe physical 'side effects' to extract secret keys, making the design of resistant hardware and constant-time execution algorithms necessary to mitigate them successfully.",
                    "children": [
                        {
                            "name": "ChipWhisperer",
                            "description": "ChipWhisperer es un proyecto de hardware y software de código abierto líder para realizar análisis de canales laterales, como el análisis de consumo de energía (DPA) y la inyección de fallos por reloj. Permite a los investigadores y educadores demostrar cómo es posible extraer claves criptográficas de microcontroladores y FPGAs analizando las variaciones eléctricas durante las operaciones matemáticas, siendo una herramienta fundamental en el diseño de hardware seguro.",
                            "descriptionEn": "ChipWhisperer is a leading open-source hardware and software project for performing side-channel analysis, such as Differential Power Analysis (DPA) and clock glitching. It allows researchers and educators to demonstrate how cryptographic keys can be extracted from microcontrollers and FPGAs by analyzing electrical variations during mathematical operations, being a fundamental tool in secure hardware design.",
                            "url": "https://chipwhisperer.io/",
                            "github": "https://github.com/newaetech/chipwhisperer",
                            "tutorial_content": "<h4>Side Channel Attack</h4><p>Hardware open source para romper cifrado 'escuchando' el consumo de energía del chip mientras opera.</p>",
                            "tutorial_contentEn": "<h4>Side Channel Attack</h4><p>Open source hardware to break encryption by 'listening' to the chip's power consumption while it operates.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/sidechannel.png"
                }
            ],

        },
        {
            "name": "IA_Seguridad",
            "nameEn": "AI_Security",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/ia_seguridad.png",
            "description": "La seguridad en IA (Inteligencia Artificial) aborda tanto el uso de modelos de aprendizaje automático para mejorar las defensas de ciberseguridad como la protección de los propios modelos contra ataques maliciosos. Este campo emergente se centra en prevenir el envenenamiento de datos de entrenamiento, mitigar los ataques adversarios que engañan a las redes neuronales y garantizar la privacidad de la información contenida en los modelos de lenguaje y visión.",
            "descriptionEn": "AI Security addresses both the use of machine learning models to improve cybersecurity defenses and the protection of the models themselves against malicious attacks. This emerging field focuses on preventing training data poisoning, mitigating adversarial attacks that deceive neural networks, and ensuring the privacy of information contained in language and vision models.",
            "children": [
                {
                    "name": "AdversarialML",
                    "nameEn": "AdversarialML",
                    "description": "El aprendizaje automático adversario (Adversarial ML) estudia técnicas para engañar a los modelos de Inteligencia Artificial mediante la introducción de perturbaciones sutiles en los datos de entrada. Estos ataques buscan que el modelo tome decisiones erróneas, como clasificar malware como software legítimo, lo que obliga a los equipos de seguridad a desarrollar modelos más robustos que incluyan entrenamiento adversario y validación de entradas críticas.",
                    "descriptionEn": "Adversarial Machine Learning studies techniques to deceive Artificial Intelligence models by introducing subtle perturbations into input data. These attacks aim to cause the model to make erroneous decisions, such as classifying malware as legitimate software, forcing security teams to develop more robust models that include adversarial training and critical input validation.",
                    "children": [
                        {
                            "name": "CleverHans",
                            "description": "CleverHans es una biblioteca de Python utilizada para evaluar la vulnerabilidad de los modelos de aprendizaje automático a los ataques adversarios. Proporciona implementaciones de última generación para generar 'ejemplos adversarios' (entradas diseñadas para confundir al modelo) y permite a los investigadores probar la robustez de sus redes neuronales frente a diferentes técnicas de manipulación, ayudando a construir sistemas de IA más seguros y confiables.",
                            "descriptionEn": "CleverHans is a Python library used to evaluate the vulnerability of machine learning models to adversarial attacks. It provides state-of-the-art implementations for generating 'adversarial examples' (inputs designed to confuse the model) and allows researchers to test the robustness of their neural networks against different manipulation techniques, helping build more secure and reliable AI systems.",
                            "url": "https://github.com/cleverhans-lab/cleverhans",
                            "github": "https://github.com/cleverhans-lab/cleverhans",
                            "youtube": "https://youtu.be/H8qoTi7t5lc",
                            "youtube_label": "Que es CleverHans?",
                            "youtube_labelEn": "What is CleverHans?",
                            "tutorial_content": "<h4>Hackeando IA</h4><p>Librería para generar 'Ejemplos Adversarios', imágenes modificadas invisiblemente que confunden a redes neuronales.</p>",
                            "tutorial_contentEn": "<h4>Hacking AI</h4><p>Library for generating 'Adversarial Examples', invisibly modified images that confuse neural networks.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/adversarialml.png"
                },
                {
                    "name": "ModelSecurity",
                    "nameEn": "ModelSecurity",
                    "description": "La seguridad de modelos de IA se enfoca en proteger la integridad y propiedad intelectual del modelo, así como la privacidad de los datos utilizados durante su entrenamiento. Incluye defensas contra la extracción de modelos, donde un atacante intenta replicar la lógica de la IA mediante consultas masivas, y técnicas de privacidad diferencial para asegurar que la información sensible no pueda ser recuperada mediante ataques de inferencia de membresía.",
                    "descriptionEn": "AI model security focuses on protecting the model's integrity and intellectual property, as well as the privacy of data used during training. It includes defenses against model extraction, where an attacker attempts to replicate AI logic through massive queries, and differential privacy techniques to ensure sensitive information cannot be recovered through membership inference attacks.",
                    "children": [
                        {
                            "name": "MLflow",
                            "description": "MLflow es una plataforma de código abierto diseñada para gestionar el ciclo de vida completo del aprendizaje automático, incluyendo la experimentación, reproducibilidad y despliegue de modelos. Desde el punto de vista de la seguridad, MLflow permite centralizar el registro y la autoría de los modelos (MLOps), garantizando que solo versiones verificadas y libres de manipulaciones sean desplegadas en producción, protegiendo así la integridad de la cadena de suministro de IA.",
                            "descriptionEn": "MLflow is an open-source platform designed to manage the full machine learning lifecycle, including experimentation, reproducibility, and model deployment. From a security standpoint, MLflow allows for centralizing model registration and authorship (MLOps), ensuring that only verified and manipulation-free versions are deployed in production, thus protecting the integrity of the AI supply chain.",
                            "url": "https://mlflow.org/",
                            "github": "https://github.com/mlflow/mlflow",
                            "tutorial_content": "<h4>Seguridad MLOps</h4><p>Gestiona modelos de IA. En seguridad, se usa para versionar modelos y asegurar que nadie inyectó un modelo 'envenenado' en producción.</p>",
                            "tutorial_contentEn": "<h4>MLOps Security</h4><p>Manages AI models. In security, it's used to version models and ensure no one injected a 'poisoned' model into production.</p>",
                            "youtube": "https://youtu.be/ez8exrCxCcw",
                            "youtube_label": "Que es MLFlow?",
                            "youtube_labelEn": "What is MLFlow?",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/ai_modelsecurity.png"
                },
                {
                    "name": "AI_RedTeam",
                    "nameEn": "AI_RedTeam",
                    "description": "El Red Teaming aplicado a la IA consiste en realizar pruebas de intrusión y ataques simulados específicamente diseñados para sistemas de Inteligencia Artificial. A diferencia del pentesting tradicional, aquí se buscan fallos lógicos en los modelos, se intenta romper las protecciones de contenido (jailbreaking) y se evalúa la resiliencia del sistema ante inyecciones de prompts maliciosos, garantizando que la IA se comporte de forma segura y ética bajo estrés.",
                    "descriptionEn": "AI Red Teaming consists of performing intrusion tests and simulated attacks specifically designed for Artificial Intelligence systems. Unlike traditional pentesting, this involves searching for model logical flaws, attempting to break content protections (jailbreaking), and evaluating the system's resilience to malicious prompt injections, ensuring the AI behaves safely and ethically under stress.",
                    "children": [
                        {
                            "name": "PyTorch",
                            "description": "PyTorch es un framework de aprendizaje profundo (Deep Learning) ampliamente utilizado que, en el contexto de la ciberseguridad, sirve como base para el desarrollo de herramientas de Red Team en IA y sistemas de detección basados en redes neuronales. Su flexibilidad permite a los expertos en seguridad construir arquitecturas personalizadas para investigar ataques de extracción de modelos, fuzzear entradas de tensores y desarrollar defensas avanzadas contra técnicas de ingeniería social automatizada.",
                            "descriptionEn": "PyTorch is a widely used Deep Learning framework that, in the context of cybersecurity, serves as the foundation for developing AI Red Team tools and neural network-based detection systems. Its flexibility allows security experts to build custom architectures to investigate model extraction attacks, fuzz tensor inputs, and develop advanced defenses against automated social engineering techniques.",
                            "url": "https://pytorch.org/",
                            "github": "https://github.com/pytorch/pytorch",
                            "tutorial_content": "<h4>Fuzzing de Tensores</h4><p>Framework base para investigar seguridad en IA. Se usa para entrenar redes y también para atacarlas.</p>",
                            "tutorial_contentEn": "<h4>Tensor Fuzzing</h4><p>Base framework for investigating AI security. It's used to train networks and also to attack them.</p>",
                            "youtube": "https://youtu.be/5w0MIDo9r-4",
                            "youtube_label": "Que es PyTorch?",
                            "youtube_labelEn": "What is PyTorch?",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/ai_red_team.png"
                }
            ],

        },
        {
            "name": "Blockchain",
            "nameEn": "Blockchain",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/blockchain.png",
            "description": "La seguridad en Blockchain engloba las técnicas y protocolos diseñados para proteger la integridad, inmutabilidad y disponibilidad de las redes de cadena de bloques y los activos digitales que gestionan. Se centra especialmente en la seguridad de los contratos inteligentes (Smart Contracts), la protección de carteras digitales frente al robo de claves privadas y la prevención de ataques contra la gobernanza y los protocolos de finanzas descentralizadas (DeFi).",
            "descriptionEn": "Blockchain security encompasses the techniques and protocols designed to protect the integrity, immutability, and availability of blockchain networks and the digital assets they manage. It focuses especially on the security of Smart Contracts, the protection of digital wallets against private key theft, and the prevention of attacks against the governance and protocols of decentralized finance (DeFi).",
            "children": [
                {
                    "name": "SmartContracts",
                    "nameEn": "SmartContracts",
                    "description": "La seguridad de Smart Contracts es la disciplina de auditar y asegurar el código que se ejecuta de forma autónoma en una blockchain, donde los fallos son irreversibles. Dado que un contrato inteligente maneja activos digitales directamente, cualquier error de lógica o vulnerabilidad de reentrada puede resultar en la pérdida total de fondos, haciendo que las auditorías de código estático y las pruebas formales sean obligatorias antes del despliegue en la red principal.",
                    "descriptionEn": "Smart Contract security is the discipline of auditing and securing code that runs autonomously on a blockchain, where flaws are irreversible. Since a smart contract handles digital assets directly, any logic error or reentrancy vulnerability can result in total loss of funds, making static code audits and formal testing mandatory before mainnet deployment.",
                    "children": [
                        {
                            "name": "Slither",
                            "description": "Slither es un analizador estático de seguridad para contratos inteligentes escritos en Solidity, desarrollado por Trail of Bits. Es capaz de ejecutar una serie de detectores automáticos para encontrar vulnerabilidades críticas como la reentrada (reentracy), desbordamientos de enteros y fallos de lógica comunes en cuestión de segundos, proporcionando a los desarrolladores de Web3 una herramienta esencial para mejorar la robustez de su código antes de desplegarlo en la red.",
                            "descriptionEn": "Slither is a static security analyzer for smart contracts written in Solidity, developed by Trail of Bits. It is capable of running a series of automated detectors to find critical vulnerabilities such as reentrancy, integer overflows, and common logic flaws in seconds, providing Web3 developers with an essential tool to improve the robustness of their code before deploying it on the network.",
                            "url": "https://github.com/crytic/slither",
                            "github": "https://github.com/crytic/slither",
                            "tutorial_content": "<h4>Linter para Solidity</h4><p>Encuentra vulnerabilidades clásicas en Smart Contracts (Reentrancy, Integer Overflow) en segundos.</p>",
                            "tutorial_contentEn": "<h4>Linter for Solidity</h4><p>Finds classic vulnerabilities in Smart Contracts (Reentrancy, Integer Overflow) in seconds.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Mythril",
                            "description": "Mythril es una herramienta de análisis de seguridad avanzada para contratos inteligentes dirigidos a la máquina virtual de Ethereum (EVM). Utiliza técnicas de ejecución simbólica y análisis de flujo de control para explorar exhaustivamente todos los estados posibles de un contrato, permitiendo descubrir bugs lógicos complejos y vulnerabilidades ocultas que los escáneres estáticos tradicionales podrían pasar por alto, garantizando un nivel superior de auditoría en Web3.",
                            "descriptionEn": "Mythril is an advanced security analysis tool for smart contracts targeting the Ethereum Virtual Machine (EVM). It uses symbolic execution and control flow analysis techniques to exhaustively explore all possible states of a contract, allowing for the discovery of complex logic bugs and hidden vulnerabilities that traditional static scanners might overlook, guaranteeing a superior level of auditing in Web3.",
                            "url": "https://github.com/ConsenSys/mythril",
                            "github": "https://github.com/ConsenSys/mythril",
                            "tutorial_content": "<h4>Symbolic Execution</h4><p>Analiza el bytecode de la EVM explorando todos los estados posibles del contrato para encontrar bugs lógicos profundos.</p>",
                            "tutorial_contentEn": "<h4>Symbolic Execution</h4><p>Analyzes EVM bytecode by exploring all possible contract states to find deep logical bugs.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/smart_contracts.png"
                },
                {
                    "name": "Wallets",
                    "nameEn": "Wallets",
                    "description": "La seguridad de Wallets (monederos digitales) se centra en la protección de las claves privadas que otorgan el control sobre los activos en una blockchain. Aborda desde el almacenamiento seguro en dispositivos de hardware aislados (Cold Wallets) hasta la implementación de carteras multifirma, garantizando que el acceso a la riqueza digital no dependa de un único punto de fallo y esté protegido contra malware que intenta interceptar claves o manipular transacciones.",
                    "descriptionEn": "Wallet security centers on protecting private keys that grant control over assets on a blockchain. It spans from secure storage on isolated hardware devices (Cold Wallets) to multi-signature wallet implementation, ensuring that access to digital wealth does not depend on a single point of failure and is protected against malware attempting to intercept keys or manipulate transactions.",
                    "children": [
                        {
                            "name": "Hardware Wallets",
                            "description": "Las carteras de hardware (Hardware Wallets), como Trezor o Ledger, son dispositivos físicos diseñados para almacenar las claves privadas de criptoactivos en un entorno aislado y 'fuera de línea' (cold storage). Al requerir una interacción física para autorizar transacciones, estas carteras proporcionan la máxima seguridad contra malware, phishing y ataques remotos, siendo consideradas el estándar de oro para la custodia a largo plazo de fondos en el ecosistema blockchain.",
                            "descriptionEn": "Hardware Wallets, such as Trezor or Ledger, are physical devices designed to store private keys for crypto assets in an isolated and 'offline' environment (cold storage). By requiring physical interaction to authorize transactions, these wallets provide maximum security against malware, phishing, and remote attacks, being considered the gold standard for long-term fund custody in the blockchain ecosystem.",
                            "tutorial_content": "<h4>Cold Storage</h4><p>Trezor/Ledger. Mantienen las claves privadas offline. La única forma segura de guardar cripto a largo plazo.</p>",
                            "tutorial_contentEn": "<h4>Cold Storage</h4><p>Trezor/Ledger. They keep private keys offline. The only secure way to store crypto long term.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/wallets.png"
                },
                {
                    "name": "DeFi",
                    "nameEn": "DeFi",
                    "description": "La seguridad en DeFi (Finanzas Descentralizadas) protege los ecosistemas financieros abiertos que eliminan intermediarios mediante protocolos de blockchain. Este campo lucha contra ataques sofisticados como los de préstamos relámpago (flash loans), manipulación de oráculos de precios y fallos en la gobernanza, requiriendo una monitorización constante del estado de la cadena y mecanismos de pausa de emergencia para proteger el valor total bloqueado (TVL) ante anomalías.",
                    "descriptionEn": "DeFi (Decentralized Finance) security protects open financial ecosystems that eliminate intermediaries through blockchain protocols. This field fights sophisticated attacks such as flash loans, price oracle manipulation, and governance failures, requiring constant on-chain monitoring and emergency pause mechanisms to protect Total Value Locked (TVL) against anomalies.",
                    "children": [
                        {
                            "name": "Tenderly",
                            "description": "Tenderly es una plataforma integral de monitorización, depuración y simulación para aplicaciones basadas en Ethereum y otras redes Web3. Ofrece una visibilidad sin precedentes sobre la ejecución de transacciones, permitiendo a los equipos de seguridad simular escenarios complejos de ataques teóricos y monitorizar en tiempo real el comportamiento de sus contratos inteligentes en producción para detectar cualquier actividad sospechosa o fallo inesperado de forma inmediata.",
                            "descriptionEn": "Tenderly is a comprehensive monitoring, debugging, and simulation platform for applications based on Ethereum and other Web3 networks. It offers unprecedented visibility into transaction execution, allowing security teams to simulate complex theoretical attack scenarios and monitor the real-time behavior of their smart contracts in production to detect any suspicious activity or unexpected failure immediately.",
                            "url": "https://tenderly.co/",
                            "tutorial_content": "<h4>Depuración Web3</h4><p>Tenderly es como las herramientas de desarrollador de Chrome pero para Smart Contracts.</p><h4>Funcionalidad Clave</h4><p>Te permite simular transacciones para ver qué pasaría antes de ejecutarlas en la red real (y gastar dinero).</p><code>Simulate Transaction -> View Trace</code>",
                            "tutorial_contentEn": "<h4>Web3 Debugging</h4><p>Tenderly is like Chrome developer tools but for Smart Contracts.</p><h4>Key Functionality</h4><p>Allows you to simulate transactions to see what would happen before executing them on the real network (and spending money).</p><code>Simulate Transaction -> View Trace</code>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/defi.png"
                }
            ],

        },
        {
            "name": "SupplyChain",
            "nameEn": "SupplyChain",
            "minLevel": 2,
            "image": "/static/assets/images/ramas/supplychain.png",
            "description": "La seguridad en la cadena de suministro de software (Supply Chain Security) se enfoca en asegurar todo el ciclo de vida del software, desde el código fuente y las dependencias hasta la compilación y entrega final. Ante el aumento de ataques que inyectan código malicioso en librerías populares, es vital implementar mecanismos de verificación de integridad, auditoría de dependencias y la generación de inventarios detallados para garantizar que el software que llega a producción sea legítimo y confiable.",
            "descriptionEn": "Software Supply Chain Security focuses on securing the entire software lifecycle, from source code and dependencies to compilation and final delivery. With the rise of attacks injecting malicious code into popular libraries, it is vital to implement integrity verification mechanisms, dependency auditing, and the generation of detailed inventories to ensure that software reaching production is legitimate and reliable.",
            "children": [
                {
                    "name": "SBOM",
                    "nameEn": "SBOM",
                    "description": "Un SBOM (Software Bill of Materials) es un inventario formal y legible por máquina que detalla todos los componentes, bibliotecas y herramientas utilizadas para construir un producto de software. Funciona como una 'lista de ingredientes' que permite a las organizaciones identificar rápidamente si son vulnerables a fallos de seguridad recién descubiertos en componentes de terceros, facilitando una gestión de riesgos más ágil y transparente en todo el ecosistema de desarrollo.",
                    "descriptionEn": "An SBOM (Software Bill of Materials) is a formal, machine-readable inventory detailing all components, libraries, and tools used to build a software product. It functions as a 'list of ingredients' allowing organizations to quickly identify if they are vulnerable to newly discovered security flaws in third-party components, facilitating more agile and transparent risk management across the development ecosystem.",
                    "children": [
                        {
                            "name": "Syft",
                            "description": "Syft es una herramienta de línea de comandos (CLI) potente y eficiente diseñada para generar SBOMs (Software Bill of Materials) a partir de imágenes de contenedores y sistemas de archivos. Es capaz de catalogar dependencias de múltiples lenguajes de programación y paquetes de sistemas operativos, proporcionando una visibilidad profunda sobre la composición del software para que los equipos de seguridad puedan auditar y asegurar sus imágenes antes de desplegarlas en entornos productivos.",
                            "descriptionEn": "Syft is a powerful and efficient command-line tool (CLI) designed to generate SBOMs (Software Bill of Materials) from container images and file systems. It is capable of cataloging dependencies from multiple programming languages and operating system packages, providing deep visibility into software composition so security teams can audit and secure their images before deploying them in production environments.",
                            "url": "https://github.com/anchore/syft",
                            "github": "https://github.com/anchore/syft",
                            "tutorial_content": "<h4>Generador SBOM</h4><p>Syft genera la lista de ingredientes (Software Bill of Materials) de tu contenedor. Un inventario completo de qué hay dentro.</p>",
                            "tutorial_contentEn": "<h4>SBOM Generator</h4><p>Syft generates the list of ingredients (Software Bill of Materials) for your container. A complete inventory of what's inside.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        },
                        {
                            "name": "Grype",
                            "description": "Grype es un escáner de vulnerabilidades rápido y fácil de usar, diseñado específicamente para identificar fallos de seguridad conocidos en imágenes de contenedores y sistemas de archivos. Al integrarse perfectamente con Syft, Grype analiza el inventario de componentes (SBOM) para detectar CVEs críticos y sugerir actualizaciones necesarias, permitiendo a los desarrolladores solucionar problemas de seguridad en las etapas iniciales del ciclo de vida de desarrollo de software (Shift Left).",
                            "descriptionEn": "Grype is a fast and easy-to-use vulnerability scanner designed specifically to identify known security flaws in container images and file systems. By integrating seamlessly with Syft, Grype analyzes the component inventory (SBOM) to detect critical CVEs and suggest necessary updates, allowing developers to fix security issues in the early stages of the software development lifecycle (Shift Left).",
                            "url": "https://github.com/anchore/grype",
                            "github": "https://github.com/anchore/grype",
                            "tutorial_content": "<h4>Scanner SBOM</h4><p>Grype coge el SBOM de Syft y te dice si algún ingrediente está 'podrido' (vulnerable a CVEs conocidos).</p>",
                            "tutorial_contentEn": "<h4>SBOM Scanner</h4><p>Grype takes Syft's SBOM and tells you if any ingredient is 'rotten' (vulnerable to known CVEs).</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/sbom.png"
                },
                {
                    "name": "Dependencias",
                    "nameEn": "Dependencies",
                    "description": "La gestión de dependencias se centra en asegurar las bibliotecas y componentes de terceros que forman el núcleo de las aplicaciones modernas, donde más del 80% del código suele ser externo. Este proceso implica la monitorización continua de nuevas vulnerabilidades descubiertas en el ecosistema open-source (SCA), la actualización proactiva de versiones obsoletas y la implementación de controles para evitar la introducción de código malicioso a través de la cadena de suministro, garantizando que cada pieza externa sea legítima y segura.",
                    "descriptionEn": "Dependency management focuses on securing the third-party libraries and components that form the core of modern applications, where more than 80% of the code is typically external. This process involves continuous monitoring of new vulnerabilities discovered in the open-source ecosystem (SCA), proactive updating of obsolete versions, and implementing controls to prevent the introduction of malicious code through the supply chain, ensuring that every external piece is legitimate and secure.",
                    "children": [
                        {
                            "name": "Snyk",
                            "description": "Snyk es una plataforma de seguridad para desarrolladores que ayuda a las organizaciones a encontrar y corregir vulnerabilidades en sus aplicaciones de código abierto, contenedores e infraestructura como código. Su enfoque 'Developer First' permite que la seguridad se integre directamente en el flujo de trabajo de programación, proporcionando alertas automatizadas y sugerencias de remediación inteligente que aseguran que las dependencias externas no introduzcan riesgos críticos en el producto final.",
                            "descriptionEn": "Snyk is a developer security platform that helps organizations find and fix vulnerabilities in their open-source applications, containers, and infrastructure as code. Its 'Developer First' approach allows security to be integrated directly into the programming workflow, providing automated alerts and intelligent remediation suggestions ensuring that external dependencies do not introduce critical risks into the final product.",
                            "url": "https://snyk.io/",
                            "tutorial_content": "<h4>SCA Líder</h4><p>Localiza vulnerabilidades en dependencias open source y a menudo sugiere el fix exacto (ej. 'actualiza lodash a 4.17.21').</p>",
                            "tutorial_contentEn": "<h4>Leading SCA</h4><p>Locates vulnerabilities in open source dependencies and often suggests the exact fix (e.g., 'update lodash to 4.17.21').</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/dependencias.png"
                }
            ],

        },
        {
            "name": "Concienciación",
            "nameEn": "Awareness",
            "youtube": "https://youtu.be/dvN6oecqz8o",
            "youtube_label": "seguridad en tu movil",
            "youtube_labelEn": "Security in your mobile",
            "youtube2": "https://youtu.be/gIDlng0tonM",
            "youtube2_label": "La actualización digital",
            "youtube2_labelEn": "The digital update",
            "minLevel": 0,
            "image": "/static/assets/images/ramas/concienciacion.png",
            "description": "La concienciación en ciberseguridad es el proceso continuo de educar y formar a los empleados y usuarios sobre las amenazas digitales y las mejores prácticas para proteger la información. Dado que el factor humano sigue siendo el eslabón más débil, un programa de concienciación sólido busca crear una cultura de seguridad proactiva donde cada individuo entienda su responsabilidad en la defensa de la organización frente a ataques como el phishing y la ingeniería social.",
            "descriptionEn": "Cybersecurity awareness is the ongoing process of educating and training employees and users about digital threats and best practices for protecting information. Since the human factor remains the weakest link, a robust awareness program seeks to create a proactive security culture where each individual understands their responsibility in defending the organization against attacks such as phishing and social engineering.",
            "children": [
                {
                    "name": "Formación",
                    "nameEn": "Training",
                    "description": "La formación práctica en ciberseguridad proporciona a los profesionales y estudiantes los recursos y entornos necesarios para desarrollar habilidades técnicas mediante el aprendizaje basado en la experiencia. Incluye el uso de laboratorios virtuales, desafíos tipo CTF (Capture The Flag) y plataformas de ejercicios guiados que permiten experimentar con ataques y defensas reales de forma segura, garantizando una preparación técnica profunda para enfrentar incidentes reales.",
                    "descriptionEn": "Hands-on cybersecurity training provides professionals and students with the resources and environments needed to develop technical skills through experiential learning. It includes the use of virtual laboratories, CTF (Capture The Flag) challenges, and guided exercise platforms that allow for safely experimenting with real attacks and defenses, guaranteeing deep technical preparation for facing real incidents.",
                    "children": [
                        {
                            "name": "Labs",
                            "description": "Los laboratorios de práctica (Labs) son entornos controlados y aislados donde los usuarios pueden enfrentarse a máquinas y redes vulnerables para perfeccionar sus técnicas de hacking ético y defensa. Plataformas como Hack The Box y TryHackMe ofrecen una progresión de dificultad gamificada que permite a los usuarios aprender desde conceptos básicos de redes hasta técnicas avanzadas de explotación de sistemas y análisis forense, todo dentro de un marco legal y educativo.",
                            "descriptionEn": "Practice laboratories (Labs) are controlled and isolated environments where users can face vulnerable machines and networks to refine their ethical hacking and defense techniques. Platforms such as Hack The Box and TryHackMe offer a gamified difficulty progression allowing users to learn everything from basic networking concepts to advanced system exploitation techniques and forensics, all within a legal and educational framework.",
                            "tutorial_content": "<h4>Hack The Box / TryHackMe</h4><p>Plataformas gamificadas para practicar hacking legalmente en entornos controlados y seguros. Recomendado para empezar.</p>",
                            "tutorial_contentEn": "<h4>Hack The Box / TryHackMe</h4><p>Gamified platforms to practice hacking legally in controlled and safe environments. Recommended for beginners.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/formacion.png"
                },
                {
                    "name": "Simulaciones",
                    "nameEn": "Simulations",
                    "description": "Las simulaciones de ataque y defensa son ejercicios diseñados para poner a prueba la resiliencia de una organización y la efectividad de sus controles de seguridad ante escenarios de amenazas controlados. Al replicar tácticas y técnicas de adversarios reales, estas simulaciones permiten identificar brechas en la respuesta, mejorar la coordinación de los equipos de seguridad y asegurar que los empleados estén preparados para detectar y reportar actividades maliciosas de forma oportuna.",
                    "descriptionEn": "Attack and defense simulations are exercises designed to test an organization's resilience and the effectiveness of its security controls against controlled threat scenarios. By replicating real adversary tactics and techniques, these simulations allow for identifying response gaps, improving coordination between security teams, and ensuring that employees are prepared to detect and report malicious activities in a timely manner.",
                    "children": [
                        {
                            "name": "GoPhish",
                            "description": "Las simulaciones de phishing para entrenamiento utilizan herramientas como GoPhish para enviar correos electrónicos de prueba que imitan ataques reales de ingeniería social a los propios empleados de una organización. El objetivo no es castigar al usuario, sino identificar debilidades en la concienciación y proporcionar retroalimentación educativa inmediata a quienes caen en la trampa, reduciendo drásticamente la probabilidad de éxito de una campaña de phishing real.",
                            "descriptionEn": "Phishing simulations for training use tools like GoPhish to send test emails mimicking real social engineering attacks to an organization's own employees. The goal is not to punish the user, but to identify awareness weaknesses and provide immediate educational feedback to those who fall for it, drastically reducing the likelihood of success of a real phishing campaign.",
                            "url": "https://getgophish.com/",
                            "tutorial_content": "<h4>Phishing Simulado</h4><p>Lanzar correos falsos a tus propios empleados (con aviso previo) para ver quién necesita más entrenamiento en detectar fraudes.</p>",
                            "tutorial_contentEn": "<h4>Simulated Phishing</h4><p>Send fake emails to your own employees (with prior notice) to see who needs more training in detecting fraud.</p>",
                            "image": "/static/assets/images/aplicaciones/tool_placeholder.png"
                        }
                    ],
                    "image": "/static/assets/images/subramas/simulaciones.png"
                }
            ],

        }
    ]
};


