import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Colombia: React.FC<MapProps> = createMapComponent({
  name: 'Colombia',
  drawPath,
  stateCode,
  constants,
});

export default Colombia;
export type ColombiaProps = MapProps;
