import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Easttimor: React.FC<MapProps> = createMapComponent({
  name: 'Easttimor',
  drawPath,
  stateCode,
  constants,
});

export default Easttimor;
export type EasttimorProps = MapProps;
