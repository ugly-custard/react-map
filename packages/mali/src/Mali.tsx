import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Mali: React.FC<MapProps> = createMapComponent({
  name: 'Mali',
  drawPath,
  stateCode,
  constants,
});

export default Mali;
export type MaliProps = MapProps;
