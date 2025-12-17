import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Macao: React.FC<MapProps> = createMapComponent({
  name: 'Macao',
  drawPath,
  stateCode,
  constants,
});

export default Macao;
export type MacaoProps = MapProps;
