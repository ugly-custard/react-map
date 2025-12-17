import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Channelislands: React.FC<MapProps> = createMapComponent({
  name: 'Channelislands',
  drawPath,
  stateCode,
  constants,
});

export default Channelislands;
export type ChannelislandsProps = MapProps;
