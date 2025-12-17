import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Vanuatu: React.FC<MapProps> = createMapComponent({
  name: 'Vanuatu',
  drawPath,
  stateCode,
  constants,
});

export default Vanuatu;
export type VanuatuProps = MapProps;
