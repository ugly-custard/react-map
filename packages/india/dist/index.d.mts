import React from 'react';

interface CityColorMap {
    [key: string]: string;
}
interface TooltipRenderProps {
    state: string | null;
    position: {
        x: number;
        y: number;
    };
    isHovered: boolean;
    isSelected: boolean;
}
interface ZoomPanControls {
    zoom: number;
    panX: number;
    panY: number;
    zoomIn: () => void;
    zoomOut: () => void;
    reset: () => void;
    pan: (direction: 'up' | 'down' | 'left' | 'right') => void;
    setZoom: (zoom: number) => void;
    setPan: (x: number, y: number) => void;
    minZoom: number;
    maxZoom: number;
}
type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';
type ControlsPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface IndiaProps {
    type: 'select-single' | 'select-multiple';
    width?: number | string;
    height?: number | string;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    selectColor?: string;
    borderStyle?: BorderStyle;
    cityColors?: CityColorMap;
    disableClick?: boolean;
    disableHover?: boolean;
    onSelect?: (state: string | null, selectedStates?: string[]) => void;
    onHover?: (stateId: string | null) => void;
    renderTooltip?: boolean | ((props: TooltipRenderProps) => React.ReactNode);
    enableZoom?: boolean;
    showControls?: boolean;
    controlsPosition?: ControlsPosition;
    minZoom?: number;
    maxZoom?: number;
    zoomStep?: number;
    panStep?: number;
    onZoomPanChange?: (controls: ZoomPanControls) => void;
}
declare const India: ({ type, width, height, mapColor, strokeColor, strokeWidth, hoverColor, selectColor, borderStyle, cityColors, disableClick, disableHover, onSelect, onHover, renderTooltip, enableZoom, showControls, controlsPosition, minZoom, maxZoom, zoomStep, panStep, onZoomPanChange, }: IndiaProps) => React.JSX.Element;

export { type IndiaProps, type TooltipRenderProps, type ZoomPanControls, India as default };
