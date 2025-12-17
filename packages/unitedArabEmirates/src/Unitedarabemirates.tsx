import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Unitedarabemirates: React.FC<MapProps> = createMapComponent({
  name: 'Unitedarabemirates',
  drawPath,
  stateCode,
  constants,
});

export default Unitedarabemirates;
export type UnitedarabemiratesProps = MapProps;
