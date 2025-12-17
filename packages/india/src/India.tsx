import React, { useEffect, useState, useMemo, useCallback, useRef, useId } from 'react';
import { drawPath, stateCode, constants } from './constants';
import useMousePosition from './hooks/mouseTrack';

interface CityColorMap {
  [key: string]: string;
}

export interface TooltipRenderProps {
  state: string | null;
  position: { x: number; y: number };
  isHovered: boolean;
  isSelected: boolean;
}

export interface ZoomPanControls {
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

export interface IndiaProps {
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
  renderTooltip?: (props: TooltipRenderProps) => React.ReactNode;
  enableZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
  panStep?: number;
  onZoomPanChange?: (controls: ZoomPanControls) => void;
}

const getStrokeProperties = (borderStyle?: BorderStyle) => {
  switch (borderStyle) {
    case 'dashed':
      return { strokeDasharray: '8 4' };
    case 'dotted':
      return { strokeDasharray: '2 2' };
    case 'dash-dot':
      return { strokeDasharray: '8 4 2 4' };
    case 'dash-double-dot':
      return { strokeDasharray: '8 4 2 4 2 4' };
    default:
      return { strokeDasharray: 'none' };
  }
};

function useZoomPan(
  enableZoom: boolean,
  minZoom: number,
  maxZoom: number,
  zoomStep: number,
  panStep: number,
  onZoomPanChange?: (controls: ZoomPanControls) => void
) {
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + zoomStep, maxZoom));
  }, [zoomStep, maxZoom]);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(z - zoomStep, minZoom));
  }, [zoomStep, minZoom]);

  const reset = useCallback(() => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, []);

  const pan = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      const delta = panStep;
      switch (direction) {
        case 'up':
          setPanY((p) => p + delta);
          break;
        case 'down':
          setPanY((p) => p - delta);
          break;
        case 'left':
          setPanX((p) => p + delta);
          break;
        case 'right':
          setPanX((p) => p - delta);
          break;
      }
    },
    [panStep]
  );

  const setZoomValue = useCallback(
    (value: number) => setZoom(Math.min(Math.max(value, minZoom), maxZoom)),
    [minZoom, maxZoom]
  );

  const setPanValue = useCallback((x: number, y: number) => {
    setPanX(x);
    setPanY(y);
  }, []);

  useEffect(() => {
    if (onZoomPanChange && enableZoom) {
      onZoomPanChange({
        zoom,
        panX,
        panY,
        zoomIn,
        zoomOut,
        reset,
        pan,
        setZoom: setZoomValue,
        setPan: setPanValue,
        minZoom,
        maxZoom,
      });
    }
  }, [
    zoom,
    panX,
    panY,
    zoomIn,
    zoomOut,
    reset,
    pan,
    setZoomValue,
    setPanValue,
    minZoom,
    maxZoom,
    onZoomPanChange,
    enableZoom,
  ]);

  const wrapperStyle: React.CSSProperties = enableZoom
    ? {
        transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
        transformOrigin: 'center center',
        transition: 'transform 0.15s ease-out',
      }
    : {};

  return { wrapperStyle };
}

const India = ({
  type,
  width = constants.WIDTH,
  height,
  mapColor = constants.MAPCOLOR,
  strokeColor = constants.STROKE_COLOR,
  strokeWidth = constants.STROKE_WIDTH,
  hoverColor = constants.HOVERCOLOR,
  selectColor = constants.SELECTED_COLOR,
  borderStyle,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  onSelect,
  onHover,
  renderTooltip,
  enableZoom = false,
  minZoom = 1,
  maxZoom = 3,
  zoomStep = 0.25,
  panStep = 20,
  onZoomPanChange,
}: IndiaProps) => {
  const instanceId = useId().replace(/:/g, '');
  const { x, y } = useMousePosition();
  const [viewBox, setViewBox] = useState('0 0 100 100');
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const lastHoveredRef = useRef<string | null>(null);
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);

  const [selectedSingle, setSelectedSingle] = useState<string | null>(null);
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);

  const isSelected = useCallback(
    (state: string) => (type === 'select-single' ? selectedSingle === state : selectedMultiple.includes(state)),
    [type, selectedSingle, selectedMultiple]
  );

  const { wrapperStyle } = useZoomPan(enableZoom, minZoom, maxZoom, zoomStep, panStep, onZoomPanChange);

  useEffect(() => {
    const svg = document.getElementById(`svg-${instanceId}`) as SVGGraphicsElement | null;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (!path) return;
      if (state === lastHoveredRef.current || isSelected(state)) return;
      path.style.fill = cityColors[state] || mapColor;
    });
  }, [cityColors, mapColor, instanceId, selectedSingle, selectedMultiple]);

  useEffect(() => {
    if (type === 'select-single' && selectedSingle) {
      const path = document.getElementById(`${selectedSingle}-${instanceId}`);
      if (path) path.style.fill = selectColor;
    } else if (type === 'select-multiple') {
      selectedMultiple.forEach((state) => {
        const path = document.getElementById(`${state}-${instanceId}`);
        if (path) path.style.fill = selectColor;
      });
    }
  }, [selectedSingle, selectedMultiple, selectColor, instanceId, type]);

  const handleMouseEnter = useCallback(
    (stateId: string) => {
      lastHoveredRef.current = stateId;
      setStateHovered(stateId);
      onHover?.(stateId);

      if (!disableHover) {
        const path = document.getElementById(`${stateId}-${instanceId}`);
        if (path) {
          path.style.fill = isSelected(stateId) ? selectColor : hoverColor;
        }
      }
    },
    [instanceId, disableHover, selectColor, hoverColor, onHover, isSelected]
  );

  const handleMouseLeave = useCallback(
    (stateId: string) => {
      if (lastHoveredRef.current === stateId) {
        lastHoveredRef.current = null;
        setStateHovered(null);
        onHover?.(null);
      }

      if (!disableHover) {
        const path = document.getElementById(`${stateId}-${instanceId}`);
        if (path) {
          path.style.fill = isSelected(stateId) ? selectColor : cityColors[stateId] || mapColor;
        }
      }
    },
    [instanceId, disableHover, selectColor, cityColors, mapColor, onHover, isSelected]
  );

  const handleClick = useCallback(
    (stateId: string) => {
      if (disableClick) return;

      if (type === 'select-single') {
        const newSelected = selectedSingle === stateId ? null : stateId;
        if (selectedSingle && selectedSingle !== stateId) {
          const prevPath = document.getElementById(`${selectedSingle}-${instanceId}`);
          if (prevPath) prevPath.style.fill = cityColors[selectedSingle] || mapColor;
        }
        if (selectedSingle === stateId) {
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) path.style.fill = cityColors[stateId] || mapColor;
        }
        setSelectedSingle(newSelected);
        onSelect?.(newSelected);
      } else {
        if (selectedMultiple.includes(stateId)) {
          const updated = selectedMultiple.filter((s) => s !== stateId);
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) path.style.fill = cityColors[stateId] || mapColor;
          setSelectedMultiple(updated);
          onSelect?.(stateId, updated);
        } else {
          const updated = [...selectedMultiple, stateId];
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) path.style.fill = selectColor;
          setSelectedMultiple(updated);
          onSelect?.(stateId, updated);
        }
      }
    },
    [type, selectedSingle, selectedMultiple, disableClick, instanceId, cityColors, mapColor, selectColor, onSelect]
  );

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width,
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mapStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    maxWidth: width,
    maxHeight: height,
    stroke: strokeColor,
    strokeWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...strokeProps,
    ...wrapperStyle,
  };

  const svgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={mapStyle}>
        <svg id={`svg-${instanceId}`} viewBox={viewBox} style={svgStyle} preserveAspectRatio="xMidYMid meet">
          {stateCode.map((code) => (
            <path
              key={code}
              id={`${code}-${instanceId}`}
              d={drawPath[code as keyof typeof drawPath]}
              onClick={() => handleClick(code)}
              onMouseEnter={() => handleMouseEnter(code)}
              onMouseLeave={() => handleMouseLeave(code)}
              style={{
                fill: cityColors[code] || mapColor,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>

      {renderTooltip?.({
        state: stateHovered,
        position: { x, y },
        isHovered: !!stateHovered,
        isSelected: stateHovered ? isSelected(stateHovered) : false,
      })}
    </div>
  );
};

export default India;
