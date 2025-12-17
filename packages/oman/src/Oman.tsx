import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Oman: React.FC<MapProps> = createMapComponent({
  name: 'Oman',
  drawPath,
  stateCode,
  constants,
});

export default Oman;
export type OmanProps = MapProps;
