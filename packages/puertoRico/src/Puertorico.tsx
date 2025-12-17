import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Puertorico: React.FC<MapProps> = createMapComponent({
  name: 'Puertorico',
  drawPath,
  stateCode,
  constants,
});

export default Puertorico;
export type PuertoricoProps = MapProps;
