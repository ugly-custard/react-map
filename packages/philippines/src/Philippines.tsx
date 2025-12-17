import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Philippines: React.FC<MapProps> = createMapComponent({
  name: 'Philippines',
  drawPath,
  stateCode,
  constants,
});

export default Philippines;
export type PhilippinesProps = MapProps;
