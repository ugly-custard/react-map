import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Zimbabwe: React.FC<MapProps> = createMapComponent({
  name: 'Zimbabwe',
  drawPath,
  stateCode,
  constants,
});

export default Zimbabwe;
export type ZimbabweProps = MapProps;
