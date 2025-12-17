import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Ireland: React.FC<MapProps> = createMapComponent({
  name: 'Ireland',
  drawPath,
  stateCode,
  constants,
});

export default Ireland;
export type IrelandProps = MapProps;
