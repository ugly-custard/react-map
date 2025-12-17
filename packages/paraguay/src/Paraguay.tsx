import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Paraguay: React.FC<MapProps> = createMapComponent({
  name: 'Paraguay',
  drawPath,
  stateCode,
  constants,
});

export default Paraguay;
export type ParaguayProps = MapProps;
