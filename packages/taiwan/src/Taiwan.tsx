import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Taiwan: React.FC<MapProps> = createMapComponent({
  name: 'Taiwan',
  drawPath,
  stateCode,
  constants,
});

export default Taiwan;
export type TaiwanProps = MapProps;
