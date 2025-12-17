import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Barbados: React.FC<MapProps> = createMapComponent({
  name: 'Barbados',
  drawPath,
  stateCode,
  constants,
});

export default Barbados;
export type BarbadosProps = MapProps;
