import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Greenland: React.FC<MapProps> = createMapComponent({
  name: 'Greenland',
  drawPath,
  stateCode,
  constants,
});

export default Greenland;
export type GreenlandProps = MapProps;
