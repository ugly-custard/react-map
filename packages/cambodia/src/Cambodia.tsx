import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Cambodia: React.FC<MapProps> = createMapComponent({
  name: 'Cambodia',
  drawPath,
  stateCode,
  constants,
});

export default Cambodia;
export type CambodiaProps = MapProps;
