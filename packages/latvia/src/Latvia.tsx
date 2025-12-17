import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Latvia: React.FC<MapProps> = createMapComponent({
  name: 'Latvia',
  drawPath,
  stateCode,
  constants,
});

export default Latvia;
export type LatviaProps = MapProps;
