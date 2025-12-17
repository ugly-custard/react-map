import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Lebanon: React.FC<MapProps> = createMapComponent({
  name: 'Lebanon',
  drawPath,
  stateCode,
  constants,
});

export default Lebanon;
export type LebanonProps = MapProps;
