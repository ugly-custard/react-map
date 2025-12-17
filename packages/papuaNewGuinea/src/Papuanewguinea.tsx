import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Papuanewguinea: React.FC<MapProps> = createMapComponent({
  name: 'Papuanewguinea',
  drawPath,
  stateCode,
  constants,
});

export default Papuanewguinea;
export type PapuanewguineaProps = MapProps;
