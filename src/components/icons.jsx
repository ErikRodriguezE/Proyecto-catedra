import {
  Bookmark,
  X, // Para "close"
  Gamepad2, // Para "game"
  Heart,
  CircleHelp, // Para "help"
  Home,
  Menu,
  Plus,
  Search,
  Sparkles, // Para "spark"
} from "lucide-react";

// Este diccionario conecta tu texto con el componente del ícono de Lucide
const iconMap = {
  bookmark: Bookmark,
  close: X,
  game: Gamepad2,
  heart: Heart,
  help: CircleHelp,
  home: Home,
  menu: Menu,
  plus: Plus,
  search: Search,
  spark: Sparkles,
};

// Componente que renderiza el ícono dinámicamente
export function Icon({ name, size = 24, color = "currentColor", className }) {
  const IconComponent = iconMap[name];

  // Si le pasas un nombre que no existe en el diccionario, no renderiza nada para no romper la app
  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} className={className} />;
}
