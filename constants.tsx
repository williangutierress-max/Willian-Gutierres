import { Category, Testimonial, Bonus } from './types';

export const CATEGORIES: Category[] = [
  { 
    title: "Estilo de Vida VIP en el Beach Club", 
    icon: "🏖️", 
    image: "https://i.postimg.cc/vTk82pkH/Gemini-Generated-Image-7k4e6h7k4e6h7k4e.png" 
  },
  { 
    title: "Cena en Restaurante de Lujo", 
    icon: "🍝", 
    image: "https://i.postimg.cc/XNzvvCJf/Gemini-Generated-Image-101gw0101gw0101g.png" 
  },
  { 
    title: "Estilo Urbano con Dinero", 
    icon: "🤳", 
    image: "https://i.postimg.cc/NGz00HM1/Gemini-Generated-Image-8ca6sh8ca6sh8ca6.png" 
  },
  { 
    title: "Paseo en Yate en Alta Mar", 
    icon: "🛥️", 
    image: "https://i.postimg.cc/Y2sSSW9P/Gemini-Generated-Image-9rxjh09rxjh09rxj.png" 
  },
  { 
    title: "Selfie en Vestidor de Diseño", 
    icon: "💸", 
    image: "https://i.postimg.cc/2yV8wzHc/Gemini-Generated-Image-bccibfbccibfbcci.png" 
  },
  { 
    title: "Manejando Máquina Deportiva", 
    icon: "🏎️", 
    image: "https://i.postimg.cc/66mQQv3h/Gemini-Generated-Image-cc1jpcc1jpcc1jpc.png" 
  },
  { 
    title: "Fiesta Privada de Año Nuevo", 
    icon: "🎆", 
    image: "https://i.postimg.cc/ZYMqqdnZ/Gemini-Generated-Image-d3r1kbd3r1kbd3r1.png" 
  },
  { 
    title: "Paseo en Jet Ski en Dubái", 
    icon: "🏙️", 
    image: "https://i.postimg.cc/d3pQNzpq/Gemini-Generated-Image-de8rnvde8rnvde8r.png" 
  },
  { 
    title: "Acrobacia en Moto con Estilo", 
    icon: "摩托", 
    image: "https://i.postimg.cc/Fz8FC2q8/Gemini-Generated-Image-dy3imsdy3imsdy3i.png" 
  },
  { 
    title: "Expedición de Lujo en el Desierto", 
    icon: "🌵", 
    image: "https://i.postimg.cc/Wzhbn29B/Gemini-Generated-Image-enh4u5enh4u5enh4.png" 
  },
  { 
    title: "Aesthetic en la Gasolinera con la Nave", 
    icon: "⛽", 
    image: "https://i.postimg.cc/59RttC03/Gemini-Generated-Image-gm4aywgm4aywgm4a.png" 
  },
  { 
    title: "Lavado de Auto Premium Detallado", 
    icon: "🧼", 
    image: "https://i.postimg.cc/sfN22hXb/Gemini-Generated-Image-fyood7fyood7fyoo.png" 
  },
  { 
    title: "Compras en Boutique de Lujo", 
    icon: "🛍️", 
    image: "https://i.postimg.cc/1X2R7L2y/Gemini-Generated-Image-kfzrqmkfzrqmkfzr.png" 
  },
  { 
    title: "Entrenamiento de Alto Rendimiento", 
    icon: "🥊", 
    image: "https://i.postimg.cc/VvpsZ3TT/Gemini-Generated-Image-jvi051jvi051jvi0.png" 
  },
  { 
    title: "Interior de Mansión Moderna", 
    icon: "🛏️", 
    image: "https://i.postimg.cc/NGz00HMz/Gemini-Generated-Image-klydfbklydfbklyd.png" 
  },
  { 
    title: "Reunión VIP con Amigos", 
    icon: "👩‍🍳", 
    image: "https://i.postimg.cc/Fz8FC2qn/Gemini-Generated-Image-lg0z0flg0z0flg0z.png" 
  },
  { 
    title: "Vista Panorámica del Skyline", 
    icon: "🏝️", 
    image: "https://i.postimg.cc/sfN22hxR/Gemini-Generated-Image-l0uk26l0uk26l0uk.png" 
  },
  { 
    title: "Todoterreno con Auto y Jet Ski", 
    icon: "🌊", 
    image: "https://i.postimg.cc/PJPr4t6V/Gemini-Generated-Image-mblvjumblvjumblv.png" 
  },
  { 
    title: "Look Urbano en el Espejo", 
    icon: "🕶️", 
    image: "https://i.postimg.cc/zv6D296r/Gemini-Generated-Image-nhu6vinhu6vinhu6.png" 
  },
  { 
    title: "Posando con Sedán de Lujo", 
    icon: "🚗", 
    image: "https://i.postimg.cc/dQx00y3s/Gemini-Generated-Image-pd8wprpd8wprpd8w.png" 
  },
  { 
    title: "Viaje Europeo en el Coliseo", 
    icon: "🏛️", 
    image: "https://i.postimg.cc/90rFpWxx/Gemini-Generated-Image-swksupswksupswks.png" 
  },
  { 
    title: "Noche Romántica en París", 
    icon: "🗼", 
    image: "https://i.postimg.cc/v8NmmVB0/Gemini-Generated-Image-pv8yk8pv8yk8pv8y.png" 
  },
  { 
    title: "Dúo de Éxito en el Espejo", 
    icon: "💕", 
    image: "https://i.postimg.cc/CMQKKq1v/Gemini-Generated-Image-wyidsswyidsswyid.png" 
  },
  { 
    title: "Sesión Profesional de Estudio", 
    icon: "✨", 
    image: "https://i.postimg.cc/KjRvNZ9f/IMG-3399.png" 
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anderson Sousa",
    role: "Estudiante",
    text: "La mejor inversión que hice para mi Instagram este año. Ahorré horas intentando crear el prompt yo mismo. Solo tienes que copiar, pegar y la foto sale lista. Increíble.",
    stars: 5,
    avatar: "https://i.postimg.cc/J429fFGh/92194e56e070389a0df5f3d5b0b4ccff.jpg"
  },
  {
    name: "Lucas Ferreira",
    role: "Estudiante",
    text: "Envié una foto en la nieve al grupo de la familia y todos se la creyeron jajaja. ",
    stars: 5,
    avatar: "https://i.postimg.cc/5NRZhr62/150301372bb195daaa22a0de90a90c9c.jpg"
  },
  {
    name: "Ana Luiza",
    role: "Estudiante",
    text: "Muy bueno, increíble.",
    stars: 5,
    avatar: "https://i.postimg.cc/gkTfC7np/515f9d433fceaf027b003bafcb4cd398.jpg"
  },
  {
    name: "Guilherme Santos",
    role: "Estudiante",
    text: "Subí la foto en el bmw y los mensajes directos explotaron, de verdad. Nunca recibí tantos mensajes de chicas queriendo saber a qué me dedico. La herramienta es brutal, olvídate.",
    stars: 5,
    avatar: "https://i.postimg.cc/TY4ZzspY/331c46e1270ad6bc01f97994aace6ddc.jpg"
  },
];

export const BONUSES: Bonus[] = [
  { title: "Organizando el perfil de Instagram", icon: "🎁" },
  { title: "Videoclase paso a paso", icon: "🎁" },
  { title: "Cómo usar los prompts en Gemini (paso a paso)", icon: "🎁" },
];

export const USAGE_POINTS = [
  "Foto de perfil",
  "Feed de Instagram",
  "Historias destacadas",
  "Portada de perfil",
  "Contenido de autoridad",
  "Posicionamiento personal"
];