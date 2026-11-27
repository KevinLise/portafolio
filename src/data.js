export const profile = {
  name: 'Kevin Escorcia',
  fullName: 'Kevin Andrés Escorcia Salgado',
  role: 'Desarrollador Full Stack & AI Engineer',
  location: 'Colombia',
  email: 'kescorci5@gmail.com',
  github: 'https://github.com/KevinLise',
  linkedin: 'https://www.linkedin.com/in/kevin-andres-escorcia-salgado-339233323',
}

export const navLinks = [
  { label: 'proyectos', href: '#proyectos' },
  { label: 'habilidades', href: '#habilidades' },
  { label: 'sobre-mí', href: '#sobre-mi' },
  { label: 'contacto', href: '#contacto' },
]

// Contenido tomado del README del perfil de GitHub: github.com/KevinLise
export const projects = [
  {
    id: 'academia-ai',
    index: '01',
    title: 'Academia AI Assistant',
    description:
      'Sistema de atención al cliente con IA: recuperación de contexto (RAG), FastAPI y Gemini.',
    tags: ['Python', 'FastAPI', 'Qdrant', 'Gemini', 'RAG'],
    repo: 'https://github.com/KevinLise/Version2.0',
    live: '',
    art: 'art-purple',
    glyph: 'AI',
  },
  {
    id: 'cuadre-iq',
    index: '02',
    title: 'Cuadre IQ',
    description: 'Extractor y reconciliador de facturas con OCR y un LLM local.',
    tags: ['Python', 'React', 'Ollama', 'OCR'],
    repo: 'https://github.com/KevinLise/Report_De_Recibo',
    live: '',
    art: 'art-green',
    glyph: 'IQ',
  },
  {
    id: 'gastosmart',
    index: '03',
    title: 'GastoSmart',
    description: 'Gestor de gastos personales con dashboard, gráficas y conversión de divisas.',
    tags: ['React', 'Vite', 'Chart.js'],
    repo: 'https://github.com/KevinLise/gestor-gastos',
    live: 'https://gestor-gastos-five-beta.vercel.app',
    art: 'art-blue',
    glyph: '$',
  },
  {
    id: 'stocksmart',
    index: '04',
    title: 'StockSmart',
    description: 'SPA de inventario construida sin frameworks, con Tailwind CSS.',
    tags: ['JavaScript', 'Tailwind', 'SPA'],
    repo: 'https://github.com/KevinLise/Frontend_Proyecto_integrador',
    live: '',
    art: 'art-blue',
    glyph: 'SS',
  },
]

export const skillGroups = [
  {
    title: 'Lenguajes',
    items: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vue', 'Tailwind CSS', 'Vite', 'Chart.js'],
  },
  {
    title: 'Backend & datos',
    items: ['FastAPI', 'PostgreSQL', 'SQLite', 'Qdrant', 'Spark', 'Kafka'],
  },
  {
    title: 'IA & automatización',
    items: ['RAG', 'Agentes IA', 'Gemini', 'Ollama', 'OCR'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Linux', 'Figma'],
  },
]

export const about = [
  'Soy estudiante de desarrollo de software, especializado en automatización con IA y desarrollo frontend. Mi stack principal incluye Python, JavaScript, HTML, CSS, Git/GitHub y SQL, con experiencia construyendo agentes de IA.',
  'Disfruto construir herramientas y aplicaciones prácticas: desde asistentes con RAG hasta dashboards de gastos. Me apasiona el aprendizaje basado en proyectos y trabajo bien en equipo.',
  'Estoy abierto a prácticas, proyectos freelance y oportunidades donde pueda aportar en frontend, datos o automatización con IA.',
]
