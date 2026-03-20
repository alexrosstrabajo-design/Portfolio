const t = {
  en: {
    nav: {
      links: ["Home", "About", "Projects", "Skills", "Contact"],
    },
    hero: {
      badge: "AVAILABLE FOR HIRE",
      roles: ["Web Developer", "Database Designer", "Pentester"],
      bio: "Student at ITESA · Building secure, efficient web applications.\nGrowing. Learning. Adapting.",
      cta1: "Get In Touch",
      cta2: "View My Work",
      cta3: "Resume",
    },
    about: {
      label: "ABOUT ME",
      title: "Who I Am",
      bio1: "I'm",
      bio2: ", a student at",
      bio3: "passionate about web development, database architecture, and cybersecurity. I enjoy turning complex problems into clean, secure, and scalable solutions.",
      bio4: "When I'm not coding, you'll find me exploring security techniques, contributing to open-source, or leveling up in ethical hacking.",
      cards: [
        { icon: "🌐", title: "Web Development",    desc: "Building modern, responsive applications with React and cutting-edge frontend tooling." },
        { icon: "🗄️", title: "Database Design",    desc: "Architecting efficient, normalized schemas with SQL backends and Python APIs." },
        { icon: "🔒", title: "Pentesting",          desc: "Identifying vulnerabilities, network scanning, and ethical hacking practices." },
      ],
    },
    projects: {
      label: "PROJECTS",
      title: "What I've Built",
      live: "Live ↗",
      items: [
        { name: "TextNode", tagline: "Note Taking App",           desc: "A modern note-taking app to organize thoughts efficiently. Clean UI with full CRUD.", tags: ["JavaScript","React","Web App"], link: "https://Text-node.vercel.app", github: "https://github.com/alexrosstrabajo-design/TextNode" },
        { name: "Automator AI", tagline: "AI Automation Platform",      desc: "An AI-powered conversational platform connected to Automator, featuring a sleek 3D interface built with Three.js.", tags: ["React","Three.js","OpenAI","Tailwind"], link: "https://agoar.vercel.app", github: "https://github.com/alexrosstrabajo-design/ai-chat" },
        { name: "InvDB",    tagline: "Database Management System",desc: "Inventory database with a Flask interface, SQL backend, and Bootstrap UI.", tags: ["SQL","Python","Flask","Bootstrap"], link: "#", github: "#" },
      ],
    },
    skills: {
      label: "SKILLS",
      title: "Tech Stack",
      aria1: "Frontend and tooling technologies",
      aria2: "Backend and security technologies",
    },
    contact: {
      label: "CONTACT",
      title: "Let's Work Together",
      subtitle: "Looking for new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open.",
      footer: "© 2025 ALEXANDER ROSS — BUILT WITH ♥",
    },
  },

  es: {
    nav: {
      links: ["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"],
    },
    hero: {
      badge: "DISPONIBLE PARA TRABAJAR",
      roles: ["Desarrollador Web", "Diseñador de Bases de Datos", "Pentester"],
      bio: "Estudiante en ITESA · Construyendo apps web seguras y eficientes.\nCreciendo. Aprendiendo. Adaptándome.",
      cta1: "Contáctame",
      cta2: "Ver mi trabajo",
      cta3: "Currículum",
    },
    about: {
      label: "SOBRE MÍ",
      title: "Quién soy",
      bio1: "Soy",
      bio2: ", estudiante en",
      bio3: "apasionado por el desarrollo web, la arquitectura de bases de datos y la ciberseguridad. Disfruto convirtiendo problemas complejos en soluciones limpias, seguras y escalables.",
      bio4: "Cuando no estoy programando, me encuentro explorando técnicas de seguridad, contribuyendo al código abierto o mejorando en hacking ético.",
      cards: [
        { icon: "🌐", title: "Desarrollo Web",            desc: "Construcción de aplicaciones modernas y responsivas con React y herramientas de última generación." },
        { icon: "🗄️", title: "Diseño de Bases de Datos", desc: "Arquitectura de esquemas eficientes y normalizados con backends SQL y APIs en Python." },
        { icon: "🔒", title: "Pentesting",                desc: "Identificación de vulnerabilidades, escaneo de redes y prácticas de hacking ético." },
      ],
    },
    projects: {
      label: "PROYECTOS",
      title: "Lo que he construido",
      live: "Ver ↗",
      items: [
        { name: "TextNode", tagline: "App de Notas",               desc: "App moderna de toma de notas con CRUD completo y UI limpia.", tags: ["JavaScript","React","Web App"], link: "https://Text-node.vercel.app", github: "https://github.com/alexrosstrabajo-design/TextNode" },
        { name: "Automator AI", tagline: "Plataforma de Automatización IA",   desc: "Una plataforma conversacional impulsada por IA conectada a Automator, con una interfaz 3D moderna construida con Three.js.", tags: ["React","Three.js","OpenAI","Tailwind"], link: "https://agoar.vercel.app", github: "https://github.com/alexrosstrabajo-design/ai-chat" },
        { name: "InvDB",    tagline: "Sistema de Gestión de BD",   desc: "Base de datos de inventario con interfaz Flask, backend SQL y UI con Bootstrap.", tags: ["SQL","Python","Flask","Bootstrap"], link: "#", github: "#" },
      ],
    },
    skills: {
      label: "HABILIDADES",
      title: "Stack Tecnológico",
      aria1: "Tecnologías frontend y herramientas",
      aria2: "Tecnologías backend y seguridad",
    },
    contact: {
      label: "CONTACTO",
      title: "Trabajemos juntos",
      subtitle: "Estoy buscando nuevas oportunidades. Ya sea que tengas un proyecto en mente o simplemente quieras saludar — mi bandeja siempre está abierta.",
      footer: "© 2025 ALEXANDER ROSS — HECHO CON ♥",
    },
  },
};

export default t;
