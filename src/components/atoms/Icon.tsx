import React from 'react';
import * as icons from 'lucide-react';
import { cn } from '../../utils/helpers';

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  color,
}) => {
  const LucideIcon = icons[name];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      className={cn(className)}
      color={color}
    />
  );
};