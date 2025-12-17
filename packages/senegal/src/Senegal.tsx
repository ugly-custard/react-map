import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Senegal: React.FC<MapProps> = createMapComponent({
  name: 'Senegal',
  drawPath,
  stateCode,
  constants,
});

export default Senegal;
export type SenegalProps = MapProps;
