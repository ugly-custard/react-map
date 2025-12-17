import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Tonga: React.FC<MapProps> = createMapComponent({
  name: 'Tonga',
  drawPath,
  stateCode,
  constants,
});

export default Tonga;
export type TongaProps = MapProps;
