import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Morocco: React.FC<MapProps> = createMapComponent({
  name: 'Morocco',
  drawPath,
  stateCode,
  constants,
});

export default Morocco;
export type MoroccoProps = MapProps;
