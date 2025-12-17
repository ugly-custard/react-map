import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Niue: React.FC<MapProps> = createMapComponent({
  name: 'Niue',
  drawPath,
  stateCode,
  constants,
});

export default Niue;
export type NiueProps = MapProps;
