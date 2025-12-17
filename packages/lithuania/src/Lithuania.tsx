import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Lithuania: React.FC<MapProps> = createMapComponent({
  name: 'Lithuania',
  drawPath,
  stateCode,
  constants,
});

export default Lithuania;
export type LithuaniaProps = MapProps;
