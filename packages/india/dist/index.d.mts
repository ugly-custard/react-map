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
type ControlsPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';
interface IndiaProps {
    type: 'select-single' | 'select-multiple';
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    selectColor?: string;
    hints?: boolean;
    hintTextColor?: string;
    hintBackgroundColor?: string;
    hintPadding?: string;
    hintBorderRadius?: number;
    onSelect?: (state: string | null, selectedStates?: string[]) => void;
    cityColors?: CityColorMap;
    disableClick?: boolean;
    disableHover?: boolean;
    borderStyle?: BorderStyle;
    onHover?: (stateId: string | null) => void;
    renderTooltip?: (props: TooltipRenderProps) => React.ReactNode;
    enableZoom?: boolean;
    showControls?: boolean;
    controlsPosition?: ControlsPosition;
    minZoom?: number;
    maxZoom?: number;
    zoomStep?: number;
    panStep?: number;
}
declare const India: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, selectColor, hints, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, onSelect, cityColors, disableClick, disableHover, borderStyle, onHover, renderTooltip, enableZoom, showControls, controlsPosition, minZoom, maxZoom, zoomStep, panStep, }: IndiaProps) => React.JSX.Element | null;

export { India as default };
