import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Iraq: React.FC<MapProps> = createMapComponent({
  name: 'Iraq',
  drawPath,
  stateCode,
  constants,
});

export default Iraq;
export type IraqProps = MapProps;
