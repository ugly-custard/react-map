import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Guineabissau: React.FC<MapProps> = createMapComponent({
  name: 'Guineabissau',
  drawPath,
  stateCode,
  constants,
});

export default Guineabissau;
export type GuineabissauProps = MapProps;
