import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Dominicanrepublic: React.FC<MapProps> = createMapComponent({
  name: 'Dominicanrepublic',
  drawPath,
  stateCode,
  constants,
});

export default Dominicanrepublic;
export type DominicanrepublicProps = MapProps;
