import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Bahrain: React.FC<MapProps> = createMapComponent({
  name: 'Bahrain',
  drawPath,
  stateCode,
  constants,
});

export default Bahrain;
export type BahrainProps = MapProps;
