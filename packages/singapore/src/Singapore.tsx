import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Singapore: React.FC<MapProps> = createMapComponent({
  name: 'Singapore',
  drawPath,
  stateCode,
  constants,
});

export default Singapore;
export type SingaporeProps = MapProps;
