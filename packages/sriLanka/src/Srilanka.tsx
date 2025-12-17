import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Srilanka: React.FC<MapProps> = createMapComponent({
  name: 'Srilanka',
  drawPath,
  stateCode,
  constants,
});

export default Srilanka;
export type SrilankaProps = MapProps;
