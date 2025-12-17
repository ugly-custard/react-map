import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Benin: React.FC<MapProps> = createMapComponent({
  name: 'Benin',
  drawPath,
  stateCode,
  constants,
});

export default Benin;
export type BeninProps = MapProps;
