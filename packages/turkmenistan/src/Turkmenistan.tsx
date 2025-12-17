import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Turkmenistan: React.FC<MapProps> = createMapComponent({
  name: 'Turkmenistan',
  drawPath,
  stateCode,
  constants,
});

export default Turkmenistan;
export type TurkmenistanProps = MapProps;
