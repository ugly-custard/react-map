import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Djibouti: React.FC<MapProps> = createMapComponent({
  name: 'Djibouti',
  drawPath,
  stateCode,
  constants,
});

export default Djibouti;
export type DjiboutiProps = MapProps;
