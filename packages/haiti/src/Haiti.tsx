import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Haiti: React.FC<MapProps> = createMapComponent({
  name: 'Haiti',
  drawPath,
  stateCode,
  constants,
});

export default Haiti;
export type HaitiProps = MapProps;
