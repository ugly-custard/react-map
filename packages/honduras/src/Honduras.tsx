import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Honduras: React.FC<MapProps> = createMapComponent({
  name: 'Honduras',
  drawPath,
  stateCode,
  constants,
});

export default Honduras;
export type HondurasProps = MapProps;
