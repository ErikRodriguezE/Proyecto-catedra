import {
  Bookmark,
  X,
  Gamepad2,
  Heart,
  CircleHelp,
  Home,
  Menu,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

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

// 1. Agregamos 'fill = "none"' en los parámetros
export function Icon({
  name,
  size = 24,
  color = "currentColor",
  fill = "none",
  className,
  ...props
}) {
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  // 2. Le pasamos 'fill={fill}' al componente final de Lucide
  return (
    <IconComponent
      size={size}
      color={color}
      fill={fill} /* <-- ESTA ES LA LÍNEA MÁGICA QUE PINTA EL INTERIOR */
      className={className}
      {...props}
    />
  );
}
