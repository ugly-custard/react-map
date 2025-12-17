import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Curacao: React.FC<MapProps> = createMapComponent({
  name: 'Curacao',
  drawPath,
  stateCode,
  constants,
});

export default Curacao;
export type CuracaoProps = MapProps;
