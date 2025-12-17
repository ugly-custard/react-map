import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Syria: React.FC<MapProps> = createMapComponent({
  name: 'Syria',
  drawPath,
  stateCode,
  constants,
});

export default Syria;
export type SyriaProps = MapProps;
