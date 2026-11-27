export const profile = {
  name: 'Kevin Escorcia',
  fullName: 'Kevin Andrés Escorcia Salgado',
  role: 'Desarrollo de software · Automatización con IA',
  tagline: 'Automatización con IA · Agentes RAG',
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
      'Sistema de atención al cliente con IA: recuperación de contexto (RAG) sobre documentos y respuestas asistidas.',
    tags: ['Python', 'FastAPI', 'Qdrant', 'RAG'],
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
    title: 'Automatización',
    items: ['Agentes IA', 'RAG', 'Prompt engineering', 'Flujos automatizados'],
  },
  {
    title: 'Modelos & datos',
    items: ['Ollama', 'LLMs locales', 'Embeddings', 'Qdrant'],
  },
  {
    title: 'Documentos',
    items: ['OCR', 'Extracción de datos', 'Clasificación'],
  },
  {
    title: 'Diseño',
    items: ['UI/UX', 'Prototipado'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub'],
  },
]

// Herramientas que se muestran en el carrusel del hero
export const tools = [
  'Agentes IA',
  'RAG',
  'Ollama',
  'Qdrant',
  'OCR',
  'Prompt engineering',
  'LLMs locales',
  'Embeddings',
  'Automatización',
  'Extracción de datos',
]

export const about = [
  'Soy desarrollador de software con enfoque en automatización. Diseño agentes que trabajan sobre RAG: conecto modelos, documentos y flujos para que las tareas repetitivas se resuelvan solas.',
  'Mi enfoque es entender el proceso, diseñar la solución y orquestar las herramientas de IA. Uso la IA como mi principal herramienta de trabajo y cuido cada detalle de lo que entrego.',
  'También diseño: me importa cómo se ve y cómo se siente el producto, desde la interfaz hasta la documentación. Estoy abierto a proyectos de automatización, agentes y diseño.',
]
