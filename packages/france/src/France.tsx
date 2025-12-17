import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const France: React.FC<MapProps> = createMapComponent({
  name: 'France',
  drawPath,
  stateCode,
  constants,
});

export default France;
export type FranceProps = MapProps;
