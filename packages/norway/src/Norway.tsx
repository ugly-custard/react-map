import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Norway: React.FC<MapProps> = createMapComponent({
  name: 'Norway',
  drawPath,
  stateCode,
  constants,
});

export default Norway;
export type NorwayProps = MapProps;
