import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Fiji: React.FC<MapProps> = createMapComponent({
  name: 'Fiji',
  drawPath,
  stateCode,
  constants,
});

export default Fiji;
export type FijiProps = MapProps;
