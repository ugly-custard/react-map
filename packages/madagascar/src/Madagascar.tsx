import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Madagascar: React.FC<MapProps> = createMapComponent({
  name: 'Madagascar',
  drawPath,
  stateCode,
  constants,
});

export default Madagascar;
export type MadagascarProps = MapProps;
