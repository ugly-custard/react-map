import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Israel: React.FC<MapProps> = createMapComponent({
  name: 'Israel',
  drawPath,
  stateCode,
  constants,
});

export default Israel;
export type IsraelProps = MapProps;
