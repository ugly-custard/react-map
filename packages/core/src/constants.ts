import type { MapConstants } from './types';

/**
 * Default constants used when a map doesn't provide its own
 */
export const DEFAULT_CONSTANTS: MapConstants = {
  WIDTH: 500,
  MAPCOLOR: '#ffffff',
  STROKE_COLOR: '#000000',
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: '#303030',
  SELECTED_COLOR: '#ff0000',
};

/**
 * Default zoom/pan settings
 */
export const ZOOM_PAN_DEFAULTS = {
  MIN_ZOOM: 1,
  MAX_ZOOM: 3,
  ZOOM_STEP: 0.25,
  PAN_STEP: 20,
} as const;
