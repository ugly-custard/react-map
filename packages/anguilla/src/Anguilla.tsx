import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Anguilla: React.FC<MapProps> = createMapComponent({
  name: 'Anguilla',
  drawPath,
  stateCode,
  constants,
});

export default Anguilla;
export type AnguillaProps = MapProps;
