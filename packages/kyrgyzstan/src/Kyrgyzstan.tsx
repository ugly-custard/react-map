import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Kyrgyzstan: React.FC<MapProps> = createMapComponent({
  name: 'Kyrgyzstan',
  drawPath,
  stateCode,
  constants,
});

export default Kyrgyzstan;
export type KyrgyzstanProps = MapProps;
