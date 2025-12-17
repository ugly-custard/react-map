import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Mongolia: React.FC<MapProps> = createMapComponent({
  name: 'Mongolia',
  drawPath,
  stateCode,
  constants,
});

export default Mongolia;
export type MongoliaProps = MapProps;
