import type { BorderStyle } from '../types';

/**
 * Returns SVG stroke-dasharray properties for the given border style
 */
export const getStrokeProperties = (borderStyle?: BorderStyle): { strokeDasharray: string } => {
  switch (borderStyle) {
    case 'dashed':
      return { strokeDasharray: '8 4' };
    case 'dotted':
      return { strokeDasharray: '2 2' };
    case 'dash-dot':
      return { strokeDasharray: '8 4 2 4' };
    case 'dash-double-dot':
      return { strokeDasharray: '8 4 2 4 2 4' };
    default:
      return { strokeDasharray: 'none' };
  }
};
